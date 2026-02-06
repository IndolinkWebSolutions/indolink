import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import ayurveda from "../assets/category/ayurveda.avif";
import fashion from "../assets/category/fashion.jfif";
import ind from "../assets/category/industrial.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Food & Beverages",
    slug: "food-beverages",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    title: "Ayurveda & Herbal",
    slug: "ayurveda-herbal",
    image: ayurveda,
  },
  {
    title: "Personal Care & Hygiene",
    slug: "personal-care-hygiene",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  },
  {
    title: "Fashion & Apparels",
    slug: "fashion-apparels",
    image: fashion,
  },
  {
    title: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Industrial Supplies",
    slug: "industrial-supplies",
    image: ind,
  },
];

export default function FeaturedCategoriesSlider() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-14">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Featured Categories
      </h2>

      {/* Slider Wrapper */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={slideLeft}
          className="hidden md:flex items-center justify-center
            absolute -left-13 top-1/2 -translate-y-1/2 z-10
            bg-sky-200 shadow-md rounded-full p-3
            hover:bg-sky-300"
        >
          <FaChevronLeft className="text-sky-900" size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className="hidden md:flex items-center justify-center
            absolute -right-9 top-1/2 -translate-y-1/2 z-10
            bg-sky-200 shadow-md rounded-full p-3
            hover:bg-sky-300"
        >
          <FaChevronRight className="text-sky-900" size={24} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group min-w-[260px] bg-white border rounded-md
    shadow-sm hover:shadow-md transition relative"
            >
              {/* Image */}
              <Link to={`/category/${cat.slug}`}>
                <div className="p-4">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-40 w-full object-cover rounded"
                  />
                </div>
              </Link>

              {/* View More */}
              <div className="px-4 text-sm text-gray-400">View More</div>

              {/* Title */}
              <div className="px-4 py-3">
                <Link to={`/category/${cat.slug}`}>
                  <h3 className="text-sm font-semibold text-blue-600 hover:underline">
                    {cat.title}
                  </h3>
                </Link>
              </div>

              {/* Hover Buttons */}
              <div
                className="absolute bottom-2 right-1
      flex justify-center gap-3
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300"
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
