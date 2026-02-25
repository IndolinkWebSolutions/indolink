import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LeadsPage = () => {
  const { slug } = useParams();

  const [lead, setLead] = useState(null);

  const token = localStorage.getItem("access");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/leads/group/${slug}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setLead(data);
      })

      .catch((err) => console.log(err));
  }, [slug]);

  if (!lead) return <p>Loading...</p>;

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6">Latest Buyer Leads </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lead?.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition"
            >
              {/* Title + Date */}
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-gray-800">
                  {lead.name}
                </h2>

                <span className="text-sm text-gray-400">{lead.date}</span>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-500 mt-1">📍 {lead.location}</p>

              {/* Description */}
              <p className="text-gray-600 mt-3">{lead.description}</p>

              {/* Divider */}
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
                  <span className="font-medium">Buyer:</span>
                  <br />
                  {lead.buyerName || "N/A"}
                </p>

                <p>
                  <span className="font-medium">Quantity:</span>
                  <br />
                  {lead.quantity || "N/A"}
                </p>
              </div>

              {/* Button */}
              <div className="mt-5 flex justify-end">
                <Link to={`/lead/${lead.slug}`}>
                  <button className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700">
                    Contact Buyer
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeadsPage;
