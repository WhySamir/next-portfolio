"use client";
import LandingPage from "./components/LandingPage";
import Skills from "./components/knowledges/Skills";

export default function Home() {
  return (
    <>
      <LandingPage />
      <div className="flex flex-col px-5 sm:px-10 relative">
        <div className="max-w-7xl mx-auto w-full">
          <Skills />
        </div>
      </div>
    </>
  );
}
