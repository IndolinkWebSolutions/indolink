import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import signupImg from "../assets/login.jpg";
import TopBar from "./TopBar";
import Header from "./Header";
import { pageTransition, pageVariants } from "../pageTransition";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar.jsx";
import { signup } from "../api/index.js";
import Footer from "./Footer.jsx";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({
        email,
        password,
        username,
        name,
        mobile_number,
      });

      
      toast.success("Login successful");
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed, please try again!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="pt-20 mb-30 flex items-center justify-center bg-gray-50 px-4"
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
              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="p-8 md:p-12 bg-white">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex justify-center cursor-pointer"
            >
              <img src={logo} alt="logo" className="h-24 object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create Account ✨
            </h2>
            <p className="text-sm text-center text-gray-500">
              Connect with verified sellers across world
            </p>

            <form onSubmit={handleSignup} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                disabled={loading}
                className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition"
              >
                {loading ? "Signing you in" : "Sign up"}
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
      <Footer />
    </>
  );
};

export default Signup;
