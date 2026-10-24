import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tinted?: boolean;
}

export default function Section({ id, title, intro, children, tinted = false }: Props) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 sm:py-28 ${tinted ? "bg-lavender-100" : ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-midnight-900 sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-lg leading-relaxed text-midnight-800/80">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
