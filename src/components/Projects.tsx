import { Children } from "react";
import {
  CSSLogo,
  ExpressLogo,
  FirebaseLogo,
  HTMLLogo,
  MongoDBLogo,
  NextJSLogo,
  MYSQLLogo,
  NGINXLogo,
  NodeJSLogo,
  PsqlLogo,
  ReactNativeLogo,
  ReduxLogo,
  SocketIOLogo,
  TailwindLogo,
  TypescriptLogo,
  GithubLogo,
  WebLogo,
} from "./Icons";
import projects_data from "./projects.json";
import Image from "next/image";

const Projects = () => {
  const techIcons: { [key: string]: React.ReactNode } = {
    CSS3: <CSSLogo size={32} />,
    "Express.js": <ExpressLogo size={32} />,
    Firebase: <FirebaseLogo size={32} />,
    HTML5: <HTMLLogo size={32} />,
    MongoDB: <MongoDBLogo size={32} />,
    MySQL: <MYSQLLogo size={32} />,
    NextJS: <NextJSLogo size={32} />,
    NGINX: <NGINXLogo size={32} />,
    "Node.js": <NodeJSLogo size={32} />,
    PosgreSQL: <PsqlLogo size={32} />,
    "React Native": <ReactNativeLogo size={32} />,
    Redux: <ReduxLogo size={32} />,
    "Socket.io": <SocketIOLogo size={32} />,
    Tailwind: <TailwindLogo size={32} />,
    Typescript: <TypescriptLogo size={32} />,
  };

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-2 border-b-8 border-[#5b33ed] dark:border-[#6f48ff] w-fit">
        Projects
      </h2>
      <p className="text-2xl font-medium mb-6">
        {"Along my journey as a Web Developer 🧑🏽‍💻, i've participated in Projects at "}
        <a
          href="https://www.nocountry.tech"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block font-bold transition-transform duration-200 hover:-translate-y-1"
        >
          No Country
        </a>
        , where i learned a lot about team work ⚡️.
      </p>

      <section className="flex flex-col gap-44">
        {projects_data.map((project, index) => (
          <div
            className={
              "flex justify-between lg:gap-20 w-full mx-auto max-lg:flex-col" +
              (index === 0 ? " mt-32" : "")
            }
            key={index}
          >
            <div className="flex items-center justify-center relative lg:max-w-xl w-full max-lg:mb-10">
              <Image
                width={512}
                height={512}
                unoptimized
                priority
                className="object-cover aspect-video w-full"
                src={"/img/projects/" + project.desktop}
                alt={project.name + " Desktop Preview"}
              />
              <Image
                width={512}
                height={512}
                unoptimized
                priority
                className="object-contain aspect-[9/16] absolute w-16 md:w-24 right-0 bottom-0 max-md:-bottom-2"
                src={"/img/projects/" + project.mobile}
                alt={project.name + " Mobile Preview"}
              />
            </div>

            <div className="flex flex-col mt-5 gap-2 max-w-xl w-full lg:balance">
              <p
                className="text-3xl lg:text-5xl font-bold"
                aria-label={project.name}
              >
                {project.name}
              </p>

              <div className="flex gap-3 flex-wrap">
                {Children.toArray(
                  project.tech.map((tech: string) => (
                    <figure className="group relative cursor-pointer">
                      {techIcons[tech]}
                      <span className="hidden group-hover:block w-fit bg-black dark:bg-white dark:text-black pt-[.3rem] pb-[.15rem] rounded-lg px-2 text-white absolute -top-10 inset-x-0 whitespace-pre">
                        {tech}
                      </span>
                    </figure>
                  )),
                )}
              </div>

              <p className="font-medium text-lg max-w-md">{project.about}</p>

              <div className="flex gap-3 items-center">
                {project.github ? (
                  <a
                    className="font-medium text-sm noAa bg-black text-white dark:bg-white dark:text-black rounded-md pt-[.4rem] pb-[.3rem] px-3 w-fit transition-opacity duration-200 hover:opacity-90 pressable"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-describedby={project.name + " Github Repository"}
                  >
                    Code
                  </a>
                ) : null}

                {project.url ? (
                  <a
                    className="font-medium text-sm noAa bg-black text-white dark:bg-white dark:text-black rounded-md pt-[.4rem] pb-[.3rem] px-3 w-fit transition-opacity duration-200 hover:opacity-90 pressable"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-describedby={project.name + " Website"}
                  >
                    Website
                  </a>
                ) : null}

                {project.wip ? (
                  <span className="font-medium text-sm noAa bg-black text-white dark:bg-white dark:text-black rounded-md pt-[.4rem] pb-[.3rem] px-3 w-fit transition-opacity duration-200 hover:opacity-90">
                    In Progress
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
