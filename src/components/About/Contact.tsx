export function Contact({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: React.ComponentProps<"section">;
}) {
  const { className, ...restProps } = props || {};

  const email = "alexander.mamani.dev@gmail.com";

  return (
    <section
      className={className}
      {...restProps}>
      <h2 className="text-2xl font-bold pb-1 border-b-6 border-main w-fit mb-5">
        Contact
      </h2>
      <div className="flex items-center border w-fit rounded-lg bg-slate-50 overflow-hidden">
        <span className="truncate text-gray-900 mx-2 block py-1.7 max-[365px]:text-xs">
          {email}
        </span>
        {children}
      </div>
    </section>
  );
}
