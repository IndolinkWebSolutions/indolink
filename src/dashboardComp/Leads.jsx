import React from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";

const Leads = () => {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1">
        <DNavbar />

        {/* PAGE CONTENT */}
        <div className="p-6 overflow-auto">
          <h1 className="text-2xl text-sky-800 font-semibold mb-6">Leads</h1>

          {/* LEADS TABLE */}
          <div className="bg-white rounded-lg shadow">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4">Lead Name</th>
                  <th className="p-4">Company</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">Sumit Kumar</td>
                  <td className="p-4">Shush Trading Company</td>
                  <td className="p-4">Jalandhar</td>
                  <td className="p-4">Hello Sir</td>
                  <td className="p-4 text-red-500">25 Aug</td>
                </tr>

                <tr className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">Tarun Dawar</td>
                  <td className="p-4">Stare Nutrires</td>
                  <td className="p-4">New Delhi</td>
                  <td className="p-4">Interested in vitamins</td>
                  <td className="p-4 text-red-500">25 Aug</td>
                </tr>

                <tr className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">Bluebird Technologies</td>
                  <td className="p-4">Bluebird Pvt Ltd</td>
                  <td className="p-4">Kolkata</td>
                  <td className="p-4">Interested in plastic</td>
                  <td className="p-4 text-red-500">24 Aug</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
