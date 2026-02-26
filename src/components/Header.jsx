import SearchBox from "./SearchBox";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../api";
import { toast } from "react-toastify";
import { List, LogOut, User } from "lucide-react";
import { GrDashboard } from "react-icons/gr";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handlelogout = async () => {
    await logout();
    setUser(null);
    setOpen(false);
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <header className="w-full flex md:flex-row items-center justify-between px-6 py-4 bg-sky-50 h-20 relative">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={logo} alt="Indolink" className="md:h-40 md:w-70 w-50" />
      </div>

      {/* Search */}
      <SearchBox />

      {/* Right Side */}
      <div className="relative">
        {/* BEFORE LOGIN → Separate Buttons */}
        {!user && (
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 md:flex hidden border border-sky-600 text-sky-600 rounded-md hover:bg-sky-50 font-medium"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-4  py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 font-medium"
            >
              Signup
            </button>
          </div>
        )}

        {/* AFTER LOGIN → Dropdown */}
        {user && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="font-semibold text-gray-900 hover:text-sky-600 flex items-center gap-1"
            >
              My Account
              <span>▾</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg z-50 rounded-md">
                {/* User Info */}
                <div className="px-4 py-3 flex items-center gap-3 text-sm border-b">
                  <div className="w-9 h-9 rounded-full bg-sky-800 text-white flex items-center justify-center font-semibold">
                    {user?.name?.[0]?.toUpperCase()}
                  </div>

                  <span className="font-medium">{user?.name}</span>
                </div>

                {/* Profile */}
                <div
                  onClick={() => {
                    navigate("/profile");
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <User size={18} />
                  My Profile
                </div>

                {/* dashboard */}
                <div
                  onClick={() => {
                    navigate("/dashboard");
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <List size={16}/>
                  Dashboard
                </div>

                {/* Logout */}
                <div
                  onClick={handlelogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
