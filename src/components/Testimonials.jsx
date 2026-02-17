import React from "react";

const testimonials = [
  {
    name: "Christine Jackson",
    username: "Import Manager, UK",
    img: "https://i.pravatar.cc/100?img=32",
    review:
      "Indolink Exports has been a reliable sourcing partner for our business. Their product quality, timely shipments, and professional communication make international trade smooth and stress-free.",
  },
  {
    name: "Yasmine Garcia",
    username: "Wholesale Buyer, UAE",
    img: "https://i.pravatar.cc/100?img=44",
    review:
      "We have consistently received premium quality goods at competitive prices. The team ensures proper packaging and documentation, which makes importing from India very convenient.",
  },
  {
    name: "Sakura Palastri",
    username: "Retail Distributor, Italy",
    img: "https://i.pravatar.cc/100?img=47",
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
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>

              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{item.username}</p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                If you’re not using testimonials, you’re missing out on a golden
                opportunity to turn visitors and potential buyers into actual
                customers.
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
