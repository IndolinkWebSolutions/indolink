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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);

        const { data } = await getCategories(slug);

        setCategory(data.category);
        setProducts(data.products);
        setError(null);
      } catch (err) {
        setError("Failed to load category");
        setCategory(null);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategoryProducts();
    }
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow px-6 py-8">
        {loading && (
          <div className="text-center py-20 text-lg font-medium">
            Loading products...
          </div>
        )}

        {error && <div className="text-center text-red-500 py-20">{error}</div>}

        {!loading && !error && (
          <>
            {/* Category Info */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold capitalize">
                {category?.name}
              </h1>
              <p className="text-gray-600 mt-2">{category?.description}</p>
            </div>

            {/* SubCategories Grid */}

            {category?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.slice(0, 8).map((sub) => (
                  <div
                    key={sub.slug}
                    className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
                  >
                    {/* Image */}

                    <Link to={`/subcategory/${sub.slug}`}>
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                      />
                    </Link>

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {sub.title}
                      </h3>

                      {/* Product Names */}

                      <div className="text-white text-sm space-y-1">
                        {(sub.products || []).slice(0, 5).map((product) => (
                          <p key={product.slug}>• {product.name}</p>
                        ))}
                      </div>
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

      {/* Footer Always Bottom */}
      <Footer />
    </div>
  );
};

export default CategoryPage;
