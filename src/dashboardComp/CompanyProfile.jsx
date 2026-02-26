import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addCompanyProfile, getCompanyProfile } from "../api/index.js";
import { Building } from "lucide-react";

const CompanyProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const [company, setCompany] = useState({
    company_name: "",
    address: "",
    company_gst: "",
    company_iec: "",
    business_type: "Manufacturer",
  });

  const [savedData, setSavedData] = useState(null);
  const [loading, setLoading] = useState(true);

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

      toast.success("Company Added ✅");

      setShowModal(false);

      fetchCompany();
    } catch {
      toast.error("Error ❌");
    }
  };

  // Fetch Company
  const fetchCompany = async () => {
    try {
      const res = await getCompanyProfile();

      const data = res?.data;

      // If no real company
      if (!data || !data.company_name) {
        setSavedData(null);
        return;
      }

      setSavedData(data);
    } catch (error) {
      // No company found
      setSavedData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <div className="bg-white w-[450px] rounded-lg shadow p-6">
      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <div className="flex">
          <Building className="mr-2" />

          <h2 className="font-bold">Company Profile</h2>
        </div>

        {/* Add Button */}

{!savedData?.company_name && !loading && (          <button
            onClick={() => setShowModal(true)}
            className="bg-sky-600 text-white px-3 py-2 rounded-lg"
          >
            + Add Company
          </button>
        )}
      </div>

      {/* SHOW COMPANY */}

      {savedData?.company_name && (
        <div className="bg-gray-50 rounded-xl p-5 space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span>Company</span>

            <span className="font-semibold">{savedData.company_name}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Address</span>

            <span className="font-semibold">{savedData.address}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>GST</span>

            <span className="font-semibold">{savedData.company_gst}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>IEC</span>

            <span className="font-semibold">{savedData.company_iec}</span>
          </div>

          <div className="flex justify-between">
            <span>Type</span>

            <span className="bg-sky-100 px-3 py-1 rounded">
              {savedData.business_type}
            </span>
          </div>
        </div>
      )}

      {/* IF NO COMPANY */}

      {!savedData && !loading && (
        <div className="text-center text-gray-500 mt-10">
          No Company Profile Found
          <br />
          Click Add Company
        </div>
      )}

      {/* MODAL */}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="font-bold mb-4">Add Company Profile</h2>

            <div className="space-y-3">
              <input
                name="company_name"
                value={company.company_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Company Name"
              />

              <input
                name="address"
                value={company.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Address"
              />

              <div className="flex gap-3">
                <input
                  name="company_gst"
                  value={company.company_gst}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="GST"
                />

                <input
                  name="company_iec"
                  value={company.company_iec}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="IEC"
                />
              </div>

              <select
                name="business_type"
                value={company.business_type}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option>Manufacturer</option>

                <option>Trader</option>

                <option>Exporter</option>
              </select>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-sky-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
