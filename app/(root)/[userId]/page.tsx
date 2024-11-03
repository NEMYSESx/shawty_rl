"use client";

import React from "react";

import Topbar from "@/components/dashboard/topbar";
import Sidebar from "@/components/dashboard/sidebar";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
