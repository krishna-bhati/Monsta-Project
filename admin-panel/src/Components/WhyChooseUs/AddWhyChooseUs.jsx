import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";

export default function AddWhyChooseUs() {

  const [updatedId, setUpdatedId] = useState('')
  const [whyChooseUsDetail, setWhyChooseUsDetails] = useState('')
  const [imageURL, setImageUrl] = useState('');
  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const dropifyElement = $("#image");

    if (dropifyElement.data("dropify")) {
      dropifyElement.data("dropify").destroy();
      dropifyElement.removeData("dropify");
    }

    // **Force Update Dropify Input**
    dropifyElement.replaceWith(
      `<input type="file" accept="image/*" name="image" id="image"
          class="dropify" data-height="250" data-default-file="${imageURL}"/>`
    );

    // **Reinitialize Dropify**
    $("#image").dropify();

  }, [imageURL]); // ✅ Runs when `defaultImage` updates

  useEffect(() => {
    if (params.id) {
      setUpdatedId(params.id);

      // Detail API
      axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_WHY_CHOOSE_US_API}/details/${params.id}`)
        .then((result) => {
          if (result.data._status == true) {
            setWhyChooseUsDetails(result.data._data)
            if (result.data._data.image != '') {
              setImageUrl(`${result.data._image_path}${result.data._data.image}`)
            }
          } else {
            setWhyChooseUsDetails('');
          }
        }).catch((error) => {
          toast.error(error.message)
        })
    }
  }, [params])

  const formHandler = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      order: event.target.order.value,
    }

    if (!updatedId) {
      // Add Why Choose Us Api
      axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_WHY_CHOOSE_US_API}/create`, event.target)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message)
            event.target.reset();
            navigate('/why-choose-us/view')
          } else {
            toast.error(result.data._message)
          }
        }).catch((error) => {
          toast.error(error.message)
        })
    } else {
      // Update Why Choose Us

      axios.patch(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_WHY_CHOOSE_US_API}/update/${updatedId}`, event.target)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message)
            event.target.reset();
            navigate('/why-choose-us/view')
          } else {
            toast.error(result.data._message)
          }
        }).catch((error) => {
          toast.error(error.message)
        })
    }
  }


  return (
    <>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-2xl px-4 py-2 border rounded-t-md font-medium border-slate-400 bg-slate-100">
            {updatedId ? 'Update Why Choose Us' : ' Add Why Choose Us'}
          </h3>
          <form onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="flex gap-5">
              <div className="w-1/3 ">
                <label className=" block text-md mb-2 font-medium">Why Choose Us Image</label>
                <input type="file"
                  name="image"
                  accept="image/*"
                  id="image"
                  className="dropify"
                  data-height="270"
                />
              </div>
              <div className="w-2/3">
                <div className="mb-5">
                  <label className=" block text-md font-medium"> Name</label>
                  <input type="text" defaultValue={whyChooseUsDetail.name} name="name" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1"
                    placeholder="Enter Name" />
                </div>
               
                <div className="mb-5">
                  <label className=" block text-md font-medium"> Description</label>
                  <textarea type="text" defaultValue={whyChooseUsDetail.description} name="description" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1 resize-none text-justify"
                    placeholder="Enter Description" />
                </div>

                <div className="mb-5">
                  <label className=" block text-md font-medium">Order</label>
                  <input type="number" defaultValue={whyChooseUsDetail.order} name="order" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1"
                    placeholder="Enter Order" />
                </div>
              </div>
            </div>
            <button type="submit" className="mt-7 focus:outline-none my-1 ms-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              {updatedId ? 'Update Why Choose Us' : ' Add Why Choose Us'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
