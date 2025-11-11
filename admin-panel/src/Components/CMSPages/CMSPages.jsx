import React, { useState } from "react"

export default function CMSPages() {

  
  return (
    <>
      <div className="w-full">
          <div className="max-w-[1200px] mx-auto">
              <h3 className="text-xl px-3 py-1 border rounded-t-md font-medium border-slate-400 bg-slate-100">
                  Add Color
              </h3>

              <form className="border border-t-0 rounded-b-md border-slate-400">
                <div className="mb-5">
                  <label className=" block text-md font-medium">Color</label>
                  <input type="text" />
                </div>
                <div className="mb-5">
                  <label className=" block text-md font-medium">Color</label>
                </div>
                <div className="mb-5">
                  <label className=" block text-md font-medium">Color</label>
                  <input type="number" />
                </div>
              </form>
          </div>
      </div>
    </>
)
}
