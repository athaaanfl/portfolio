import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" tone="primary" subtitle="About" title="Story-driven engineering with a sharp product instinct.">
      <div className="grid gap-6 rounded-[2rem] border border-[#3F72AF]/18 bg-white/95 p-6 shadow-[0_18px_50px_rgba(63,114,175,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="space-y-4 text-sm leading-7 text-[#112D4E]/82 md:text-[15px]">
          <p>
            I build software that feels clear, fast, and intentional. My work sits between product thinking and hands-on engineering, so every interface serves a real user need.
          </p>
          <p>
            I enjoy taking ideas from rough concept to polished release, shaping the architecture, interaction design, and implementation details along the way.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#3F72AF]/10 bg-[#DBE2EF]/45 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F72AF]">What I do</p>
            <p className="mt-2 text-sm leading-6 text-[#112D4E]/80">Full-stack product engineering, interfaces, systems, and performance-minded delivery.</p>
          </div>
          <div className="rounded-2xl border border-[#3F72AF]/10 bg-[#DBE2EF]/45 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F72AF]">What drives me</p>
            <p className="mt-2 text-sm leading-6 text-[#112D4E]/80">Turning complex problems into simple digital experiences people want to return to.</p>
          </div>
          <div className="rounded-2xl border border-[#3F72AF]/10 bg-[#DBE2EF]/45 p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3F72AF]">How I work</p>
            <p className="mt-2 text-sm leading-6 text-[#112D4E]/80">I move between design, development, and deployment with a bias for clarity, speed, and maintainability.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
