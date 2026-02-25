import SearchBox from "./SearchBox";
import logo from "../assets/logo.png";
import { Profiler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../api";
import { toast } from "react-toastify";
import { LogOut, User } from "lucide-react";

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

      {/* Account */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="font-semibold text-gray-900 hover:text-blue-600 flex items-center gap-1"
        >
          {user ? "My Account" : "Account"}
          <span>▾</span>
        </button>

        {/* DROPDOWN */}
        {open && (
          <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg border border-gray-400 z-50">
            {!user ? (
              <>
                <p
                  onClick={() => {
                    navigate("/login");
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Login
                </p>
                <p
                  onClick={() => {
                    navigate("/signup");
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Signup
                </p>
              </>
            ) : (
              <>
                {/* Profile Header */}
                <div className="px-4 py-3 flex items-center gap-3 text-sm text-gray-700 border-b">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-sky-800 text-white flex items-center justify-center font-semibold">
                    {user?.name?.[0]?.toUpperCase() || "N/A"}
                  </div>

                  {/* Username */}
                  <span className="font-medium text-uppercase">
                    {user?.name}
                  </span>
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

                {/* Logout */}
                <div
                  onClick={handlelogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 flex items-center gap-2"
                >
                  <LogOut size={16} /> Logout
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
