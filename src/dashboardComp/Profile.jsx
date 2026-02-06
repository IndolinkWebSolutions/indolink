import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";
import { CgProfile } from "react-icons/cg";
import { getProfile, updateProfile, updatePassword } from "../api/index.js";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    notificationPref: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [loading, setLoading] = useState(false);

  // FETCH PROFILE
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      setProfile(res.data);
    } catch (err) {
      console.error("Profile fetch failed", err);
    }
  };

  // PROFILE CHANGE
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // PASSWORD CHANGE
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // SAVE PROFILE
  const saveProfile = async () => {
    setLoading(true);
    try {
      await updateProfile(profile);
      toast.success("Profile Updated Successfully.");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE PASSWORD
  const savePassword = async () => {
    if (passwords.new !== passwords.confirm) {
      return alert("Passwords do not match");
    }

    try {
      await updatePassword(passwords);
      toast.success("Password Updated.");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        <DNavbar />

        <div className="p-6 overflow-auto">
          <h1 className="text-2xl font-semibold mb-6">Settings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PROFILE SETTINGS */}
            <div className="bg-white rounded-lg shadow p-6">
              <CgProfile className="w-10 h-10 mb-2" />
              <h2 className="font-semibold mb-4">Profile Settings</h2>

              <div className="space-y-4">
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Full Name"
                />

                <input
                  name="email"
                  value={profile.email}
                  disabled
                  className="w-full border rounded px-3 py-2 bg-gray-100"
                  placeholder="Email Address"
                />

                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Phone Number"
                />

                <button
                  onClick={saveProfile}
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded"
                >
                  {loading ? "Saving..." : "Save Profile"}
                </button>
              </div>
            </div>

            {/* SECURITY */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-semibold mb-4">Security</h2>

              <div className="space-y-4">
                <input
                  type="password"
                  name="current"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Current Password"
                />

                <input
                  type="password"
                  name="new"
                  value={passwords.new}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="New Password"
                />

                <input
                  type="password"
                  name="confirm"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Confirm New Password"
                />

                <button
                  onClick={savePassword}
                  className="bg-red-600 text-white px-6 py-2 rounded"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* BUSINESS SETTINGS */}
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h2 className="font-semibold mb-4">Business Preferences</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="businessType"
                value={profile.businessType}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="">Select Business Type</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Exporter">Exporter</option>
                <option value="Trader">Trader</option>
              </select>

              <select
                name="notificationPref"
                value={profile.notificationPref}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="">Notification Preference</option>
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
                <option value="All">All</option>
              </select>
            </div>

            <button
              onClick={saveProfile}
              className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
