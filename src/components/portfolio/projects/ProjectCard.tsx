import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`
  reveal-project
  group
  relative
  overflow-hidden
  border
  border-white/10
  bg-white/0.025
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-sky-500/40
  hover:bg-white/0.04
  md:p-8
`}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-64
          w-64
          rounded-full
          bg-sky-500/5
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-sky-500/10
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Project image */}
        {project.image && (
          <div
            className="
              group/image
              relative
              mb-8
              aspect-video
              overflow-hidden
              border
              border-white/10
              bg-[#071018]
            "
          >
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
                object-top
              "
            />

            {/* Image gradient */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-linear-to-t
                from-[#020408]/70
                via-transparent
                to-transparent
              "
            />

            {/* Image index */}
            {/* <div
              className="
                absolute
                bottom-4
                left-4
                border
                border-white/10
                bg-black/40
                px-2.5
                py-1.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-white/60
                backdrop-blur-md
              "
            >
              {project.number}
            </div> */}

            {/* External indicator */}
            {project.href && (
              <div
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  bg-black/40
                  text-white/70
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover/image:border-sky-400/40
                  group-hover/image:text-sky-400
                "
              >
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </div>
            )}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-6 px-2">
          <span
            className="
              border
              border-sky-500/20
              bg-sky-500/10
              px-2.5
              py-1
              font-mono
              text-xs
              text-sky-400
            "
          >
            {project.number}
          </span>

          <span
            className="
              text-right
              font-mono
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-white/40
            "
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="mt-8 px-3">
          <h3
            className="
              max-w-3xl
              text-3xl
              font-black
              uppercase
              tracking-[-0.04em]
              text-white
              md:text-4xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              font-light
              leading-6
              text-white/60
            "
          >
            {project.description}
          </p>
        </div>

        {/* Problem / Solution */}
        <div
          className="
            mt-8
            grid
            gap-6
            border-t
            border-white/10
            pt-6
            md:grid-cols-2
            px-3
          "
        >
          <div>
            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-sky-400
              "
            >
              // Problem
            </p>

            <p
              className="
                mt-3
                text-sm
                font-light
                leading-6
                text-white/60
              "
            >
              {project.problem}
            </p>
          </div>

          <div>
            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-sky-400
              "
            >
              // Solution
            </p>

            <p
              className="
                mt-3
                text-sm
                font-light
                leading-6
                text-white/60
              "
            >
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2 mb-6 px-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                border
                border-white/10
                bg-white/0.04
                px-2.5
                py-1.5
                font-mono
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-white/60
                transition-colors
                duration-300
                hover:border-sky-400/30
                hover:text-sky-400
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.href && (
          <div className="mt-8">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/link
                inline-flex
                items-center
                gap-3
                border-b
                border-white/20
                pb-2
                font-mono
                text-xs
                uppercase
                tracking-[0.15em]
                text-white/60
                transition-colors
                duration-300
                hover:border-sky-400
                hover:text-sky-400
              "
            >
              <span>View project</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-0.5
                  group-hover/link:-translate-y-0.5
                "
              />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
