"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Code2,
  Terminal,
} from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNestjs,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithub,
  SiVercel,
} from "@icons-pack/react-simple-icons";

import { categories, projectSlugs } from "../../data/stacks";

const technologyIcons: Record<string, ReactNode> = {
  // Stack
  JavaScript: <SiJavascript size={18} color="#F7DF1E" />,
  Java: <Image src="/images/svg/java.svg" alt="" width={20} height={20} />,
  TypeScript: <SiTypescript size={18} color="#3178C6" />,
  React: <SiReact size={18} color="#61DAFB" />,
  "Next.js": <SiNextdotjs size={18} color="var(--foreground)" />,
  "Vue.js": <SiVuedotjs size={18} color="#42B883" />,
  "Nest.js": <SiNestjs size={18} color="#E0234E" />,
  "Node.js": <SiNodedotjs size={18} color="#5FA04E" />,
  HTML: <SiHtml5 size={18} color="#E34F26" />,
  "Tailwind CSS": <SiTailwindcss size={18} color="#06B6D4" />,
  CSS: <Image src="/images/svg/css.svg" alt="" width={20} height={20} />,

  // Banco de Dados
  PostgreSQL: <SiPostgresql size={18} color="#4479A1" />,
  MySQL: <SiMysql size={18} color="#4479A1" />,
  MongoDB: <SiMongodb size={18} color="#47A248" />,
  Redis: <SiRedis size={18} color="#FF4438" />,
  Firebase: <Image src="/images/svg/firebase.svg" alt="" width={20} height={20} />,
  "Microsoft SQL Server": <Image src="/images/svg/microsoft-sql-server.svg" alt="" width={20} height={20} />,
  Oracle: <Image src="/images/svg/oracle.svg" alt="" width={20} height={20} />,

  // Ferramentas
  Docker: <SiDocker size={18} color="#2496ED" />,
  GitHub: <SiGithub size={18} color="var(--foreground)" />,
  Vercel: <SiVercel size={18} color="var(--foreground)" />,
  Python: <Image src="/images/svg/python.svg" alt="" width={25} height={25} />,
  GitLab: <Image src="/images/svg/gitlab.svg" alt="" width={20} height={20} />, 
  Postman: <Image src="/images/svg/postman.svg" alt="" width={20} height={20} />,
  Bruno: <Image src="/images/svg/bruno.svg" alt="" width={20} height={20} />,
  Figma: <Image src="/images/svg/figma.svg" alt="" width={20} height={20} />,
  "Visual Studio Code": <Image src="/images/svg/visual-studio-code.svg" alt="" width={20} height={20} />,
  "IntelliJ IDEA": <Terminal size={18} />,
  AWS: <Image src="/images/svg/aws.svg" alt="" width={20} height={20} />,

  //Sistemas e infra
  "Arch Linux": <Image src="/images/svg/arch-linux.svg" alt="" width={20} height={20} />,
  Debian: <Image src="/images/svg/debian.svg" alt="" width={20} height={20} />,
  "Fedora Server": <Image src="/images/svg/fedora.svg" alt="" width={20} height={20} />,
  "Linux Mint": <Image src="/images/svg/linux-mint.svg" alt="" width={20} height={20} />,
  Armbian: <Image src="/images/svg/armbian.webp" alt="" width={20} height={20} />,
  "Pi-hole": <Image src="/images/svg/pi-hole.svg" alt="" width={20} height={20} />,
  Unbound: <Image src="/images/svg/unbound.svg" alt="" width={20} height={20} />,
  WireGuard: <Image src="/images/svg/wireguard.svg" alt="" width={20} height={20} />,
  Nginx: <Image src="/images/svg/nginx.svg" alt="" width={20} height={20} />,
};

export function TechStack() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedCategory = categories.find((category) =>
    category.technologies.some((tech) => tech.name === selectedTech)
  );

  const selectedTechnology = selectedCategory?.technologies.find(
    (tech) => tech.name === selectedTech
  );

  useEffect(() => {
    if (!selectedTech) return;

    const frame = window.requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [selectedTech]);

  function handleSelect(name: string) {
    setSelectedTech((current) => (current === name ? null : name));
  }

  return (
    <section id="tecnologias" className="scroll-mt-32 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          Ferramentas
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Tecnologias
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
          Tecnologias, bancos de dados e ferramentas que utilizo durante
          minha jornada no desenvolvimento.
        </p>

        <div className="mt-7 space-y-7">
          {categories.map((category) => {
            const categorySelected = category.technologies.some(
              (tech) => tech.name === selectedTech
            );

            return (
              <div key={category.name}>
                
                <h3 className="mb-3 text-sm font-semibold text-[var(--muted)]">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => {
                    const isSelected = selectedTech === tech.name;

                    return (
                      <button
                        key={tech.name}
                        type="button"
                        onClick={() => handleSelect(tech.name)}
                        aria-expanded={isSelected}
                        aria-controls={`description-${category.name}`}
                        className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)]"
                            : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {technologyIcons[tech.name] ?? <Code2 size={18} />}
                          <span>{tech.name}</span>
                        </span>

                        <ChevronDown
                          size={14}
                          className={`shrink-0 transition-transform duration-300 ${
                            isSelected ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    categorySelected
                      ? "mt-4 grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      id={`description-${category.name}`}
                      ref={categorySelected ? detailsRef : null}
                      aria-hidden={!categorySelected}
                      aria-live="polite"
                      className={`max-w-2xl rounded-xl border border-[var(--primary)]/30 bg-[var(--surface)] p-5 transition-all duration-300 ${
                        categorySelected
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Code2
                          size={18}
                          className="text-[var(--primary)]"
                        />

                        <h4 className="font-semibold">
                          {selectedTechnology?.name}
                        </h4>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {selectedTechnology?.description}
                      </p>

                      {selectedTechnology?.projectUses &&
                        selectedTechnology.projectUses.length > 0 && (
                          <div className="mt-5 border-t border-[var(--border)] pt-4">
                            <h5 className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                              Onde utilizei
                            </h5>
                            <div className="mt-3 space-y-3">
                              {selectedTechnology?.projectUses.map((usage, index) => {
                                const href =
                                  usage.slug && projectSlugs.has(usage.slug)
                                    ? `/projetos/${usage.slug}`
                                    : null;

                                const cardContent = (
                                  <>
                                    <div className="flex items-center justify-between gap-3">
                                      <span
                                        className={`text-sm font-semibold ${
                                          href ? "group-hover/use:text-[var(--primary)]" : ""
                                        }`}
                                      >
                                        {usage.name}
                                      </span>

                                      {href && (
                                        <ArrowUpRight
                                          size={17}
                                          className="shrink-0 text-[var(--muted)] transition group-hover/use:-translate-y-0.5 group-hover/use:translate-x-0.5 group-hover/use:text-[var(--primary)]"
                                        />
                                      )}
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                      {usage.usage}
                                    </p>

                                    {href && (
                                      <span className="mt-3 inline-block text-xs font-medium text-[var(--primary)]">
                                        Conhecer projeto →
                                      </span>
                                    )}
                                  </>
                                );

                                const key = `${usage.slug ?? "sem-link"}-${usage.name}-${index}`;

                                return href ? (
                                  <Link
                                    key={key}
                                    href={href}
                                    className="group/use block rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 transition hover:border-[var(--primary)]"
                                  >
                                    {cardContent}
                                  </Link>
                                ) : (
                                  <div
                                    key={key}
                                    className="block rounded-lg border border-[var(--border)] bg-[var(--background)] p-4"
                                  >
                                    {cardContent}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
