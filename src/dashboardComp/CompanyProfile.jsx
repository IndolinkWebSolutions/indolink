import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addCompanyProfile, getCompanyProfile } from "../api/index.js";
import { Building } from "lucide-react";

const CompanyProfile = () => {
  const [company, setCompany] = useState({
    company_name: "",
    address: "",
    company_gst: "",
    company_iec: "",
    business_type: "Manufacturer",
  });

  const [savedData, setSavedData] = useState(null);

  // Input Change
  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  // Save Profile
  const handleSubmit = async () => {
    try {
      await addCompanyProfile(company);

      toast.success("Company Profile Saved ✅");

      fetchCompany();
    } catch (error) {
      toast.error("Error ❌");
    }
  };

  // Load Company Profile
  useEffect(() => {
    fetchCompany();
  }, []);

 const fetchCompany = async () => {
  try {
    const res = await getCompanyProfile();

    if (res.data) {
      setSavedData(res.data);
    } else {
      setSavedData(null);
    }
  } catch (error) {
    setSavedData(null);
  }
};

  return (
    <div className="bg-white w-[450px] rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Building className="text-black mr-2" />

        <h2 className="font-bold text-md">Company Profile</h2>
      </div>

      {/* Show Data */}

      {savedData ? (
        <div className="bg-gray-50 rounded-xl p-5 shadow-sm space-y-4">
          {/* Company Name */}
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">Company Name</span>

            <span className="font-semibold text-gray-800">
              {savedData.company_name}
            </span>
          </div>

          {/* Address */}
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">Address</span>

            <span className="font-semibold text-gray-800">
              {savedData.address}
            </span>
          </div>

          {/* GST */}
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">GST Number</span>

            <span className="font-semibold text-gray-800">
              {savedData.company_gst}
            </span>
          </div>

          {/* IEC */}
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">IEC Code</span>

            <span className="font-semibold text-gray-800">
              {savedData.company_iec}
            </span>
          </div>

          {/* Business Type */}
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Business Type</span>

            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-sm font-semibold">
              {savedData.business_type}
            </span>
          </div>
        </div>
      ) : (
        /* Form */

        <div className="space-y-4">
          <input
            name="company_name"
            value={company.company_name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Company Name"
          />

          <input
            name="address"
            value={company.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Address"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="company_gst"
              value={company.company_gst}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="GST"
            />

            <input
              name="company_iec"
              value={company.company_iec}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="IEC"
            />
          </div>

          <select
            name="business_type"
            value={company.business_type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>Manufacturer</option>

            <option>Trader</option>

            <option>Exporter</option>
          </select>

          <button
            onClick={handleSubmit}
            className="bg-sky-600 text-white px-6 py-2 rounded"
          >
            Save Details
          </button>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
