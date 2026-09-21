import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../../data/portfolio";
import { ProjectCard } from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".reveal-project");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 40,
            opacity: 0,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 65%",
              scrub: 0.3,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="bg-[#020408] px-6 py-18 lg:px-8 lg:py-24 relative z-10 overflow-hidden">
      {/* Glow atmosférico sutil no fundo mantendo a cor #020408 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-5%] top-[15%]
          h-[22rem] w-[22rem]
          rounded-full
          bg-gradient-to-br from-sky-500/10 via-blue-600/5 to-transparent
          blur-[120px]
          md:h-[38rem] md:w-[38rem] md:blur-[160px]
        "
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-3">// 01 — SELECTED WORK</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Products, systems <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-indigo-200 italic">
              and digital experiences.
            </span>
          </h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}