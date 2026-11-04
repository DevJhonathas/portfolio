import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import type { Project } from "@/app/data/projects";
interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="mt-10 border-t border-[var(--border)] pt-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Sobre o projeto
          </span>

          <h2 className="mt-3 text-2xl font-bold">
            Conheça o {project.name}
          </h2>

          <p className="mt-5 whitespace-pre-line text-base leading-8 text-[var(--muted)]">
            {project.longDescription}
          </p>
        </div>

        <aside className="flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

          <div>
            <h3 className="font-semibold">
              Tecnologias utilizadas
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium text-[var(--muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-5">
            <h3 className="font-semibold">
              Links do projeto
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium transition hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]"
                >
                  <SiGithub size={18} />
                  Repositório GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--button-bg)] px-4 py-3 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]"
                >
                  Acessar projeto
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-5">
            <p className="text-xs text-[var(--muted)]">
              Categoria
            </p>

            <p className="mt-1 text-sm font-medium">
              {project.category}
            </p>

            <p className="mt-4 text-xs text-[var(--muted)]">
              Status
            </p>

            <p className="mt-1 text-sm font-medium">
              {project.status}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}