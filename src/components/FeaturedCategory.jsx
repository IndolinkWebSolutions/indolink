import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

export default function FeaturedCategory() {
  const [categories, setCategories] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Category fetch error:", error);
      setCategories([]);
    }
  };

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-14">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Featured Categories
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={slideLeft}
          className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10
          bg-sky-200 shadow-md rounded-full p-3 hover:bg-sky-300"
        >
          <FaChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10
          bg-sky-200 shadow-md rounded-full p-3 hover:bg-sky-300"
        >
          <FaChevronRight size={22} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]"
        >
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="group min-w-[260px] bg-white border rounded-md
              shadow-sm hover:shadow-md transition relative"
            >
              {/* Image */}
              <Link to={`/category/${cat.slug}`}>
                <div className="p-4">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-40 w-full object-cover rounded"
                  />
                </div>
              </Link>

              {/* Title */}
              <div className="px-4 py-3">
                <Link to={`/category/${cat.slug}`}>
                  <h3 className="text-sm font-semibold text-blue-600 hover:underline">
                    {cat.name}
                  </h3>
                </Link>
              </div>

              {/* Hover Buttons */}
              <div
                className="absolute bottom-2 right-2
                flex gap-3 opacity-0
                group-hover:opacity-100
                transition duration-300"
              >
                <Link to={`/category/${cat.slug}`}>
                  <button className="text-xs px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                    MORE
                  </button>
                </Link>

                <Link to={`/category/${cat.slug}`}>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <FaEye />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
