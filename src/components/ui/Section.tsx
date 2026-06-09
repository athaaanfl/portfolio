import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 py-20 md:px-10", className)}>
      {(title || subtitle) && (
        <div className="mb-10 space-y-3">
          {subtitle && <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{subtitle}</p>}
          {title && <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
