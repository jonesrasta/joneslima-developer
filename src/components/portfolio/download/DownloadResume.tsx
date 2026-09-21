import { useState } from "react";

import { Download, Check, Loader2, FileText, Sparkles } from "lucide-react";

import { TechButton } from "../../ui/TechButton";

export function ResumeCTASection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleDownload = () => {
    if (status !== "idle") return;

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3500);
    }, 1500);
  };

  return (
    <section
      id="download"
      className="
        relative
        overflow-hidden
        bg-[#020408]
        px-6
        py-16
        lg:px-8
      "
    >
      <div className="group relative mx-auto max-w-5xl">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-1
            bg-linear-to-r
            from-sky-500/30
            via-blue-600/20
            to-sky-400/30
            opacity-50
            blur-xl
            transition
            duration-700
            group-hover:opacity-100
          "
        />

        {/* Card */}
        <div
          className="
            relative
            overflow-hidden
            border
            border-white/10
            bg-[#020b14]/40
            p-8
            shadow-[0_20px_50px_rgba(0,0,0,0.8)]
            backdrop-blur-2xl
            transition-all
            duration-500
            group-hover:border-sky-400/50
            md:p-12
            lg:p-16
          "
        >
          {/* Background light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -mr-20
              -mt-20
              right-0
              top-0
              h-96
              w-96
              rounded-full
              bg-sky-500/5
              blur-2xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-start
              justify-between
              gap-8
              md:flex-row
              md:items-center
            "
          >
            {/* Content */}
            <div className="max-w-xl space-y-4">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-sky-400/20
                  bg-sky-500/10
                  px-3
                  py-1
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-sky-400
                "
              >
                <Sparkles size={12} className="animate-pulse" aria-hidden="true" />

                <span>Available for Q3/Q4 Projects</span>
              </div>

              <h2
                className="
                  text-3xl
                  font-black
                  uppercase
                  tracking-tight
                  text-white
                  md:text-5xl
                "
              >
                Ready to scale
                <br />
                <span
                  className="
                    bg-linear-to-r
                    from-sky-400
                    via-blue-300
                    to-white
                    bg-clip-text
                    text-transparent
                  "
                >
                  your engineering?
                </span>
              </h2>

              <p
                className="
                  font-sans
                  text-sm
                  leading-relaxed
                  text-white/60
                  md:text-base
                "
              >
                Download the complete PDF resume featuring my experience, technical stack, product work, and engineering background.
              </p>
            </div>

            {/* CTA */}
            <div
              className="
                flex
                w-full
                flex-col
                items-stretch
                md:w-auto
                md:items-center
              "
            >
              <TechButton href="/jones_lima.pdf" download="jones_lima.pdf" onClick={handleDownload}>
                <span className="flex items-center gap-2">
                  <FileText size={18} strokeWidth={2} aria-hidden="true" />

                  <span className="text-xs">
                    {status === "idle" && "Download CV"}
                    {status === "loading" && "Generating File..."}
                    {status === "success" && "Downloaded Successfully!"}
                  </span>
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-10
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-black/10
                    transition-transform
                    duration-300
                    group-hover/btn:translate-x-1
                  "
                >
                  {status === "idle" && <Download size={16} strokeWidth={2.5} aria-hidden="true" />}

                  {status === "loading" && <Loader2 size={16} strokeWidth={2.5} className="animate-spin" aria-hidden="true" />}

                  {status === "success" && <Check size={16} strokeWidth={3} className="text-emerald-950" aria-hidden="true" />}
                </span>
              </TechButton>

              <span
                className="
                  mt-3
                  text-center
                  font-mono
                  text-[10px]
                  tracking-wider
                  text-white/40
                  md:text-left
                "
              >
                PDF • Recently updated • ~107 KB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
