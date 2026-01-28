import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import loginImg from "../assets/login.jpg";
import { pageTransition, pageVariants } from "../pageTransition";
import { motion } from "framer-motion";


const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />
      <Header />

      <motion.div  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition} className="pt-20 flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — FORM */}
          <div className="p-8 md:p-12 bg-white">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex justify-center mb-4 cursor-pointer"
            >
              <img src={logo} alt="logo" className="h-12 object-contain" />
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-center text-gray-500 mt-1">
              Login to continue
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="text-right">
                <span className="text-sm text-sky-500 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <p className="text-center text-sm text-gray-600">
              New here?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-sky-500 cursor-pointer hover:underline"
              >
                Create an account
              </span>
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="hidden md:block relative">
            <img
              src={loginImg}
              alt="login"
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-sky-600/50 flex flex-col items-center justify-center text-center px-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome to Indolink
              </h2>
              <p className="text-sm text-gray-200 max-w-xs">
                Discover trusted Indian products, connect with verified sellers,
                and grow your business.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
