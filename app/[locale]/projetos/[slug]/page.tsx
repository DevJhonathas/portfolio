
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { ProjectGallery } from "@/app/components/projects/ProjectGallery";
import { ProjectDetails } from "@/app/components/projects/ProjectDetails";
import { ProjectCard } from "@/app/components/home/ProjectCard";

import {
  projects,
  type ProjectContent,
} from "@/app/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const contentTranslations = await getTranslations("projectContent");
  const pageTranslations = await getTranslations("projectPage");

  const content = contentTranslations.raw(slug) as
    | ProjectContent
    | undefined;

  if (!content) {
    notFound();
  }

  const localizedMedia = project.media.map((item, index) => ({
    ...item,
    ...(content.media[index] ?? {}),
  }));

  const otherProjects = projects.filter(
    (item) => item.slug !== project.slug
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <Link
        href={`/${locale}/#projetos`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
      >
        <ArrowLeft size={17} />
        {pageTranslations("backToProjects")}
      </Link>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]">
            {content.category}
          </span>

          <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            {content.status}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {content.name.replace(/\.$/, "")}
          <span className="text-[var(--primary)]">.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          {content.description}
        </p>
      </div>

      <ProjectGallery
        key={project.slug}
        media={localizedMedia}
        projectName={content.name}
      />

      <ProjectDetails
        project={project}
        content={content}
      />

      {otherProjects.length > 0 && (
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="mb-7">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
              {pageTranslations("continueExploring")}
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              {pageTranslations("otherProjects")}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {pageTranslations("otherProjectsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((item) => (
              <ProjectCard
                key={item.slug}
                project={item}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
