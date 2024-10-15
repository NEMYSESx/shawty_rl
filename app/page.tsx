import { Navbar } from "@/components/landing-page/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dash_img from "@/assests/dash_image.png";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="h-[1455px] w-[1455px] border rounded-3xl bg-[#F6F6F6] border-[#8B8B8B] flex flex-col items-center">
        <h1 className="text-[64px] h-54 mt-5 font-bold">
          Shorten, Share, and Track
        </h1>
        <h1 className="font-bold text-[64px]">-Your Complete Digital </h1>
        <h1 className="font-bold text-[64px]">Toolkit</h1>
        <h2 className="text-[#8C8C8C] text-xl">
          Create custom forms, shorten URLs, and analyze performance one
          intuitive platform.
        </h2>
        <h2 className="text-[#8C8C8C] text-xl">
          —all from one intuitive platform.
        </h2>
        <Button className="bg-[#3378FE] text-white rounded-full h-14 w-40 text-lg font-bold mt-5">
          Get Started
        </Button>
        <Image
          className=" mt-40"
          src={dash_img}
          alt="ui img"
          width={1300}
          height={1000}
        />
      </div>
      <h2 className="text-xl text-[#919191] font-bold mt-12">
        Trusted By Leading People
      </h2>
      <div className="h-96 border"></div>
      <h1 className="text-6xl font-semibold">Features</h1>
      <h1 className="text-xl text-[#8C8C8C] mt-5">
        Simplify Your Workflow with Custom Forms, Shortened URLs, and Real-Time
        Data
      </h1>
      <div className="grid grid-cols-3 mt-36">
        <div className="relative">
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 absolute top-48"></div>
        </div>
        <div className="flex flex-col">
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3"></div>
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3"></div>
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3"></div>
        </div>
        <div className="flex flex-col relative">
          <div className="absolute top-32">
            <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 mb-6"></div>
            <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3"></div>
          </div>
        </div>
      </div>
      <div className="w-[1455px] border h-[1604px] bg-[#F6F6F6] rounded-2xl mt-36">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className="text-6xl font-semibold mt-36">FAQ</h1>
      <h2 className="text-2xl text-[#8B8B8B]">
        Got Questions? Check out our SaaS-tastic answers!
      </h2>
    </div>
  );
}
