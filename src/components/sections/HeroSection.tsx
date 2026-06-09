"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const HeroNetwork = dynamic(() => import("@/components/3d/HeroNetworkScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-white/5" />,
});

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { disable3D } = useDeviceProfile();

  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Atha Khairi — khairi.tech</p>
          <h1 ref={titleRef} className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Building premium digital experiences with engineering precision.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            Full-stack developer focused on performant products, immersive interfaces, and elegant systems that scale.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex rounded-full border border-cyan-300/70 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Let&apos;s Collaborate
          </motion.a>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#060915] shadow-[0_0_40px_rgba(56,189,248,0.15)] md:h-[480px]">
          {disable3D ? (
            <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.35),transparent_55%),#060915] text-sm text-slate-300">
              Interactive network disabled for performance.
            </div>
          ) : (
            <HeroNetwork />
          )}
        </div>
      </div>
    </section>
  );
}
