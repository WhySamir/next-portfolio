"use client";

import { TechCardItemType, techCardsItems } from "../../../_lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

// Container variants for staggered children - using tween for smoother animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// Individual card variants - using tween with custom easing for buttery smooth motion
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween" as const,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, // Custom cubic-bezier for smooth deceleration
    },
  },
};

// Text animation variants - smooth tween animation
const textVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween" as const,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// Paragraph variant with slight delay
const paragraphVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween" as const,
      duration: 0.6,
      delay: 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const Skills = () => {
  return (
    <section className="relative z-10 py-16 sm:py-24" id="about">
      <motion.div
        className="space-y-4 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={textVariants}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold font-barlow text-stone-200"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          Technologies I Rely On
        </motion.h1>
        <motion.p
          variants={paragraphVariants}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-stone-200/70"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          I build high-impact digital solutions using today&apos;s most powerful
          technologies. These are the core tools behind my development workflow.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center text-[#ededed] justify-between gap-4"
      >
        {techCardsItems.map((cardItem: TechCardItemType) => (
          <motion.div
            key={cardItem.name}
            variants={cardVariants}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <TechCard cardInfo={cardItem} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
