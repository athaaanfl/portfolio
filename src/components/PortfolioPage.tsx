"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const BackgroundScene = dynamic(() => import("@/components/3d/BackgroundScene"), {
  ssr: false,
});

export function PortfolioPage() {
  const { disable3D } = useDeviceProfile();

  return (
    <div className="relative overflow-hidden bg-[#04050d]">
      {!disable3D && (
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-75">
          <Suspense fallback={null}>
            <BackgroundScene />
          </Suspense>
        </div>
      )}
      <HeroSection />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
