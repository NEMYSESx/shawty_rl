import { Navbar } from "@/components/landing-page/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dash_img from "@/assests/dash_image.png";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/landing-page/footer";
import { Input } from "@/components/ui/input";
import { accordionData } from "@/constant/landingPage";
import { ScrollSection } from "@/components/landing-page/scroll-section";
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
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 absolute top-48 border-black"></div>
        </div>
        <div className="flex flex-col">
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 border-black"></div>
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 border-black"></div>
          <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 border-black"></div>
        </div>
        <div className="flex flex-col relative">
          <div className="absolute top-32">
            <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 mb-6 border-black"></div>
            <div className="h-[350px] w-[450px] border bg-[#F6F6F6] rounded-xl m-3 border-black"></div>
          </div>
        </div>
      </div>
      <div className="w-[1455px] border h-[900px] bg-[#F6F6F6] rounded-2xl mt-36 flex flex-col items-center justify-center border-black">
        <h1 className="text-6xl font-semibold">Pricing</h1>
        <h2 className="text-xl text-[#8C8C8C] mt-5">
          Transparent and flexible options to suit your needs
        </h2>
        <div className="flex mt-3">
          <p className="m-2">Monthly</p>
          <Switch className="m-2" />
          <p className="m-2">Yearly</p>
          <div className="bg-[#CAF6C9] rounded-lg p-1 h-7 mt-1">
            <span className="">SAVE 20%</span>
          </div>
        </div>
        <div className="flex">
          <div className="pricing-card w-[360px] h-[630px] border rounded-xl m-5 bg-white p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h1 className="text-3xl">Free</h1>
            <h1 className="font-semibold text-7xl mt-3">$0</h1>
            <p className="text-[#8B8B8B]">per month</p>
            <ul className="mt-10">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="mt-4">
                  <div className="flex">
                    <Check className="text-[#3378FE]" />
                    <p className="ml-2">Create up to 3 custom forms</p>
                  </div>
                  <Separator className="mt-4" />
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8">
              <Button
                className="rounded-full w-48 h-14 text-xl"
                variant="outline"
              >
                Start Free
              </Button>
            </div>
          </div>

          <div className="pricing-card w-[360px] h-[630px] border rounded-xl m-5 bg-[#1E1E1E] p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="flex justify-between w-[300px]">
              <h1 className="text-3xl text-white">Pro</h1>
              <div className="bg-[#F8DAA3] h-6 w-[135px] pl-3 pt-1 rounded-sm font-semibold text-sm">
                MOST POPULAR
              </div>
            </div>
            <h1 className="font-semibold text-7xl mt-3 text-white">$15</h1>
            <p className="text-[#8B8B8B]">per month</p>
            <ul className="mt-10">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="mt-4">
                  <div className="flex">
                    <Check className="text-[#3378FE]" />
                    <p className="ml-2 text-white">
                      Create up to 3 custom forms
                    </p>
                  </div>
                  <Separator className="mt-4 text-white" />
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8">
              <Button
                className="rounded-full text-white bg-[#3378FE] border-none w-48 h-14 text-xl"
                variant="outline"
              >
                Upgrade Now
              </Button>
            </div>
          </div>

          <div className="pricing-card w-[360px] h-[630px] border rounded-xl m-5 bg-white p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h1 className="text-3xl">Enterprise</h1>
            <h1 className="font-semibold text-7xl mt-3">$50</h1>
            <p className="text-[#8B8B8B]">per month</p>
            <ul className="mt-10">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="mt-4">
                  <div className="flex">
                    <Check className="text-[#3378FE]" />
                    <p className="ml-2">Create up to 3 custom forms</p>
                  </div>
                  <Separator className="mt-4" />
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8">
              <Button
                className="rounded-full w-48 h-14 text-xl"
                variant="outline"
              >
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-6xl font-semibold mt-36">FAQ</h1>
      <h2 className="text-xl text-[#8B8B8B] mt-3">
        Got Questions? Check out our SaaS-tastic answers!
      </h2>
      <Accordion type="single" collapsible className="w-[1455px]">
        {accordionData.map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-3xl">{question}</AccordionTrigger>
            <AccordionContent className="text-2xl text-[#8B8B8B]">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h1 className="text-6xl font-semibold mt-24">Wall of Love</h1>
      <h2 className="text-xl text-[#919191] font-semibold mt-3">
        Discover what our Happy users have to say
      </h2>

      <ScrollSection direction="left" />
      <ScrollSection direction="right" />
      {/* <ScrollSection /> */}

      <div className="w-full h-[450px] bg-[#1E1E1E] flex flex-col items-center mt-28">
        <h1 className="text-8xl text-white mt-20">Ready to Start?</h1>
        <Button className="bg-[#3378FE] mt-14 rounded-full h-20 w-[300px] text-2xl">
          Get Started
        </Button>
      </div>
      <div className="h-[500px] border w-full rounded-b-3xl border-black flex flex-col items-center">
        <h1 className="text-6xl font-semibold mt-24">Join our NewsLetter</h1>
        <h2 className="text-xl text-[#919191]  mt-3">
          And stay in touch with us
        </h2>
        <div className="relative w-[500px]">
          <Input
            className="w-[500px] bg-[#F6F6F6] h-20 mt-20 rounded-full placeholder:text-xl placeholder:pl-5"
            placeholder="Enter your email"
          />
          <button className="absolute right-2 top-[90px] bg-blue-500 hover:bg-blue-600 text-white rounded-full h-16 px-5">
            <ArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
