import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { TechButton } from "../../ui/TechButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move tracker para o glow dinâmico
  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; // intensidade do movimento
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".hero-animate");

      if (reducedMotion) {
        gsap.set(elements, {
          y: 0,
          opacity: 1,
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, "-=0.45")
        .fromTo(".hero-description", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.65")
        .fromTo(".hero-actions", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.45")
        .fromTo(".hero-scroll", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.25");
    }, hero);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      id="work"
      aria-labelledby="hero-title"
      className="
        relative z-10 flex min-h-[88svh] items-end
        overflow-hidden px-6 pb-12 pt-32 bg-[#020408]
        sm:pb-16
        lg:px-8 lg:pb-24
      "
    >
      {/* Atmospheric light reativo ao mouse (Glow Premium) */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
        className="
          pointer-events-none absolute
          right-[-20%] top-[5%]
          h-88 w-88
          rounded-full
          bg-linear-to-br from-sky-500/20 via-blue-600/10 to-transparent
          blur-[60px]
          md:h-180 md:w-180 md:blur-[120px]
          transition-transform duration-300 ease-out
          will-change-transform
        "
      />

      {/* Segundo ponto de luz secundário para dar profundidade (estilo Web3/MetaMask) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[-10%] bottom-[5%]
          h-100 w-100
          rounded-full
          bg-indigo-500/5
          blur-[100px]
        "
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl relative z-10">
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <div className="hero-animate hero-eyebrow mb-7 mt-10">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-sky-400/30
                bg-white/[0.035]
                px-3.5 py-2
                font-mono text-[10px]
                uppercase tracking-[0.2em]
                text-white/50
                backdrop-blur-sm
                sm:text-xs
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1.5 w-1.5 rounded-full
                  bg-sky-400
                  shadow-[0_0_12px_rgba(56,189,248,0.8)]
                "
              />
              FullStack Engineer
            </span>
          </div>

          {/* Main title */}
          <h1
            id="hero-title"
            className="
    hero-animate hero-title
    max-w-260
    text-[clamp(2.9rem,10vw,6.5rem)]
    font-black
    uppercase
    leading-[0.86]
    tracking-[-0.065em]
    text-white
  "
          >
            I build
            <br />
            <span
              className="
      bg-linear-to-r
      from-white
      via-sky-300
      to-blue-500
      bg-clip-text
      text-transparent
    "
            >
              digital
              <br /> 
              products
            </span>
            <br />
            from idea
            <br />
            to reality.
          </h1>

          {/* Bottom content */}
          <div
            className="
              hero-animate hero-actions
              mt-9 flex
              max-w-4xl
              flex-col gap-7
              sm:mt-10
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-12
            "
          >
            {/* Description */}
            <div className="hero-animate hero-description max-w-xl">
              <p
                className="
                  text-[15px]
                  font-light
                  leading-7
                  text-white/55
                  sm:text-base
                  sm:leading-7
                  lg:text-lg
                "
              >
                I turn ideas into digital products combining product thinking, interface design, engineering and performance.
              </p>
            </div>
            <TechButton className="w-62 py-4" href="#projects">
              Explore work
            </TechButton>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: reducedMotion ? "auto" : "smooth",
                block: "start",
              });
            }}
            className="
    hero-animate hero-scroll
    mt-6
    inline-flex
    min-h-10
    items-center
    gap-3
    font-mono
    text-[10px]
    uppercase
    tracking-[0.2em]
    text-white/30
    transition-colors
    duration-300
    hover:text-sky-400
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-sky-400
    focus-visible:ring-offset-4
    focus-visible:ring-offset-[#020408]
    sm:mt-16
  "
          >
            <span
              aria-hidden="true"
              className="
      flex h-7 w-7
      items-center justify-center
      rounded-full
      border border-white/10
      transition-all
      duration-300
    "
            >
              <ArrowDown size={16} strokeWidth={2} />
            </span>

            <span>Scroll down to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
}
