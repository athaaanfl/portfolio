import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" tone="primary" subtitle="Contact" title="Let&apos;s build something exceptional together.">
      <div className="grid gap-6 rounded-[2rem] border border-[#3F72AF]/18 bg-white/95 p-6 shadow-[0_18px_50px_rgba(63,114,175,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="space-y-4">
          <p className="max-w-xl text-sm leading-7 text-[#112D4E]/78 md:text-[15px]">
            Open to product collaborations, consulting, and ambitious engineering work that needs a thoughtful implementation partner.
          </p>
          <a
            href="mailto:hello@khairi.tech"
            className="inline-flex rounded-full bg-[#3F72AF] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(63,114,175,0.22)] transition hover:bg-[#315d91]"
          >
            hello@khairi.tech
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {['GitHub', 'LinkedIn', 'Instagram', 'Availability: Open'].map((item) => (
            <div key={item} className="rounded-2xl border border-[#3F72AF]/12 bg-[#DBE2EF]/45 p-4 text-sm font-medium text-[#3F72AF]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
