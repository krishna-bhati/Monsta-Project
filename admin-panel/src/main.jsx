import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"
import Home from "./Components/Home";
import AddColor from "./Components/Color/AddColor";
import ViewColor from "./Components/Color/ViewColor";
import AddMaterial from "./Components/Material/AddMaterial";
import ViewMaterial from "./Components/Material/ViewMaterial";
import AddCategory from "./Components/ParentCategory/AddCategory";
import ViewCategory from "./Components/ParentCategory/ViewCategory";
import AddSubCategory from "./Components/SubCategory/AddSubCategory";
import ViewSubCategory from "./Components/SubCategory/ViewSubCategory";
import AddSubSubCategory from "./Components/SubSubCategory/AddSubSubCategory";
import ViewSubSubCategory from "./Components/SubSubCategory/ViewSubSubCategory";
import AddProduct from "./Components/Product/AddProduct";
import ViewProduct from "./Components/Product/ViewProduct";
import ViewOrder from "./Components/Orders/ViewOrder";
import AddWhyChooseUs from "./Components/WhyChooseUs/AddWhyChooseUs";
import ViewWhyChooseUs from "./Components/WhyChooseUs/ViewWhyChooseUs";
import AddSlider from "./Components/Slider/AddSlider";
import ViewSlider from "./Components/Slider/ViewSlider";
import AddCountry from "./Components/Country/AddCountry";
import ViewCountry from "./Components/Country/ViewCountry";
import ViewUser from "./Components/Users/ViewUser";
import ViewEnquiry from "./Components/Enquiry/ViewEnquiry";
import ViewNewsletters from "./Components/Newsletters/ViewNewsletters";
import AddTestimonials from "./Components/Testimonials/AddTestimonials";
import ViewTestimonials from "./Components/Testimonials/ViewTestimonials";
import ViewFaq from "./Components/Faqs/ViewFaq";
import AddFaq from "./Components/Faqs/AddFaq";
import AddAdmin from "./Components/Admin/AddAdmin";
import ViewAdmin from "./Components/Admin/ViewAdmin";
import CMSPages from "./Components/CMSPages/CMSPages";
import PaymentGateway from "./Components/Configuration/PaymentGateway";
import Configuration from "./Components/Configuration/Configuration";
import AddCoupon from "./Components/Coupon/AddCoupon";
import ViewCoupon from "./Components/Coupon/ViewCoupon";
import RootLayout from "./layout/RootLayout";

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="admin">
                        <Route path="add" element={<AddAdmin />}></Route>
                        <Route path="update/:id?" element={<AddAdmin />}></Route>
                        <Route path="view" element={<ViewAdmin />}></Route>
                    </Route>

                    <Route path="color">
                        <Route path="add" element={<AddColor />}></Route>
                        <Route path="update/:id?" element={<AddColor />}></Route>
                        <Route path="view" element={<ViewColor />}></Route>
                    </Route>

                    <Route path="material">
                        <Route path="add" element={<AddMaterial />}></Route>
                        <Route path="update/:id?" element={<AddMaterial />}></Route>
                        <Route path="view" element={<ViewMaterial />}></Route>
                    </Route>


                    <Route path="category">
                        <Route path="add" element={<AddCategory />}></Route>
                        <Route path="update/:id?" element={<AddCategory />}></Route>
                        <Route path="view" element={<ViewCategory />}></Route>
                    </Route>


                    <Route path="category/sub-category">
                        <Route path="add" element={<AddSubCategory />}></Route>
                        <Route path="update/:id?" element={<AddSubCategory />}></Route>
                        <Route path="view" element={<ViewSubCategory />}></Route>
                    </Route>

                    <Route path="category/sub-sub-category">
                        <Route path="add" element={<AddSubSubCategory />}></Route>
                        <Route path="update/:id?" element={<AddSubSubCategory />}></Route>
                        <Route path="view" element={<ViewSubSubCategory />}></Route>
                    </Route>

                    <Route path="product">
                        <Route path="add" element={<AddProduct />}></Route>
                        <Route path="update/:id?" element={<AddProduct />}></Route>
                        <Route path="view" element={<ViewProduct />}></Route>
                    </Route>

                    <Route path="why-choose-us">
                        <Route path="add" element={<AddWhyChooseUs />}></Route>
                        <Route path="update/:id?" element={<AddWhyChooseUs />}></Route>
                        <Route path="view" element={<ViewWhyChooseUs />}></Route>
                    </Route>

                    <Route path="orders">
                        <Route path="view" element={<ViewOrder />}></Route>
                    </Route>

                    <Route path="slider">
                        <Route path="add" element={<AddSlider />}></Route>
                        <Route path="update/:id?" element={<AddSlider />}></Route>
                        <Route path="view" element={<ViewSlider />}></Route>
                    </Route>

                    <Route path="country">
                        <Route path="add" element={<AddCountry />}></Route>
                        <Route path="update/:id?" element={<AddCountry />}></Route>
                        <Route path="view" element={<ViewCountry />}></Route>
                    </Route>


                    <Route path="/user" element={<ViewUser />} />
                    <Route path="/enquiry" element={<ViewEnquiry />} />
                    <Route path="/newsletter" element={<ViewNewsletters />} />


                    <Route path="faq">
                        <Route path="add" element={<AddFaq />}></Route>
                        <Route path="update/:id?" element={<AddFaq />}></Route>
                        <Route path="view" element={<ViewFaq />}></Route>
                    </Route>

                    <Route path="testimonial">
                        <Route path="add" element={<AddTestimonials />}></Route>
                        <Route path="update/:id?" element={<AddTestimonials />}></Route>
                        <Route path="view" element={<ViewTestimonials />}></Route>
                    </Route>
                    <Route path="coupon">
                        <Route path="add" element={<AddCoupon />}></Route>
                        <Route path="update/:id?" element={<AddCoupon />}></Route>
                        <Route path="view" element={<ViewCoupon />}></Route>
                    </Route>

                    <Route path="configuration">
                        <Route path="payment-gateway" element={<PaymentGateway />}></Route>
                        <Route path="view" element={<Configuration />}></Route>
                    </Route>

                    <Route path="cms-pages">
                        <Route path="view" element={<CMSPages />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >,
    </>
)
