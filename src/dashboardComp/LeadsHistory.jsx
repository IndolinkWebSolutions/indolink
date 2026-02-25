import React, { useEffect, useState } from "react";
import { History } from "lucide-react";
import { getLeads } from "../api/index";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";

const LeadsHistory = () => {
  const [leads, setLeads] = useState([]);

  // Fetch Leads
  const fetchLeads = async () => {
    try {
      const res = await getLeads();

      setLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      <Sidebar />

      <div className="flex-1">
        {/* Navbar */}

        <DNavbar />

        {/* Content */}

        <div className="p-6">
          {/* Heading */}

          <div className="flex items-center gap-2 mb-6">
            <History size={22} className="text-sky-600" />

            <h1 className="text-xl font-semibold">Leads History</h1>
          </div>

          {/* Table */}

          <div className="bg-white shadow rounded-lg p-4 overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3">Name</th>

                  <th>Message</th>

                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-5">
                      No Leads Found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3">{lead.name}</td>

                      <td>{lead.message}</td>

                      <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
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

export default LeadsHistory;
