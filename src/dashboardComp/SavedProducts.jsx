import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";
import { getSavedProducts } from "../api/index.js";
import AddProductModal from "../dashboardComp/AddProductModel.jsx";

const SavedProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await getSavedProducts();
      setProducts(res.data);
    } catch (err) {
      console.error(err || "Can't fetch the products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex bg-gray-100 h-screen ">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        <DNavbar />

        <div className="p-6 overflow-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold mb-6">Products</h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-sky-700 text-white px-4 py-2 font-bold"
            >
              + Add Product
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gradient-to-r from-sky-600 to-indigo-300 text-white">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {products.length > 0 ? (
                  products.map((p) => (
                    <tr key={p._id} className="border-b border-b-sky-100 hover:bg-blue-50">
                      <td className="p-4 font-medium">{p.products_name}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-600">
                          {p.category}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">{p.description}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-8 text-center text-gray-500">
                      No products found. Click <b>“Add Product”</b> to get
                      started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {showModal && (
            <AddProductModal
              onClose={() => setShowModal(false)}
              onAdded={fetchProducts}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedProducts;
