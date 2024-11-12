"use client";

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold ml-12 text-6xl">Dashboard</h1>
        <div className="flex">
          <div>
            <div className="h-[350px] w-[695px] bg-white rounded-2xl ml-12"></div>
            <div className="flex">
              <div className="w-[337px] h-[360px] bg-white rounded-2xl ml-12 mt-5"></div>
              <div className="w-[337px] h-[360px] bg-white rounded-2xl ml-5 mt-5"></div>
            </div>
          </div>
          <div>
            <div className="w-[420px] h-[485px] bg-white rounded-2xl ml-5"></div>
            <div className="w-[420px] h-[225px] bg-white rounded-2xl ml-5 mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
