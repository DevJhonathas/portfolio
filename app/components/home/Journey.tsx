
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import {
  Code2,
  Database,
  Server,
  ArrowUpRight,
} from "lucide-react";

import { StudyDuration } from "./StudyDuration";
import { ExperienceDuration } from "./ExperienceDuration";

interface JourneyHighlight {
  title: string;
  description: string;
  project: string;
  slug: string;
}

const highlightIcons = [Code2, Database, Server];

export async function Journey() {
  const t = await getTranslations("journey");
  const locale = await getLocale();

  const highlights = t.raw("highlights") as JourneyHighlight[];

  return (
    <section id="trajetoria" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-6xl px-5">
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          {t("eyebrow")}
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="grid gap-5 md:col-span-3 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <p className="text-sm text-[var(--muted)]">
                {t("study.title")}
              </p>

              <div className="mt-3 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                <StudyDuration />
              </div>

              <p className="mt-3 text-sm text-[var(--muted)]">
                {t("study.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <p className="text-sm text-[var(--muted)]">
                {t("professional.title")}
              </p>

              <div className="mt-3 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                <ExperienceDuration />
              </div>

              <p className="mt-3 text-sm text-[var(--muted)]">
                {t("professional.description")}
              </p>
            </div>
          </div>

          {highlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? Code2;

            return (
              <Link
                key={item.slug}
                href={`/${locale}/projetos/${item.slug}/`}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--surface-hover)]"
              >
                <Icon
                  size={27}
                  className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-5 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-[var(--primary)]">
                      {t("projectRelated")} 
                      
                    <p className="mt-1 text-xs font-medium">
                      {item.project}
                    </p>
                    </span>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[var(--muted)] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
