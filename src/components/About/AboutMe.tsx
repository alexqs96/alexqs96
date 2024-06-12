import { Children } from "react";

export function AboutMe(props: React.ComponentProps<"section">) {
  const { className, ...restProps } = props;

  return (
    <section
      className={"flex gap-10 max-sm:flex-col " + (className || "")}
      {...restProps}>
      <img
        width={512}
        height={512}
        src="/img/profile.webp"
        className="rounded-3xl bg-gradient-to-b from-slate-200/70 to-body shadow-2xl shadow-main/10 my-auto sm:max-w-[236px]"
        alt="My Picture"
      />

      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-2xl font-bold pb-1 border-b-6 border-main w-fit">
          {Children.toArray(
            "About Me".split("").map((e, index) => (
              <span
                className="fadeIn"
                style={{ animationDelay: index * 0.12 + "s" }}>
                {e}
              </span>
            )),
          )}
        </h1>

        <div className="md:text-balance opacity-90 text-base leading-6 text-gray-900">
          <p>Hey! im Alex. Web, Mobile developer and UI designer.</p>
          <p>Based in Buenos Aires, Argentina 🇦🇷.</p>
          <p>
            I invite you to get to know me better through my blog, where i write
            about code and personal experiences.
          </p>
        </div>

        <a
          href="/pdf/en_alexander_mamani.pdf"
          className="block w-fit button button-base button-main font-medium"
          aria-label="Resume"
          target="_blank">
          Resume
        </a>
      </div>
    </section>
  );
}
