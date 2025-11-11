import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useLocation, Link } from "react-router";
import { navList } from "./NavList";

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean); // remove empty parts

  const findBreadcrumbs = () => {
    const crumbs = [];

    // Handle root dashboard
    if (location.pathname === "/" || location.pathname === "/dashboard") {
      crumbs.push({ name: "Dashboard", link: "/dashboard" });
      return crumbs;
    }

    navList.forEach((item) => {
      // Direct match (no submenu)
      if (item.link && location.pathname.startsWith(item.link)) {
        crumbs.push({ name: item.navName, link: item.link });
      }

      // Match inside submenu
      if (item.subMenu) {
        item.subMenu.forEach((sub) => {
          if (location.pathname.startsWith(sub.link)) {
            crumbs.push({ name: item.navName, link: null }); // ❌ main item: no navigation
            crumbs.push({ name: sub.subMenuName, link: sub.link }); // ✅ submenu: link works
          }
        });
      }
    });

    // fallback if nothing matched
    if (crumbs.length === 0) {
      crumbs.push({ name: "Dashboard", link: "/dashboard" });
      pathSegments.forEach((segment, index) => {
        crumbs.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1),
          link: "/" + pathSegments.slice(0, index + 1).join("/"),
        });
      });
    }

    return crumbs;
  };

  const breadcrumbs = findBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-gray-700 text-sm font-medium px-4 py-3 bg-gray-50 shadow-sm">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <FaChevronRight className="text-gray-500" size={12} />}
          {crumb.link ? (
            <Link
              to={crumb.link}
              className="hover:text-blue-600 transition-colors"
            >
              {crumb.name}
            </Link>
          ) : (
            <span className="text-gray-500 cursor-default">{crumb.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
