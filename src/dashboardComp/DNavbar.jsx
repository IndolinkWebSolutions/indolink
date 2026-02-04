import React, { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const DNavbar = () => {
  const [open, setOpen] = useState(false);
  const userName = "Sandhya";
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <div className="flex justify-between items-center h-[90px] px-6 border-b">
        {/* Hamburger (mobile only) */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
          <HiMenuAlt2 />
        </button>

        <h1 className="text-xl md:text-3xl font-semibold hidden md:block">
          Manage Your Profile
        </h1>

        <div onClick={()=>navigate("/profile")} className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
          {userName[0]}
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* sidebar */}
          <div className="absolute left-0 top-0 h-full w-[250px]">
            <button
              className="text-white absolute top-8 right-2 text-2xl"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </button>

            <Sidebar onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default DNavbar;
