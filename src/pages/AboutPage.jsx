import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* HERO / OVERLAY SECTION */}
      <div className="contact-section h-[40vh] bg-gray-900 relative flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* LEFT CONTENT */}
          <div className="text-white flex-col flex items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-gray-300">
              Learn more about who we are, what we do, and how we help brands
              create a strong digital presence.
            </p>
          </div>
        </div>
      </div>
      {/* HERO / ABOUT SECTION */}
      <section className="bg-[#ffffff] text-bloack py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-800 mb-3">About Us</p>

          <h1 className="text-5xl font-bold mb-6">
            Indolink <span className="text-gray-800">Exports</span>
          </h1>

          <div className="max-w-5xl text-gray-700 space-y-5 leading-relaxed">
            <p>
              Indolink Exports gives growth solutions to businesses across all
              verticals like web design & development, legal work. We have a
              tendency to discover, define, design and deliver business
              solutions that synchronize well with the fundamental necessities
              of respective trades to fulfill our promise of continuous business
              growth.
            </p>

            <p>
              A group of passionate professionals ordered the inspiration stone
              of Indolink Exports in 2020. Ever since we’ve been moving ahead
              with a quality-driven approach and have assisted thousands of
              enterprises in scaling their business.
            </p>

            <p>
              Indolink Exports is a digital marketing agency that combines
              custom online strategies with emerging technologies. As one of the
              top digital marketing agencies in Delhi, we create digital
              ecosystems because your business deserves more than just a
              website.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-gray-50 py-20">
        <div className=" max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <span className="w-24 h-[2px] bg-gray-700"></span>

            <h2 className="mx-6 text-4xl font-bold text-gray-800">
              Our Services
            </h2>

            <span className="w-24 h-[2px] bg-gray-700"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Website Designing",
                desc: "Modern, Responsive & Professional Website UI/UX",
                items: [
                  "Dynamic Website Designing",
                  "E-commerce Website Designing",
                  "Static Website Designing",
                ],
              },
              {
                title: "Web Development",
                desc: "Custom & Scalable Web Solutions",
                items: [
                  "Flash Website Design",
                  "Customize Website Designing",
                  "Mobile Website Designing",
                ],
              },
              {
                title: "SEO & Growth",
                desc: "Rank Higher & Grow Faster",
                items: [
                  "SEO Services",
                  "Development Services",
                  "Domain Name Registration",
                ],
              },
              {
                title: "Marketing Solutions",
                desc: "Digital Presence That Converts",
                items: [
                  "MarketPlace Listing",
                  "Web Hosting",
                  "Digital Marketing",
                ],
              },
            ].map((card, idx) => (
              <div key={idx} className="perspective h-[260px]">
                <div className="relative w-full h-full transform-style transition-transform duration-700 hover:rotate-y-180">
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-gray-900 text-white rounded-xl p-6 backface-hidden flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-gray-300 text-sm">{card.desc}</p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-gray-500 rounded-xl p-6 backface-hidden rotate-y-180">
                    <ul className="space-y-3">
                      {card.items.map((item, i) => (
                        <li key={i} className="text-gray-200 font-medium">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES / MISSION / VISION */}
      <section className="bg-gradient-to-r from-[#c9c9c9] to-[#a6ccff] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              By setting clear goals, fixing priorities and effectively
              organizing resources, we ensure the best outcomes for our clients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To reach horizons where our capabilities meet client expectations
              with complete transparency and excellence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver excellence with a customer-centric approach and build
              long-lasting trust with clients worldwide.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default AboutPage;
