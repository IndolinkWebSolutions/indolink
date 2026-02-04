import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsnCondition = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* BANNER */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using
            Indolink Exports services and platform.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10 text-gray-800 leading-relaxed">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              About Our Terms and Conditions
            </h2>
            <p>
              Indolink Exports collects information from its registered users
              and visitors under specific conditions and agreements. Personal
              and business information may be shared or kept confidential in
              accordance with these agreements.
            </p>
          </div>

          {/* SECTION 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Information and Usage
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All information, services, software, documents, and materials
                provided by Indolink Exports are subject to these terms.
              </li>
              <li>
                Indolink Exports reserves the right to modify terms at any time
                with prior notice.
              </li>
              <li>
                Usage of materials must comply with the guidelines displayed
                on the website.
              </li>
            </ul>
          </div>

          {/* SECTION 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. User Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Violation of terms may result in immediate termination of user
                access or membership.
              </li>
              <li>
                Indolink Exports is not responsible for agreements between
                users and third parties.
              </li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Content Protection and Use
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Misuse or plagiarism of site content is strictly prohibited
                and may result in legal action.
              </li>
              <li>
                All content is protected under copyright and intellectual
                property laws.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Third-Party Transactions
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Indolink Exports does not endorse any third-party transactions.
              </li>
              <li>
                Users are solely responsible for verifying authenticity of
                business dealings.
              </li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              5. Modifications and Amendments
            </h3>
            <p>
              Indolink Exports reserves the exclusive right to modify these
              terms at its discretion with prior notification to users.
            </p>
          </div>

          {/* GUIDELINES */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Guidelines for Use of Site Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information is for reference purposes only.</li>
              <li>
                Unauthorized copying, distribution, or design imitation is
                prohibited.
              </li>
              <li>
                Indolink Exports may restrict access or usage without notice.
              </li>
            </ul>
          </div>

          {/* WARRANTY */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Warranty Disclaimer</h3>
            <p>
              All services and materials are provided “as is” without any
              warranties. Indolink Exports does not guarantee uninterrupted,
              error-free, or secure services and is not liable for data loss,
              system damage, or third-party website content.
            </p>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Legal Jurisdiction</h3>
            <p>
              All disputes related to Indolink Exports shall be governed by the
              laws of India and fall under the jurisdiction of courts located
              in New Delhi only.
            </p>
          </div>

          {/* AGREEMENT */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="font-medium">
              By using Indolink Exports services, you agree to comply with
              these Terms and Conditions. Failure to comply may result in
              termination of services or legal action.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsnCondition;
