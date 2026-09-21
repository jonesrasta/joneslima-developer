import { useEffect, type RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;

    if (!container || reducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".reveal-block");

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 32,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, container);

    return () => {
      context.revert();
    };
  }, [containerRef, reducedMotion]);
}
