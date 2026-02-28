import React, { useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "../assets/log-in.png";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  /* STEP 1 → SEND OTP */

  const sendOtp = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setStep(2);

      setLoading(false);

      toast.success("OTP sent to email");
    }, 1000);
  };

  /* STEP 2 → VERIFY OTP */

  const verifyOtp = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setStep(3);

      setLoading(false);

      toast.success("OTP Verified");
    }, 1000);
  };

  /* STEP 3 → RESET PASSWORD */

  const resetPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords not match");

      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success("Now you can login after 1 hour");

      setStep(1);
    }, 1000);
  };

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div className="bg-gray-100 h-[70vh] flex justify-center items-center p-5">
        <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* LEFT */}

          <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
            <img src={img} className="w-full max-w-xs" />
          </div>

          {/* RIGHT */}

          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-2">Forgot Password</h2>

            {/* STEP 1 */}

            {step === 1 && (
              <>
                <p className="text-gray-500 mb-6">Enter Email to get OTP</p>

                <form onSubmit={sendOtp}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="w-full border p-3 rounded mb-4"
                  />

                  <button className="w-full bg-sky-600 text-white p-3 rounded">
                    {loading ? "Sending..." : "Send OTP"}
                  </button>
                </form>
              </>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <>
                <p className="text-gray-500 mb-6">Enter OTP</p>

                <form onSubmit={verifyOtp}>
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full border p-3 rounded mb-4"
                  />

                  <button className="w-full bg-sky-600 text-white p-3 rounded">
                    Verify OTP
                  </button>
                </form>
              </>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <>
                <p className="text-gray-500 mb-6">Set New Password</p>

                <form onSubmit={resetPassword}>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                  />

                  <button className="w-full bg-sky-600 text-white p-3 rounded">
                    Reset Password
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;
