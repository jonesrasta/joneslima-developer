export function ExperienceHeader() {
  return (
    <header className="mb-20 max-w-3xl lg:mb-28">
      <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-sky-400/70">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        />

        <span className="text-sm">Experience</span>
      </div>

      <h2 className="text-[clamp(2.4rem,6vw,4rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-white">
        Experience
        <br />

        <span className="bg-linear-to-r from-white via-sky-300 to-blue-500 bg-clip-text text-transparent italic">
          in practice.
        </span>
      </h2>

      <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
        A selection of roles, products and engineering work across modern web technologies.
      </p>
    </header>
  );
}