import SearchBox from "./SearchBox";
import logo from "../assets/react.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔥 Replace this with real auth later
  const isLoggedIn = false;

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-sky-50 h-20 text-black relative">
      {/* Logo */}
      <div onClick={()=>navigate("/")} className="flex items-center gap-2">
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
          {isLoggedIn ? "My Account ▾" : "Account ▾"}
        </div>

        {open && (
          <div className="absolute z-50 right-0 mt-2 w-44 bg-white rounded-lg shadow-2xl">
            <ul className="text-sm">
              {/* 🔹 New Member */}
              {!isLoggedIn && (
                <>
                  <li
                    onClick={() => navigate("/login")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Login
                  </li>
                  <li
                    onClick={() => navigate("/signup")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold text-blue-600"
                  >
                    Sign Up
                  </li>
                </>
              )}

              {/* 🔹 Logged In User */}
              {isLoggedIn && (
                <>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Orders
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                    Logout
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
