"use client";
import Link from "next/link";
import GithubAnimatedIcon from "./icons/githubAnimate";
import Image from "next/image";
const infos = [
  {
    icon: GithubAnimatedIcon,
    route: "https://github.com/whysamir",
    type: "component",
  },
  {
    icon: "/linkedin.svg",
    route: "https://www.linkedin.com/in/samir-shakya",
    type: "img",
  },
  {
    icon: "/instagram.svg",
    route: "https://www.instagram.com/samirr.shakya/",
    type: "img",
  },
  {
    icon: "/resume.svg",
    route: "/samirshakyaa_CV.pdf",
    type: "img",
    download: true,
  },
];

export default function LandingPage() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden h-[100svh] flex flex-col pt-12  items-center md:justify-center justify-center text-white "
      >
        <div className="relative z-10  text-center md:mt-10 lg:max-w-7xl ">
          <main className=" flex flex-col  gap-8 ">
            {/* name and photo */}
            <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-6">
              <div className="relative inline-block w-16 h-16 md:w-20 md:h-20">
                <Image
                  fill
                  style={{
                    color: "transparent",
                  }}
                  src="/logos/3.jpg"
                  //transition-transform absolute inset-0 duration-500 hover:scale-125 hover:-rotate-12
                  className=" object-cover h-full w-full  rounded-full border border-white/80"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-center  sm:items-start justify-center ">
                <div className="text-gray-50 text-3xl font-bold font-barlow text-left ">
                  <span>Samir Shakya</span>
                </div>
                <span className="text-sm items-start flex flex-col">
                  {" "}
                  <span>
                    Based in Nepal
                    <Image
                      height={32}
                      width={32}
                      src="/nepal.svg"
                      className=" inline-block w-8 h-8 object-contain ml-3 -mt-1"
                      alt=""
                    />
                  </span>
                </span>
              </div>
            </div>
            {/* fullstack */}
            <div
              // style={{ fontFamily: "var(--font-playfair)" }}
              className=" font-barlow flex flex-col md:gap-6 text-5xl sm:text-7xl tracking-tight font-black    lg:text-8xl sm:leading-20 "
            >
              <h1 className=" text-gray-50">FULLSTACK</h1>
              <h1 className=" text-[#3B82F6]  ">DEVELOPER</h1>
            </div>
            {/* infos */}
            <div className=" flex  justify-center items-center mb-6 gap-4">
              {infos.map((item, index: number) => {
                const IconComponent =
                  typeof item.icon === "string" ? (
                    <Image
                      src={item.icon}
                      alt={item.route}
                      height={24}
                      width={24}
                      className="w-6 h-6"
                    />
                  ) : (
                    <item.icon className="w-6 h-6 text-white" />
                  );

                return item.download ? (
                  <a
                    key={index}
                    href={item.route}
                    download
                    className="inline-flex relative rounded-full items-center justify-center 
        whitespace-nowrap text-sm font-medium  
        disabled:pointer-events-none disabled:opacity-50 border-2 border-white
        h-auto overflow-hidden p-3 bg-transparent text-gray-50
        transition-transform duration-500 
        hover:scale-105 hover:-rotate-12"
                  >
                    {IconComponent}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={item.route}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="inline-flex relative rounded-full items-center justify-center 
          whitespace-nowrap text-sm font-medium  
          disabled:pointer-events-none disabled:opacity-50 border-2 border-white
          h-auto overflow-hidden p-3 bg-transparent text-gray-50
          transition-transform duration-500 
          hover:scale-105 hover:-rotate-12"
                    >
                      {IconComponent}
                    </button>
                  </Link>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
