import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="space-y-4 mb-10 sm:mb-14 md:mb-16 lg:mb-24">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold font-barlow text-stone-200"
        >
          My Projects
        </motion.h1>
      </div>
      {/* Projects Grid */}
      <div className="grid gap-20 md:gap-28">
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Image */}
          <Link
            href={"/"}
            className="w-full lg:w-1/2 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative w-full aspect-[16/10]  overflow-hidden max-w-[650px] ">
              <Image
                fill
                src="/samstore.png"
                alt="Sam's Store"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-semibold">
                Sam&apos;s Store
              </h3>
              <button className="self-start bg-stone-200/80 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:bg-primaryHalf hover:scale-105">
                Visit
              </button>
            </div>
            <p className="text-base md:text-lg text-stone-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              fugiat expedita ratione possimus! Laudantium, molestias
              exercitationem ullam eius fugiat rerum quod accusantium.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind", "Redux"].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full bg-stone-600 text-white text-sm md:text-base transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Content first */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-semibold">
                Icodenotzbook
              </h3>
              <div className="flex gap-4">
                <button className="font-bold w-10 h-10 bg-stone-200/80 text-white rounded-lg flex items-center justify-center">
                  AA
                </button>
                <button className="bg-stone-200/80 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:bg-primaryHalf hover:scale-105">
                  Buy Template
                </button>
              </div>
            </div>
            <p className="text-base md:text-lg text-stone-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              fugiat expedita ratione possimus! Laudantium, molestias
              exercitationem ullam eius fugiat rerum quod accusantium.
            </p>
            <div className="flex flex-wrap gap-3">
              {["MongoDB", "Express", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full bg-stone-600 text-white text-sm md:text-base transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image second */}
          <Link
            href={"/"}
            className="w-full lg:w-1/2 hover:-translate-y-2 transition-transform duration-300 "
          >
            <div className="relative w-full aspect-[16/10]  overflow-hidden  max-w-[650px]">
              <Image
                fill
                src="/codenote.png"
                alt="Icodenotzbook"
                className="object-contain "
              />
            </div>
          </Link>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Image */}
          <Link
            href={"/"}
            className="w-full lg:w-1/2 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative w-full aspect-[16/10]  overflow-hidden  max-w-[650px]">
              <Image
                fill
                src="/wawatch.png"
                alt="Wawatch"
                className="object-contain "
              />
            </div>
          </Link>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-semibold">Wawatch</h3>
              <button className="self-start bg-stone-200/80 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:bg-primaryHalf hover:scale-105">
                Visit
              </button>
            </div>
            <p className="text-base md:text-lg text-stone-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              fugiat expedita ratione possimus! Laudantium, molestias
              exercitationem ullam eius fugiat rerum quod accusantium.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind", "Redux", "Express"].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full bg-stone-600 text-white text-sm md:text-base transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
