import Topbar from "@/components/dashboard/topbar";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Topbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
