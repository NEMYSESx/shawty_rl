"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const routes = [
  {
    name: "Home",
    url: `/`,
    logo: <Home />,
  },
  { name: "Url Shortner", url: "/url_short", logo: <Home /> },
  { name: "Bio", url: "/bio", logo: <Home /> },
  { name: "Forms", url: "/forms", logo: <Home /> },
  { name: "Analytics", url: "/analytics", logo: <Home /> },
  { name: "Settings", url: "/settings", logo: <Home /> },
];
const Sidebar = () => {
  return (
    <div className="w-80 bg-white h-screen">
      {routes.map((val, i) => (
        <div key={i} className="flex items-center p-2 hover:bg-gray-100">
          {val.logo}
          <Link href={val.url} className="ml-2">
            {val.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
