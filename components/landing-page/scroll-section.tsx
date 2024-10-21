"use client";

import React, { useEffect, useState } from "react";
import ScrollCard from "./scroll-card";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
export const ScrollSection = ({
  direction,
}: {
  direction: "left" | "right";
}) => {
  const row1 = Array(7).fill(null);

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const EDGE_PADDING = 64;

  const [mustFinish, setMustFinish] = useState(false);
  const [render, setRender] = useState(false);

  const [duration, setDuration] = useState(FAST_DURATION);

  useEffect(() => {
    let controls;
    const finalPosition =
      direction == "left"
        ? -width / 2 + EDGE_PADDING
        : width / 2 - EDGE_PADDING;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRender(!render);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation, width, duration, render, mustFinish, direction]);

  return (
    <div className=" flex items-center justify-center relative text-black m-8 w-[1200px] mx-8">
      <motion.div
        className="flex items-center justify-center gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...row1, ...row1].map((img, idx) => (
          <ScrollCard image={""} key={idx} />
        ))}
      </motion.div>
    </div>
  );
};
