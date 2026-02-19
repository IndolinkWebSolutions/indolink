import React from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";
import { useNavigate } from "react-router-dom";

const Dboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 p-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: LATEST LEADS */}
          <div className="bg-white rounded-lg h-[300px] shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Latest Leads</h2>
              <button className="bg-sky-600 text-white px-3 py-1 rounded text-sm">
                Fetch Leads
              </button>
            </div>

            {/* Lead Item */}
            {["Sumit Kumar", "Tarun Dawar", "Bluebird Technologies"].map(
              (name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border-b border-gray-200 py-3 last:border-none overflow-auto"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300" />
                  <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm text-gray-500">
                      I am interested in your product
                    </p>
                  </div>
                </div>
              ),
            )}

            <p onClick={()=>navigate("/leads")} className="text-sky-600 text-sm text-center mt-3 cursor-pointer">
              View All
            </p>
          </div>

          {/* RIGHT: COMPANY PROFILE */}
          <div className="bg-white rounded-lg md:h-[400px] h-[500px] shadow p-6 lg:col-span-2">
            <h2 className="font-semibold mb-4">Company Profile</h2>

            <div className="space-y-4">
              <input
                className="w-full border border-gray-400 text-gray-400 rounded px-3 py-2"
                placeholder="Company Name"
               
              />

              <input
                className="w-full border border-gray-400 text-gray-400  rounded px-3 py-2"
                placeholder="Company Address"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-gray-400 text-gray-400 ">
                <input
                  className="border rounded px-3 py-2"
                  placeholder="GST Number"
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="IEC Code"
                />
              </div>

              <select className="w-full border border-gray-400 text-gray-400  rounded px-3 py-2">
                <option>Manufacturer</option>
                <option>Trader</option>
                <option>Exporter</option>
              </select>

              <button className="bg-sky-600 text-white px-6 py-2 rounded mt-10">
                Save Details
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="font-semibold mb-4">Your Saved Products</h2>

          <table className="w-full text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Product Name</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Stainless Steel Screws</td>
                <td className="p-3 text-gray-600">
                  High quality stainless steel screws.
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3 font-medium">Plastic Components</td>
                <td className="p-3 text-gray-600">Durable plastic parts.</td>
              </tr>
            </tbody>
          </table>

          {/* Optional helper text like in screenshot */}
          <p className="text-sm text-gray-500 mt-4">
            Based on your consumed BuyLeads, these products are shown for direct
            enquiries.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dboard;
