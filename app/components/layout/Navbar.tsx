
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Code2, Menu, X } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ScrollLink } from "./ScrollLink";

const navItems = [
  { key: "home", href: "#inicio" },
  { key: "projects", href: "#projetos" },
  { key: "about", href: "#sobre" },
  { key: "experience", href: "#formacao" },
  { key: "technologies", href: "#tecnologias" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("navigation");

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between gap-4 py-3">
          <ScrollLink
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <Code2 size={22} className="text-[var(--primary)]" />

            <span>
              portfolio<span className="text-[var(--primary)]">.</span>
            </span>
          </ScrollLink>

          <div className="ml-auto flex items-center gap-7">
            <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[var(--primary)]"
                >
                  {t(item.key)}
                </ScrollLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />

              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:bg-[var(--surface-hover)] md:hidden"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav className="flex flex-col gap-1 border-t border-[var(--border)] py-3">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
                >
                  {t(item.key)}
                </ScrollLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
