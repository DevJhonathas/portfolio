"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("theme");

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={t("toggle")}
      title={t("toggle")}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:bg-[var(--surface-hover)]"
    >
      <Sun
        size={19}
        className="theme-toggle-sun text-[var(--primary)]"
      />

      <Moon
        size={19}
        className="theme-toggle-moon text-[var(--primary)]"
      />
    </button>
  );
}