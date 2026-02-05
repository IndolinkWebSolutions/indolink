import React, { useState } from "react";
import { HiMenuAlt2, HiX, HiHome } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const DNavbar = () => {
  const [open, setOpen] = useState(false);
  const userName = "Sandhya";
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between h-[90px] px-6 border-b">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* Home Icon */}
          <button
            onClick={() => navigate("/")}
            className="text-2xl text-gray-700 hover:text-sky-600 transition"
          >
            <HiHome />
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            <HiMenuAlt2 />
          </button>

          {/* Title (desktop only) */}
          <h1 className="hidden md:block text-3xl font-semibold ml-2">
            Manage Your Profile
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold cursor-pointer"
        >
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
          <div className="absolute left-0 top-0 h-full w-[250px] bg-gray-950">
            <button
              className="text-white absolute top-6 right-3 text-2xl"
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
