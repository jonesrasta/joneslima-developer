import type { EducationItem } from "../../../data/education";

interface EducationCardProps {
  item: EducationItem;
}

export function EducationCard({ item }: EducationCardProps) {
  return (
    <article
      className="
        group relative flex h-65 w-65 shrink-0
        snap-start flex-col justify-between
        overflow-hidden
        border border-white/10
        bg-[#071018]/60
        p-6
        backdrop-blur-sm
        transition-colors duration-500
        hover:border-sky-400/30
      "
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 -top-24
          h-48 w-48 rounded-full
          bg-sky-400/10
          opacity-0 blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.18em] text-sky-400/70">
          {item.number}
        </span>

        <span className="font-mono text-xs tracking-[0.12em] text-white/30">
          {item.year}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-8 flex h-16 items-center">
          <img
            src={item.logo}
            alt={`${item.institution} logo`}
            loading="lazy"
            decoding="async"
            className="
              max-h-14 max-w-47.5
              object-contain object-left
              opacity-70
              grayscale
              transition-all duration-500
              group-hover:opacity-100
              group-hover:grayscale-0
            "
          />
        </div>

        <h3
          className="
            max-w-[320px]
            text-xl font-medium
            tracking-[-0.02em]
            text-white
          "
        >
          {item.course}
        </h3>

        <p className="mt-2 text-sm text-white/40">
          {item.institution}
        </p>
      </div>

      {/* Bottom line */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0 h-px w-0
          bg-linear-to-r
          from-transparent
          via-sky-400
          to-transparent
          opacity-70
          transition-all duration-700
          group-hover:w-full
        "
      />
    </article>
  );
}