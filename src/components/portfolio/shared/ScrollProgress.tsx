import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0, // 0 = Instantâneo e sem atraso na resposta do scroll
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div aria-hidden="true" className="fixed left-0 top-0 z-[100] h-[2px] w-full bg-white/10">
      <div
        ref={progressBarRef}
        className="h-full origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
