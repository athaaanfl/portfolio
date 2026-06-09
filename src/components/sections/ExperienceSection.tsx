import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section id="experience" subtitle="Experience" title="Professional journey.">
      <div className="space-y-4">
        {experiences.map((item) => (
          <article key={item.role} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 className="text-lg font-medium text-white">{item.role}</h3>
              <span className="text-sm text-cyan-200">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-cyan-100/90">{item.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
