import React from "react";
import { LuArchive } from "react-icons/lu";
import { MdOutlineShoppingCart, MdOutlineContactSupport } from "react-icons/md";
import { RiLogoutCircleLine, RiProfileFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-950 text-white w-[250px] h-screen">
      <h1 className="text-2xl font-bold px-6 mx-auto py-6">Dashboard</h1>
      <hr className="border-gray-700 mb-6" />

      <ul className="flex flex-col gap-4 px-4">
        <li
          onClick={() => navigate("/Dashboard")}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 px-4 py-2 rounded-md"
        >
          <RxDashboard size={20} />
          <span>Dashboard</span>
        </li>

        <li
          onClick={() => navigate("/leads")}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 px-4 py-2 rounded-md"
        >
          <MdOutlineShoppingCart size={20} />
          <span>Lead History</span>
        </li>

        <li
          onClick={() => navigate("/savedProducts")}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 px-4 py-2 rounded-md"
        >
          <LuArchive size={20} />
          <span>Products</span>
        </li>

        <li
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 px-4 py-2 rounded-md"
        >
          <RiProfileFill size={20} />
          <span>Profile</span>
        </li>

        <li
          onClick={() => navigate("/help")}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 px-4 py-2 rounded-md"
        >
          <MdOutlineContactSupport size={20} />
          <span>Help/Support</span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:bg-red-700 px-4 py-2 rounded-md mt-6">
          <RiLogoutCircleLine size={20} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
