import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 backdrop-blur transition hover:border-ink-300 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-ink-700 dark:hover:text-white"
    >
      <Sun
        className={`h-4 w-4 transition ${isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
      />
      <Moon
        className={`absolute h-4 w-4 transition ${isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      />
    </button>
  );
}
