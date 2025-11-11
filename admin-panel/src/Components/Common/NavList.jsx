import { FaChevronRight, FaUsers } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { GrDocumentConfig } from "react-icons/gr";
import { IoBag } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import {
  MdFormatQuote,
  MdHelpOutline,
  MdLocalShipping,
  MdOutlineInventory2,
  MdOutlineQuestionAnswer,
  MdPublic,
  MdSpaceDashboard,
  MdTune,
  MdVerifiedUser,
} from "react-icons/md";
import { RiAdminFill, RiCoupon3Line } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";

export const navList = [
  {
    id: 1,
    navName: "Dashboard",
    icon: <MdSpaceDashboard size={20} />,
    hasDropdown: false,
    link: "/",
  },
  {
    id: 2,
    navName: "Admin",
    icon: <RiAdminFill size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Admin",
        link: "/admin/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Admin",
        link: "/admin/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 3,
    navName: "Users",
    icon: <FaUsers size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "View Users",
        link: "/user",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 4,
    navName: "Enquiries",
    icon: <MdOutlineQuestionAnswer size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Contact Enquiry",
        link: "/enquiry",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "News Letters",
        link: "/newsletter",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 5,
    navName: "Colors",
    icon: <FaDroplet size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Color",
        link: "/color/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Color",
        link: "/color/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 6,
    navName: "Materials",
    icon: <MdOutlineInventory2 size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Material",
        link: "/material/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Material",
        link: "/material/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 7,
    navName: "Parent Categories",
    icon: <TbCategoryFilled size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Category",
        link: "/category/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Category",
        link: "/category/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 8,
    navName: "Sub Categories",
    icon: <TbCategoryFilled size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Category",
        link: "/category/sub-category/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Category",
        link: "/category/sub-category/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 9,
    navName: "Sub Sub Categories",
    icon: <TbCategoryFilled size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Category",
        link: "/category/sub-sub-category/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Category",
        link: "/category/sub-sub-category/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 10,
    navName: "Products",
    icon: <IoBag size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Product",
        link: "/product/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Product",
        link: "/product/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 11,
    navName: "Why Choose Us",
    icon: <MdVerifiedUser size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Why Choose Us",
        link: "/why-choose-us/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Why Choose Us",
        link: "/why-choose-us/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 12,
    navName: "Orders",
    icon: <MdLocalShipping size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "View Orders",
        link: "/orders/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 13,
    navName: "Sliders",
    icon: <MdTune size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Slider",
        link: "/slider/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Slider",
        link: "/slider/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 14,
    navName: "Countries",
    icon: <MdPublic size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Country",
        link: "/country/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Country",
        link: "/country/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 15,
    navName: "Testimonials",
    icon: <MdFormatQuote size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Testimonial",
        link: "/testimonial/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Testimonial",
        link: "/testimonial/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 16,
    navName: "Faqs",
    icon: <MdHelpOutline size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Faq",
        link: "/faq/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Faq",
        link: "/faq/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 17,
    navName: "Coupons",
    icon: <RiCoupon3Line size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Add Coupon",
        link: "/coupon/add",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "View Coupon",
        link: "/coupon/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 18,
    navName: "Configurations",
    icon: <GrDocumentConfig size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "Payment Gateway",
        link: "/configuration/payment-gateway",
        righticon: <FaChevronRight />,
      },
      {
        subMenuName: "Configuration",
        link: "/configuration/view",
        righticon: <FaChevronRight />,
      },
    ],
  },
  {
    id: 19,
    navName: "CMS Pages",
    icon: <LuFileSpreadsheet size={20} />,
    hasDropdown: true,
    subMenu: [
      {
        subMenuName: "CMS Pages",
        link: "/cms-pages",
        righticon: <FaChevronRight />,
      },
    ],
  },
];
