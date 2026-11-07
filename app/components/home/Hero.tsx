"use client";

import { ScrollLink } from "@/app/components/layout/ScrollLink";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import {   
  FaLinkedin,
  FaWhatsapp,
  // FaInstagram,
  FaEnvelope, } from "react-icons/fa";
import { profile } from "@/app/data/profile";

export function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.github,
      icon: <SiGithub size={21} />,
      external: true,
    },
    {
      name: "LinkedIn",
      href: profile.linkedin,
      icon: <FaLinkedin size={21} />,
      external: true,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${profile.whatsapp}`,
      icon: <FaWhatsapp size={21} />,
      external: true,
    },
    {
      name: "E-mail",
      href: `mailto:${profile.email}`,
      icon: <FaEnvelope size={21} />,
      external: false,
    },
    // {
    //   name: "Instagram",
    //   href: profile.instagram,
    //   icon: <FaInstagram size={21} />,
    //   external: true,
    // },
  ];
  return (
    <section
      id="inicio"
      className="relative flex min-h-[560px] scroll-mt-32 items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-15">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-status-pulse" /> 
              Disponível para vagas júnior · Remoto | Híbrido | Presencial
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

            <div className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {profile.description}
            </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ScrollLink
              href="#projetos"
              className="flex items-center gap-2 rounded-xl bg-[var(--button-bg)] px-6 py-3 font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]"
            >
              Ver projetos
              <ArrowUpRight size={18} />
            </ScrollLink>

            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={item.name}
                  title={item.name}
                  className="group flex min-w-[68px] flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-[var(--muted)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
                >
                  {item.icon}

                  <span className="text-[11px] font-medium">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <ScrollLink
          href="#projetos"
          className="mt-7 inline-flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Explore meu portfólio
        </ScrollLink>
      </div>
    </section>
  );
}