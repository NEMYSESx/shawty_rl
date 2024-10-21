import React, { ReactNode, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const FeatureCard = ({
  className,
  title,
  body,
  logo,
  logoClassName,
}: {
  className?: string;
  title: string;
  body: string;
  logo: ReactNode;
  logoClassName?: string;
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
        "relative bg-[#e9ddff] h-[325px] w-[400px] border  rounded-xl m-3"
      )}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#FAF9F6] shadow-lg text-center"
      >
        <div className={cn("h-12 w-12 rounded-full", logoClassName)}>
          {logo}
        </div>

        <h1
          className="text-3xl font-semibold text-gray-800 mb-1 p-3"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed p-3">{body}</p>
      </div>
    </motion.div>
  );
};
