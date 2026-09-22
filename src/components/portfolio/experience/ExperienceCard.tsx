import { ArrowUpRight } from "lucide-react";

import type { ExperienceItem } from "../../../data/experience";

import { StackItem } from "./StackItem";

type ExperienceCardProps = {
  experience: ExperienceItem;
  index: number;
};

export function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <article className="group relative md:pl-16">
      <div
        aria-hidden="true"
        className="absolute left-[0.85rem] top-10 hidden h-2.5 w-2.5 rounded-full border border-sky-400/40 bg-[#020408] shadow-[0_0_0_5px_#020408] transition-all duration-500 group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] md:block"
      />

      <div className="relative overflow-hidden border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/0.03 sm:p-6 md:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-sky-400/0.04 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:gap-16">
          {/* Main content */}
          <div>
            <div className="mb-7 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:border-sky-400/20 group-hover:bg-white/0.06">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold tracking-tight text-white sm:text-lg md:text-xl">
                    {experience.company}
                  </h3>

                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-white/35 sm:text-[10px]">
                    {experience.role}
                  </p>
                </div>
              </div>

              <span className="shrink-0 pl-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/30 sm:pt-1 sm:text-[10px]">
                {experience.period}
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              {experience.description}
            </p>

            {experience.current && (
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-sky-400/70 sm:mt-7">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400"
                />
                Currently here
              </div>
            )}
          </div>

          {/* Technology */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                Technology
              </span>

              <div className="flex flex-wrap gap-2">
                {experience.stack.map((stack) => (
                  <StackItem key={stack.name} stack={stack} />
                ))}
              </div>
            </div>

            <div className="mt-7 sm:mt-8">
              <div className="my-6 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent opacity-40 sm:my-8" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-white/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
