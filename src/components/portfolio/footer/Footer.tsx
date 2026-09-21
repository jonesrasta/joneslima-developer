import { CheckCheckIcon, Mail, ArrowUpRight, Cpu } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/seu-usuario", // Substitua pelo seu link real
    icon: CheckCheckIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/seu-usuario", // Substitua pelo seu link real
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020408] relative px-6 pb-12 pt-8 lg:px-8 overflow-hidden">
      <div className="my-8 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent opacity-40" />

      {/* Glow sutil inferior para dar profundidade */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-100 h-25 bg-sky-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between relative z-10">
        {/* Lado Esquerdo: Copyright & Stack Status */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 font-mono text-[11px]">
          <p className="text-white/60">© {currentYear} — Jones de Lima</p>
          <span className="hidden sm:inline text-white/25">•</span>
          <div className="flex items-center gap-2 text-white/40">
            <Cpu size={12} className="text-sky-400" />
            <span>Full Stack Engineer & UI Architect</span>
          </div>
        </div>

        {/* Lado Direito: Links Sociais com Micro-interações */}
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em]">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-white/60
                  hover:text-sky-400
                  transition-all
                  duration-300
                "
              >
                <IconComponent size={14} className="text-white/40 group-hover:text-sky-400 transition-colors" />
                <span>{link.label}</span>
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white/30 group-hover:text-sky-400"
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
