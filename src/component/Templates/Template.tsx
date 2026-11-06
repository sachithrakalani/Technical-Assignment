import type { ReactNode } from "react";
import Container from "../Atoms/Container";


export default function Template({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main>
      <Container className="min-h-[65vh] max-w-3xl py-14 md:py-20">
        <p className="mb-5 text-xs font-semibold tracking-widest text-amber-800">
          {eyebrow}
        </p>
        <h1 className="mb-8 font-serif text-4xl leading-tight md:text-6xl">
          {title}
        </h1>
        <div className="space-y-6 text-sm leading-8 text-stone-600">
          {children}
        </div>
      </Container>
    </main>
  );
}
