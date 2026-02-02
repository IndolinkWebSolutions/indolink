import { useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaMobileAlt,
  FaTshirt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const categories = [
    {
      name: "Food Product & Beverage",

      sub: [
        {
          name: "Dairy Products",
          child: ["Milk", "Cheeze", "Butter", "Ice-cream", "Paneer"],
        },
        {
          name: "Confectionery & Backery Products",
          child: ["Cholocolates", "Cookies", "Biscuit", "Cake", "Candy"],
        },
        {
          name: "Cooking Spices & Masala",
          child: [
            "Cinnamon",
            "Garlic",
            "Ginger",
            "Turmeric",
            "Coriander",
            "Garam Mashala",
          ],
        },
        {
          name: "Beverages",
          child: ["Beer", "Ice", "Coconut Water", "Apple Cider Vinegar"],
        },
        {
          name: "Dry Fruits",
          child: ["Almond", "Cashews", "Walnuts", "Dates", "Faxnuts"],
        },
        {
          name: "Tea",
          child: [
            "Black Tea",
            "Green Tea",
            "Masala Tea",
            "PapenMint",
            "Oolong",
          ],
        },
      ],
    },
    {
      name: "Agricultures",
      sub: [
        {
          name: "Fresh Flower & Plant",
          child: ["Rose", "Merigold", "Orichids", "Money plant", "Wheat Grass"],
        },
        {
          name: "Food Grains & Cereals",
          child: ["Oats", "Rice", "Jeggery", "Wheat"],
        },
        {
          name: "Fruits",
          child: ["Mango", "Apple", "Backberry", "Dragon Fruits"],
        },
        {
          name: "Agricultural Equipments & Supplies",
          child: [
            "Seed Drills",
            "Pickaxe",
            "Agriculteral tool",
            "Other Equipment",
          ],
        },
      ],
    },
    {
      name: "Fashion & Apparel",
      sub: [
        {
          name: "Leather Clothing",
          child: [
            "Leather Jackets",
            "Waist Coat",
            "Leather Belt",
            "Leather Gloves",
            "Leather Pants",
          ],
        },
        {
          name: "Men",
          child: ["Shirt", "T-shirts", "Jeans", "Watch", "Wallets", "Shoes"],
        },
        {
          name: "Women",
          child: [
            "Anarkali Suits",
            "Designer Blouses",
            "Pakistani Suits",
            "Anarkali Dress",
            "Salwar Kamiz",
          ],
        },
        {
          name: "Kids",
          child: ["Baby Dresses", "Kids Lahenga", "Tutu Dress", "Kids Frocks"],
        },
      ],
    },
    {
      name: "Ayurveda & Herbals",
      sub: [
        {
          name: "Ayurvedic, Herbal Medicines & Products",
          child: [
            "Herbal Row Material",
            "Herbal Formulations Products",
            "Herbal Medicines",
            "Honey",
          ],
        },
        {
          name: "Ayurvedic Consultants",
          child: [
            "Hair Loss Treatment Service",
            "Homopathic Skin Treatment Service",
            "Joint Pain Treatment Service",
            "Piles Treatment Service",
          ],
        },
        {
          name: "Herbal Foods",
          child: ["food"],
        },
        {
          name: "Pure & Natural Herbs",
          child: ["Pure Herbs", "Aloe Vera", "Split Cassia", "Herb Plant"],
        },
      ],
    },
    {
      name: "Electronics",
      sub: [
        {
          name: "Mobiles",
          child: ["Android Phones", "iPhones", "Refurbished"],
        },
        {
          name: "Laptops",
          child: ["Gaming Laptops", "Business Laptops", "Student Laptops"],
        },
      ],
    },
    {
      name: "Fashion",
      sub: [
        {
          name: "Men",
          child: ["Shirts", "Jeans", "Shoes"],
        },
        {
          name: "Women",
          child: ["Dresses", "Handbags", "Footwear"],
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [catPos, setCatPos] = useState(0);
  const [subPos, setSubPos] = useState(0);

  return (
    <nav className="w-full bg-sky-500 text-white px-6 relative">
      <div className="flex items-center gap-6 text-sm font-medium py-3">
        {/* ALL CATEGORIES */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
            setActiveCategory(null);
            setActiveSub(null);
          }}
        >
          <span className="cursor-pointer font-semibold flex items-center gap-2">
            ALL CATEGORIES {open ? <FaChevronDown /> : <FaChevronRight />}
          </span>

          {/* LEVEL 1 */}
          {open && (
            <div className="absolute left-0 top-full bg-gray-100 text-black shadow-lg w-64 z-50 border-none">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  onMouseEnter={(e) => {
                    setActiveCategory(cat);
                    setActiveSub(null); // reset child when parent changes

                    // capture vertical position of hovered row
                    const rect = e.currentTarget.getBoundingClientRect();
                    const parentRect =
                      e.currentTarget.parentElement.getBoundingClientRect();

                    setCatPos(rect.top - parentRect.top);
                  }}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-blue-50 ${
                    activeCategory?.name === cat.name &&
                    "bg-blue-100 text-blue-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {cat.icon}
                    <span>{cat.name}</span>
                  </div>

                  {activeCategory?.name === cat.name ? (
                    <FaChevronDown className="text-sm" />
                  ) : (
                    <FaChevronRight className="text-sm" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* LEVEL 2 */}
          {activeCategory && (
            <div
              className="absolute left-64 top-0 bg-white text-black shadow-lg w-64 z-50 border"
              style={{ top: catPos }}
            >
              {activeCategory?.sub?.map((sub, i) => (
                <div
                  key={i}
                  onMouseEnter={(e) => {
                    setActiveSub(sub);

                    const rect = e.currentTarget.getBoundingClientRect();
                    const parentRect =
                      e.currentTarget.parentElement.getBoundingClientRect();

                    setSubPos(rect.top - parentRect.top);
                  }}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-blue-50 ${
                    activeSub?.name === sub.name && "bg-blue-100 text-blue-600"
                  }`}
                >
                  <span>{sub.name}</span>
                  {activeSub?.name === sub.name ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* LEVEL 3 */}
          {activeSub && (
            <div
              className="absolute left-[32rem]  bg-white text-black shadow-lg w-64 z-50 border"
              style={{ transform: `translateY(${subPos}px)` }}
            >
              {activeSub?.child?.map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <span className="cursor-pointer">OUR FEATURES</span>
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
          <div className="absolute left-50 -translate-x-1/2 mt-4 w-[900px] bg-[#0f172a] rounded-xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                  icon: "📄",
                  route: "/terms",
                },
                {
                  title: "Privacy Policy",
                  icon: "🔐",
                  route: "/privacy",
                },
                {
                  title: "Refund Policy",
                  icon: "🔄",
                  route: "/refund",
                },
                {
                  title: "Shipping Policy",
                  icon: "🚚",
                  route: "/shipping",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(item.route)}
                  className="cursor-pointer bg-[#020617] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-blue-500 hover:scale-[1.03] transition"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h4 className="text-gray-200 font-semibold">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-3 font-semibold tracking-wide text-white hover:text-blue-600 transition">
            SELLER CENTRAL
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
          <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[650px] bg-gray-200 rounded shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <ul className="flex justify-between px-9 py-6 text-base text-gray-900 ">
              <li
                onClick={() => navigate("/about")}
                className="cursor-pointer max-w-[150px] hover:text-blue-400 transition border-r"
              >
                What is Indolink Exports?
              </li>
              <li className="cursor-pointer max-w-[150px] hover:text-blue-400 transition border-r">
                Membership Program
              </li>
              <li
                onClick={() => navigate("/signup")}
                className="cursor-pointer max-w-[150px] hover:text-blue-400 transition"
              >
                My Account
              </li>
            </ul>
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
    </nav>
  );
}

export default Navbar;
