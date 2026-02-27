import { Link, useNavigate } from "react-router-dom";
import file from "../assets/file.png";
import shield from "../assets/shield.png";
import refund from "../assets/refund.png";
import box from "../assets/box.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tradeOpen, setTradeOpen] = useState(false);
  const [sellerOpen, setSellerOpen] = useState(false);

  return (
    <nav className="w-full md:flex bg-sky-500 text-white px-6 relative">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center py-3">
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>

        <span className="font-semibold">Menu</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium py-3">
        {" "}
        <div className="relative group">
          {/* TRIGGER */}
          <span className="cursor-pointer flex items-center gap-2 text-white">
            TRADE ASSURANCE
            <svg
              className="w-4 h-4 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>

          {/* DROPDOWN */}
          <div className="absolute md:left-120 -translate-x-1/2 mt-4 w-[900px] bg-[#0f172a] rounded-xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt="assurance"
                className="w-14 h-14"
              />
              <p className="text-gray-300 text-lg">
                Enjoy protection from{" "}
                <span className="text-white font-semibold">
                  payment to delivery
                </span>
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-4 gap-6">
              {[
                {
                  title: "Terms and Conditions",
                  image: file,
                  route: "/terms",
                },
                {
                  title: "Privacy Policy",
                  image: shield,
                  route: "/privacy",
                },
                {
                  title: "Refund Policy",
                  imgage: refund,
                  route: "/refund",
                },
                {
                  title: "Shipping Policy",
                  image: box,
                  route: "/shipping",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(item.route)}
                  className="cursor-pointer bg-[#020617] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-blue-500 hover:scale-[1.03] transition"
                >
                  <img src={item.image} alt="" className="w-10 h-10" />
                  <h4 className="text-gray-200 font-semibold">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative group">
          {/* Trigger */}
          <span className="cursor-pointer flex items-center gap-2 font-semibold tracking-wide text-white">
            SELLER CENTRAL
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>

          {/* Dropdown */}
          <div
            className="absolute left-120 -translate-x-1/2 mt-4 w-[850px] 
  bg-gradient-to-br from-[#0f172a] to-[#1e293b] 
  rounded-2xl shadow-2xl p-8 
  opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible 
  transition-all duration-300 ease-in-out z-50"
          >
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-white text-xl font-semibold">
                Grow Your Business With Us 🚀
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Everything you need to become a successful supplier.
              </p>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 */}
              <div
                onClick={() => navigate("/about")}
                className="cursor-pointer bg-[#020617] border border-gray-800 rounded-xl p-6 
        hover:border-sky-500 hover:shadow-lg hover:scale-[1.03] 
        transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">
                  What is Indolink Exports?
                </h4>
                <p className="text-gray-400 text-sm">
                  Learn how our B2B platform helps suppliers connect globally.
                </p>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => navigate("/membership")}
                className="cursor-pointer bg-[#020617] border border-gray-800 rounded-xl p-6 
        hover:border-sky-500 hover:shadow-lg hover:scale-[1.03] 
        transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">
                  Membership Program
                </h4>
                <p className="text-gray-400 text-sm">
                  Unlock premium features & boost your visibility.
                </p>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => navigate("/signup")}
                className="cursor-pointer bg-[#020617] border border-gray-800 rounded-xl p-6 
        hover:border-sky-500 hover:shadow-lg hover:scale-[1.03] 
        transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">My Account</h4>
                <p className="text-gray-400 text-sm">
                  Manage your seller profile & product listings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/faq">
          {" "}
          <span className="cursor-pointer">HELP CENTER</span>
        </Link>
        <Link to="/contact">
          <span className="cursor-pointer">BECOME A SUPPLIER</span>
        </Link>
      </div>
      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-72 h-full p-5">
            <div className="flex justify-between mb-6">
              <h2 className="font-bold">Menu</h2>

              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-4 text-sky-500">
              {/* Trade Assurance */}

              <div>
                <div
                  onClick={() => setTradeOpen(!tradeOpen)}
                  className="flex justify-between cursor-pointer"
                >
                  <span className=" font-bold">Trade Assurance</span>

                  <span>▾</span>
                </div>

                {tradeOpen && (
                  <div className="ml-4 mt-2 space-y-2 text-gray-600">
                    <div onClick={() => navigate("/terms")}>Terms & Conditions</div>

                    <div onClick={() => navigate("/privacy")}>Privacy</div>

                    <div onClick={() => navigate("/refund")}>Refund</div>

                    <div onClick={() => navigate("/shipping")}>Shipping</div>
                  </div>
                )}
              </div>

              {/* Seller Central */}

              <div>
                <div
                  onClick={() => setSellerOpen(!sellerOpen)}
                  className="flex justify-between cursor-pointer"
                >
                  <span className="font-bold">Seller Central</span>

                  <span>▾</span>
                </div>

                {sellerOpen && (
                  <div className="ml-4 mt-2 space-y-2 text-gray-600">
                    <div onClick={() => navigate("/about")}>About</div>

                    <div onClick={() => navigate("/membership")}>
                      Membership
                    </div>

                    <div onClick={() => navigate("/signup")}>My Account</div>
                  </div>
                )}
              </div>

              <div className="font-bold" onClick={() => navigate("/faq")}>Help Center</div>

              <div className="font-bold" onClick={() => navigate("/contact")}>Become Supplier</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
