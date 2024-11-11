import React from "react";
import { UserButton } from "@/components/auth/user-button";
import Image from "next/image";
import logo from "@/assests/SHAWTY_RL.png";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const Topbar = () => {
  return (
    <nav className="h-20 w-full flex items-center justify-between bg-white px-6">
      <Image src={logo} alt="logo" height={130} width={130} />
      <div className="relative">
        <Input className="w-96 absolute -right-10 -bottom-5 rounded-full h-11" />
      </div>
      <div className="flex items-center space-x-4">
        <Button className="bg-[#3378FE] flex items-center space-x-2 h-10">
          <Plus className="w-12 h-12" />
          <span className="ml-0">Create</span>
        </Button>
        <UserButton />
      </div>
    </nav>
  );
};

export default Topbar;
