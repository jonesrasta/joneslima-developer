import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark"; // Padrão escuro
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
