"use client";

import { ScrollLink } from "@/app/components/layout/ScrollLink";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "@/app/data/profile";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[560px] scroll-mt-32 items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-15">

        <div className="max-w-3xl">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Disponível para novos projetos
          </div>

          <p className="mb-3 text-lg text-[var(--primary)]">
            Olá, eu sou
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.name}
            <span className="text-[var(--primary)]">.</span>
          </h1>

          <h2 className="mt-5 text-xl font-medium text-[var(--muted)] sm:text-2xl">
            {profile.role}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {profile.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ScrollLink
              href="#projetos"
              className="flex items-center gap-2 rounded-xl bg-[var(--button-bg)] px-6 py-3 font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]"
            >
              Ver projetos
              <ArrowUpRight size={18} />
            </ScrollLink>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Meu GitHub"
              title="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
            >
              <SiGithub size={20} color="currentColor" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Meu LinkedIn"
              title="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <ScrollLink
          href="#sobre"
          className="mt-7 inline-flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Explore meu portfólio
        </ScrollLink>
      </div>
    </section>
  );
}