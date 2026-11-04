import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

import { ProjectGallery } from "@/app/components/projects/ProjectGallery";
import { ProjectDetails } from "@/app/components/projects/ProjectDetails";
import { ProjectCard } from "@/app/components/home/ProjectCard";

import { projects } from "@/app/data/projects";
import { ScrollLink } from "@/app/components/layout/ScrollLink";

// export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter(
    (item) => item.slug !== project.slug
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <ScrollLink
          href="/#projetos"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          <ArrowLeft size={17} />
          Voltar aos projetos
        </ScrollLink>

        <div className="mb-8">

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]">
              {project.category}
            </span>

            <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              {project.status}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
            <span className="text-[var(--primary)]">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            {project.description}
          </p>

        </div>

        <ProjectGallery
          key={project.slug}
          media={project.media}
          projectName={project.name}
        />

        <ProjectDetails project={project} />

        {otherProjects.length > 0 && (
          <section className="mt-16 border-t border-[var(--border)] pt-10">
            <div className="mb-7">
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                Continue explorando
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                Outros projetos
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Conheça também outros projetos desenvolvidos ao longo da minha jornada.
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
      <Footer />
    </>
  );
}