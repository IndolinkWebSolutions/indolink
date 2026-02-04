import { useEffect, useState } from "react";
import pic1 from "../assets/p.webp";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";

const images = [pic1, pic2, pic3];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:h-[580px] h-[400px] md:mt-0 mt-[10px] overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Banner"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

export default Hero;
