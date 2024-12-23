"use client";

import { Button } from "@/components/ui/button";
import { ClipboardType, GitGraph, Link, Plus, User } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { getDefaultLoginRedirect } from "@/data/getUserId";

const Dashboard = () => {
  const router = useRouter();

  //getting error in this because it will also return promise even tho we resolving it with await but we again returning it due to which it gets wrapped around an another promise
  // const getId = async () => {
  //   const id = await getDefaultLoginRedirect();
  //   return id;
  // };

  //we could have used something like this
  // const getId = async () => {
  //   const { getDefaultLoginRedirect } = await import('@/data/getUserId');
  //   return getDefaultLoginRedirect();
  // };
  return (
    <div>
      <div className="m-5">
        <div className="flex">
          <div>
            <div className="h-[255px] w-[715px] bg-white rounded-2xl p-10 shadow-md">
              <div className="flex justify-between h-full">
                <div>
                  <div className="flex">
                    <div className="bg-[#F88D2C] h-12 w-6" />
                    <p className="font-bold text-3xl ml-3 mt-1">Custom Forms</p>
                  </div>
                  <p className="text-6xl mt-2 font-bold ml-10">42</p>
                  <p className="ml-10 mt-1 font-semibold">Active forms</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="bg-slate-200 p-4 w-24 h-20 rounded-lg flex items-center justify-center ml-11">
                    <ClipboardType className="h-12 w-12" />
                  </div>
                  <Button
                    className="bg-[#FFB7B7] h-14 w-36 rounded-xl hover:bg-[#FF8686]"
                    onClick={async () => {
                      const id = await getDefaultLoginRedirect();
                      router.push(`${id}/forms`);
                    }}
                  >
                    <Plus className="text-[#FF0000] h-12 w-12" />
                    <span className="text-[#FF0000] text-xl font-semibold">
                      Create
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[270px] h-[360px] bg-white rounded-2xl mt-5 p-10 shadow-md">
                <p className="text-3xl">Coming soon....</p>
              </div>
              <div className="w-[425px] h-[360px] bg-white rounded-2xl ml-5 mt-5 p-10 shadow-md">
                <div className="flex justify-between h-full">
                  <div>
                    <div className="flex">
                      <div className="bg-[#F797FF] h-12 w-6" />
                      <p className="font-bold text-3xl ml-3 mt-1">Bio Link</p>
                    </div>
                    <p className="text-6xl mt-2 font-bold ml-10">42</p>
                    <p className="ml-10 mt-1 font-semibold">Active forms</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="bg-slate-200 p-4 w-24 h-20 rounded-lg flex items-center justify-center ml-16">
                      <User className="h-12 w-12" />
                    </div>
                    <Button
                      className="bg-[#FFD5E9] h-14 w-36 rounded-xl hover:bg-[#FF9CCF] ml-4"
                      onClick={async () => {
                        const id = await getDefaultLoginRedirect();
                        router.push(`${id}/bio`);
                      }}
                    >
                      <Plus className="text-[#FF007A] h-12 w-12" />
                      <span className="text-[#FF007A] text-xl font-semibold">
                        Bio
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[440px] h-[345px] bg-white rounded-2xl ml-5 p-10 shadow-md">
              <div className="flex justify-between h-full">
                <div>
                  <div className="flex">
                    <div className="bg-[#F9FFB7] h-12 w-6" />
                    <p className="font-bold text-3xl ml-3 mt-1">Short URL</p>
                  </div>
                  <p className="text-6xl mt-2 font-bold ml-10">102</p>
                  <p className="ml-10 mt-1 font-semibold">Total Link created</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="bg-slate-200 p-4 w-24 h-20 rounded-lg flex items-center justify-center ml-11">
                    <Link className="h-12 w-12" />
                  </div>
                  <Button
                    className="bg-[#CAFCFF] h-14 w-36 rounded-xl hover:bg-[#97F7FF]"
                    onClick={async () => {
                      const id = await getDefaultLoginRedirect();
                      router.push(`${id}/url_short`);
                    }}
                  >
                    <Plus className="text-[#00C6D2] h-12 w-12" />
                    <span className="text-[#00C6D2] text-xl font-semibold">
                      Short
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-[440px] h-[270px] bg-white rounded-2xl p-10 shadow-md mt-5 ml-5">
              <div className="flex justify-between h-full">
                <div>
                  <div className="flex items-center">
                    <div className="bg-[#BB92FF] h-12 w-6 mr-3" />
                    <p className="font-bold text-3xl">Analytics</p>
                  </div>
                  <p className="text-6xl mt-2 font-bold ml-8">42</p>
                  <p className="ml-8 mt-1 font-semibold text-gray-600">
                    Total Analysis
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <div className="bg-slate-200 p-4 ml-14 rounded-lg flex items-center justify-center">
                    <GitGraph className="h-12 w-12 text-gray-600" />
                  </div>
                  <Button
                    className="flex items-center bg-[#B5FFB4] h-14 w-36 rounded-xl mt-4 hover:bg-[#8EFF9D]"
                    onClick={async () => {
                      const id = await getDefaultLoginRedirect();
                      router.push(`${id}/analytics`);
                    }}
                  >
                    <Plus className="text-[#00B512] h-6 w-6 mr-2" />
                    <span className="text-[#00B512] text-xl font-semibold">
                      Analyze
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
