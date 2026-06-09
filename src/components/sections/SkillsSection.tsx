"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/portfolio";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const SkillsSphere = dynamic(() => import("@/components/3d/SkillsSphereScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />,
});

export function SkillsSection() {
  const { disable3D } = useDeviceProfile();

  return (
    <Section id="skills" subtitle="Capabilities" title="Tools and technologies I ship with.">
      <div className="grid items-center gap-8 md:grid-cols-[1.1fr,1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
              {skill}
            </span>
          ))}
        </div>
        <div className="h-80 overflow-hidden rounded-2xl border border-white/10 bg-[#090e1d]">
          {disable3D ? (
            <div className="flex h-full flex-wrap content-center justify-center gap-2 p-5">
              {skills.slice(0, 8).map((skill) => (
                <span key={skill} className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-100">
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <SkillsSphere tags={skills} />
          )}
        </div>
      </div>
    </Section>
  );
}
