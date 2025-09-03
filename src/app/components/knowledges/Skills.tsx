"use client";

import { useInView } from "react-intersection-observer";
import { TechCardItemType, techCardsItems } from "../../../_lib/constants";
import TechCard from "./TechCard";
// import { TechCard } from "next-priv-components";

import { motion } from "framer-motion";

const Skills = () => {
  const { ref: ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section className=" relative z-10 py-16 sm:py-24" id="about">
      <div className="space-y-4 mb-10">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, x: -75 }}
          // whileInView={{ opacity: 1, x: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -75 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold font-barlow text-stone-200"
        >
          Technologies I Rely On
        </motion.h1>
        <motion.p
          ref={ref2}
          initial={{ opacity: 0, x: -80 }}
          animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          // whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm  min-[430px]:text-base max-w-lg md:max-w-3xl text-stone-200/70"
        >
          I build high-impact digital solutions using today’s most powerful
          technologies. These are the core tools behind my development workflow.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center text-[#ededed] justify-between  gap-4"
      >
        {techCardsItems.map((cardItem: TechCardItemType) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
