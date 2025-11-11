import React from 'react'
import { ArrowDown, ArrowUp, Users, ShoppingBag, Package, Layers } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Orders",
      value: "44K",
      change: "-23.6%",
      isUp: false,
      color: "from-red-500 to-red-600",
      icon: <ShoppingBag size={28} />,
    },
    {
      title: "Users",
      value: "26K",
      change: "-12.4%",
      isUp: false,
      color: "from-blue-500 to-blue-600",
      icon: <Users size={28} />,
    },
    {
      title: "Product",
      value: "$6,200",
      change: "+10.9%",
      isUp: true,
      color: "from-sky-500 to-sky-600",
      icon: <Package size={28} />,
    },
    {
      title: "Category",
      value: "2.49%",
      change: "+8.7%",
      isUp: true,
      color: "from-amber-400 to-yellow-500",
      icon: <Layers size={28} />,
    },
  ];
  return (
    <>

      <div className="p-6 bg-gray-100 max-h-screen">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((v, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl p-6 bg-linear-to-br ${v.color} text-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex justify-between vs-center">
                <div>
                  <p className="text-3xl font-bold">{v.value}</p>
                  <p className="text-sm mt-1 opacity-90">{v.title}</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">{v.icon}</div>
              </div>

              <div className="flex vs-center mt-4 text-sm">
                {v.isUp ? (
                  <ArrowUp size={16} className="mr-1 text-green-400" />
                ) : (
                  <ArrowDown size={16} className="mr-1 text-red-400" />
                )}
                <span className="font-medium">{v.change}</span>
                <span className="ml-1 opacity-80">this month</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}



