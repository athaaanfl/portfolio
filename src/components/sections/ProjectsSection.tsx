"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Section id="projects" tone="primary" subtitle="Selected Work" title="Projects designed to solve real problems and show clear results.">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[1.6rem] border border-[#3F72AF]/18 bg-white/95 p-4 shadow-[0_18px_40px_rgba(63,114,175,0.08)] sm:p-5"
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <div className="mb-4 aspect-[16/10] rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(63,114,175,0.22),rgba(219,226,239,0.76))] sm:rounded-[1.35rem]" />
            <h3 className="text-[1.03rem] font-semibold tracking-[-0.02em] text-[#112D4E] sm:text-lg">{project.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#112D4E]/78 sm:mt-3">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-[#3F72AF]/15 bg-[#DBE2EF]/50 px-2.5 py-1 text-xs text-[#3F72AF]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm font-medium text-[#3F72AF] sm:mt-5">
              <span>View case</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_20%_20%,rgba(63,114,175,0.14),transparent_45%)] opacity-0 transition group-hover:opacity-100" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
