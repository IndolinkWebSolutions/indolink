import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa6";

const Footer = () => {
  const linkClass = "hover:text-orange-400 transition text-sm";

  return (
    <footer className="bg-gradient-to-b from-[#0b1f3f] to-[#07162e] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* LOGO & ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Indolink Web Solutions Pvt. Ltd.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Indolink Web Solutions helps businesses grow with smart digital
            marketing, advertising, and lead generation services.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className={linkClass}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/membership" className={linkClass}>
                MemberShip Plans
              </Link>
            </li>

            <li>
              <Link to="/login" className={linkClass}>
                My Account
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/membership" className={linkClass}>
                Membership Plans
              </Link>
            </li>
            <li>
              <Link to="/terms" className={linkClass}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/faq" className={linkClass}>
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT & SOCIAL */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapPin className="mt-1 text-orange-400" />
              <span>
                {" "}
                Kiran Garden, Near Nawada Metro Station, New Delhi – 110059,
                India.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-orange-400" />
              011 4657 2483
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              indolinkwebsolutions@gmail.com
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61579598435368"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/indolink-web-solutions"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/indolinkwebsolutions"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <p>© Indolink Web Solution Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
