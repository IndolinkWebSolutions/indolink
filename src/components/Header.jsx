import SearchBox from "./SearchBox";
import logo from "../assets/react.svg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const logout = async () => {
    await api.post("/logout/");
    setUser(null);
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-sky-50 h-20 relative">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={logo} alt="Indolink" className="h-10" />
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
                <div className="px-4 py-2 flex items-center gap-2 text-sm text-gray-700 border-b">
                  <FaUserCircle size={18} />
                  <span>{user.username}</span>
                </div>

                <p
                  onClick={() => {
                    navigate("/profile");
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </p>

                <p
                  onClick={() => {
                    navigate("/orders");
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Orders
                </p>

                <p
                  onClick={logout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Logout
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
