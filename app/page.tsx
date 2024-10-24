"use client";
// import "./globals.css";
import { Navbar } from "@/components/landing-page/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dash_img from "@/assests/dash_image.png";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import logo from "@/assests/SHAWTY_RL.png";
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
import { splitString } from "@/lib/split-char";
import { FeatureCard } from "@/components/landing-page/feature-card";
import {
  FileText,
  Link,
  BarChart2,
  UserCircle,
  Plug,
  LayoutDashboard,
} from "lucide-react";
import { useRecoilValue } from "recoil";
import { theme } from "@/store/atoms/dark-light";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const mode = useRecoilValue(theme);
  const head1 = "Shorten, Share, and Track -Your Complete Digital Toolkit";
  const headChar1 = splitString({ str: head1 });

  const head2 =
    "Create custom forms, shorten URLs, and analyze performance one intuitive platform  —all from one intuitive platform 🚀🌟.";

  const headChar2 = splitString({ str: head2 });

  const charVarients = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };
  return (
    <div className={cn("flex flex-col items-center", { "bg-[#272b30]": mode })}>
      <Navbar />
      <div
        className={cn(
          "h-[1455px] w-[1300px] border rounded-3xl bg-[#F6F6F6] border-[#8B8B8B] flex flex-col items-center",
          { "bg-[#1f2328] border-[#1f2328]": mode }
        )}
      >
        <motion.h1
          className={cn(
            "text-[64px] h-54 mt-5 font-bold w-[800px] text-center",
            { "text-white ": mode }
          )}
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
        >
          {headChar1.map((char, key) => (
            <motion.span
              key={key}
              transition={{ duration: 0.5 }}
              variants={charVarients}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-[#8C8C8C] text-xl w-[750px] text-center"
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
        >
          {headChar2.map((char, key) => (
            <motion.span
              key={key}
              transition={{ duration: 0.1 }}
              variants={charVarients}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <Button
          className="bg-[#3378FE] text-white rounded-full h-14 w-40 text-lg font-bold mt-5"
          onClick={handleLogin}
        >
          Get Started
        </Button>
        <Image
          className="mt-40 shadow-xl bg-none"
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
      <div></div>
      <h1
        className={cn("text-6xl font-semibold", { "text-white": mode })}
        id="features"
      >
        Features
      </h1>
      <h1 className="text-xl text-[#8C8C8C] mt-5">
        Simplify Your Workflow with Custom Forms, Shortened URLs, and Real-Time
        Data
      </h1>
      <div className="grid grid-cols-3 mt-20">
        <div className="relative">
          <FeatureCard
            className="absolute top-48"
            title="Create Beautiful, Custom Forms"
            body="Build fully customizable forms with ease—perfect for collecting information, feedback, and more, all tailored to your unique needs."
            logo={
              <FileText
                className={cn("h-12 w-12 m-5", { "text-white": mode })}
              />
            }
            logoClassName="mt-5"
          />
        </div>
        <div className="flex flex-col">
          <FeatureCard
            title="Shorten and Simplify Links"
            body="Generate clean, memorable short URLs that are easy to share, track, and manage for all your campaigns and content."
            logo={
              <Link
                className={cn("h-12 w-12 mt-3 ml-5", { "text-white": mode })}
              />
            }
          />
          <FeatureCard
            title="Track Engagement in Real Time"
            body="Get detailed insights into how your links and forms are performing with real-time data, including clicks, submissions, and traffic trends."
            logo={
              <BarChart2
                className={cn("h-12 w-12 m-5", { "text-white": mode })}
              />
            }
          />
          <FeatureCard
            title="All-in-One Bio Link"
            body="Create a customizable bio link page to showcase your most important links, forms, and content—all in one place."
            logo={
              <UserCircle
                className={cn("h-12 w-12 mt-0 ml-5", { "text-white": mode })}
              />
            }
          />
        </div>
        <div className="flex flex-col relative">
          <div className="absolute top-32">
            <FeatureCard
              className="mb-8"
              title="Integrate with Your Favorite Tools"
              body="Connect your forms, links, and analytics with third-party tools for seamless workflows that boost productivity and engagement."
              logo={
                <Plug
                  className={cn("h-12 w-12 mt-6 ml-4", { "text-white": mode })}
                />
              }
            />
          </div>
          <div className="absolute top-[500px]">
            <FeatureCard
              className="mt-8"
              title="Simple and Intuitive Design"
              body="Enjoy a clean, easy-to-use interface that makes managing your links, forms, and analytics a breeze—no technical skills required"
              logo={
                <LayoutDashboard
                  className={cn("h-12 w-12 mt-6 ml-4", { "text-white": mode })}
                />
              }
            />
          </div>
        </div>
      </div>
      <div
        className={cn(
          "w-[1300px] border h-[900px] bg-[#F6F6F6] rounded-2xl mt-36 flex flex-col items-center justify-center border-black",
          { "bg-[#1f2328]": mode }
        )}
      >
        <h1
          className={cn("text-6xl font-semibold", { "text-white": mode })}
          id="pricing"
        >
          Pricing
        </h1>
        <h2 className="text-xl text-[#8C8C8C] mt-5">
          Transparent and flexible options to suit your needs
        </h2>
        <div className="flex mt-3">
          <p className={cn("m-2", { "text-white": mode })}>Monthly</p>
          <Switch className="m-2" />
          <p className={cn("m-2", { "text-white": mode })}>Yearly</p>
          <div className="bg-[#CAF6C9] rounded-lg p-1 h-7 mt-1">
            <span className="">SAVE 20%</span>
          </div>
        </div>
        <div className="flex">
          <div
            className={cn(
              "pricing-card w-[360px] h-[630px] border rounded-xl m-5 bg-white p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg",
              { "bg-[#272b30] text-white": mode }
            )}
          >
            <h1 className="text-3xl">Free</h1>
            <h1 className="font-semibold text-7xl mt-3">$0</h1>
            <div className="relative">
              <p className="text-[#8B8B8B] mb-6 absolute -top-10">per month</p>
            </div>

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
                className={cn("rounded-full w-48 h-14 text-xl", {
                  "text-black": mode,
                })}
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
            <div className="relative">
              <p className="text-[#8B8B8B] mb-6 absolute -top-10">per month</p>
            </div>
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

          <div
            className={cn(
              "pricing-card w-[360px] h-[630px] border rounded-xl m-5 bg-white p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg",
              { "bg-[#272b30] text-white": mode }
            )}
          >
            <h1 className="text-3xl">Enterprise</h1>
            <h1 className="font-semibold text-7xl mt-3">$50</h1>
            <div className="relative">
              <p className="text-[#8B8B8B] mb-6 absolute -top-10">per month</p>
            </div>
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
                className={cn("rounded-full w-48 h-14 text-xl", {
                  "text-black": mode,
                })}
                variant="outline"
              >
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h1
        className={cn("text-6xl font-semibold mt-36", { "text-white": mode })}
        id="faq"
      >
        FAQ
      </h1>
      <h2 className="text-xl text-[#8B8B8B] mt-3">
        Got Questions? Check out our SaaS-tastic answers!
      </h2>
      <Accordion type="single" collapsible className="w-[1455px]">
        {accordionData.map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger
              className={cn("text-3xl", { "text-white": mode })}
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-2xl text-[#8B8B8B]">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h1
        className={cn("text-6xl font-semibold mt-24", { "text-white": mode })}
      >
        Wall of Love
      </h1>
      <h2 className="text-xl text-[#919191] font-semibold mt-3">
        Discover what our Happy users have to say
      </h2>

      <ScrollSection direction="left" />
      <ScrollSection direction="right" />

      <div
        className="w-full h-auto bg-[#1E1E1E] flex flex-col items-center mt-28"
        id="downloads"
      >
        <h1 className="text-8xl text-white mt-20">Ready to Start?</h1>
        <Button className="bg-[#3378FE] mt-14 rounded-full h-20 w-[300px] text-2xl">
          Get Started
        </Button>
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
      <div className="h-[500px] border w-full rounded-b-3xl border-black flex flex-col items-center">
        <h1
          className={cn("text-6xl font-semibold mt-24", { "text-white": mode })}
        >
          Join our NewsLetter
        </h1>
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
