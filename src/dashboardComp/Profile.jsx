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
    mobile_number: "",
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
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <DNavbar />

        <div className="p-8 overflow-auto">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>

            <p className="text-gray-500">Manage your account settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PROFILE CARD */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <CgProfile className="text-sky-600 text-2xl" />
                </div>

                <div>
                  <h2 className="font-semibold text-lg">My Profile</h2>

                  <p className="text-gray-400 text-sm">
                    Your personal information
                  </p>
                </div>
              </div>

              {profile ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Full Name</p>

                    <p className="font-semibold text-gray-800">
                      {profile.name}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Email</p>

                    <p className="font-semibold text-gray-800">
                      {profile.email}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Phone Number</p>

                    <p className="font-semibold text-gray-800">
                      {profile.mobile_number || "Not Added"}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">Loading Profile...</p>
              )}
            </div>

            {/* SECURITY CARD */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="mb-5">
                <h2 className="font-semibold text-lg">Security</h2>

                <p className="text-gray-400 text-sm">Change your password</p>
              </div>

              <div className="space-y-4">
                <input
                  type="password"
                  name="current"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Current Password"
                />

                <input
                  type="password"
                  name="new"
                  value={passwords.new}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="New Password"
                />

                <input
                  type="password"
                  name="confirm"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Confirm Password"
                />

                <button
                  onClick={savePassword}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
