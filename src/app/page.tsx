"use client";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
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
      <section className="relative z-10 py-16 sm:py-24 w-full" id="projects">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <Projects />
        </div>
      </section>
    </>
  );
}
