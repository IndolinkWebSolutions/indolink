import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FRONTEND MOCK DATA
    const mockProduct = {
      _id: id,
      name: "Sample Product Name",
      price: 1999,
      description:
        "This is a demo product description. Backend is not connected yet.",
      image: "https://via.placeholder.com/500",
      category: "Electronics",
      brand: "Demo Brand",
      stock: 12,
    };

    setTimeout(() => {
      setProduct(mockProduct);
      setLoading(false);
    }, 400);
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="px-6 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* PRODUCT IMAGE */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] object-cover rounded-lg border"
            />
          </div>

          {/* PRODUCT INFO */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-semibold">Brand:</span> {product.brand}
              </p>
              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
               Enquiry Now
              </button>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
