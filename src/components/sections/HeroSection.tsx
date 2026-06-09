"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import portraitImage from "../../../portfolioProfile.png";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = ["GitHub", "LinkedIn", "Instagram", "Twitter/X"];

export function HeroSection() {
  const { reducedMotion } = useDeviceProfile();

  const introVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const portraitVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
    },
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-[#112D4E]/10 bg-[#F9F7F7] text-[#112D4E]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(63,114,175,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(17,45,78,0.08),transparent_35%)]" />
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pt-4 pb-0 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 rounded-full border border-[#112D4E]/10 bg-white/70 px-4 py-3 shadow-[0_12px_40px_rgba(17,45,78,0.08)] backdrop-blur-xl sm:px-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#112D4E] shadow-[0_8px_20px_rgba(17,45,78,0.08)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.14)]" />
            Available for New Opportunities
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#112D4E]/75 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-[#112D4E]">
                {link.label}
              </a>
            ))}
          </nav>

          <motion.a
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#3F72AF] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_28px_rgba(63,114,175,0.28)] transition hover:bg-[#315d91]"
          >
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </motion.a>
        </header>

        <div className="relative flex flex-1 flex-col px-1 pb-0 pt-8 sm:px-2 lg:px-0 lg:pt-10">
          <div className="pointer-events-none absolute inset-x-0 top-[6%] z-10 hidden justify-center md:flex">
            <div className="relative flex items-end justify-center text-center leading-none tracking-[-0.08em] text-[#112D4E]">
              <span
                className="select-none text-[clamp(4.5rem,11vw,10rem)] font-black uppercase text-transparent [-webkit-text-stroke:2px_#112D4E]"
                style={{ textShadow: "0 0 0 rgba(0,0,0,0)" }}
              >
                ATHA
              </span>
              <span className="ml-[0.2em] select-none text-[clamp(4.5rem,11vw,10rem)] font-black uppercase text-[#112D4E] opacity-95">
                KAIRI
              </span>
            </div>
          </div>

          <div className="relative min-h-[calc(100svh-8rem)] md:hidden">
            <div className="relative z-20 pt-2">
              <div className="text-center">
                <h1 className="select-none text-[clamp(2.45rem,12vw,4.4rem)] font-black uppercase tracking-[-0.08em] text-[#112D4E]">
                  Atha Kairi
                </h1>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#3F72AF]">
                  Software Developer
                </p>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex w-full max-w-[20rem] items-center gap-2 rounded-full border border-[#3F72AF]/16 bg-white/88 p-2 shadow-[0_16px_34px_rgba(17,45,78,0.08)] backdrop-blur-xl">
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    href="#projects"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-[#3F72AF] px-4 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(63,114,175,0.2)]"
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-[#3F72AF]/18 bg-white px-4 py-3 text-sm font-medium text-[#3F72AF]"
                  >
                    Download CV
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-[-1rem] top-[5.5rem] z-10 flex items-end justify-center">
              <motion.div
                variants={portraitVariants}
                initial="hidden"
                animate={reducedMotion ? { opacity: 1, y: 0, scale: 1 } : "visible"}
                className="relative flex h-full w-full items-end justify-center"
              >
                <div className="absolute inset-x-0 bottom-[-0.5rem] h-[28%] rounded-full bg-[#112D4E]/16 blur-3xl" />
                <Image
                  src={portraitImage}
                  alt="Portrait of Atha Kairi"
                  priority
                  className="relative z-10 h-full w-[min(168vw,48rem)] origin-bottom translate-y-1 select-none object-contain object-bottom scale-[1.4] drop-shadow-[0_34px_60px_rgba(17,45,78,0.24)]"
                  sizes="(max-width: 640px) 168vw, 48rem"
                />
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden justify-center md:flex">
            <motion.div
              variants={portraitVariants}
              initial="hidden"
              animate={reducedMotion ? { opacity: 1, y: 0, scale: 1 } : "visible"}
              className="relative w-[min(102vw,48rem)] sm:w-[min(94vw,54rem)] lg:w-[min(66vw,68rem)]"
            >
              <div className="absolute inset-x-8 bottom-0 h-14 rounded-full bg-[#112D4E]/18 blur-3xl sm:inset-x-12 sm:h-16" />
              <Image
                src={portraitImage}
                alt="Portrait of Atha Kairi"
                priority
                className="relative z-10 h-auto w-full select-none object-contain drop-shadow-[0_40px_70px_rgba(17,45,78,0.32)]"
                sizes="(max-width: 640px) 96vw, (max-width: 1024px) 72vw, 68rem"
              />
            </motion.div>
          </div>

          <motion.div
            variants={introVariants}
            initial="hidden"
            animate={reducedMotion ? { opacity: 1, y: 0 } : "visible"}
            className="relative z-30 mt-8 hidden w-full rounded-[1.75rem] border border-[#3F72AF]/18 bg-white/90 p-5 shadow-[0_18px_50px_rgba(63,114,175,0.08)] backdrop-blur-xl md:absolute md:bottom-8 md:left-4 md:mt-0 md:block md:max-w-[18rem] sm:max-w-[20rem] lg:left-10 lg:bottom-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3F72AF]">
              Software Developer
            </p>
            <p className="mt-3 text-sm leading-6 text-[#112D4E]/82 sm:text-[15px]">
              Building scalable applications, crafting digital experiences, and solving real-world problems through code.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#3F72AF] px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(63,114,175,0.22)] transition hover:bg-[#315d91]"
              >
                View Projects →
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#3F72AF]/25 bg-white px-4 py-2.5 text-sm font-medium text-[#3F72AF] transition hover:border-[#3F72AF]/40 hover:bg-[#3F72AF]/8"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={introVariants}
            initial="hidden"
            animate={reducedMotion ? { opacity: 1, y: 0 } : "visible"}
            className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex lg:right-8 xl:right-12"
          >
            {socialLinks.map((label) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#3F72AF]/18 bg-white/90 px-4 py-2 text-sm font-medium text-[#3F72AF] shadow-[0_12px_28px_rgba(63,114,175,0.08)] backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-[#3F72AF]" />
                {label}
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={reducedMotion ? { opacity: 1 } : { y: [0, 6, 0], opacity: 1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-4 left-1/2 z-30 hidden -translate-x-1/2 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-[#112D4E]/55 md:block sm:text-xs"
          >
          </motion.div>
          <div className="pointer-events-none absolute left-[8%] top-[22%] hidden h-16 w-16 rounded-full border border-[#3F72AF]/20 bg-white/40 shadow-[0_0_0_22px_rgba(63,114,175,0.05)] lg:block" />
        </div>
      </div>
    </section>
  );
}
