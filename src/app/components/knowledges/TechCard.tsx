"use client";

import { TechCardItemType } from "_lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const TechCard = ({ cardInfo }: { cardInfo: TechCardItemType }) => {
  const { name, description, imageUrl, bgColor } = cardInfo;

  return (
    <motion.div
      className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[#2c2c2c] bg-[#202020] will-change-transform"
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
      whileHover={{
        scale: 1.02,
        backgroundColor: "#2c2c2c",
        borderColor: "#424242",
      }}
      transition={{
        type: "tween",
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div
        className={`p-3 ${bgColor} rounded-lg w-fit flex-shrink-0`}
        style={{ transform: "translateZ(0)" }}
      >
        <Image
          src={imageUrl}
          width={32}
          height={32}
          alt={`${name} logo`}
          className="size-8"
          loading="eager"
          priority
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default TechCard;
