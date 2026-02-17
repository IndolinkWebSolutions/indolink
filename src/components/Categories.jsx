import React, { useEffect, useState } from "react";
import { getCategories } from "../api";
import {Link} from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await getCategories();
        setCategories(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Category fetch error:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!categories.length) {
    return <div className="p-10 text-center">No categories found</div>;
  }

  return (
    <div className="bg-white text-black py-10 px-6 space-y-16">
      {categories.map((category) => (
        <div key={category.slug}>
          {/* CATEGORY TITLE */}
          <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-9">
            {/* LEFT CATEGORY IMAGE */}
            <div className="lg:col-span-1 relative h-[340px] rounded-lg overflow-hidden bg-gray-200">
              {category.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
                <div className="text-white text-sm space-y-1">
                  {(category.subcategories || []).map((sub) => (
                    <p key={sub.slug}>{sub.title}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* SUBCATEGORIES */}
            {(category.subcategories || []).map((sub) => (
              <div
                key={sub.slug}
                className="border border-gray-300 rounded-lg p-4 flex justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold mb-2 flex items-center justify-between">
                    {sub.title}
                    <span className="text-sky-400 ml-2">➜</span>
                  </h3>

                  <ul className="space-y-1 text-sm text-sky-500">
                    {(sub.products || []).map((product) => (
                      <li key={product.slug}>
                        <Link
                          to={`/products/${product.slug}`}
                          className="hover:underline text-sky-500"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {sub.image && (
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-24 h-24 object-cover rounded"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;

// import React, { useEffect, useState } from "react";
// import api from "../api/api";

// const Categories = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await api.get("/product/categories/");
//         setData(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   if (loading) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   if (!data) {
//     return <div className="p-10 text-center">No data found</div>;
//   }

//   return (
//     <div className="bg-[#ffffff] text-black py-10 px-6">
//       {/* SECTION */}
//       <h2 className="text-2xl font-semibold mb-6">{data.name}</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-9">
//         {/* LEFT IMAGE CARD */}
//         <div
//           className="lg:col-span-1 relative h-[340px] rounded-lg overflow-hidden"
//           style={{
//             backgroundImage: `url(${data.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
//             <div className="space-y-2 text-white text-sm mb-2">
//               {data.items.map((item, i) => (
//                 <p key={i}>{item}</p>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CATEGORY GRID */}
//         {data.categories?.map((cat, index) => (
//           <div
//             key={index}
//             className="border border-gray-700 rounded-lg p-4 flex justify-between"
//           >
//             <div>
//               <h3 className="font-semibold mb-2 flex justify-between">
//                 {cat.title}
//                 <span className="text-sky-400">➜</span>
//               </h3>

//               <ul className="space-y-1 text-sm text-sky-400">
//                 {cat.items?.map((item, i) => (
//                   <li key={i} className="hover:underline cursor-pointer">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <img
//               src={cat.img}
//               alt={cat.title}
//               className="w-24 h-24 object-cover rounded"
//             />
//           </div>
//         ))}
//       </div>

//       {/* SECOND SECTION */}
//       <h2 className="text-2xl font-semibold mt-14 mb-6">
//         {data.foodProducts?.title}
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {data.foodProducts?.categories.map((cat, index) => (
//           <div
//             key={index}
//             className="border border-gray-700 rounded-lg p-4 flex justify-between"
//           >
//             <div>
//               <h3 className="font-semibold mb-2 flex justify-between">
//                 {cat.title}
//                 <span className="text-sky-400">➜</span>
//               </h3>

//               <ul className="space-y-1 text-sm text-sky-400">
//                 {cat.items.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             <img src={cat.img} className="w-24 h-24 rounded" />
//           </div>
//         ))}
//       </div>

//       {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Dry Fruits & Nuts",
//             items: [
//               "Almond",
//               "Dehydrated Fruits",
//               "Cashew Nuts",
//               "Edible Nuts",
//               "Cashew Nuts W400",
//             ],
//             img: "https://images.unsplash.com/photo-1604909053191-3b3b0d6e84b5",
//           },
//           {
//             title: "Tea & Coffee",
//             items: [
//               "Tea",
//               "Coffee",
//               "Instant Coffee",
//               "Green Tea",
//               "Tea Premix",
//             ],
//             img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//           },
//           {
//             title: "Food Grains & Cereals",
//             items: [
//               "Flours",
//               "Basmati Rice",
//               "Pulses",
//               "Non Basmati Rice",
//               "Broken Rice",
//             ],
//             img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
//           },
//         ].map((cat, index) => (
//           <div
//             key={index}
//             className="border border-gray-700 rounded-lg p-4 flex justify-between"
//           >
//             <div>
//               <h3 className="font-semibold mb-2 flex justify-between">
//                 {cat.title}
//                 <span className="text-sky-400">➜</span>
//               </h3>

//               <ul className="space-y-1 text-sm text-sky-400">
//                 {cat.items.map((item, i) => (
//                   <li key={i} className="hover:underline cursor-pointer">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <img
//               src={cat.img}
//               alt={cat.title}
//               className="w-24 h-24 object-cover rounded"
//             />
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default Categories;
