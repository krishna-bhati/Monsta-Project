import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export default function AddFaq() {

  const [updatedId, setUpdatedId] = useState('')
  const [faqDetails, setFaqDetails] = useState('')
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      setUpdatedId(params.id);

      axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_FAQ_API}/details/${params.id}`)
        .then((result) => {
          if (result.data._status == true) {
            setFaqDetails(result.data._data)
          } else {
            setFaqDetails('');
          }
        }).catch((error) => {
          toast.error(error.message)
        })
    }
  }, [params])

  const formHandler = (event) => {
    event.preventDefault();

    const formData = {
      question: event.target.question.value,
      answer: event.target.answer.value,
      order: event.target.order.value,
    }

    if (!updatedId) {
      // Add Faq Api
      axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_FAQ_API}/create`, formData)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message)
            event.target.reset();
            navigate('/faq/view')
          } else {
            const error = result.data._message;
            error.forEach((err) => {
              toast.error(err)
            })
          }
        }).catch((error) => {
          toast.error(error.message)
        })
    } else {
      // Update Faq

      axios.patch(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_FAQ_API}/update/${updatedId}`, formData)
        .then((result) => {
          if (result.data._status == true) {
            toast.success(result.data._message)
            event.target.reset();
            navigate('/faq/view')
          } else {
            const error = result.data._message;
            error.forEach((err) => {
              toast.error(err)
            })
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
            {updatedId ? 'Update Faq' : ' Add Faq'}
          </h3>
          <form onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="mb-5">
              <label htmlFor="question" className=" block text-md font-medium">Question</label>
              <input type="text" defaultValue={faqDetails.question} name="question" id="question" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1"
                placeholder="Question" />
            </div>

            <div className="mb-5">
              <label htmlFor="answer" className=" block text-md font-medium">Answer</label>
              <textarea name="answer" id="answer" defaultValue={faqDetails.answer} className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1 resize-none"
                placeholder="Answer"></textarea>
            </div>

            <div className="mb-5">
              <label htmlFor="order" className=" block text-md font-medium">Order</label>
              <input id="order" type="number" defaultValue={faqDetails.order} name="order" className="text-md border-2 outline-0 border-gray-300 shadow-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1.5 mt-1"
                placeholder="Enter Order" />
            </div>

            <button type="submit" className="focus:outline-none my-1 ms-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              {updatedId ? 'Update Faq' : ' Add Faq'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
