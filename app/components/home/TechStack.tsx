
"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { useLocale, useTranslations } from "next-intl";

import { ArrowUpRight, ChevronDown, Code2, Terminal } from "lucide-react";

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

import { categories } from "@/app/data/stacks";
import { projects } from "@/app/data/projects";
import { assetPath } from "@/app/utils/assetPath";

const technologyImage = (
  src: string,
  size = 20
): ReactNode => (
  <Image
    src={assetPath(src)}
    alt=""
    width={size}
    height={size}
  />
);

const technologyIcons: Record<string, ReactNode> = {
  JavaScript: <SiJavascript size={18} color="#F7DF1E" />,
  TypeScript: <SiTypescript size={18} color="#3178C6" />,
  React: <SiReact size={18} color="#61DAFB" />,
  "Next.js": <SiNextdotjs size={18} color="var(--foreground)" />,
  "Vue.js": <SiVuedotjs size={18} color="#42B883" />,
  "Nest.js": <SiNestjs size={18} color="#E0234E" />,
  "Node.js": <SiNodedotjs size={18} color="#5FA04E" />,
  HTML: <SiHtml5 size={18} color="#E34F26" />,
  "Tailwind CSS": <SiTailwindcss size={18} color="#06B6D4" />,
  Java: technologyImage("/images/svg/java.svg"),
  CSS: technologyImage("/images/svg/css.svg"),

  PostgreSQL: <SiPostgresql size={18} color="#4479A1" />,
  MySQL: <SiMysql size={18} color="#4479A1" />,
  MongoDB: <SiMongodb size={18} color="#47A248" />,
  Redis: <SiRedis size={18} color="#FF4438" />,
  Firebase: technologyImage("/images/svg/firebase.svg"),
  "Microsoft SQL Server": technologyImage("/images/svg/microsoft-sql-server.svg"),
  Oracle: technologyImage("/images/svg/oracle.svg"),

  Docker: <SiDocker size={18} color="#2496ED" />,
  GitHub: <SiGithub size={18} color="var(--foreground)" />,
  Vercel: <SiVercel size={18} color="var(--foreground)" />,
  Python: technologyImage("/images/svg/python.svg", 25),
  GitLab: technologyImage("/images/svg/gitlab.svg"),
  Postman: technologyImage("/images/svg/postman.svg"),
  Bruno: technologyImage("/images/svg/bruno.svg"),
  Figma: technologyImage("/images/svg/figma.svg"),
  "Visual Studio Code": technologyImage("/images/svg/visual-studio-code.svg"),
  "IntelliJ IDEA": <Terminal size={18} />,
  AWS: technologyImage("/images/svg/aws.svg"),

  Linux: technologyImage("/images/svg/linux.svg"),
  "Arch Linux": technologyImage("/images/svg/arch-linux.svg"),
  Debian: technologyImage("/images/svg/debian.svg"),
  "Fedora Server": technologyImage("/images/svg/fedora.svg"),
  "Linux Mint": technologyImage("/images/svg/linux-mint.svg"),
  Armbian: technologyImage("/images/svg/armbian.webp"),
  "Pi-hole": technologyImage("/images/svg/pi-hole.svg"),
  Unbound: technologyImage("/images/svg/unbound.svg"),
  WireGuard: technologyImage("/images/svg/wireguard.svg"),
  Nginx: technologyImage("/images/svg/nginx.svg"),
};

export function TechStack() {
  const t = useTranslations("techStack");
  const projectT = useTranslations("projectContent");
  const locale = useLocale();

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedCategory = categories.find((category) =>
    category.technologies.some((tech) => tech.id === selectedTech)
  );

  const selectedTechnology = selectedCategory?.technologies.find(
    (tech) => tech.id === selectedTech
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

  function handleSelect(id: string) {
    setSelectedTech((current) => (current === id ? null : id));
  }

  return (
    <section id="tecnologias" className="scroll-mt-32 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          {t("eyebrow")}
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
          {t("description")}
        </p>

        <div className="mt-7 space-y-7">
          {categories.map((category) => {
            const categorySelected = category.technologies.some(
              (tech) => tech.id === selectedTech
            );

            return (
              <div key={category.id}>
                <h3 className="mb-3 text-sm font-semibold text-[var(--muted)]">
                  {t(`categories.${category.id}`)}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => {
                    const isSelected = selectedTech === tech.id;

                    return (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => handleSelect(tech.id)}
                        aria-expanded={isSelected}
                        aria-controls={`description-${category.id}`}
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
                      id={`description-${category.id}`}
                      ref={categorySelected ? detailsRef : null}
                      aria-hidden={!categorySelected}
                      aria-live="polite"
                      className={`max-w-2xl rounded-xl border border-[var(--primary)]/30 bg-[var(--surface)] p-5 transition-all duration-300 ${
                        categorySelected
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      {selectedTechnology && (
                        <>
                          <div className="flex items-center gap-2">
                            <Code2
                              size={18}
                              className="text-[var(--primary)]"
                            />

                            <h4 className="font-semibold">
                              {selectedTechnology.name}
                            </h4>
                          </div>

                          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                            {t(`items.${selectedTechnology.id}.description`)}
                          </p>

                          {selectedTechnology.projectUses &&
                            selectedTechnology.projectUses.length > 0 && (
                              <div className="mt-5 border-t border-[var(--border)] pt-4">
                                <h5 className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                                  {t("whereUsed")}
                                </h5>

                                <div className="mt-3 space-y-3">
                                  {selectedTechnology.projectUses.map(
                                    (usage, index) => {
                                      const usageKey = `items.${selectedTechnology.id}.uses.${usage.id}`;

                                      const relatedProject = usage.slug
                                        ? projects.find(
                                            (project) =>
                                              project.slug === usage.slug
                                          )
                                        : undefined;

                                      const href = relatedProject
                                        ? `/${locale}/projetos/${usage.slug}/`
                                        : null;

                                      const usageTitle = usage.slug
                                        ? projectT(`${usage.slug}.name`)
                                        : t(`${usageKey}.title`);

                                      const usageDescription = t(
                                        `${usageKey}.description`
                                      );

                                      const cardContent = (
                                        <div className="flex items-start gap-3 sm:gap-4">
                                          {relatedProject?.cover && (
                                            <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] sm:h-24 sm:w-32">
                                              <Image
                                                src={assetPath(relatedProject.cover)}
                                                alt={usageTitle}
                                                fill
                                                sizes="(max-width: 640px) 96px, 128px"
                                                className="object-cover transition-transform duration-300 group-hover/use:scale-105"
                                              />
                                            </div>
                                          )}

                                          <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-3">
                                              <div className="flex min-w-0 items-center gap-2">
                                                {usage.icon &&
                                                  technologyIcons[usage.icon] && (
                                                    <span className="flex shrink-0 items-center justify-center">
                                                      {technologyIcons[usage.icon]}
                                                    </span>
                                                  )}

                                                <span
                                                  className={`text-sm font-semibold ${
                                                    href
                                                      ? "group-hover/use:text-[var(--primary)]"
                                                      : ""
                                                  }`}
                                                >
                                                  {usageTitle}
                                                </span>
                                              </div>

                                              {href && (
                                                <ArrowUpRight
                                                  size={17}
                                                  className="shrink-0 text-[var(--muted)] transition group-hover/use:-translate-y-0.5 group-hover/use:translate-x-0.5 group-hover/use:text-[var(--primary)]"
                                                />
                                              )}
                                            </div>

                                            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                              {usageDescription}
                                            </p>

                                            {href && (
                                              <span className="mt-3 inline-block text-xs font-medium text-[var(--primary)]">
                                                {t("viewProject")} →
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      );

                                      const key = `${usage.id}-${index}`;

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
                                    }
                                  )}
                                </div>
                              </div>
                            )}
                        </>
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
