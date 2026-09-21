import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll(): void {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", handleScroll);
    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    // Delegação de cliques global para capturar âncoras
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // Se for um link de ID interno (ex: #contact, #work)
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault(); // Bloqueia o salto seco do navegador imediatamente

        const targetElement = document.querySelector(href);

        if (targetElement) {
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80, // Compensa o header fixo
            duration: 1.2,
          });

          // Atualiza a URL sem causar recarregamento ou salto
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Força a atualização do tamanho do documento após o lazy load estabilizar
    const timer = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 700);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleAnchorClick);
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
