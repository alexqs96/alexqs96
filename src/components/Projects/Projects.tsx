import { Children } from "react";
import data from "./Projects.json";
import Badges from "../Badges";

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-bold pb-1 border-b-6 border-main w-fit mb-2">
        {Children.toArray(
          "Projects".split("").map((e, index) => (
            <span
              className="fadeIn"
              style={{ animationDelay: index * 0.12 + "s" }}>
              {e}
            </span>
          )),
        )}
      </h1>

      <div className="space-y-36 mt-8 mb-40 w-full z-0">
        {data.map((e, index) => (
          <div
            key={e.name}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 fadeDown"
            style={{ animationDelay: `${index * 0.55}s` }}>
            <div className="relative w-full">
              <img
                src={"/img/projects/" + e.desktop}
                alt={e.name + " Desktop Preview"}
                className="aspect-video object-cover drop-shadow-xl"
                width={720}
                height={356}
              />

              <img
                src={"/img/projects/" + e.mobile}
                alt={e.name + " Mobile Preview"}
                className="absolute right-0 -bottom-1 object-cover max-w-[20%]"
                width={160}
                height={320}
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-3xl sm:text-5xl font-bold">{e.name}</span>

              <div className="flex gap-1 flex-wrap text-xs pb-4 -mb-4 pr-2">
                <Badges data={e.tech} />
              </div>

              <p className="text-lg max-w-prose">{e.about}</p>

              <div className="flex items-center gap-2">
                {e.github ? (
                  <a
                    className="bg-gradient-to-b from-black to-neutral-700 text-white button button-base font-semibold"
                    href={e.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-describedby={e.name + " Github Repository"}>
                    Code
                  </a>
                ) : null}

                {e.url ? (
                  <a
                    className="button-base button-main text-white button font-semibold"
                    href={e.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-describedby={e.name + " Website"}>
                    Website
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
