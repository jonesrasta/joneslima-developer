import { useRef, lazy, Suspense } from "react";

import { Navigation } from "./navigation/Navigation";
import { Hero } from "./hero/Hero";
import { Footer } from "./footer/Footer";
import { ScrollProgress } from "./shared/ScrollProgress";

import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ResumeCTASection } from "./download/DownloadResume";
import { About } from "./about/About";
import { Education } from "./education/Education";


const Projects = lazy(() => import("./projects/Projects").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("./experience/Experience").then((m) => ({ default: m.Experience })));
const Engineering = lazy(() => import("./engineering/Engineering").then((m) => ({ default: m.Engineering })));
const Contact = lazy(() => import("./contact/Contact").then((m) => ({ default: m.Contact })));

export function Portfolio() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useSmoothScroll();
  useScrollReveal(portfolioRef);

  return (
    <div ref={portfolioRef} className="relative min-h-screen bg-[#020408] text-white selection:bg-sky-500 selection:text-black">
      {/* Efeito de luzes azuis interativas no scroll */}

      <ScrollProgress />

      <Navigation />

      <main className="relative z-10">
        <Hero />

        <Suspense fallback={null}>
          <Projects />
          <Education />
          <Engineering />
          <Experience />
          <About />
          <ResumeCTASection />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
