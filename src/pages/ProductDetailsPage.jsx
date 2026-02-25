import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProductDetails } from "../api/index";

const ProductDetailsPage = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductDetails(slug);

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div className="px-6 py-6 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <span className="mx-2">›</span>

          <span className="text-black font-medium">{product?.name}</span>
        </div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 bg-white shadow rounded-xl p-6">
          {/* Image */}
          <div>
            <img
              src={product?.image}
              alt="product"
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product?.name}</h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product?.description}
            </p>

            <button className="w-fit px-8 py-3 bg-sky-600 text-white rounded-lg text-lg hover:bg-sky-700 transition">
              Enquiry Now
            </button>
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Product Specifications
          </h2>

          <div className="bg-white shadow rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-semibold bg-gray-50">Product Name</td>

                  <td className="p-4">
                    {product?.details?.specifications?.product_name}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold bg-gray-50">Color</td>

                  <td className="p-4">
                    {product?.details?.specifications?.color}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold bg-gray-50">Form</td>

                  <td className="p-4">
                    {product?.details?.specifications?.form}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold bg-gray-50">Moisture</td>
                  <td className="p-4">
                    {product?.details?.specifications?.moisture}
                  </td>{" "}
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold bg-gray-50">Purity</td>
                  <td className="p-4">
                    {product?.details?.specifications?.purity}
                  </td>{" "}
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold bg-gray-50">Origin</td>
                  <td className="p-4">
                    {product?.details?.specifications?.origin}
                  </td>{" "}
                </tr>

                <tr>
                  <td className="p-4 font-semibold bg-gray-50">Packaging</td>
                  <td className="p-4">
                    {product?.details?.specifications?.packaging}
                  </td>{" "}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Product Features
          </h2>

          <div className="bg-white shadow rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {product?.features?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  <span className="text-green-600 text-xl">✔</span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;
