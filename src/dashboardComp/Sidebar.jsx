import { LuArchive } from "react-icons/lu";
import { MdOutlineShoppingCart, MdOutlineContactSupport } from "react-icons/md";
import {
  RiHistoryFill,
  RiLogoutCircleLine,
  RiProfileFill,
} from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../api";
import { toast } from "react-toastify";

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    onClose && onClose();
  };

  const handlelogout = async () => {
    await logout();
    navigate("/login");
    toast.success("Logout successfully");
    onClose && onClose();
  };

  // ⭐ Active Class Function
  const activeClass = (path) =>
    location.pathname === path ? "bg-sky-600 text-white" : "hover:bg-gray-700";

  return (
    <div className="bg-gray-950 text-white w-[250px] sticky top-0 h-full">
      <h1 className="text-2xl font-bold px-6 py-6">Dashboard</h1>

      <hr className="border-gray-700 mb-6" />

      <ul className="flex flex-col gap-4 px-4">
        <li
          onClick={() => handleNavigate("/dashboard")}
          className={`flex items-center gap-3 cursor-pointer py-2 px-4 rounded ${activeClass("/dashboard")}`}
        >
          <RxDashboard size={20} />
          Dashboard
        </li>

        <li
          onClick={() => handleNavigate("/leads")}
          className={`flex items-center gap-3 cursor-pointer py-2 px-4 rounded ${activeClass("/leads")}`}
        >
          <MdOutlineShoppingCart size={20} />
          All Leads
        </li>

        <li
          onClick={() => handleNavigate("/savedProducts")}
          className={`flex items-center gap-3 cursor-pointer py-2 px-4 rounded ${activeClass("/savedProducts")}`}
        >
          <LuArchive size={20} />
          Products
        </li>

        <li
          onClick={() => handleNavigate("/profile")}
          className={`flex items-center gap-3 cursor-pointer py-2 px-4 rounded ${activeClass("/profile")}`}
        >
          <RiProfileFill size={20} />
          Profile
        </li>

        <li
          onClick={() => handleNavigate("/leads-history")}
          className={`flex items-center gap-3 cursor-pointer py-2 px-4 rounded ${activeClass("/leads-history")}`}
        >
          <RiHistoryFill size={20} />
          Leads History
        </li>

        <li
          onClick={() => handleNavigate("/help")}
          className={`flex items-center gap-3 cursor-pointer py-2 px-4 rounded ${activeClass("/help")}`}
        >
          <MdOutlineContactSupport size={20} />
          Help / Support
        </li>

        <li
          onClick={handlelogout}
          className="flex items-center gap-3 mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          <RiLogoutCircleLine size={20} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
