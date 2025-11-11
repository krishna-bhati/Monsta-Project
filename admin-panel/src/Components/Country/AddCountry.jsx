import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export default function AddCountry() {

  const [updatedId, setUpdatedId] = useState('')
  const [countryDetails, setCountryDetails] = useState('')
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      setUpdatedId(params.id);

      axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_Country_API}/details/${params.id}`)
        .then((result) => {
          if (result.data._status == true) {
            setCountryDetails(result.data._data)
          } else {
            setCountryDetails('');
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
      // Add Country Api
      axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_Country_API}/create`, formData)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message)
            event.target.reset();
            navigate('/country/view')
          } else {
            toast.error(result.data._message)
          }
        }).catch((error) => {
          toast.error(error.message)
        })
    } else {
      // Update Country
      axios.patch(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_Country_API}/update/${updatedId}`, formData)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message)
            event.target.reset();
            navigate('/country/view')
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
            {updatedId ? 'Update Country' : ' Add Country'}
          </h3>
          <form onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="mb-5">
              <label className=" block text-md font-medium">Country Name</label>
              <input type="text" defaultValue={countryDetails.name} name="name" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1"
                placeholder="Enter Country Name" />
            </div>

            <div className="mb-5">
              <label className=" block text-md font-medium">Order</label>
              <input type="number" defaultValue={countryDetails.order} name="order" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1"
                placeholder="Enter Order" />
            </div>

            <button type="submit" className="focus:outline-none my-1 ms-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              {updatedId ? 'Update Country' : ' Add Country'}
            </button>

          </form>
        </div>
      </div>
    </>
  )
}
