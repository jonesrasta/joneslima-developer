import { ArrowUpRight, Mail } from "lucide-react";
import { TechButton } from "../../ui/TechButton";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        bg-[#020408]
        relative
        overflow-hidden
        px-6
        sm:py-10
        lg:px-8
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            py-14
            sm:py-20
            lg:py-28
          "
        >
          {/* Top meta */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-6
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/35
              sm:text-xs
            "
          >
            <span>05 / Contact</span>

            <span className="hidden sm:block">Start a conversation</span>
          </div>

          {/* Main content */}
          <div className="mt-12 sm:mt-16">
            <h2
              id="contact-title"
              className="
                max-w-5xl
                text-[clamp(3rem,8vw,7rem)]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.065em]
                text-white
              "
            >
              Have a problem
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
                worth solving?
              </span>
            </h2>
          </div>

          {/* Bottom content */}
          <div
            className="
              mt-12
              flex
              flex-col
              gap-10
              sm:mt-16
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* Description */}
            <div className="max-w-lg">
              <p
                className="
                  text-[15px]
                  font-light
                  leading-7
                  text-white/50
                  sm:text-base
                  lg:text-lg
                "
              >
                Have an idea, product or technical challenge? Let's talk about what you're building and find the right way to move it
                forward.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-4">
              <TechButton href="mailto:hello@example.com">
                <Mail size={17} strokeWidth={1.7} />

                <span>Let's talk</span>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-black/10
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </TechButton>

              <span
                className="
                  pl-2
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-white/25
                "
              >
                Available for selected projects
              </span>
            </div>
          </div>

          {/* Decorative index */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-6
              md:-bottom-14
              right-3
              
              select-none
              font-black
              text-[10rem]
              leading-none
              tracking-[-0.08em]
              text-[#ffffff0a]
              sm:text-[12rem]
              lg:text-[16rem]
              -z-10
            "
          >
            05
          </div>
        </div>
      </div>
    </section>
  );
}
