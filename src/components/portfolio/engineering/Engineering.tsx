import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { engineeringItems } from "../../../data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";
import { EngineeringCard } from "./EngineeringCard";

gsap.registerPlugin(ScrollTrigger);

export function Engineering() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".reveal-engineering");

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
    <section ref={sectionRef} id="engineering" className="px-6 bg-[#020408] py-10 lg:px-8 lg:py-20 relative z-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="05">Engineering</SectionLabel>

        {/* Mudado de grid colunas fixas para uma estrutura empilhada em mobile e lado a lado limpa no LG */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna da Esquerda (Título Fixo com segurança) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl uppercase">
              Good software <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-indigo-200 italic">
                is more than code.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-6 text-white/50 font-light max-w-md">
              A robust architecture isn't just built on syntax—it's forged through maintainability, scalability, and relentless precision.
            </p>
          </div>

          {/* Coluna da Direita (Cards) */}
          <div className="lg:col-span-7 flex flex-col w-full">
            {engineeringItems.map((item) => (
              <div key={item.id} className="reveal-engineering w-full">
                <EngineeringCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
