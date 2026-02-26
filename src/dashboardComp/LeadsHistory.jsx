import React, { useEffect, useState } from "react";
import { History } from "lucide-react";
import { getHistoryLeads } from "../api";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";

const LeadsHistory = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLeadsHistory = async () => {
    try {
      setLoading(true);
      const res = await getHistoryLeads();
      setLeads(res.data);
    } catch (error) {
      console.log("History error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeadsHistory();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <DNavbar />

        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <History size={22} className="text-sky-600" />
            <h1 className="text-xl font-semibold">Leads History</h1>
          </div>

          <div className="bg-white shadow rounded-lg p-4 overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-5">
                      Loading...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-5">
                      No History Found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b">
                      <td className="py-3">{lead.name}</td>
                      <td>{lead.company}</td>
                      <td>{lead.email}</td>
                      <td>
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

export default LeadsHistory;