import React from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";

const SavedProducts = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col">
        <DNavbar />

        {/* PAGE CONTENT */}
        <div className="p-6 overflow-auto">
          <h1 className="text-2xl font-semibold mb-6">Saved Products</h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-b hover:bg-blue-50 transition">
                  <td className="p-4 font-medium">Stainless Steel Screws</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                      Hardware
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    High quality stainless steel screws.
                  </td>
                </tr>

                <tr className="border-b hover:bg-blue-50 transition">
                  <td className="p-4 font-medium">Plastic Components</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                      Plastics
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Durable industrial plastic parts.
                  </td>
                </tr>

                <tr className="hover:bg-blue-50 transition">
                  <td className="p-4 font-medium">Organic Turmeric</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-700">
                      Spices
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Premium export-quality turmeric powder.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Helper text */}
          <p className="text-sm text-gray-500 mt-4">
            These products are saved based on your business profile and lead
            activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedProducts;
