"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceEntry {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  type: "work" | "education";
}

const experiences: ExperienceEntry[] = [
  {
    company: "Inflancer Technology",
    position: "Fullstack Developer Intern",
    period: "2025 - Present",
    description:
      "Development of enterprise-scale applications.",
    achievements: [
      "Successfully launched 2 projects for clients across different industries.",
      "Developed innovative warranty management solutions for retail businesses.",
      "Optimized application performance and reduced load",
    ],
    technologies: ["Next Js", "Bun Js", "PostgreSQL", "Docker"],
    type: "work",
  },
  {
    company: "Bsc. CSIT",
    position: "Asain College of Higher Studies",
    period: "2022 - Present",
    description:
      "Currently pursuing Bachelor of Science in Computer Science and Information Technology.",
    achievements: [
      "Learned and mastered various programming languages and technologies.",
      "Participated in various hackathons.",
      "Created projects like e-commerce website, youtube like website, etc."
    ],
    technologies: ["7th Semester", "4th Year"],
    type: "education",
  },
  {
    company: "+2 College",
    position: "DAV",
    period: "2020 - 2022",
    description: "Studied intermediate level of computer science.",
    achievements: [
      "Started my journey in computer science.",
      "Started from learning C and Javascript",
    ],
    technologies: ["3.30 GPA", "JavaScript"],
    type: "education",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative z-10 py-16 sm:py-24 w-full text-[#ededed] overflow-hidden"
      id="experience"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shadow-lg shadow-gray-900/50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
            </motion.div>
            <h2 className="text-2xl sm:text-4xl font-bold font-barlow text-gray-200">
              Work Experience & Education
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-sm sm:text-base font-barlow max-w-2xl"
          >
            My professional journey in the tech industry, building scalable
            solutions and leading development teams.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line - centered for desktop, left for mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-[1.125rem] sm:left-1/2 sm:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-gray-600 via-gray-700 to-transparent origin-top"
          />

          {/* Experience entries */}
          <div className="space-y-10 sm:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceEntry;
  index: number;
  isInView: boolean;
}

function ExperienceCard({ experience, index, isInView }: ExperienceCardProps) {
  // index 0 -> right side, index 1 -> left side, index 2 -> right side
  const isRight = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className="relative"
    >
      {/* Mobile & Desktop Layout */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12">
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          className="hidden sm:block mr-4"
        >
          {!isRight && <ExperienceContent experience={experience} align="right" />}
        </motion.div>

        {/* Timeline Dot - Centered with spacing */}
        <div className="absolute -left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 sm:col-span-2 z-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + index * 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="relative"
          >
            {/* Pulsing ring effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-10 h-10 rounded-full bg-blue-500/40"
            />

            {/* Main dot */}
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-blue-900/40">
              {/* Icon overlay */}
              {experience.type === "work" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute text-blue-300">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute text-blue-300">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                </svg>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          className="hidden sm:block ml-4"
        >
          {isRight && <ExperienceContent experience={experience} align="left" />}
        </motion.div>

        {/* Mobile Layout - Always Left Aligned */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          className="sm:hidden ml-16"
        >
          <ExperienceContent experience={experience} align="left" />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface ExperienceContentProps {
  experience: ExperienceEntry;
  align: "left" | "right";
}

function ExperienceContent({ experience, align }: ExperienceContentProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`relative group ${align === "right" ? "text-right" : "text-left"}`}
    >
      {/* Card */}
      <div className="relative bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gray-800/60 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/5">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/3 group-hover:to-purple-600/3 rounded-xl transition-all duration-300" />

        <div className="relative z-10">
          {/* Period Badge */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`inline-block text-xs sm:text-sm text-blue-400 font-semibold bg-blue-950/40 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3 border border-blue-700/30 ${align === "right" ? "float-right" : "float-left"}`}
          >
            {experience.period}
          </motion.span>

          <div className="clear-both" />

          {/* Company Name */}
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-blue-100 transition-colors duration-200">
            {experience.company}
          </h3>

          {/* Position */}
          <p className="text-sm sm:text-base text-blue-300/80 font-medium mb-3">
            {experience.position}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <motion.ul
            className={`space-y-2 mb-4 ${align === "right" ? "items-end" : "items-start"}`}
          >
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex gap-2 text-gray-400 text-xs sm:text-sm ${align === "right" ? "flex-row-reverse text-right" : ""}`}
              >
                <span className="text-blue-400/60 flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                <span className="flex-1">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Technologies */}
          {experience.technologies && (
            <div className={`flex flex-wrap gap-2 ${align === "right" ? "justify-end" : "justify-start"}`}>
              {experience.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50 hover:border-blue-500/60 hover:text-blue-300 hover:bg-gray-800/70 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
