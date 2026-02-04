import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free Membership",
    price: "₹0",
    duration: "Lifetime (Limited Access)",
    highlight: false,
    features: [
      { text: "View Leads", available: false },
      { text: "Buy Lead Access", available: false },
      { text: "Responsive Website", available: false },
      { text: "SEO Friendly Design", available: false },
      { text: "Customer Support", available: false },
      { text: "Company Email ID", value: "0" },
    ],
    buttonText: "Get Free",
  },
  {
    name: "Premium Membership",
    price: "₹1,10,000 + GST",
    duration: "3 Years",
    highlight: true,
    features: [
      { text: "View & Buy Leads", available: true },
      { text: "5 Leads Per Week", available: true },
      { text: "Up to 5 Pages Website", available: true },
      { text: "SEO Friendly Design", available: true },
      { text: "24/7 Customer Support", available: true },
      { text: "Company Email IDs", value: "5" },
    ],
    buttonText: "Buy Premium",
  },
];

const Membership = () => {
    const navigate = useNavigate();
  return (
    <>
    <TopBar/>
    <Header/>
    <Navbar/>
    <div className="bg-[#ffffff] text-black py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Membership Plans
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border transition transform ${
              plan.highlight
                ? "border-yellow-500 scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                : "border-gray-700"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-900 mb-4">{plan.duration}</p>

            <div className="text-4xl font-bold mb-6">{plan.price}</div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  {feature.available === false ? (
                    <span className="text-red-500 text-lg">✖</span>
                  ) : (
                    <span className="text-green-500 text-lg">✔</span>
                  )}
                  <span className="text-gray-900">
                    {feature.text}
                    {feature.value && ` : ${feature.value}`}
                  </span>
                </li>
              ))}
            </ul>

            <button onClick={()=>navigate("/contact")}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-gray-200 hover:bg-gray-600"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Membership;
