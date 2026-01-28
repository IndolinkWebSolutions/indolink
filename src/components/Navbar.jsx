import { useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaMobileAlt,
  FaTshirt,
} from "react-icons/fa";

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
              className="absolute left-64 bg-white text-black shadow-lg w-64 z-50 border"
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
              className="absolute left-[32rem] bg-white text-black shadow-lg w-64 z-50 border"
              style={{ top: subPos }}
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
        <span className="cursor-pointer">TRADE ASSURANCE</span>
        <span className="cursor-pointer">SELLER CENTRAL</span>
        <span className="cursor-pointer">HELP CENTER</span>
        <span className="cursor-pointer">BECOME A SUPPLIER</span>
        <span className="cursor-pointer">POST YOUR NEEDS</span>
      </div>
    </nav>
  );
}

export default Navbar;
