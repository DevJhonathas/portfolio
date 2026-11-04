import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
    >
      {/* Preview do projeto */}
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
        style={{ background: project.gradient }}
      >
        <span className="text-7xl font-bold tracking-tighter text-white/80 transition duration-500 group-hover:scale-110">
          {project.initials}
        </span>

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs text-white backdrop-blur-md">
          {project.category}
        </span>

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight size={19} />
        </div>
      </div>

      {/* Informações */}
      <div className="p-6">

        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold transition group-hover:text-[var(--primary)]">
            {project.name}
          </h3>

          <ArrowUpRight
            size={18}
            className="shrink-0 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
          />
        </div>

        <p className="mt-3 min-h-20 text-sm leading-7 text-[var(--muted)]">
          {project.description}
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
            {project.status}
          </span>
        </div>

      </div>
    </Link>
  );
}