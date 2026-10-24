import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { skills } from "../data/projects";

export default function About() {
  return (
    <Section
      id="about"
      title="About me"
      intro="I care about continuous learning, delivering quality work, building meaningful relationships, and creating technology that makes a real difference."
    >
      <Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.label}
              className="border-l-2 border-midnight-600 pl-5"
            >
              <h3 className="font-display text-lg font-bold">{group.label}</h3>
              <p className="mt-2 leading-relaxed text-midnight-800/85">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
