import { ArrowUpRight } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Vue", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Web3",
    items: ["Solidity", "Ethers.js", "Web3.js"],
  },
  {
    category: "Engineering",
    items: ["Git", "CI/CD", "Testing", "Architecture"],
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        bg-[#020408]
        relative
        overflow-hidden
        px-6
        py-24
        sm:py-32
        lg:px-8
        lg:py-40
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            font-mono
            text-[14px]
            uppercase
            tracking-[0.2em]
            text-white/35
            sm:text-xs
          "
        >
          <span>06 / About</span>
          <span className="hidden sm:block">Profile & capabilities</span>
        </div>

        {/* Main */}
        <div
          className="
            mt-8
            grid
            gap-14
            lg:mt-20
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-24
          "
        >
          {/* Photo */}
          <div>
            <div
              className="
                group
                relative
                aspect-4/5
                max-w-md
                overflow-hidden
                border-[0.1px]
                border-white/20
              "
            >
              <img
                src="/jones.png"
                alt="Portrait of Jones Lima"
                className="
                  h-full
                  w-full
                  object-cover
                  md:grayscale
                  transition-all
                  duration-700
                  md:group-hover:scale-[1.03]
                  md:group-hover:grayscale-0
                "
              />

              {/* Image overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* Corner label */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  px-3
                  py-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/60
                  backdrop-blur-md
                "
              >
                São Paulo · Brazil
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-sky-400
                sm:text-xs
              "
            >
              About me
            </p>

            <h2
              id="about-title"
              className="
                mt-6
                max-w-4xl
                text-[clamp(2.7rem,6vw,5.5rem)]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.06em]
                text-white
              "
            >
              I build with
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
                purpose.
              </span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5">
              <p
                className="
                  text-base
                  font-light
                  leading-7
                  text-white/60
                  lg:text-lg
                "
              >
                I'm a Full Stack Developer focused on building digital
                products that combine thoughtful interfaces, solid engineering
                and real-world usability.
              </p>

              <p
                className="
                  text-sm
                  font-light
                  leading-7
                  text-white/40
                  lg:text-base
                "
              >
                My work sits between product thinking, design and technology —
                from the first idea and interface architecture to development,
                deployment and continuous improvement.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-14">
              {/* Skills header */}
              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-between
                  pb-4
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  Core skills
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="text-white/20"
                />
              </div>

              {/* Skills separator */}
              <div
                aria-hidden="true"
                className="
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-sky-400/80
                  to-transparent
                  opacity-40
                "
              />

              {/* Skills list */}
              <div>
                {skills.map((skill, index) => (
                  <div key={skill.category}>
                    <div
                      className="
                        grid
                        gap-3
                        py-5
                        sm:grid-cols-[130px_1fr]
                        sm:gap-8
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-sky-400/70
                        "
                      >
                        {skill.category}
                      </span>

                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="
                              text-sm
                              font-light
                              text-white/55
                              transition-colors
                              hover:text-white
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Separator between skills */}
                    {index < skills.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="
                          h-px
                          bg-linear-to-r
                          from-transparent
                          via-sky-400/80
                          to-transparent
                          opacity-40
                        "
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Optional link */}
            <a
              href="#contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                font-mono
                text-xs
                uppercase
                tracking-[0.16em]
                text-white/50
                transition-colors
                duration-300
                hover:text-sky-400
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-sky-400
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#020408]
              "
            >
              <span>Let's work together</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}