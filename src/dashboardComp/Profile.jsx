import React from "react";
import Sidebar from "./Sidebar";
import DNavbar from "./DNavbar";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col">
        <DNavbar />

        {/* PAGE CONTENT */}
        <div className="p-6 overflow-auto">
          <h1 className="text-2xl font-semibold mb-6">Settings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PROFILE SETTINGS */}
            <div className="bg-white rounded-lg shadow p-6">
              <CgProfile className="w-10 h-10" />
              <h2 className="font-semibold mb-4 flex">Profile Settings</h2>
              <div className="space-y-4">
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Full Name"
                />
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Email Address"
                />
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Phone Number"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                  Save Profile
                </button>
              </div>
            </div>

            {/* SECURITY SETTINGS */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-semibold mb-4">Security</h2>

              <div className="space-y-4">
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Current Password"
                />
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Confirm New Password"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* BUSINESS SETTINGS */}
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h2 className="font-semibold mb-4">Business Preferences</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded px-3 py-2">
                <option>Manufacturer</option>
                <option>Exporter</option>
                <option>Trader</option>
              </select>

              <select className="border rounded px-3 py-2">
                <option>Email Notifications</option>
                <option>SMS Notifications</option>
                <option>All Notifications</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
