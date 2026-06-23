import { useCallback, useEffect, useState } from "react";

export type ThemeKey = "lime" | "navy" | "purple" | "orange";

const STORAGE_KEY = "ncwebs-theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeKey>("purple");

  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" &&
      localStorage.getItem(STORAGE_KEY)) as ThemeKey | null;
    if (saved === "lime" || saved === "navy" || saved === "purple" || saved === "orange") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const cycle = useCallback(() => {
    setTheme((t) => (t === "lime" ? "navy" : t === "navy" ? "purple" : t === "purple" ? "orange" : "lime"));
  }, []);

  return { theme, setTheme, cycle };
}
