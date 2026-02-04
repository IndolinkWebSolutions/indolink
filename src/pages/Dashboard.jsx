import React from "react";
import Sidebar from "../dashboardComp/Sidebar";
import DNavbar from "../dashboardComp/DNavbar";
import Dboard from "../dashboardComp/Dboard";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* LEFT SIDEBAR */}
       <div className="hidden md:block">
    <Sidebar />
  </div>
      {/* RIGHT CONTENT */}
      <div className="flex-1">
        {/* TOP NAVBAR */}
        <DNavbar />
        <Dboard/>
      </div>
    </div>
  );
};

export default Dashboard;
