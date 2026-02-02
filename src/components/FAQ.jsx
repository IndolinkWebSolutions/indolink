import React, { useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer website designing, development, SEO services, digital marketing, web hosting, and marketplace listing solutions.",
  },
  {
    question: "Do you create custom websites?",
    answer:
      "Yes, we design fully customized websites tailored to your business needs and brand identity.",
  },
  {
    question: "Is my website mobile-friendly?",
    answer:
      "Absolutely. All our websites are responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we provide maintenance and support services even after the project is completed.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      {/* BANNER */}
      <div className="h-[40vh] bg-gray-900 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">FAQs</h1>
        <p className="text-gray-300 max-w-2xl">
          Find answers to the most commonly asked questions about our services
          and process.
        </p>
      </div>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl  px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800"
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEED MORE HELP */}
      <section className=" py-6">
        <div className="max-w-5xl px-6">
          <div className="relative bg-[#111827] rounded-xl p-8 md:p-10 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need More Help?
            </h3>

            <p className="text-gray-400 mb-6">
              If you can’t find the answer you’re looking for, please contact
              our support team:
            </p>

            <div className="space-y-4 text-gray-200">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span>indolinkwebsolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>01145126483</span>
              </div>

              <div className="flex items-center gap-3">
                <span>💬</span>
                <span>Live Chat: Available during business hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;
