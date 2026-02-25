import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getGroupedLeads } from "../api/index";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const LeadsPage = () => {
  const { slug } = useParams();
  const [leads, setLeads] = useState([]); // ✅ array

  useEffect(() => {
    getGroupedLeads(slug)
      .then((res) => setLeads(res.data))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!leads) return <p>Loading...</p>;

  return (
    <>
      < TopBar />
      < Header />
      < Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-2xl font-semibold mb-6">Related Buyer Leads</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leads.length === 0 ? (
            <p>No leads found</p>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition"
              >
                {/* Title + Date */}
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {lead.name}
                  </h2>

                  <span className="text-sm text-gray-400">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </span>
                </div>

                {/* Location */}
                <p className="text-sm text-gray-500 mt-1">📍 {lead.location}</p>

                {/* Requirement */}
                <p className="text-gray-600 mt-3">{lead.requirements}</p>

                <div className="border-t my-4"></div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <p>
                    <span className="font-medium">Email:</span>
                    <br />
                    {lead.email}
                  </p>

                  <p>
                    <span className="font-medium">Mobile:</span>
                    <br />
                    {lead.mobile_number}
                  </p>

                  <p>
                    <span className="font-medium">Company:</span>
                    <br />
                    {lead.is_unlocked ? lead.company : "🔒 Locked"}
                  </p>
                </div>

                {/* Unlock / Contact */}
                <div className="mt-5 flex justify-end">
                  <Link to={`/lead/${lead.id}`}>
                    <button className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700">
                      View Lead
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      < Footer />
    </>
  );
};

export default LeadsPage;
