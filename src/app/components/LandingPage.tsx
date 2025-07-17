import Link from "next/link";
import GithubAnimatedIcon from "./icons/githubAnimate";
import Image from "next/image";
const infos = [
  {
    icon: GithubAnimatedIcon,
    route: "/github",
    type: "component",
  },
  {
    icon: "/linkedin.svg",
    route: "/linkedin",
    type: "img",
  },
  {
    icon: "/instagram.svg",
    route: "/instagram",
    type: "img",
  },
  {
    icon: "/resume.svg",
    route: "/resume",
    type: "img",
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
          <main className=" flex flex-col gap-4 md:gap-6">
            {/* name and photo */}
            <div className="flex items-center justify-center text-center gap-4">
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
              <div className="flex flex-col ">
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
            <div className="font-Butcherman font-normal flex justify-start items-start ">
              <h1 className="text-5xl tracking-0 font-[400]  text-gray-50   md:text-6xl lg:text-8xl ">
                FULLSTACK
              </h1>
            </div>
            <div className="font-Butcherman font-normal flex justify-start items-start ">
              <h1 className="text-5xl text-[#3B82F6] font-[400]  md:text-6xl lg:text-8xl ">
                DEVELOPER
              </h1>
            </div>
            {/* infos */}
            <div className=" flex  justify-center items-center gap-4">
              {infos.map((item, index: number) => (
                <Link key={index} href={item.route}>
                  <button
                    className="inline-flex relative rounded-full items-center   justify-center 
                whitespace-nowrap  text-sm font-medium  
                   disabled:pointer-events-none disabled:opacity-50  border-2 border-white
                   h-auto  overflow-hidden
                      p-3 bg-transparent text-gray-50
                      transition-transform duration-500 
                      hover:scale-105 hover:-rotate-12"
                  >
                    {typeof item.icon === "string" ? (
                      <Image
                        src={item.icon}
                        alt={item.route}
                        height={24}
                        width={24}
                        className="w-6 h-6"
                      />
                    ) : (
                      <item.icon className="w-6 h-6 text-white" />
                    )}
                  </button>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
