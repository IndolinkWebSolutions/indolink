import SearchBox from "./SearchBox";
import logo from "../assets/react.svg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const logout = async () => {
    await api.post("/logout/");
    setUser(null);
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-sky-50 h-20 text-black relative">
      {/* Logo */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2">
        <img src={logo} alt="Indolink" className="h-10" />
      </div>

      {/* Search */}
      <SearchBox />

      {/* User Account */}
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="text-md font-semibold text-gray-900 cursor-pointer hover:text-blue-600"
        >
          {user ? "My Account ▾" : "Account ▾"}
        </div>

        {open && (
          <div className="ml-auto flex items-center gap-4">
            {!user ? (
              <>
                <span className="cursor-pointer">Login</span>
                <span className="cursor-pointer">Signup</span>
              </>
            ) : (
              <div className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <FaUserCircle size={22} />
                  <span>{user.username}</span>
                </div>

                {/* DROPDOWN */}
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
