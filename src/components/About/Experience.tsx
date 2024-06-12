export function Experience(props: React.ComponentProps<"section">) {
  const { className, ...restProps } = props;

  return (
    <section
      className={className}
      {...restProps}>
      <h1 className="text-2xl font-bold pb-1 border-b-6 border-main w-fit mb-2">
        Experience
      </h1>
    </section>
  );
}
