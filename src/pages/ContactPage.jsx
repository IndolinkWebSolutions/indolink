import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import banner from "../assets/banner.png";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <>
      <TopBar />
      <Header/>
      <Navbar />

      {/* HERO / OVERLAY SECTION */}
      <div className="contact-section h-[40vh] bg-gray-900 relative flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-around gap-10">

            {/* LEFT CONTENT */}
            <div className="text-white md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-gray-300 max-w-md">
                Have questions or need help? Reach out to us and our team will
                get back to you as soon as possible.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={banner}
                alt="Contact Banner"
                className="max-w-sm w-full object-contain md:block hidden"
              />
            </div>

          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
