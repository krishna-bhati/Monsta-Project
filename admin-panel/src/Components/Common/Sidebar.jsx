import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { navList } from "./NavList";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (i) => {
    setOpenMenu(openMenu === i ? null : i);
  };

  return (
    <aside className="w-72 flex flex-col shadow-2xl bg-linear-to-b from-gray-100 via-white to-gray-200 border-r border-gray-300">
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-center bg-white border-b border-gray-300 relative">
        <Link to="/">
          <img
            src="/logo.png"
            alt="DivineCraft Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
        {/* Dynamic Sidebar Items */}
        {navList.map((v, i) =>
          v.hasDropdown ? (
            <SidebarDropdown
              key={i}
              icon={v.icon}
              label={v.navName}
              open={openMenu === v.id}
              onClick={() => toggleMenu(v.id)}
            >
              {v.subMenu.map((sub, j) => (
                <Link to={sub.link} key={j}>
                  <SidebarItem label={sub.subMenuName} nested />
                </Link>
              ))}
            </SidebarDropdown>
          ) : (
            <Link to={v.link} key={i}>
              <SidebarItem icon={v.icon} label={v.navName} />
            </Link>
          )
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-300 text-sm text-gray-600 text-center bg-gray-50">
        © 2025 Monsta
      </div>
    </aside>
  );
}

/* -------- Sidebar Item -------- */
const SidebarItem = ({ icon, label, nested }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-gray-800 transition-all bg-gray-100 duration-200 hover:bg-gray-200 hover:shadow-md hover:pl-4 my-2 ${nested ? "ms-0 text-sm" : "font-medium"
      }`}
  >
    {icon && icon}
    <span>{label}</span>
  </div>
);

/* -------- Sidebar Dropdown -------- */
const SidebarDropdown = ({ icon, label, open, onClick, children }) => (
  <div>
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-all duration-200 text-gray-800 hover:bg-gray-200 hover:shadow-md hover:pl-4 font-medium`}
    >
      <div className="flex items-center gap-3">
        {icon && icon}
        <span>{label}</span>
      </div>
      {open ? (
        <ChevronUp size={16} className="text-gray-600" />
      ) : (
        <ChevronDown size={16} className="text-gray-600" />
      )}
    </div>
    {open && <div className="mt-1 shadow-md rounded-md ms-8 pl-0">{children}</div>}
  </div>
);
