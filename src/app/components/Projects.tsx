import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref1i, inView: inView1i } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref3i, inView: inView3i } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref4i, inView: inView4i } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <div className="space-y-4 mb-10 sm:mb-14 md:mb-16 lg:mb-24">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold font-barlow text-stone-200"
        >
          My Projects
        </motion.h1>
      </div>
      {/* Projects Grid */}
      <div className="grid gap-12 md:gap-20 lg:gap-28">
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Image */}
          <Link
            ref={ref1}
            href={"/"}
            className="w-full lg:w-1/2 hover:-translate-y-2 transition-transform duration-300"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={inView1 ? { scale: 1 } : { scale: 0.9 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative w-full aspect-[16/10] overflow-hidden max-w-[650px]"
            >
              <Image
                fill
                src="/hero.png"
                alt="Sam's ClodeX"
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Content */}
          <motion.div
            ref={ref1i}
            initial={{ y: 60 }}
            animate={inView1i ? { y: 0 } : { y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-semibold">ClodeX</h3>
              <div className="flex gap-4">
                <Link
                  href={"https://github.com/WhySamir/ClothingStore"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold w-10 h-10 bg-stone-200/80 text-white rounded-lg flex items-center justify-center"
                >
                  <Image
                    src="/Vector.svg"
                    alt="Vector "
                    width={18}
                    height={18}
                  />
                </Link>
                <Link
                  href={"https://clothing-store-pearl-psi.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-200/80 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  Visit
                </Link>
              </div>
            </div>
            <p className="text-base md:text-lg text-stone-300">
              Developed a full-stack e-commerce store with product filtering,
              secure checkout, and responsive design. Integrated inventory
              managemen and order tracking to deliver a seamless shopping
              experience.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Next JS", "Tailwind", "PostgreSQL", "Supabase"].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full bg-stone-600 text-white text-sm md:text-base transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* for sm */}
          <Link
            href={"/"}
            ref={ref2}
            className="w-full  lg:hidden lg:w-1/2 hover:-translate-y-2 transition-transform duration-300 "
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={inView2 ? { scale: 1 } : { scale: 0.9 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative w-full aspect-[16/10]  overflow-hidden  max-w-[650px]"
            >
              <Image
                fill
                src="/codenote.png"
                alt="Icodenotzbook"
                className="object-contain "
              />
            </motion.div>
          </Link>

          {/* Content first in lg */}
          <motion.div
            ref={ref3i}
            initial={{ y: 60 }}
            animate={inView3i ? { y: 0 } : { y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-semibold">
                Icodenotzbook
              </h3>
              <div className="flex gap-4">
                <Link
                  href={"https://github.com/Samir1611/CodeNoteBook"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold w-10 h-10 bg-stone-200/80 text-white rounded-lg flex items-center justify-center"
                >
                  <Image
                    src="/Vector.svg"
                    alt="Vector "
                    width={18}
                    height={18}
                  />
                </Link>
                <Link
                  href={"https://codenotebookz.netlify.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-200/80 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  Visit
                </Link>
              </div>
            </div>
            <p className="text-base md:text-lg text-stone-300">
              Built a note-taking application with CRUD functionality, search,
              and responsive UI. Enabled real-time updates, secure data storage,
              and an intuitive interface for organizing notes efficiently.
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
          </motion.div>

          {/* Image second */}
          <Link
            ref={ref3}
            href={"/"}
            className="w-full hidden lg:block lg:w-1/2 hover:-translate-y-2 transition-transform duration-300 "
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={inView3 ? { scale: 1 } : { scale: 0.9 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative w-full aspect-[16/10]  overflow-hidden  max-w-[650px]"
            >
              <Image
                fill
                src="/codenote.png"
                alt="Icodenotzbook"
                className="object-contain "
              />
            </motion.div>
          </Link>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Image */}
          <Link
            ref={ref4}
            href={"/"}
            className="w-full lg:w-1/2 hover:-translate-y-2 transition-transform duration-300"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={inView4 ? { scale: 1 } : { scale: 0.9 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative w-full aspect-[16/10]  overflow-hidden  max-w-[650px]"
            >
              <Image
                fill
                src="/wawatch.png"
                alt="Wawatch"
                className="object-contain "
              />
            </motion.div>
          </Link>

          {/* Content */}
          <motion.div
            ref={ref4i}
            initial={{ y: 60 }}
            animate={inView4i ? { y: 0 } : { y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-semibold">Wawatch</h3>
              <div className="flex gap-4">
                <Link
                  href={"https://github.com/WhySamir/FullStack"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold w-10 h-10 bg-stone-200/80 text-white rounded-lg flex items-center justify-center"
                >
                  <Image
                    src="/Vector.svg"
                    alt="Vector "
                    width={18}
                    height={18}
                  />
                </Link>
                <Link
                  href={"https://wawatchfree.netlify.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-200/80 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                >
                  Visit
                </Link>
              </div>
            </div>
            <p className="text-base md:text-lg text-stone-300">
              Developed a video streaming platform with user authentication,
              video upload/playback, likes, comments, and subscriptions.
              Designed a responsive interface and optimized backend to handle
              media storage and real-time interactions.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind", "Redux", "Express", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 rounded-full bg-stone-600 text-white text-sm md:text-base transition-all duration-300 hover:bg-primaryHalf hover:scale-105"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
