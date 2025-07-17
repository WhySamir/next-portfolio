import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="relative z-10 py-16 sm:py-24" id="projects">
      <div className="space-y-4 mb-10 sm:mb-14 md:mb-16 lg:mb-24">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold font-barlow text-stone-200"
        >
          My projects
        </motion.h1>
      </div>
      <div className=" xl:py-6 justify-items-center grid gap-16 items-start md:gap-y-24 xl:gap-y-32">
        {/* 1 */}
        <div className=" max-w-[650px] xl:gap-x-20 lg:max-w-none flex gap-y-10 gap-x-10 flex-col items-start lg:items-center lg:flex-row">
          <Link
            href={"/"}
            className="w-full lg:w-1/2 p-3 hover:-translate-y-2 duration-300"
          >
            <div className="relative max-w-[650px] aspect-[16/10]">
              <Image
                fill
                src="/samstore.png"
                alt="profile"
                className="object-contain  border rounded-lg"
              />
            </div>
          </Link>
          <div className="lg:w-1/2">
            <div className=" flex flex-col gap-3 md:gap-6">
              <div className="flex items-center lg:flex-col lg:items-start lg:gap-2 xl:gap-6 gap-4 md:gap-6">
                <h3 className=" text-xl md:text-3xl font-semibold">
                  Sam's Store
                </h3>
                <div className=" flex gap-3 md:gap-5">
                  <button
                    className="bg-stone-200/80 px-3 text-white project-link whitespace-nowrap
                   flex items-center justify-center border-none relative rounded-lg cursor-pointer
                    transition-all duration-300 hover:bg-primaryHalf
                     hover:text-white transform hover:scale-105"
                  >
                    Visit
                  </button>
                </div>
              </div>
              <p className=" mb-2 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugiat expedita ratione possimus! Laudantium, molestias
                exercitationem ullam eius fugiat rerum quod accusantium
                cupiditate nostrum, recusandae natus ex maiores tempora
                nesciunt.
              </p>
              <div className=" flex flex-wrap gap-2 mb-2">
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">React</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Tailwind</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Redux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" max-w-[650px] xl:gap-x-20 lg:max-w-none flex gap-y-10 gap-x-10 flex-col items-start lg:items-center lg:flex-row ">
          <div className="lg:w-1/2">
            <div className=" flex flex-col gap-3 md:gap-6">
              <div className="flex items-center lg:flex-col lg:items-start lg:gap-2 xl:gap-6 gap-4 md:gap-6">
                <h3 className=" text-xl md:text-3xl font-semibold">
                  Icodenotzbook
                </h3>
                <div className=" flex gap-3 md:gap-5">
                  <button
                    className="font-bold  w-9 h-9 md:w-11 md:h-11 bg-stone-200/80 px-3 text-white
                   flex items-center justify-center border-none 
                    relative rounded-lg cursor-pointer transition-all"
                  >
                    AA
                  </button>
                  <button
                    className="bg-primary  bg-stone-200/80 px-3 text-white project-link whitespace-nowrap
                   flex items-center justify-center border-none relative rounded-lg cursor-pointer
                    transition-all duration-300 hover:bg-primaryHalf
                     hover:text-white transform hover:scale-105"
                  >
                    BuyTemplate
                  </button>
                </div>
              </div>
              <p className=" mb-2 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugiat expedita ratione possimus! Laudantium, molestias
                exercitationem ullam eius fugiat rerum quod accusantium
                cupiditate nostrum, recusandae natus ex maiores tempora
                nesciunt.
              </p>
              <div className=" flex flex-wrap gap-2 mb-2">
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">MongoDB</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Express</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">React</span>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={"/"}
            className="w-full lg:w-1/2 p-3 hover:-translate-y-2 duration-300"
          >
            <div className="relative max-w-[650px] aspect-video">
              <Image
                fill
                src="/codenote.png"
                alt="profile"
                className="object-contain  border "
              />
            </div>
          </Link>
        </div>
        {/* 3 */}
        <div className=" max-w-[650px] xl:gap-x-20 lg:max-w-none flex gap-y-10 gap-x-10 flex-col items-start lg:items-center lg:flex-row">
          <Link
            href={"/"}
            className="w-full lg:w-1/2 p-3 hover:-translate-y-2 duration-300"
          >
            <div className="relative max-w-[650px] aspect-[16/10]">
              <Image
                fill
                src="/wawatch.png"
                alt="profile"
                className="object-contain  border rounded-lg"
              />
            </div>
          </Link>
          <div className="lg:w-1/2">
            <div className=" flex flex-col gap-3 md:gap-6">
              <div className="flex items-center lg:flex-col lg:items-start lg:gap-2 xl:gap-6 gap-4 md:gap-6">
                <h3 className=" text-xl md:text-3xl font-semibold">
                  Sam's Store
                </h3>
                <div className=" flex gap-3 md:gap-5">
                  <button
                    className="bg-stone-200/80 px-3 text-white project-link whitespace-nowrap
                   flex items-center justify-center border-none relative rounded-lg cursor-pointer
                    transition-all duration-300 hover:bg-primaryHalf
                     hover:text-white transform hover:scale-105"
                  >
                    Visit
                  </button>
                </div>
              </div>
              <p className=" mb-2 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugiat expedita ratione possimus! Laudantium, molestias
                exercitationem ullam eius fugiat rerum quod accusantium
                cupiditate nostrum, recusandae natus ex maiores tempora
                nesciunt.
              </p>
              <div className=" flex flex-wrap gap-2 mb-2">
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">React</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Tailwind</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Redux</span>
                </div>
                <div
                  className="skill-card cursor-default flex items-center gap-3 px-6 md:px-7 rounded-full py-3 bg-stone-600 
                text-white transition-all duration-300 hover:bg-primaryHalf hover:text-white transform hover:scale-105"
                >
                  <span className="text-sm md:text-base">Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
