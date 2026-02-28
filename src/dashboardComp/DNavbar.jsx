import React, { useContext, useState } from "react";
import { HiMenuAlt2, HiX, HiHome } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const DNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between h-[90px] px-4 md:px-8 bg-white border-b shadow-sm">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setOpen(true)}
          >
            <HiMenuAlt2 />
          </button>

          {/* Home Icon */}
          <button
            onClick={() => navigate("/")}
            className="text-2xl text-gray-700 hover:text-sky-600 transition"
          >
            <HiHome />
          </button>

          {/* Title (desktop only) */}
          <div className="hidden md:block ml-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">
              Welcome {user?.name} <span>,</span>
            </h1>
            <p className="text-sm text-gray-500">Manage Your Profile</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold cursor-pointer shadow"
        >
          {user?.name?.[0]?.toUpperCase() || "U"}
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-[260px] bg-white shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-5 right-4 text-2xl text-gray-700"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </button>

            {/* Sidebar Content */}
            <div className="mt-14">
              <Sidebar onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DNavbar;
