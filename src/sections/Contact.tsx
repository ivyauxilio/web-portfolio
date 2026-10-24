import Section from "../components/Section";
import Button from "../components/Button";
import { profile } from "../data/projects";

export default function Contact() {
  return (
    <Section id="contact" title="Let's work together" intro="Have a project or a role in mind? Send me a message and I'll reply within a few days.">
      <div className="flex flex-wrap gap-3">
        <Button href={`mailto:${profile.email}`}>Email me</Button>
        <Button href={profile.github} variant="outline" target="_blank" rel="noreferrer">
          GitHub
        </Button>
        <Button href={profile.linkedin} variant="outline" target="_blank" rel="noreferrer">
          LinkedIn
        </Button>
      </div>
    </Section>
  );
}
