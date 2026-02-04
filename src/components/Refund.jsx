import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Refund = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* BANNER */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Payment & Refund Policy
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Please read our payment and refund terms carefully before using our
            services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10 text-gray-800 leading-relaxed">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              About Our Payment & Refund Policy
            </h2>
            <p>
              At <strong>Indolink Exports</strong>, we aim to ensure customer
              satisfaction with every purchase. Please review the policy below
              before subscribing to any paid services.
            </p>
          </div>

          {/* PAYMENT */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Payment for Memberships
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All payments must be made in favor of
                <strong> “Weblink.IN Pvt. Ltd.”</strong> only.
              </li>
              <li>
                Payments are required on a <strong>100% advance basis</strong>
                to ensure uninterrupted paid services.
              </li>
              <li>
                Indolink Exports has not authorized any individual or
                organization to collect payments under any other name.
              </li>
              <li>
                Payments made to fraudulent individuals or organizations are
                not the responsibility of Indolink Exports.
              </li>
              <li>
                In case of disputes resolved in favor of the user, any excess
                amount paid will be refunded without interest.
              </li>
              <li>
                Delayed payments may result in termination of membership and
                services.
              </li>
            </ul>
          </div>

          {/* REFUND */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Refund / Money Back Policy
            </h3>
            <p className="mb-3">
              Once subscribed, payments made for paid services are
              <strong> non-refundable</strong>. All services are provided on a
              best-effort basis.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fraudulent Transactions:</strong> Users are responsible
                for maintaining confidentiality of their accounts and payment
                details. Indolink Exports is not liable for misuse of credit or
                debit card information.
              </li>
              <li>
                <strong>Change in Preference or Delay:</strong> Refunds are not
                applicable for changes in personal preference or process
                delays.
              </li>
            </ul>
          </div>

          {/* CANCELLATION */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Order Cancellation
            </h3>
            <p>
              Once an order is placed, it cannot be cancelled as it is processed
              immediately. Personal preference changes do not qualify for
              refunds or chargebacks.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">
              If you have questions regarding this Refund Policy, contact us:
            </p>
            <ul className="space-y-1">
              <li>
                <strong>Email:</strong> indolinkwebsolutions@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 01145126483
              </li>
              <li>
                <strong>Address:</strong> Balaji Motor, Kiran Garden, Near Nawada
                Metro Station, New Delhi – 110059
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            By using Indolink Exports services, you agree to this Payment &
            Refund Policy.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Refund;
