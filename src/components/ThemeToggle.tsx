"use client";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setTheme("dark");
  }, []);
  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="rounded-md border border-neutral-300 dark:border-neutral-700 px-3 h-8 inline-flex items-center gap-1 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
      {theme === "light" ? "🌙" : "☀️"} {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
export default ThemeToggle;
