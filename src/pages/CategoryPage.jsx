import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CategoryPage = () => {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MOCK DATA (frontend testing only)
    const mockData = {
      category: {
        name: slug.replace("-", " ").toUpperCase(),
        description: "This is a demo category page (frontend only).",
      },
      products: [
        {
          _id: "1",
          name: "Sample Product 1",
          price: 999,
          image: "https://via.placeholder.com/300",
        },
        {
          _id: "2",
          name: "Sample Product 2",
          price: 1499,
          image: "https://via.placeholder.com/300",
        },
        {
          _id: "3",
          name: "Sample Product 3",
          price: 1999,
          image: "https://via.placeholder.com/300",
        },
        {
          _id: "4",
          name: "Sample Product 4",
          price: 2499,
          image: "https://via.placeholder.com/300",
        },
      ],
    };

    setTimeout(() => {
      setCategory(mockData.category);
      setProducts(mockData.products);
      setLoading(false);
    }, 500); // fake loading
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="px-6 py-8">
        {/* CATEGORY INFO */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 hover:shadow-md transition"
            >
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} />
              

              <h3 className="font-semibold">{product.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
