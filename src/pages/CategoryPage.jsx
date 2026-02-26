import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCategories } from "../api/index";

const CategoryPage = () => {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await getCategories();

        // Find category by slug
        const selectedCategory = data.find((cat) => cat.slug === slug);

        setCategory(selectedCategory || null);
      } catch (error) {
        console.error("Category fetch error:", error);

        setError("Failed to load category");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex-grow px-6 py-8">
        {loading && (
          <div className="text-center py-20 text-lg font-medium">
            Loading...
          </div>
        )}

        {error && <div className="text-center text-red-500 py-20">{error}</div>}

        {!loading && !error && category && (
          <>
            {/* Category Info */}
            <div className="mb-8 bg-white shadow-sm rounded-xl p-6 border border-gray-200">
              <h1 className="text-3xl font-bold capitalize text-gray-800">
                {category.name}
              </h1>

              <div className="w-16 h-1 bg-sky-500 mt-3 rounded"></div>

              <p className="text-gray-500 mt-3 text-sm">
                Browse all products under {category.name}
              </p>
            </div>

            {/* SubCategories */}

            {category.subcategories?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.subcategories.map((sub) => (
                  <div
                    key={sub.slug}
                    className="relative rounded-xl overflow-hidden shadow-md group"
                  >
                    <Link to={`/subcategory/${sub.slug}`}>
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition"
                      />
                    </Link>

                    <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {sub.title}
                      </h3>
                      <div className="text-gray-200 grid grid-cols-2 text-sm font-semibold space-y-1">
                        {(sub.products || []).map((product) => (
                          <Link
                            key={product.slug}
                            to={`/products/${product.slug}`}
                            className="block hover:text-sky-500"
                          >
                            - {product.name}
                          </Link>
                        ))}
                      </div>
                      2
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-20">
                No subcategories found
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
