import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section id="experience" tone="secondary" subtitle="Experience" title="Professional journey mapped through real product delivery.">
      <div className="space-y-4">
        {experiences.map((item) => (
          <article key={item.role} className="rounded-[1.75rem] border border-[#3F72AF]/18 bg-white/95 p-5 shadow-[0_14px_40px_rgba(63,114,175,0.08)] md:p-6">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#112D4E]">{item.role}</h3>
              <span className="text-sm font-medium text-[#3F72AF]">{item.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-[#112D4E]/72">{item.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#112D4E]/78">{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
