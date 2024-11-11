"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  Link2,
  User,
  ClipboardList,
  BarChart,
  Settings,
} from "lucide-react";
import { getDefaultLoginRedirect } from "@/data/getUserId";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", url: "", logo: <Home className="w-6 h-6" /> },
  {
    name: "Url Shortner",
    url: "/url_short",
    logo: <Link2 className="w-6 h-6" />,
  },
  { name: "Bio", url: "/bio", logo: <User className="w-6 h-6" /> },
  { name: "Forms", url: "/forms", logo: <ClipboardList className="w-6 h-6" /> },
  {
    name: "Analytics",
    url: "/analytics",
    logo: <BarChart className="w-6 h-6" />,
  },
  {
    name: "Settings",
    url: "/settings",
    logo: <Settings className="w-6 h-6" />,
  },
];

const Sidebar = () => {
  const [log, setLog] = useState<string>();
  const pathname = usePathname();

  useEffect(() => {
    const handleIdUrl = async () => {
      const login = await getDefaultLoginRedirect();
      setLog(login);
    };

    handleIdUrl();
  }, []);

  return (
    <div className="w-80 bg-white text-gray-800 h-screen flex flex-col shadow-lg">
      <div className="flex-1 overflow-y-auto pt-4">
        {routes.map((val, i) => {
          const fullPath = `${log || ""}${val.url}`;
          const isActive = pathname === fullPath;

          return (
            <Link
              key={i}
              href={fullPath}
              className={`flex items-center p-4 text-lg transition-colors duration-200 ease-in-out rounded-md mx-3 my-2 ${
                isActive
                  ? "bg-gray-100 text-gray-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div
                className={`mr-3 ${
                  isActive ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {val.logo}
              </div>
              <span>{val.name}</span>
            </Link>
          );
        })}
      </div>
      <footer className="p-4 text-sm text-gray-500 text-center border-t border-gray-200">
        &copy; 2024 My App
      </footer>
    </div>
  );
};

export default Sidebar;
