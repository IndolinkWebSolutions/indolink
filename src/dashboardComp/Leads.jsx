import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const token = localStorage.getItem("access"); // JWT token

  useEffect(() => {
    fetch("http://127.0.0.1:8000/leads/search/?page_size=20", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.results || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col">
        <DNavbar />

        {/* PAGE CONTENT */}
        <div className="p-6 overflow-auto">
          <h1 className="text-2xl text-sky-800 font-semibold mb-6">
            Leads
          </h1>

          {/* LEADS TABLE */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
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
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-6 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-4 font-medium">{lead.name}</td>
                      <td className="p-4">🔒 Locked</td>
                      <td className="p-4">{lead.location}</td>
                      <td className="p-4">
                        {lead.requirements?.slice(0, 40)}...
                      </td>
                      <td className="p-4 text-red-500">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
