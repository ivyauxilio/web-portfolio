import Button from "../components/Button";
import { profile } from "../data/projects";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lavender-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lavender-300/60 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-32">
        <p className="animate-rise text-lg text-midnight-800">Hi, I'm</p>
        <h1 className="animate-rise font-display text-6xl font-bold leading-[0.95] tracking-tight text-midnight-900 [animation-delay:120ms] sm:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl animate-rise text-xl leading-relaxed text-midnight-800 [animation-delay:240ms]">
          I'm a {profile.role.toLowerCase()}. I build web and mobile products
          from the database to the interface. I also have experience with
          digital marketing tools, helping bridge the gap between technology,
          user experience, and online growth.
        </p>
        <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
          <Button href="#projects">See my projects</Button>
          <Button href="#contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
