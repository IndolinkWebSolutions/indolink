import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const linkClass =
    "hover:text-orange-400 transition cursor-pointer";

  return (
    <footer className="bg-gradient-to-b from-[#0b1f3f] to-[#07162e] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/advertise" className={linkClass}>Advertise with us</Link></li>
            <li><Link to="/membership" className={linkClass}>Membership Plan</Link></li>
            <li><Link to="/banner-advertisement" className={linkClass}>Banner Advertisement</Link></li>
          </ul>
        </div>

        {/* BUYERS */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Buyers
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/post-requirement" className={linkClass}>Post Your Requirement</Link></li>
            <li><Link to="/suppliers" className={linkClass}>Browse Suppliers</Link></li>
            <li><Link to="/manufacturers" className={linkClass}>Manufacturers Directory</Link></li>
            <li><Link to="/country-suppliers" className={linkClass}>Country Suppliers</Link></li>
            <li><Link to="/buyer-faq" className={linkClass}>Buyer FAQ</Link></li>
          </ul>
        </div>

        {/* SELLERS */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Sellers
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sell-product" className={linkClass}>Sell Your Product</Link></li>
            <li><Link to="/buyleads" className={linkClass}>Latest Buyleads</Link></li>
            <li><Link to="/seller-faq" className={linkClass}>Seller FAQ</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className={linkClass}>About Us</Link></li>
            <li><Link to="/careers" className={linkClass}>Jobs & Careers</Link></li>
            <li><Link to="/feedback" className={linkClass}>Feedback</Link></li>
            <li><Link to="/testimonials" className={linkClass}>Testimonials</Link></li>
            <li><Link to="/sitemap" className={linkClass}>Sitemap</Link></li>

           
          </ul>
           {/* Social Icons */}
          <div className="flex gap-3 text-white text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaXTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-500"><FaPinterestP /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>

       
          

         
        </div>
  

      {/* PARTNER SITES */}
      {/* <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
            Partner Sites
          </span>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            <a href="#"><img src="/partner1.png" className="h-8" alt="" /></a>
            <a href="#"><img src="/partner2.png" className="h-8" alt="" /></a>
            <a href="#"><img src="/partner3.png" className="h-8" alt="" /></a>
            <a href="#"><img src="/partner4.png" className="h-8" alt="" /></a>
            <a href="#"><img src="/partner5.png" className="h-8" alt="" /></a>
          </div>
        </div>
      </div> */}

      {/* BOTTOM BAR */}
      <div className="bg-black text-gray-400 text-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© indolink web solution Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className={linkClass}>Privacy Policy</Link>
            <Link to="/terms" className={linkClass}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
