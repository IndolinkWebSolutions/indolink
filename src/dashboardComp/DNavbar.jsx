import React from "react";

const DNavbar = () => {
  const userName = "Sandhya"; // later you can get this from API / Redux

  return (
    <div className="flex justify-between items-center h-[90px] px-6 border-b border-gray-200">
      <h1 className="text-3xl font-semibold">Manage Your Profile</h1>

      {/* Profile Initial */}
      <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-lg cursor-pointer">
        {userName.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

export default DNavbar;
