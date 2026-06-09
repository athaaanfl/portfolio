import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionTone = "primary" | "secondary";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  tone?: SectionTone;
  fullScreen?: boolean;
}>;

const toneStyles: Record<SectionTone, { shell: string; backdrop: string }> = {
  primary: {
    shell: "bg-[#F9F7F7]",
    backdrop:
      "bg-[radial-gradient(circle_at_top_left,rgba(63,114,175,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(17,45,78,0.07),transparent_38%)]",
  },
  secondary: {
    shell: "bg-[#DBE2EF]",
    backdrop:
      "bg-[radial-gradient(circle_at_top_right,rgba(63,114,175,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(17,45,78,0.08),transparent_36%)]",
  },
};

export function Section({ id, title, subtitle, className, children, tone = "primary", fullScreen = true }: SectionProps) {
  const toneStyle = toneStyles[tone];

  return (
    <section id={id} className={cn("relative isolate overflow-hidden border-b border-[#112D4E]/10", toneStyle.shell, className)}>
      <div className={cn("absolute inset-0 -z-10", toneStyle.backdrop)} />
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1600px] flex-col px-6 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-20",
          fullScreen && "min-h-[100svh] justify-start md:min-h-screen md:justify-center",
        )}
      >
        {(title || subtitle) && (
          <div className="mb-10 space-y-3">
            {subtitle && <p className="text-xs uppercase tracking-[0.24em] text-[#3F72AF]">{subtitle}</p>}
            {title && <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#112D4E] md:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
