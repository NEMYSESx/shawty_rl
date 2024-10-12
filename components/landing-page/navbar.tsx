"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/SHAWTY_RL.png";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const routes = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#downloads", label: "Downloads" },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="w-screen">
      <div className="flex justify-between items-center">
        <div className="ml-[100px]">
          <Image height={150} width={150} src={logo} alt="logo" />
        </div>

        <div className="w-[500px]">
          <ul className="flex flex-row">
            {routes.map((route, index) => (
              <li key={index} className="m-7">
                <Link
                  href={route.href}
                  scroll={false}
                  className="hover:text-gray-300 text-xl"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 mr-[100px]">
          <div className="mr-10">
            <Switch
              className="relative scale-150"
              onCheckedChange={toggleDarkMode}
            >
              <span className="absolute inset-0 flex items-center justify-center">
                <Sun
                  className={`text-yellow-500 ${
                    isDarkMode ? "opacity-0" : "opacity-100"
                  } transition-opacity`}
                  size={20}
                />
                <Moon
                  className={`text-gray-800 ${
                    isDarkMode ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                  size={20}
                />
              </span>
            </Switch>
          </div>
          <Button
            variant="outline"
            className="border rounded-full w-[140px] h-14 text-[20px]"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};
