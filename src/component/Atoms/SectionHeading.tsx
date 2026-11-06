export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <p className="mb-4 text-[10px] font-bold tracking-[0.22em] text-amber-800">
        {eyebrow}
      </p>
      <h2 className="mb-4 font-serif text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
    </>
  );
}
