// import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { getLocale, getTranslations } from "next-intl/server";

import type {
  Project,
  ProjectContent,
} from "@/app/data/projects";

import { assetPath } from "@/app/utils/assetPath";
import TrackedProjectLink from "../buttons/TrackedProjectLink";

interface ProjectCardProps {
  project: Project;
}

export async function ProjectCard({ project }: ProjectCardProps) {
  const locale = await getLocale();
  const t = await getTranslations("projectContent");

  const content = t.raw(project.slug) as ProjectContent;

  return (
    <TrackedProjectLink
      href={`/${locale}/projetos/${project.slug}/`}
      eventName={`project_clicked_${project.slug.replace(/-/g, "_")}`}
      className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
    >
      <div className="group/image relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-hover)]">
        <Image
          src={assetPath(project.cover)}
          alt={content.coverAlt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 group-hover/image:scale-105"
        />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
          {content.category}
        </span>

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-md transition group-hover/image:opacity-100">
          <ArrowUpRight size={19} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold transition group-hover:text-[var(--primary)]">
            {content.name}
          </h3>

          <ArrowUpRight
            size={18}
            className="shrink-0 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
          />
        </div>

        <p className="mt-3 min-h-20 text-sm leading-7 text-[var(--muted)]">
          {content.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-[var(--surface-hover)] px-2.5 py-1.5 text-xs text-[var(--muted)]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-[var(--border)] pt-4">
          <span className="text-xs text-[var(--muted)]">
            {content.status}
          </span>
        </div>
      </div>
    </TrackedProjectLink>
  );
}
