"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Section id="projects" subtitle="Selected Work" title="High-impact projects with measurable outcomes.">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_25px_40px_-30px_rgba(34,211,238,0.4)]"
            whileHover={{ rotateX: -6, rotateY: 8, y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-300/25 px-2.5 py-1 text-xs text-cyan-100">
                  {tech}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_45%)] opacity-0 transition group-hover:opacity-100" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
