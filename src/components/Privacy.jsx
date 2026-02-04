import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* BANNER */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Your privacy matters to us. Learn how Indolink Exports collects,
            uses, and protects your information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10 text-gray-800 leading-relaxed">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">About Our Privacy Policy</h2>
            <p>
              The website <strong>www.indolinkwebsolutions.com</strong>
              ("Indolink Exports") is owned and operated by Indolink Exports,
              registered at Balaji Motor, Kiran Garden, Near Nawada Metro Station,
              New Delhi – 110059, India.
            </p>
            <p className="mt-2">
              This Privacy Policy explains how we collect, use, and safeguard
              personal and business information while you use our platform.
              Indolink Exports reserves the right to update this policy at any
              time.
            </p>
          </div>

          {/* COLLECTION */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Collection of Personal & Business Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We collect personal details such as name, email address, and
                contact information during registration.
              </li>
              <li>
                Business-related data including company details, services, and
                requirements may also be collected.
              </li>
              <li>
                Browsing data like page views, screen resolution, and browser
                type is collected to improve user experience.
              </li>
            </ul>
          </div>

          {/* USAGE */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Usage of Collected Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Information is used to provide personalized services and better
                platform functionality.
              </li>
              <li>
                Business information may be displayed to establish an online
                presence.
              </li>
              <li>
                Users may receive relevant services, emails, newsletters, or
                promotional content.
              </li>
              <li>
                Indolink Exports may enable communication between buyers and
                sellers via calls, emails, SMS, or WhatsApp.
              </li>
            </ul>
          </div>

          {/* DISTRIBUTION */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Information Distribution
            </h3>
            <p>
              Users may receive service updates and promotional communications
              based on activity and preferences. Such communication is sent
              only by authorized personnel under confidentiality agreements.
            </p>
          </div>

          {/* SHARING */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Information Sharing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal data is not shared unless required by law, user
                consent, or legal proceedings.
              </li>
              <li>
                Email addresses are not publicly displayed unless voluntarily
                shared by users.
              </li>
              <li>
                In the event of a merger or acquisition, user data may be
                transferred to new ownership.
              </li>
            </ul>
          </div>

          {/* UPDATES */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Information Updates</h3>
            <p>
              Users can update their account details anytime. Even after account
              deactivation, some data may remain in archived records.
            </p>
          </div>

          {/* DATA PROTECTION */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Indolink Exports does not sell personal data in bulk.
              </li>
              <li>
                Shared statistics are aggregated and do not reveal personal
                identity.
              </li>
              <li>
                Users are advised to keep login credentials secure and log out
                after each session.
              </li>
              <li>
                While security measures are in place, absolute security cannot
                be guaranteed.
              </li>
            </ul>
          </div>

          {/* GOOGLE ADS */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Google Data Collection & Cookies
            </h3>
            <p>
              Indolink Exports runs Google advertisements that use cookies to
              track visits and display relevant ads across platforms.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">
              If you have questions regarding this Privacy Policy, contact us:
            </p>
            <ul className="space-y-1">
              <li>
                <strong>Email:</strong> indolinkwebsolutions@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 011451267483
              </li>
              <li>
                <strong>Address:</strong> Balaji Motor, Kiran Garden, Near Nawada
                Metro Station, New Delhi – 110059
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;
