import { useEffect, useState } from "react";
import { FaChevronRight, FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

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
            <p className="text-sky-500 text-lg"></p>{" "}
            <Link to={`/category/${cat.slug}`}>
              <span className="text-sm font-medium md:-ml-12 active:bg-blue-200">
                {cat.name}
              </span>
            </Link>
            <FaChevronRight className="text-gray-400 text-sm" />
          </div>
        ))}
      </div>

      {/* MEGA MENU */}
      {activeCategory && (
        <div className="absolute left-full top-0 h-full w-[750px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl rounded-r-xl p-6 grid grid-cols-3 gap-6 z-50">
          {/* COLUMN 1 – Sub Categories */}
          <div className="border-r border-dotted pr-4">
            <h4 className="text-gray-100 text-xs uppercase tracking-wide mb-4">
              Sub Categories
            </h4>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-2">
              {(activeCategory.subcategories || []).map((sub) => (
                <div
                  key={sub.slug}
                  onMouseEnter={() => setActiveSub(sub)}
                  className={`px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-all duration-200
            ${
              activeSub?.slug === sub.slug
                ? "bg-sky-100 text-sky-600 border-l-4 border-sky-500"
                : "hover:bg-gray-100 text-gray-200"
            }`}
                >
                  {sub.title}
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
              {(activeSub?.products || []).map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="text-gray-200 hover:text-sky-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
