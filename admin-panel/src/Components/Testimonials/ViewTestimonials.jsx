import axios from 'axios'
import { Edit2, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ViewTestimonials() {

  const [activeFilter, setActiveFilter] = useState(true);
  const [testimonial, setTestimonial] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [apiStatus, setAPIStatus] = useState(true)
  const [imageURL, setImageUrl] = useState('');


  useEffect(() => {
    axios.post(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_TESTIMONIAL_API}/view`, {
      page: currentPage,
      name: searchName,
    })
      .then((result) => {
        if (result.data._status == true) {
          setTestimonial(result.data._data)
          setImageUrl(result.data._image_path)
          setTotalPages(result.data._paginate.total_pages)
        } else {
          setTestimonial([]);
          setTotalPages(1);
        }
      }).catch((error) => {
        toast.error(error.message);
      })
  }, [currentPage, searchName, apiStatus])

  const searchHandler = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    setSearchName(event.target.name.value);
  }

  const clearState = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    setSearchName("");
    event.target.form.reset();
  }

  const filterByName = (event) => {
    setCurrentPage(1);
    setSearchName(event.target.value);
  }

  const singleCheckBox = (id) => {

    const checkValue = checkBoxValue.filter((v) => {
      if (v == id) {
        return v;
      }
    })

    if (checkValue.length > 0) {
      const finalValue = checkBoxValue.filter((v) => {
        if (v != id) {
          return v;
        }
      })
      setCheckBoxValue([...finalValue]);

      if (finalValue.length > 0) {
        setButtonDisable(false)
      } else {
        setButtonDisable(true)
      }
    } else {
      var newData = [...checkBoxValue, id];
      setCheckBoxValue(newData);

      if (newData.length > 0) {
        setButtonDisable(false)
      } else {
        setButtonDisable(true)
      }
    }
  }

  const allCheckBoxSelect = () => {
    if (checkBoxValue.length == testimonial.length) {
      setCheckBoxValue([]);
      setButtonDisable(true);
    } else {

      const ids = []

      testimonial.forEach((v) => {
        ids.push(v._id);
      })
      setCheckBoxValue([...ids]);
      setButtonDisable(false)
    }
  }

  const changeStatus = () => {
    axios.patch(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_TESTIMONIAL_API}/change-status`, {
      ids: checkBoxValue,
    })
      .then((result) => {
        if (result.data._status == true) {
          toast.success(result.data._message);
          setAPIStatus(!apiStatus);
          setCheckBoxValue([])
          setButtonDisable(true)
        } else {
          toast.error(error.message);
        }
      }).catch((error) => {
        toast.error(error.message);
      })
  }

  const deleteRecords = () => {
    axios.patch(`${import.meta.env.VITE_Base_Url}/${import.meta.env.VITE_TESTIMONIAL_API}/delete`, {
      ids: checkBoxValue,
    })
      .then((result) => {
        if (result.data._status == true) {
          toast.success(result.data._message);
          setAPIStatus(!apiStatus);
          setCheckBoxValue([])
          setButtonDisable(true)
        } else {
          toast.error(error.message);
        }
      }).catch((error) => {
        toast.error(error.message);
      })
  }

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto">

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFilter ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
            }`}>
            <form onSubmit={searchHandler} autoComplete='off' className="max-w-sm flex justify-between items-center mb-6">
              <div className="flex items-center bg-white gap-2 w-full">
                <input
                  type="text"
                  name='name'
                  onKeyUp={filterByName}
                  placeholder="Search Name"
                  className="border border-gray-300 rounded-md p-1.5 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
                <button onClick={clearState} type='button' className="bg-blue-600 cursor-pointer px-2 py-1.5 rounded-md text-white hover:bg-blue-700 active:scale-95 transition-all">
                  Clear
                </button>
                <button type='submit' className="bg-blue-600 cursor-pointer p-2 rounded-md text-white hover:bg-blue-700 active:scale-95 transition-all">
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          <div className='px-4 py-2 flex justify-between text-center border rounded-t-md border-slate-400 bg-slate-100'>
            <h3 className="text-2xl font-medium">
              View Testimonial
            </h3>
            <div className='flex gap-5'>
              <div className='text-white cursor-pointer  p-2 bg-blue-500 rounded-full' onClick={() => setActiveFilter(!activeFilter)}>
                {
                  activeFilter
                    ?
                    <MdFilterAlt className='text-xl' />
                    :
                    <MdFilterAltOff className='text-xl' />
                }
              </div>
              <button
                type="button" disabled={buttonDisable} onClick={changeStatus}
                className="cursor-pointer py-1.5 px-4 bg-blue-600 text-white rounded-lg text-sm font-medium  hover:bg-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              >
                Change Status
              </button>

              <button
                type="button" disabled={buttonDisable} onClick={deleteRecords}
                className="cursor-pointer py-1.5 px-4 bg-red-600 text-white rounded-lg text-sm font-medium 
               hover:bg-red-700 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-md">
                  <th className="px-4 py-2 w-[2%]">
                    <input
                      type="checkbox"
                      id='allCheckbox'
                      onChange={allCheckBoxSelect}
                      checked={testimonial.length > 0 && checkBoxValue.length === testimonial.length}
                      className="w-4 h-4"
                    />
                  </th>

                  <th className="px-4 py-2">Name</th>
                  <th className="text-center px-4 py-2 w-[15%] ">Designation</th>
                  <th className="text-center px-4 py-2 w-[10%]">Image</th>
                  <th className="text-center px-4 py-2 w-[10%]">ORDER</th>
                  <th className="text-center px-4 py-2 w-[16%]">STATUS</th>
                  <th className="text-center px-4 py-2 w-[10%]">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {
                  testimonial.length > 0
                    ?
                    testimonial.map((v, i) => {
                      return (
                        <tr key={i} className="border-t hover:bg-gray-50 transition-all">
                          <td className="px-4 py-3">
                            <input
                              type="checkbox"
                              onChange={() => singleCheckBox(v._id)}
                              checked={Array.isArray(checkBoxValue) && checkBoxValue.includes(v._id)}
                              className="w-4 h-4"
                            />
                          </td>

                          <td className="px-4 py-3 font-medium text-gray-900 text-base">{v.name}</td>
                          <td className="px-4 py-3 font-medium text-gray-900 text-center ">{v.designation}</td>
                          <td className="flex justify-center px-2 py-3">
                            {
                              v.image
                                ?
                                <img className='w-10 h-10 rounded-md' src={`${imageURL}${v.image}`} alt="" />
                                :
                                "N/A"
                            }
                          </td>
                          <td className="text-center px-4 py-3">{v.order}</td>
                          <td className="text-center px-4 py-3">
                            {
                              v.status == true
                                ?
                                <button type="button"
                                  className="py-1.5 px-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1">
                                  Active
                                </button>
                                :
                                <button type="button"
                                  className="py-1.5 px-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white rounded-lg text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1">
                                  Deactivate
                                </button>
                            }
                          </td>
                          <td className="px-4 py-3 text-center gap-3">
                            <Link to={`/testimonial/update/${v._id}`}>
                              <button
                                className="bg-blue-600 cursor-pointer text-white px-3 py-3 rounded-full text-center gap-2 hover:bg-blue-700 active:scale-95 transition">
                                <Edit2 size={16} />
                              </button>
                            </Link>
                          </td>
                        </tr>
                      )
                    })
                    :
                    <tr className="text-md">
                      <th colSpan={7} className="px-4 py-2 text-center">No data found!!!</th>
                    </tr>
                }
              </tbody>
            </table>
            <div className="w-full auto mb-5">
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
