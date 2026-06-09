"use client";

import { Section } from "@/components/ui/Section";
import { skills } from "@/data/portfolio";

const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS", "Laravel"] },
  { title: "Data & Cloud", items: ["PostgreSQL", "MySQL", "MongoDB", "Docker"] },
];

export function SkillsSection() {

  return (
    <Section id="skills" tone="secondary" subtitle="Capabilities" title="A practical stack for modern product delivery.">
      <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[1.75rem] border border-[#3F72AF]/18 bg-white/95 p-5 shadow-[0_14px_40px_rgba(63,114,175,0.08)]">
              <p className="text-xs uppercase tracking-[0.22em] text-[#3F72AF]">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-[#3F72AF]/15 bg-[#DBE2EF]/50 px-3 py-1.5 text-sm text-[#112D4E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[1.75rem] border border-[#3F72AF]/18 bg-white/95 p-6 shadow-[0_14px_40px_rgba(63,114,175,0.08)]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3F72AF]">Toolbox</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-[#3F72AF]/15 bg-[#DBE2EF]/45 px-4 py-2 text-sm text-[#112D4E]">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-[#3F72AF]/10 bg-[#DBE2EF]/45 p-4 text-sm leading-6 text-[#112D4E]/80">
            Focused on shipping reliable interfaces, scalable APIs, and maintainable systems without overcomplicating the stack.
          </div>
        </div>
      </div>
    </Section>
  );
}
