import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPen,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    msg: "",
  });
 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);

      toast.success("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        msg: "",
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "You can submit contact form only once per day ❌"
      );
    } finally {
      setLoading(false);
    }
  };

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

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <div className="flex items-center border rounded-md px-4">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full py-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-md px-4">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full py-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-md px-4">
                <FaPhone className="text-gray-400 mr-3" />
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full py-3 outline-none"
                />
              </div>

              <div className="flex items-start border rounded-md px-4">
                <FaPen className="text-gray-400 mr-3 mt-4" />
                <textarea
                  rows="4"
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full py-3 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-slate-700 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* RIGHT MAP */}
          <div className="h-full">
            <iframe
              title="Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281533.209975474!2d72.10711966063003!3d20.75715382814725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44b2f6e99ea7ae9f%3A0xf9d96d79398a7662!2sIndoLink%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1771327580443!5m2!1sen!2sin"
              className="w-full h-full min-h-[450px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center py-10 border-t border-gray-300">
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-slate-700 text-2xl" />
            <span className="text-gray-500 text-sm">Balaji Motor, Kiran Garden, Near Nawada Metro Station, New Delhi – 110059, India.</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-slate-700 text-2xl" />
            <span className="text-gray-500 text-sm">011 4657 2483</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-slate-700 text-2xl" />
            <span className="text-gray-500 text-sm">
              indolinkwebsolutions@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
