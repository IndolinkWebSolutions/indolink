import { useEffect, useState } from "react";
import CompanyProfile from "./CompanyProfile";
import Dleads from "./Dleads";
import { getSavedProducts } from "../api";
import { FaBoxOpen } from "react-icons/fa6";

const Dboard = () => {
  const [products, setProducts] = useState([]);

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await getSavedProducts();

      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Load Products
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="bg-gray-100 p-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: LATEST LEADS */}
          <Dleads />

          {/* RIGHT: COMPANY PROFILE */}
          <CompanyProfile />
        </div>

        {/* PRODUCTS SECTION */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="font-semibold mb-4 text-blue-400 flex text-center"><FaBoxOpen className="mr-2" size={22} /> Your Products</h2>

          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
              <tr>
                <th className="p-3">Product Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((p) => (
                  <tr key={p._id} className="border-t">
                    <td className="p-3 font-medium">{p.products_name}</td>
                     <td className="p-3 font-medium">{p.category}</td>

                    <td className="p-3 text-gray-600">{p.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-gray-500">
                    No Products Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Optional helper text like in screenshot */}
          <p className="text-sm text-gray-500 mt-4">
            Based on your consumed BuyLeads, these products are shown for direct
            enquiries.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dboard;
