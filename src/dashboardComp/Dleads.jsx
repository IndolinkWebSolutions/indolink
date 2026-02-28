import { Bell } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dleads = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const scrollRef = useRef(null);

  const token = localStorage.getItem("access");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/leads/search/?page_size=10", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.results || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ Infinite Smooth Scroll
  useEffect(() => {
    const scrollBox = scrollRef.current;

    const interval = setInterval(() => {
      if (scrollBox) {
        scrollBox.scrollTop += 1;

        // Reset without jump
        if (scrollBox.scrollTop >= scrollBox.scrollHeight / 2) {
          scrollBox.scrollTop = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex">
          <Bell className="text-sky-500 mr-3" />
          <h2 className="font-semibold text-sky-500">Latest Leads</h2>
        </div>
      </div>

      {/* Auto Scroll */}
      <div ref={scrollRef} className="h-[290px] overflow-hidden">
        {leads.map((lead) => (
          <div key={lead.id} className="flex items-center gap-3 border-b border-gray-300 py-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              {lead.name?.charAt(0)}
            </div>

            <div>
              <h3 className="font-medium text-blue-900">{lead.name}</h3>

              <p className="text-sm text-gray-900">{lead.requirements}</p>

            
            </div>
          </div>
        ))}
      </div>

      <p
        onClick={() => navigate("/leads")}
        className="text-sky-600 text-sm text-center mt-3 cursor-pointer"
      >
        View All
      </p>
    </div>
  );
};

export default Dleads;
