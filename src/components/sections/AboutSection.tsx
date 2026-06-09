import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" subtitle="About" title="Developer with product instincts.">
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-slate-300 md:grid-cols-2 md:p-8">
        <p>
          I design and build web experiences that blend engineering depth with visual clarity. My focus is creating applications that feel fast, reliable, and polished under real-world load.
        </p>
        <p>
          From architecture and UI systems to performance tuning and deployment, I collaborate closely with teams to ship products users trust and enjoy.
        </p>
      </div>
    </Section>
  );
}
