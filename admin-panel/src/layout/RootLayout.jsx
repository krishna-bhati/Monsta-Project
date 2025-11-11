import React from 'react'
import { ToastContainer } from 'react-toastify'
import Sidebar from '../Components/Common/Sidebar'
import Footer from '../Components/Common/Footer'
import Header from '../Components/Common/Header'
import { Outlet } from 'react-router'
import Breadcrumb from '../Components/Common/Breadcumb'

export default function RootLayout() {
    return (
        <>
            <ToastContainer />
            <div className="fixed inset-0 flex bg-gray-100">
                <Sidebar />

                <main className="flex-1 flex flex-col">
                    <Header />
                    <Breadcrumb />


                    <div className="flex-1 overflow-y-auto p-6 bg-gray-50 custom-scroll">
                        <Outlet />
                    </div>

                    <Footer />
                </main>
            </div>
        </>
    )
}

