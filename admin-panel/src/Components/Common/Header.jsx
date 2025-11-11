import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";

export default function Header() {
  return (
    <>
      <header className="h-16 flex items-center justify-between px-6 bg-white shadow-sm border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

        <div className="relative group">
          <img
            src="/user.jpg"
            alt="User"
            className="h-12 w-12 rounded-full object-cover cursor-pointer"
          />

          <div className="absolute right-0 mt-1 w-54 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
            <ul className="text-md text-gray-700 divide-y font-medium divide-slate-200">
              <li className="px-4 py-2 flex  gap-2 items-center text-center align-middle hover:bg-gray-100 cursor-pointer">
                <span><CgProfile /> </span>
                My Profile</li>
              <li className="px-4 py-2 flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                <span><RiPagesFill /></span>
                Company Profile</li>
              <li className="px-4 py-2 flex gap-2 items-center hover:bg-gray-100 border-t border-black cursor-pointer text-red-500">
                <span>
                  <IoIosLogOut />
                </span>
                Logout</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
