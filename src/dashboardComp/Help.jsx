import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "Go to settings → change password. If you forgot your password, use the 'Forgot Password' option on login.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Click on the 'Contact Support' button and fill out the form. Our team usually replies within 24 hours.",
  },
  {
    question: "Where can I see my payment history?",
    answer:
      "Navigate to Billing section from your dashboard to view invoices and payment history.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard security practices to keep your data safe and private.",
  },
];

const Help = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
     <div className="hidden md:block">
        <Sidebar />
      </div>


      {/* RIGHT CONTENT */}
      <div className="flex-1">
        {/* TOP NAVBAR */}
        <DNavbar />

        {/* MAIN CONTENT */}
        <div className="p-6 overflow-y-auto">
          <h1 className="text-4xl text-gray-700 mb-4">
            Help <p className="text-2xl">Center</p>
          </h1>

          <p className="text-gray-600 mb-6">
            Need help? Find answers to common questions or reach out to our
            support team.
          </p>

          {/* HELP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">Account Issues</h3>
              <p className="text-sm text-gray-600">
                Trouble logging in or updating your profile? We’ve got you
                covered.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">Payments & Billing</h3>
              <p className="text-sm text-gray-600">
                Learn about invoices, payments, and refund policies.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">App Usage</h3>
              <p className="text-sm text-gray-600">
                Step-by-step guides on how to use features effectively.
              </p>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="bg-white p-6 rounded-xl shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {faq.question}
                    <span className="text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT SUPPORT */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
            <p className="text-gray-600 mb-4">
              Contact our support team and we’ll get back to you shortly.
            </p>
            <button onClick={()=>navigate("/contact")} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
