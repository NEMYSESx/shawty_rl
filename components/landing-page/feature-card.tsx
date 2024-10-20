import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import icon1 from "@/assests/icon1.png";
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const FeatureCard = ({
  className,
  title,
  body,
}: {
  className?: string;
  title: string;
  body: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={cn(
        className,
        "relative bg-[#e9ddff] h-[350px] w-[450px] border  rounded-xl m-3"
      )}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#FAF9F6] shadow-lg"
      >
        <div
          className="w-14 h-14 rounded-full ml-5 bg-red-200 p-1"
          style={{
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow
            transform: "scale(1.1)", // Slightly increase size for popping effect
            transition: "transform 0.3s ease-in-out", // Smooth transition on hover
          }}
        >
          <Image src={icon1} alt="fk" height={100} width={100} />
        </div>
        <h1
          className="text-3xl font-semibold text-gray-800 mb-4 p-2"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed p-2">{body}</p>
      </div>
    </motion.div>
  );
};
