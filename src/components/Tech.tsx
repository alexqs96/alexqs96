import { FigmaLogo, IllustratorLogo, MYSQLLogo, MongoDBLogo, NGINXLogo, NextJSLogo, NodeJSLogo, PhotoshopLogo, ReactNativeLogo, TailwindLogo, TypescriptLogo } from "./Icons";

const TechLayout = ({title, data} : {
  title: string;
  data: { [key: string]: React.ReactNode };
}) => {
  return (
    <section>
      <span className="block mb-2 text-xl font-semibold dark:text-white">{title}</span>

      <div className="flex w-full gap-2">
        {Object.entries(data).map(([name, svg]) => (
          <figure key={name} className="group relative cursor-pointer">
            {svg}
            <span className="hidden group-hover:block w-fit bg-black dark:bg-white dark:text-black pt-[.3rem] pb-[.15rem] rounded-lg px-2 text-white absolute -top-10 inset-x-0 whitespace-pre">{name}</span>
          </figure>
        ))}
      </div>
    </section>
  )
}

const Tech = () => {
  const frontTech: {[key: string]: any} = {
    "NextJS": <NextJSLogo size={32} />,
    "React Native": <ReactNativeLogo size={32} />,
    "Tailwind": <TailwindLogo size={32} />,
    "Typescript": <TypescriptLogo size={32} />,
  }

  const backTech: {[key: string]: any} = {
    "Node.js": <NodeJSLogo size={32} />,
    "MySQL": <MYSQLLogo size={32} />,
    "MongoDB": <MongoDBLogo size={32} />,
    "NGINX": <NGINXLogo size={32} />,
  }

  const toolsTech: {[key: string]: any} = {
    "Adobe Illustrator": <IllustratorLogo size={32} />,
    "Adobe Photoshop": <PhotoshopLogo size={32} />,
    "Figma": <FigmaLogo size={32} />,
  }

  return (
    <>
      <TechLayout title="Frontend" data={frontTech} />

      <TechLayout title="Backend" data={backTech} />

      <TechLayout title="Tools" data={toolsTech} />
    </>
  );
};

export default Tech
