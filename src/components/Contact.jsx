import React from "react";
import { FaUser, FaEnvelope, FaPen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT FORM */}
          <div className="p-10">
            <button className="flex items-center gap-2 bg-slate-700 text-white px-5 py-3 rounded-md mb-6">
              ✉ Write to us:
            </button>

            <p className="text-gray-500 mb-8">
              We will write rarely, but only the best content.
            </p>

            <form className="space-y-5">
              <div className="flex items-center border rounded-md px-4">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full py-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-md px-4">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full py-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-md px-4">
                <FaPhone className="text-gray-400 mr-3" />
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  className="w-full py-3 outline-none"
                />
              </div>

              <div className="flex items-start border rounded-md px-4">
                <FaPen className="text-gray-400 mr-3 mt-4" />
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full py-3 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-slate-700 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT MAP */}
          <div className="h-full">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              className="w-full h-full min-h-[450px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center py-10 border-t border-gray-300">
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-slate-700 text-2xl" />
            <p className="font-semibold">New York, NY 10012</p>
            <span className="text-gray-500 text-sm">United States</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-slate-700 text-2xl" />
            <p className="font-semibold">+01 234 567 89</p>
            <span className="text-gray-500 text-sm">Mon - Fri, 9:00–18:00</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-slate-700 text-2xl" />
            <p className="font-semibold">info@email.com</p>
            <span className="text-gray-500 text-sm">sale@email.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
