import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-5 sm:px-10 relative" id="contact">
      <div className="max-w-7xl mx-auto mb-2 w-full">
        <div className=" py-14  px-4 lg:px-8 z-10  w-full  h-full border rounded-2xl border-[#3d3d3d]">
          <div className="flex flex-col  lg:grid  lg:grid-cols-5 lg:items-center lg:justify-between  gap-4  space-y-4 sm:space-y-0  ">
            <div className="lg:px-3 col-span-3 flex flex-col items-start">
              <h1 className="font-gambarino pb-6 sm:max-w-[300px] w-full text-5xl sm:text-8xl animate-gradient-text">
                Samir Shakya
              </h1>
              <p className="text-stone-200/70">
                {" "}
                &copy; {new Date().getFullYear()} | All rights reserved.
              </p>
            </div>
            <div className="col-span-2 text-stone-200/70">
              <div className="flex flex-row text-sm sm:text-base sm:gap-5 justify-between items-start lg:justify-between max-w-[450px]">
                <div className="mt-4 font-bold flex flex-col gap-3 ">
                  <h1 className="text-stone-200">Navigate</h1>

                  <Link href={"/"} className="cursor-pointer hover:text-white">
                    Home
                  </Link>
                  <Link
                    href={"#projects"}
                    className="cursor-pointer hover:text-white"
                  >
                    Projects
                  </Link>
                  <Link
                    href={"#about"}
                    className="cursor-pointer hover:text-white"
                  >
                    About
                  </Link>
                </div>
                <div className="mt-4 font-bold flex cursor-pointer flex-col gap-3">
                  {" "}
                  <h1 className="text-stone-200">Projects</h1>
                  <Link href={"/"} className="cursor-pointer hover:text-white">
                    Sam's Store
                  </Link>
                  <Link className="cursor-pointer hover:text-white" href={"/"}>
                    Icodenotzbook
                  </Link>
                  <Link className="cursor-pointer hover:text-white" href={"/"}>
                    YoutubeClone
                  </Link>
                  <Link className="cursor-pointer hover:text-white" href={"/"}>
                    Cloth's Store
                  </Link>
                </div>
                <div className="mt-4 cursor-pointer font-bold flex flex-col gap-3">
                  {" "}
                  <h1 className="text-stone-200">Contact</h1>
                  <Link href={"/"} className="cursor-pointer hover:text-white">
                    Github
                  </Link>
                  <Link href={"/"} className="cursor-pointer hover:text-white">
                    Linkedin
                  </Link>
                  <Link href={"/"} className="cursor-pointer hover:text-white">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
