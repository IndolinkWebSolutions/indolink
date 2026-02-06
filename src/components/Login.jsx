import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import loginImg from "../assets/login.jpg";
import { pageTransition, pageVariants } from "../pageTransition";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import { login } from "../api/index.js";
import Footer from "./Footer.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 const { user, setUser, loadUser } = useContext(AuthContext);



 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await login({
      username,
      password,
    });

    // save tokens
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    // 🔥 NOW fetch authenticated user
    await loadUser();

  } catch (err) {
    setError(err.response?.data?.error || "Invalid username or password");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

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
        <div className="w-full p-10 md:p-0 max-w-5xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div className=" md:p-12 bg-white">
            <div
              onClick={() => navigate("/")}
              className="flex justify-center  cursor-pointer"
            >
              <img src={logo} alt="logo" className="h-32" />
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800">
              Welcome Back 👋
            </h2>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-gray-600">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              New here?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-sky-500 cursor-pointer hover:underline"
              >
                Create an account
              </span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block relative">
            <img
              src={loginImg}
              alt="login"
              className="h-full w-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-sky-600/60 flex flex-col items-center justify-center text-center px-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome Back to Indolink Exports
              </h2>
              <p className="text-sm text-gray-200 max-w-xs">
                Log in to connect with verified Indian exporters and global
                buyers.
              </p>

              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </>
  );
};

export default Login;
