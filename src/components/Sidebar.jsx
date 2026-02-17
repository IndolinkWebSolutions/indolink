import { useState } from "react";
import {
  FaCapsules,
  FaChevronRight,
  FaLaptop,
  FaLeaf,
  FaThLarge,
  FaTshirt,
  FaUtensils,
  FaTruck,
  FaBoxOpen,
  FaIndustry,
  FaHospital,
  FaPumpSoap,
  FaHardHat,
  FaCouch,
} from "react-icons/fa";

const categories = [
  {
    name: "Food Product & Beverage",
    icon: <FaUtensils />,
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
        child: ["Black Tea", "Green Tea", "Masala Tea", "PapenMint", "Oolong"],
      },
    ],
  },
  {
    name: "Agricultures",
    icon: <FaLeaf />,
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
    icon: <FaTshirt />,
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
    icon: <FaCapsules />,
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
    icon: <FaLaptop />,
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
    name: "Transportation & Logistics",
    icon: <FaTruck />,
    sub: [
      {
        name: "Freight & Shipping",
        child: ["Air Freight", "Sea Freight", "Road Transport", "Rail Cargo"],
      },
      {
        name: "Logistics Services",
        child: [
          "Warehouse Services",
          "Cold Storage",
          "Supply Chain Management",
        ],
      },
    ],
  },

  {
    name: "Packaging Materials",
    icon: <FaBoxOpen />,
    sub: [
      {
        name: "Industrial Packaging",
        child: [
          "Corrugated Boxes",
          "Wooden Pallets",
          "Stretch Film",
          "Bubble Wrap",
        ],
      },
      {
        name: "Food Packaging",
        child: ["Paper Containers", "Plastic Containers", "Foil Wraps"],
      },
    ],
  },

  {
    name: "Machinery & Equipment",
    icon: <FaIndustry />,
    sub: [
      {
        name: "Industrial Machinery",
        child: ["CNC Machines", "Lathe Machines", "Drilling Machines"],
      },
      {
        name: "Construction Equipment",
        child: ["Concrete Mixers", "Excavators", "Crane Machines"],
      },
    ],
  },

  {
    name: "Medical Equipment",
    icon: <FaHospital />,
    sub: [
      {
        name: "Hospital Equipment",
        child: ["Hospital Beds", "Wheelchairs", "Surgical Instruments"],
      },
      {
        name: "Diagnostic Equipment",
        child: ["X-Ray Machines", "ECG Machines", "Ultrasound Machines"],
      },
    ],
  },

  {
    name: "Personal Care & Cleaning",
    icon: <FaPumpSoap />,
    sub: [
      {
        name: "Personal Care",
        child: ["Shampoo", "Soap", "Face Wash", "Toothpaste"],
      },
      {
        name: "Cleaning Supplies",
        child: ["Floor Cleaners", "Disinfectants", "Detergents"],
      },
    ],
  },

  {
    name: "Safety Products",
    icon: <FaHardHat />,
    sub: [
      {
        name: "Industrial Safety",
        child: [
          "Safety Helmets",
          "Safety Gloves",
          "Safety Shoes",
          "Reflective Jackets",
        ],
      },
      {
        name: "Fire Safety",
        child: ["Fire Extinguishers", "Smoke Detectors"],
      },
    ],
  },

  {
    name: "Home Furniture",
    icon: <FaCouch />,
    sub: [
      {
        name: "Living Room",
        child: ["Sofa Sets", "Center Tables", "TV Units"],
      },
      {
        name: "Bedroom Furniture",
        child: ["Beds", "Wardrobes", "Dressing Tables"],
      },
    ],
  },
];

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  return (
    <div
      className="relative w-72 bg-white shadow-lg"
      onMouseLeave={() => {
        setActiveCategory(null);
        setActiveSub(null);
      }}
    >
      {/* Header */}
      <div className="bg-sky-600 text-white px-4 py-3 flex items-center font-semibold text-lg rounded-t-md">
        <FaThLarge className="mr-4" /> <p>Top Categories</p>
      </div>

      {/* Category List */}
      <div className="divide-y">
        {categories.map((cat, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveCategory(cat)}
            className="flex justify-between items-center px-2 py-3 cursor-pointer hover:bg-blue-100"
          >
            <p className="text-sky-500">{cat.icon}</p>
            <span className="text-sm font-medium md:-ml-12 active:bg-blue-200">
              {cat.name}
            </span>
            <FaChevronRight className="text-gray-400 text-sm" />
          </div>
        ))}
      </div>

      {/* MEGA MENU */}
      {activeCategory && (
        <div className="absolute left-full top-0 h-full w-[750px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl rounded-r-xl p-6 grid grid-cols-3 gap-6 z-50">
          {/* COLUMN 1 – Sub Categories */}
          <div className="border-r pr-4">
            <h4 className="text-gray-100 text-xs uppercase tracking-wide mb-4">
              Sub Categories
            </h4>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-2">
              {activeCategory.sub.map((sub, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveSub(sub)}
                  className={`px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-all duration-200
            ${
              activeSub?.name === sub.name
                ? "bg-sky-100 text-sky-600 border-l-4 border-sky-500"
                : "hover:bg-gray-100 text-gray-200 py-4"
            }`}
                >
                  {sub.name}
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 – Products */}
          <div className="col-span-2 pl-4">
            <h4 className="text-gray-100 text-xs uppercase tracking-wide mb-4">
              Products
            </h4>

            <div className="grid grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2">
              {activeSub?.child?.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 bg-gray-50 rounded-md text-sm cursor-pointer 
            hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border border-transparent hover:border-sky-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
