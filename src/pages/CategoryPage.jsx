import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCategoryDetails } from "../api";

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

      const { data } = await getCategoryDetails(slug);

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

        {error && (
          <div className="text-center text-red-500 py-20">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Category Info */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold capitalize">
                {category?.name}
              </h1>
              <p className="text-gray-600 mt-2">
                {category?.description}
              </p>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white border rounded-xl p-4 hover:shadow-lg transition duration-300"
                  >
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md"
                      />

                      <h3 className="mt-3 font-semibold text-gray-800">
                        {product.name}
                      </h3>

                      <p className="text-sky-600 font-bold mt-1">
                        ₹{product.price}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-20">
                No products found in this category.
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
