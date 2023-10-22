import Image from "next/image";
import Tech from "./Tech";

export default function About() {
  return (
    <section className="tri-about h-fit max-md:gap-y-2.5 gap-x-5 xl:gap-x-16 lg:tri-about-rows">
      <h2 className="tri-about-title text-3xl md:text-5xl font-bold mb-6 pb-2 border-b-8 border-[#5b33ed] dark:border-[#6f48ff] w-fit">
        About Me
      </h2>
      <Image
        width={256}
        height={256}
        className="object-cover w-full h-full max-w-sm lg:max-w-md p-1 overflow-hidden tri-about-pic bg-gradient-to-b from-slate-200 to-white aspect-square rounded-3xl"
        src="/img/profile.webp"
        alt="My profile pic"
        unoptimized
        priority
      />

      <section className="flex flex-col w-full gap-2 tri-about-info md:max-w-sm xl:max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-semibold">Hey there!</h2>
        <p className="text-lg md:text-xl font-medium balance">
          {`I'm Alex, i'm passionate about web and mobile development, always
        striving to learn and improve in what i love to do. I love working
        on challenging projects and as part of a team, here is my stack.`}
        </p>
        <a
          href="/pdf/cv_alexander_mamani_en.pdf"
          className="wave rounded-md font-medium noAa pt-[.4rem] pb-[.35rem] px-3.5 w-fit pressable transition-opacity duration-200 hover:opacity-90 mt-2"
          aria-label="Download CV"
          target="_blank"
        >
          Download CV
        </a>
      </section>

      <section className="tri-about-tech flex items-center flex-wrap gap-5 lg:gap-8 h-fit max-lg:mt-5">
        <Tech />
      </section>
    </section>
  );
}
