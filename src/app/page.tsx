"use client";

import About from "@/components/About";
import Courses from "@/components/Courses";
import { GoUpLogo } from "@/components/Icons";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-28 mb-28">
        <section className="h-[80vh] md:h-[91vh] text-5xl sm:text-7xl lg:text-9xl xl:text-[8.5em] -tracking-wide font-bold grid relative">
          <h1 className="pb-10 my-auto balance gradient max-[255px]:text-3xl">
            <span className="flex items-center gap-2 md:gap-4 flex-wrap">
              Hi{" "}
              <Image
                width={25}
                height={25}
                className="wavehand w-[.9em] h-[.9em]"
                src="/hand.webp"
                alt="hand wave"
                unoptimized
                priority
              />
              , im
              <span className="px-1 text-transparent bg-clip-text bg-gradient-to-r from-[#370cd1] to-purple-400 dark:bg-gradient-to-r dark:from-indigo-700 dark:via-purple-500 dark:to-purple-400">
                Alex
              </span>
            </span>
            <span>Web Developer</span>
          </h1>
        </section>

        <About />

        <Courses />

        <Projects />
      </section>
      <a
        href="#top"
        aria-label="Go to Top"
        className="max-xl:hidden absolute -right-[10%] 2xl:-right-[20%] bottom-24 flex items-center p-2.5 bg-[#370cd1] text-white rounded-full hover:opacity-90 pressable duration-200 transition-transform hover:-translate-y-1"
      >
        <GoUpLogo size={18} />
      </a>
    </>
  );
}
