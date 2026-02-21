import React from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    username: "Export Manager, Mumbai",
    review:
      "Indolink Exports has been a reliable sourcing partner for our business. Their product quality, timely shipments, and professional communication make international trade smooth and stress-free.",
  },
  {
    name: "Priya Mehta",
    username: "Wholesale Buyer, Delhi",
    review:
      "We have consistently received premium quality goods at competitive prices. The team ensures proper packaging and documentation, which makes importing from India very convenient.",
  },
  {
    name: "Arjun Reddy",
    username: "Retail Distributor, Hyderabad",
    review:
      "Their transparency and commitment to quality truly stand out. Indolink Exports delivers exactly what they promise. Highly recommended for anyone looking for trusted Indian suppliers.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full border">
          Testimonials
        </span>

        <h2 className="text-4xl font-bold mb-3">Our trusted clients</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          Our mission is to drive progress and enhance the lives of our
          customers by delivering superior products and services that exceed
          expectations.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1000px]">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`
                bg-white rounded-2xl p-8 shadow-lg
                transition-all duration-500
                hover:rotate-[-9deg] hover:-translate-y-4
                hover:shadow-2xl
                ${item.featured ? "lg:-rotate-3 scale-105" : ""}
              `}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-sky-600 flex items-center justify-center text-white text-xl font-bold">
                  {item.name.charAt(0)}
                </div>
              </div>

              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{item.username}</p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.review}
              </p>

              <div className="text-gray-300 text-3xl">“</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
