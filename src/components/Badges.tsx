import { Children } from "react";
import { Icons } from "./Icons";

const Badges = ({ data }: { data: string[] }) => {
  return (
    <>
      {Children.toArray(
        data.map((icon) => (
          <span className="group inline-flex items-center gap-1 bg-gradient-to-b from-slate-100/70 to-body shadow-2xl shadow-main/10 border rounded-lg py-1.5 px-2.5">
            {icon} {Icons[icon]}
          </span>
        )),
      )}
    </>
  );
};

export default Badges;
