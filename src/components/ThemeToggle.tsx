"use client";
import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

function applyTheme(theme: Mode) {
  const root = document.documentElement;
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) root.classList.add("dark");
    else root.classList.remove("dark");
    return;
  }
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Mode>("system");

  // Initialize from storage / system
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      setTheme(stored as Mode);
      applyTheme(stored as Mode);
    } else {
      applyTheme("system");
    }
  }, []);

  // Respond to system changes if in system mode
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => applyTheme("system");
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [theme]);

  // Apply & persist when explicit mode changes
  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  const cycle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : prev === "dark" ? "system" : "light"));
  };

  const icon =
    theme === "light"
      ? "☀️"
      : theme === "dark"
      ? "🌙"
      : "🌓"; // system

  const label =
    theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System"; // For screen readers

  return (
    <button
      type="button"
      aria-label={`Theme: ${label}`}
      title={label}
      onClick={cycle}
      className="w-8 h-8 rounded-md border border-neutral-300 dark:border-neutral-700 inline-flex items-center justify-center text-base hover:bg-neutral-100 dark:hover:bg-neutral-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
};
export default ThemeToggle;
