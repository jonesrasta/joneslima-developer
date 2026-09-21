import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Experience", href: "#experience" },
  { label: "Download", href: "#download" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#work");

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    event.stopPropagation();

    // Work deve sempre voltar ao topo absoluto da Home
    if (href === "#work") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", window.location.pathname + window.location.search);

      setActiveSection("#work");
      setIsOpen(false);

      return;
    }

    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) {
      return;
    }
    const offset = 60;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname + window.location.search);

    setActiveSection(href);
    setIsOpen(false);
  };

  // Monitora qual seção está visível para atualizar a seleção no scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navigationItems.map((item) => item.href);
      const scrollPosition = window.scrollY + 160;

      for (const sectionHref of sections) {
        const element = document.querySelector(sectionHref);

        if (element instanceof HTMLElement) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionHref);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Efeito de background glassmorphism no scroll do Header
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 40) {
        headerRef.current.classList.add("bg-black/60", "backdrop-blur-md", "py-4");
        headerRef.current.classList.remove("py-6");
      } else {
        headerRef.current.classList.remove("bg-black/60", "backdrop-blur-md", "py-4");
        headerRef.current.classList.add("py-6");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação GSAP do menu mobile com stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          pointerEvents: "auto",
        });

        if (linksRef.current) {
          const links = linksRef.current.querySelectorAll(".mobile-link");

          gsap.fromTo(
            links,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              delay: 0.2,
              ease: "power3.out",
            }
          );
        }
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power4.in",
          pointerEvents: "none",
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition-all duration-300 px-5 lg:px-6 py-6">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#work" onClick={(event) => handleNavigation(event, "#work")} className="flex items-center">
            <img src="/logo/logo-jones.svg" alt="Jones Lima Afonso" className="h-8 w-auto" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-6 md:flex list-none m-0 p-0">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <li key={item.href} className="relative pt-3">
                  {isActive && (
                    <span className="absolute top-0 left-0 w-full h-px bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  )}

                  <a
                    href={item.href}
                    onClick={(event) => handleNavigation(event, item.href)}
                    className="
    text-xs
    font-mono
    uppercase
    tracking-[0.16em]
    text-white/70
    hover:text-white
    transition-colors
    block
  "
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              className="
                group
                hidden
                lg:inline-flex
                items-center
                gap-2
                text-xs
                font-mono
                uppercase
                tracking-[0.14em]
                text-white
                bg-white/5
                border
                border-white/10
                px-4
                py-2
                rounded-full
                hover:bg-sky-400
                hover:text-black
                transition-all
              "
            >
              <span>Let's talk</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Menu Hambúrguer */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none relative z-50 p-1"
            >
              <div className="relative w-9 h-3 flex flex-col justify-between">
                <span
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? "top-1/2 -translate-y-1/2 rotate-45 bg-sky-400" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? "top-1/2 -translate-y-1/2 -rotate-45 bg-sky-400" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu Drawer */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-2xl z-40 flex flex-col justify-center px-8 opacity-0 pointer-events-none md:hidden"
        style={{ transform: "translateY(-100%)" }}
      >
        <div ref={linksRef} className="flex flex-col gap-4 mt-8">
          <span className="mobile-link text-[10px] font-mono uppercase tracking-[0.2em] text-sky-400 mb-2">// Navigation</span>

          {navigationItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className={`
    mobile-link
    text-[32px]
    font-black
    uppercase
    tracking-tight
    transition-colors
    relative
    pl-4
    ${isActive ? "text-white border-l-5 border-sky-400" : "text-white/60 hover:text-white"}
  `}
              >
                {item.label}
              </a>
            );
          })}

          <div className="mobile-link border-white/10 mt-4">
            <div className="my-6 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent opacity-40" />
            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-sky-400"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
