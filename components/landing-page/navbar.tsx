"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/SHAWTY_RL.png";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import DarkModeToggle from "./toggle";
import { cn } from "@/lib/utils";
import { useRecoilValue } from "recoil";
import { theme } from "@/store/atoms/dark-light";

export const Navbar = () => {
  const routes = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#downloads", label: "Downloads" },
  ];

  const mode = useRecoilValue(theme);
  const router = useRouter();

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
                <Link href={route.href} className="hover:text-gray-300 text-xl">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <DarkModeToggle />
        <div className="relative">
          <Button
            variant="outline"
            className={cn(
              "border rounded-full w-[140px] h-14 text-[20px] absolute right-[125px] -top-7",
              { "bg-[#1f2328] text-white border-[#1f2328]": mode }
            )}
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};
