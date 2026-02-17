import React from "react";
import { LuArchive } from "react-icons/lu";
import { MdOutlineShoppingCart, MdOutlineContactSupport } from "react-icons/md";
import { RiLogoutCircleLine, RiProfileFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { logout } from "../api";
import { toast } from "react-toastify";

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose && onClose(); // close sidebar on mobile
  };

  const handlelogout = async () => {
    await logout();
    navigate("/login");
    toast.success("Logout successfully");
    onClose && onClose();  
  };
 
  return (
    <div className="bg-gray-950 text-white w-[250px] h-full">
      <h1 className="text-2xl font-bold px-6 py-6">Dashboard</h1>
      <hr className="border-gray-700 mb-6" />

      <ul className="flex flex-col gap-4 px-4">
        <li
          onClick={() => handleNavigate("/dashboard")}
          className="menu-item flex items-center gap-3 cursor-pointer hover:bg-gray-700 py-2 px-4"
        >
          <RxDashboard size={20} />
          <span>Dashboard</span>
        </li>

        <li
          onClick={() => handleNavigate("/leads")}
          className="menu-item flex items-center gap-3 cursor-pointer hover:bg-gray-700 py-2 px-4"
        >
          <MdOutlineShoppingCart size={20} />
          <span>Lead History</span>
        </li>

        <li
          onClick={() => handleNavigate("/savedProducts")}
          className="menu-item flex items-center gap-3 cursor-pointer hover:bg-gray-700 py-2 px-4"
        >
          <LuArchive size={20} />
          <span>Products</span>
        </li>

        <li
          onClick={() => handleNavigate("/profile")}
          className="menu-item flex items-center gap-3 cursor-pointer hover:bg-gray-700 py-2 px-4"
        >
          <RiProfileFill size={20} />
          <span>Profile</span>
        </li>

        <li
          onClick={() => handleNavigate("/help")}
          className="menu-item flex items-center gap-3 cursor-pointer hover:bg-gray-700 py-2 px-4"
        >
          <MdOutlineContactSupport size={20} />
          <span>Help / Support</span>
        </li>

        <li
          onClick={handlelogout}
          className="menu-item flex items-center gap-3 mt-6 bg-red-600 hover:bg-red-700 px-4 py-2"
        >
          <RiLogoutCircleLine size={20} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
