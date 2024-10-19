"use client";

import React from "react";

export const ScrollSection = ({
  direction,
}: {
  direction: "left" | "right";
}) => {
  const row1 = Array(12).fill(null);
  // const row2 = Array(12).fill(null);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative text-black">
      <div className="w-full flex flex-col items-center justify-center">
        {/* First Marquee Section */}
        <div className="flex w-[1200px] overflow-hidden select-none mask-image">
          <div
            className={`flex flex-shrink-0 items-center justify-around whitespace-nowrap animate-scroll-${direction}`}
          >
            {row1.map((_, index) => (
              <div
                className="w-[400px] h-[314px] bg-gray-300 rounded-lg mx-2 shadow-md"
                key={index}
              />
            ))}
          </div>
          <div
            className={`flex flex-shrink-0 items-center justify-around whitespace-nowrap animate-scroll-${direction}`}
          >
            {row1.map((_, index) => (
              <div
                className="w-[400px] h-[314px] bg-gray-300 rounded-lg mx-2 shadow-md"
                key={index + 12} // Ensure unique key for second group
              />
            ))}
          </div>
        </div>

        {/* Second Marquee Section */}
        {/* <div className="flex w-[1200px] overflow-hidden select-none mask-image">
          <div className="flex flex-shrink-0 items-center justify-around whitespace-nowrap animate-scroll-x-reverse">
            {row2.map((_, index) => (
              <div
                className="w-[400px] h-[314px] bg-gray-300 rounded-lg mx-2 shadow-md"
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-shrink-0 items-center justify-around whitespace-nowrap animate-scroll-x-reverse">
            {row2.map((_, index) => (
              <div
                className="w-[400px] h-[314px] bg-gray-300 rounded-lg mx-2 shadow-md"
                key={index + 12} // Ensure unique key for second group
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
