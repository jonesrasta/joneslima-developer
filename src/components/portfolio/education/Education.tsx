import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { education } from "../../../data/education";
import { EducationCard } from "./EducationCard";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden bg-[#020408]"
    >
      <div className="flex py-16 items-center">
        <div className="w-full">
          {/* Header */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              // 04 — EDUCATION
            </span>

            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
              Always
              <br />
              <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-200 bg-clip-text italic text-transparent">
                learning.
              </span>
            </h2>
          </div>

          {/* Horizontal track */}
          <div className="mt-10 overflow-visible">
            <div
              ref={trackRef}
              className="
                flex w-max gap-4
                pl-6
                lg:pl-[max(2rem,calc((100vw-80rem)/2))]
              "
            >
              {education.map((item) => (
                <EducationCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}