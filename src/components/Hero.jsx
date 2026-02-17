import { useEffect, useState } from "react";
import pic1 from "../assets/p.webp";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
import Sidebar from "./Sidebar";

const images = [pic1, pic2, pic3];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 px-4 mt-4">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Hero Slider */}
      <div className="relative flex-1 h-[400px] md:h-[580px] overflow-hidden rounded-md shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Optional Text Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold">
          Welcome to Our Store
        </div>
      </div>
    </div>
  );
}

export default Hero;
