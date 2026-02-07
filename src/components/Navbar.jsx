import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import file from "../assets/file.png";
import shield from "../assets/shield.png";
import refund from "../assets/refund.png";
import box from "../assets/box.png";

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

  return (
    <nav className="w-full hidden md:flex bg-sky-500 text-white px-6 relative">
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

          {open && (
            <div className="absolute left-0 top-full bg-[#0f172a] shadow-xl z-50 w-[900px] p-4 grid grid-cols-3 gap-4">
              {/* COLUMN 1 – CATEGORY */}
              <div className="border-r">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => {
                      setActiveCategory(cat);
                      setActiveSub(null);
                    }}
                    className={`px-4 py-3 cursor-pointer flex justify-between hover:bg-blue-50 ${
                      activeCategory?.name === cat.name &&
                      "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {cat.name}
                    <FaChevronRight />
                  </div>
                ))}
              </div>

              {/* COLUMN 2 – SUB CATEGORY */}
              <div className="border-r">
                {activeCategory?.sub?.map((sub, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveSub(sub)}
                    className={`px-4 py-3 cursor-pointer hover:bg-blue-50 ${
                      activeSub?.name === sub.name &&
                      "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>

              {/* COLUMN 3 – PRODUCTS */}
              <div className="max-h-[350px] overflow-y-auto">
                {activeSub?.child?.map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-600"
                  >
                    {item}
                  </div>
                ))}

                {!activeSub && (
                  <p className="text-gray-400 text-sm px-4">
                    Select a sub-category
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        {/* <span className="cursor-pointer">OUR FEATURES</span> */}
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
          <div className="absolute left-80 -translate-x-1/2 mt-4 w-[900px] bg-[#0f172a] rounded-xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
          <span className="cursor-pointer flex items-center gap-3 font-semibold  tracking-wide text-white transition">
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
          <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[650px]  bg-[#0f172a] rounded shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <ul className="flex justify-between px-9 py-6 text-base text-gray-200 ">
              <li
                onClick={() => navigate("/about")}
                className="cursor-pointer max-w-[150px] hover:text-blue-400 transition border-r"
              >
                What is Indolink Exports?
              </li>
              <li
                onClick={() => navigate("/membership")}
                className="cursor-pointer max-w-[150px] hover:text-blue-400 transition border-r"
              >
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
