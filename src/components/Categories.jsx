import React from "react";

const Categories = () => {
  return (
    <div className="bg-[#ffffff] text-black py-10 px-6">
      {/* SECTION */}
      <h2 className="text-2xl font-semibold mb-6">Home Furnishings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-9">
        {/* LEFT IMAGE CARD */}
        <div
          className="lg:col-span-1 relative h-[340px] rounded-lg overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
            <div className="space-y-2 text-white text-sm mb-2">
              <p>Cushion & Cushion Covers</p>
              <p>Blinds, Wallpapers And Accessories</p>
              <p>Door Mats & Bath Mats</p>
              <p>PU Foam, Spring & Coir Mattresses</p>
            </div>

            <button className="bg-red-600 text-white text-sm px-4 py-2 rounded w-fit">
              View All
            </button>
          </div>
        </div>

        {/* RIGHT CATEGORY GRID */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD */}
          {[
            {
              title: "Blankets & Quilts",
              items: [
                "Blankets",
                "Quilts",
                "Dohar Set",
                "Thermal Blankets",
                "Woollen Blanket",
              ],
              img: "https://images.unsplash.com/photo-1582582494700-1f0d39a2d2d5",
            },
            {
              title: "Bed Linen & Bedspreads",
              items: [
                "Duvets & Comforters",
                "Comforter Set",
                "Bed Comforters",
                "Duvet Covers",
                "Bed Covers",
              ],
              img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6",
            },
            {
              title: "Carpets and Rugs",
              items: [
                "Wool Rugs",
                "Wool Carpets",
                "Hand Woven Rugs",
                "Floor Carpet",
                "Floor Rugs",
              ],
              img: "https://images.unsplash.com/photo-1616627989899-3dbd2f6d64f2",
            },
          ].map((cat, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 flex justify-between"
            >
              <div>
                <h3 className="font-semibold mb-2 flex items-center justify-between">
                  {cat.title}
                  <span className="text-sky-400">➜</span>
                </h3>

                <ul className="space-y-1 text-sm text-sky-400">
                  {cat.items.map((item, i) => (
                    <li key={i} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={cat.img}
                alt={cat.title}
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECOND SECTION */}
      <h2 className="text-2xl font-semibold mt-14 mb-6">
        Food Products & Beverages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Dry Fruits & Nuts",
            items: [
              "Almond",
              "Dehydrated Fruits",
              "Cashew Nuts",
              "Edible Nuts",
              "Cashew Nuts W400",
            ],
            img: "https://images.unsplash.com/photo-1604909053191-3b3b0d6e84b5",
          },
          {
            title: "Tea & Coffee",
            items: [
              "Tea",
              "Coffee",
              "Instant Coffee",
              "Green Tea",
              "Tea Premix",
            ],
            img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
          },
          {
            title: "Food Grains & Cereals",
            items: [
              "Flours",
              "Basmati Rice",
              "Pulses",
              "Non Basmati Rice",
              "Broken Rice",
            ],
            img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
          },
        ].map((cat, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold mb-2 flex justify-between">
                {cat.title}
                <span className="text-sky-400">➜</span>
              </h3>

              <ul className="space-y-1 text-sm text-sky-400">
                {cat.items.map((item, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={cat.img}
              alt={cat.title}
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
