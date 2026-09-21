import { useState, useEffect } from "react";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

interface BaseTechButtonProps {
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
}

type TechButtonProps = BaseTechButtonProps &
  ((AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }));

export function TechButton({ children, href, onClick, showArrow = true, className = "", type = "button", ...rest }: TechButtonProps) {
  const originalText = typeof children === "string" ? children : "";

  const [displayText, setDisplayText] = useState(originalText);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_//";
    let iteration = 0;

    if (isHovered && typeof children === "string") {
      interval = setInterval(() => {
        setDisplayText(
          originalText
            .split("")
            .map((_letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayText(originalText);
    }

    return () => clearInterval(interval);
  }, [isHovered, originalText, children]);

  const content = (
    <>
      {/* Fundo azul #2ca0ca com o corte chanfrado correto nos cantos (Superior Esquerdo e Inferior Direito) */}
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[#2ca0ca]
          transition-colors
          duration-300
        "
        style={{
          // Este polygon começa a 12px da bordinha esquerda no topo,
          // vai até o canto direito, desce até 12px antes do fim,
          // chanbra para dentro e fecha o polígono deixando os cantos transparentes.
          clipPath: "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
        }}
      />

      {/* Animated stroke */}
      <span
        aria-hidden="true"
        className="
          tech-button-stroke
          pointer-events-none
          absolute
          inset-0
        "
      />

      {/* Content */}
      <span
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-4
          px-8
          font-mono
          text-sm
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#011627]
          transition-colors
          duration-300
        "
      >
        {typeof children === "string" ? <span className="font-mono">{displayText}</span> : children}

        {showArrow && typeof children === "string" && (
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              text-[#011627]
            "
          />
        )}
      </span>
    </>
  );

  const classes = `
    group
    relative
    inline-flex
    min-h-[50px]
    items-center
    justify-center
    overflow-visible
    bg-transparent
    backdrop-blur-sm
    transition-all
    duration-300
    focus-visible:outline-none
    focus-visible:ring-1
    focus-visible:ring-lime-400
    focus-visible:ring-offset-4
    focus-visible:ring-offset-[#020408]
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick as AnchorHTMLAttributes<HTMLAnchorElement>["onClick"]}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type as ButtonHTMLAttributes<HTMLButtonElement>["type"]}
      onClick={onClick as ButtonHTMLAttributes<HTMLButtonElement>["onClick"]}
      className={classes}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
