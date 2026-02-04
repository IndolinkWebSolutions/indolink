import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Shipping = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* BANNER */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Shipping Policy</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Please read this policy carefully to understand how our services are
            delivered.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10 text-gray-800 leading-relaxed">
          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              About Our Shipping Policy
            </h2>
            <p>
              Welcome to <strong>Indolink Exports</strong>. This Shipping Policy
              outlines the terms and conditions related to the delivery of our
              services. By placing an order with us, you agree to the terms
              mentioned below.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
            <p>
              Indolink Exports is a service provider offering free and paid
              digital services such as membership plans, banner promotions,
              website creation, and related solutions. Since these are digital
              services, <strong>no physical products are shipped</strong> and no
              shipping charges are applicable.
            </p>
          </div>

          {/* SERVICE DELIVERY */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Service Delivery</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Memberships are activated within <strong>2 working days</strong>
                from the receipt of activation charges and remain valid for the
                subscribed period.
              </li>
              <li>
                Web pages and related services are created based on information
                and approvals provided by the member and may take additional
                time. No extension or relaxation is provided for this period.
              </li>
              <li>
                Servers are managed by third-party providers. Service
                interruptions due to technical issues, hacking, or maintenance
                are beyond the control of Indolink Exports.
              </li>
              <li>
                Indolink Exports or its parent company shall not be responsible
                for any costs, damages, or service extensions arising from such
                interruptions.
              </li>
              <li>
                Members are advised to save important messages and data offline
                to avoid loss due to technical issues.
              </li>
              <li>
                Membership charges are subject to revision at the discretion of
                Indolink Exports.
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">
              If you have any questions or concerns about this Shipping Policy,
              please contact us:
            </p>
            <ul className="space-y-1">
              <li>
                <strong>Email:</strong> indolinkwebsolutions@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 01145126483
              </li>
              <li>
                <strong>Address:</strong> Balaji Motor, Kiran Garden, Near
                Nawada Metro Station, New Delhi – 110059
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            By using Indolink Exports services, you agree to this Shipping
            Policy.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shipping;
