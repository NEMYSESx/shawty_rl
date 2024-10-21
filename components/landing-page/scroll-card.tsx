import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ScrollCard = ({ image }: { image: string }) => {
  return (
    <motion.div
      className="relative overflow-hidden h-[450px] min-w-[400px] bg-slate-400 rounded-xl flex items-center justify-center border"
      whileHover={{
        scale: 1.05,

        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image src={image} alt="" fill className="object-cover" />
    </motion.div>
  );
};

export default ScrollCard;
