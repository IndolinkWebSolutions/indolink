import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";
import { getLeads, unlockLeadApi } from "../api";
import { toast } from "react-toastify";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH LEADS ---------------- */
  useEffect(() => {
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await getLeads(20);

      console.log("Full Response:", res);

      // Safe handling for both paginated and non-paginated
      const leadsData =
        res?.data?.results || res?.data || res?.results || [];

      setLeads(leadsData);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchLeads();
}, []);

  /* ---------------- UNLOCK LEAD ---------------- */
  const handleUnlock = async (leadId) => {
    try {
      const updatedLead = await unlockLeadApi(leadId);

      // Replace unlocked lead in UI
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === leadId
            ? { ...updatedLead, is_unlocked: true }
            : lead
        )
      );
    } catch (error) {
      toast.warning("Weekly limit exceeded or unable to unlock.");
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      {/* SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col">
        <DNavbar />

        <div className="p-2 overflow-auto">
          <h1 className="text-3xl text-sky-800 font-semibold m-6">
            All Leads
          </h1>

          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Company</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Mobile</th>
                  <th className="p-4">Requirements</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {loading ? (
                  <tr>
                    <td colSpan="8" className="p-6 text-center">
                      Loading leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="p-6 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-4 font-medium">{lead.name}</td>

                      <td className="p-4">
                        {lead.is_unlocked ? (
                          lead.company
                        ) : (
                          <span className="text-gray-400">🔒 Locked</span>
                        )}
                      </td>

                      <td className="p-4">{lead.email}</td>
                      <td className="p-4">{lead.location}</td>
                      <td className="p-4">{lead.mobile_number}</td>

                      <td className="p-4">
                        {lead.requirements?.slice(0, 40)}...
                      </td>

                      <td className="p-4 text-red-500">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>

                      <td className="p-4 text-center">
                        {lead.is_unlocked ? (
                          <span className="text-green-600 font-semibold">
                            Unlocked ✓
                          </span>
                        ) : (
                          <button
                            onClick={() => handleUnlock(lead.id)}
                            className="bg-sky-600 text-white px-3 py-1 rounded hover:bg-sky-700 transition"
                          >
                            Unlock
                          </button>
                        )}
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