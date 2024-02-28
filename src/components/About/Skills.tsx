import Badges from "@components/Badges";

const TechBox = ({
  data,
}: {
  data: {
    title: string;
    info: string;
    icons: string[];
  };
}) => {
  return (
    <section className="w-full mb-10">
      <span className="text-xl font-semibold font-mono">{data.title}</span>

      <p className="text-gray-900">{data.info}</p>

      <div className="mt-5 flex flex-wrap w-full gap-1">
        <Badges data={data.icons} />
      </div>
    </section>
  );
};

export const Skills = (props: React.ComponentProps<'section'>) => {
  const { className, ...restProps} = props

  const frontend = {
    title: "Frontend",
    info: "I've been working on Web Apps with Next.js/React. I use CSS for styling and also Tailwind/Bootstrap. TypeScript has been beneficial for managing larger projects, aiding in debugging, and ensuring a clear codebase for collaboration.",
    icons: ["Next.js", "Astro" ,"React Native", "Tailwind", "Typescript"],
  };

  const backend = {
    title: "Backend",
    info: "I've been working on backend apps, especially with Node.js. For managing data, i use MySQL and MongoDB. I also opted to use NGINX to ensure efficient performance and effective traffic management on self-hosted servers.",
    icons: ["Node.js", "MySQL", "MongoDB", "NGINX"],
  };

  const tools = {
    title: "Tools",
    info: "I've been working with graphic content as well, using tools like Photoshop for working with images and Illustrator when I had to work with logos. Figma was a big helper when I had to design a site before starting to code it.",
    icons: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  };

  return (
    <section className={className} {...restProps}>
      <h2 className="text-2xl font-bold pb-1 border-b-6 border-main w-fit mb-5">Skills</h2>

      <TechBox data={frontend} />

      <TechBox data={backend} />

      <TechBox data={tools} />
    </section>
  );
};