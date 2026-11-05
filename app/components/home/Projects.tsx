import { projects } from "@/app/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
              Meu trabalho
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Projetos
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              Alguns projetos que desenvolvi, explorando diferentes
              tecnologias e colocando meus conhecimentos em prática.
            </p>
          </div>

          <span className="text-sm text-[var(--muted)]">
            {projects.length} projetos
          </span>

        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}