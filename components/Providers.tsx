"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";

type Theme = "dark" | "light";
const ThemeContext = createContext<{
  theme: Theme;
  changeTheme: (value: Theme) => void;
}>({ theme: "dark", changeTheme: () => {} });

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    let initial: Theme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") initial = saved;
    } catch {
      /* The system preference is used when storage is unavailable. */
    }
    setTheme(initial);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const changeTheme = (value: Theme) => {
    setTheme(value);
    try {
      localStorage.setItem("portfolio-theme", value);
    } catch {
      /* The current theme still works. */
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
