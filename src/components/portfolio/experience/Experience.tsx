
import { experiences } from "../../../data/experience";

import { ExperienceCard } from "./ExperienceCard";
import { ExperienceHeader } from "./ExperienceHeader";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020408] px-6 py-16 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-160 w-160 -translate-x-1/2 rounded-full bg-sky-500/0.025 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <ExperienceHeader />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.15rem] top-0 hidden w-px bg-linear-to-b from-sky-400/30 via-white/0.08 to-transparent md:block"
          />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
