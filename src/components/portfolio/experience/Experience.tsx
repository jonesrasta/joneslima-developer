import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../../data/experience";
import { SectionLabel } from "../shared/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Linha central acendendo com o scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.4,
            },
          }
        );
      }

      // Animação de revelação dos marcos da timeline
      const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="bg-[#020408] px-6 py-10 lg:px-8 lg:py-20 relative z-10">
      <div className="mx-auto max-w-5xl">
        <SectionLabel number="03">Professional Journey</SectionLabel>

        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-200 italic">& Growth.</span>
          </h2>
          <p className="mt-6 text-sm leading-6 text-white/50 font-light max-w-xl">
            A chronological breakdown of system architecture milestones, engineering roles, and technical evolution.
          </p>
        </div>

        {/* Timeline Estruturada */}
        <div className="relative pl-8 md:pl-12">
          {/* Linha vertical de fundo (trilho estático) */}
          <div className="absolute left-[3px] md:left-[3px] top-0 w-[2px] h-full bg-white/10" />

          {/* Linha vertical neon animada */}
          <div
            ref={lineRef}
            className="absolute left-[3px] md:left-[3px] top-0 w-[2px] h-full bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-500 z-10 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-node relative pl-6 md:pl-10 group">
                {/* Ponto de conexão (Node) com efeito radar/glow */}
                <div className="absolute -left-[5px] top-2 w-3.5 h-3.5 rounded-full bg-[#020408] border-2 border-sky-400 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-300 z-20 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />

                {/* Badge do Ano Flutuante */}
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-[0.2em] bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded">
                    // {exp.year}
                  </span>
                  {exp.company && <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">@{exp.company}</span>}
                </div>

                {/* Card Editorial da Timeline */}
                <div className="p-6 md:p-8 border border-white/10 transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-white/[0.04] group-hover:-translate-y-1">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60 font-light mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-white/70 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Marcador de Momento Atual (Today) */}
            <div className="timeline-node relative pl-6 md:pl-10 group">
              <div className="absolute -left-[5px] top-2 w-3.5 h-3.5 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,1)] z-20 animate-pulse" />

              <div className="mb-3">
                <span className="font-mono text-xs font-bold text-sky-300 uppercase tracking-[0.2em] bg-sky-500/20 border border-sky-500/40 px-3 py-1 rounded">
                  // PRESENT DAY
                </span>
              </div>

              <div className="p-6 md:p-8 border border-sky-500/30 bg-sky-500/[0.03]">
                <h3 className="text-2xl font-black uppercase tracking-tight text-sky-300 mb-3">Jones Lima</h3>
                <p className="text-sm leading-relaxed text-white/70 font-light">
                  Building modern digital experiences, scalable products and continuous evolution in software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
