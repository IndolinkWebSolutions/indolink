import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { enquiryForm } from "../api";

function Card({ setShow }) {
  const [loading, setLoading] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await enquiryForm(formData);

      alert(data.message || "Lead Saved Successfully!");
      setShow(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white/60 backdrop-blur-md border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-3xl p-8 max-w-md w-full"
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-800 font-bold text-lg"
        >
          ✕
        </button>

        <div className="flex justify-center">
          <img
            src={logo}
            alt="Indolink Web Solutions Pvt. Ltd."
            className="h-20 w-auto object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Let’s Grow Your Business 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company Name"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            {loading ? "Submitting..." : "Get Started"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Card;
