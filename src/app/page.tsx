"use client";
import LandingPage from "./components/LandingPage";
// import Skills from "./priv_components/Skills";

import { Skills } from "next-priv-components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingPage />
      <div className="flex flex-col px-5 sm:px-10 relative">
        <div className="max-w-7xl mx-auto w-full">
          <Skills
            ImageComponent={(props) => (
              <Image
                {...(props as React.ComponentProps<typeof Image>)}
                width={32}
                height={32}
                quality={100}
                loading="lazy"
              />
            )}
          />
        </div>
      </div>
    </>
  );
}
