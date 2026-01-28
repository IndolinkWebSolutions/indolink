import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";
import signupImg from "../assets/login.jpg";
import TopBar from "./TopBar";
import Header from "./Header";
import { pageTransition, pageVariants } from "../pageTransition";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />
      <Header />

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="pt-20 flex items-center justify-center bg-gray-50 px-4"
      >
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — IMAGE */}
          <div className="hidden md:block relative">
            <img
              src={signupImg}
              alt="signup"
              className="h-full w-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-sky-600/60 flex flex-col items-center justify-center text-center px-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Join Indolink Exports Today
              </h2>
              <p className="text-sm text-gray-200 max-w-xs">
                Create your account and explore trusted Indian sellers &
                products.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="p-8 md:p-12 bg-white">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex justify-center mb-4 cursor-pointer"
            >
              <img src={logo} alt="logo" className="h-12 object-contain" />
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create Account ✨
            </h2>
            <p className="text-sm text-center text-gray-500 mt-1">
              Connect with verified sellers across world
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition">
                Sign Up
              </button>
            </form>

            <p
              onClick={() => navigate("/login")}
              className="text-center text-sm text-gray-600 mt-6"
            >
              Already have an account?{" "}
              <span className="text-sky-500 cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Signup;
