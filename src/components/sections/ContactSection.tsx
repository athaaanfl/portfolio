import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" subtitle="Contact" title="Let&apos;s build something exceptional.">
      <div className="rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 text-center">
        <p className="mx-auto mb-5 max-w-xl text-slate-200">
          Open to product collaborations, consulting, and ambitious engineering challenges.
        </p>
        <a
          href="mailto:hello@khairi.tech"
          className="inline-flex rounded-full border border-cyan-200/70 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-200/10"
        >
          hello@khairi.tech
        </a>
      </div>
    </Section>
  );
}
