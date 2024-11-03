import React from "react";
import { UserButton } from "@/components/auth/user-button";
import Image from "next/image";
import logo from "@/assests/SHAWTY_RL.png";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
const Topbar = () => {
  return (
    <nav className=" h-20 w-full flex items-center justify-between bg-white">
      <Image src={logo} alt="logo" height={130} width={130} />
      <div className="relative">
        <Input className="w-96 absolute -right-10 -bottom-5 rounded-full h-11" />
      </div>
      <div className=" border w-72">
        <Button className="mr-10">
          <Plus />
          Create
        </Button>
        <UserButton className="mr-5" />
      </div>
    </nav>
  );
};

export default Topbar;
