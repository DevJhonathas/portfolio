
import { getTranslations } from "next-intl/server";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import type {
  Project,
  ProjectContent,
} from "@/app/data/projects";

interface ProjectDetailsProps {
  project: Project;
  content: ProjectContent;
}

export async function ProjectDetails({
  project,
  content,
}: ProjectDetailsProps) {
  const t = await getTranslations("projectDetails");

  return (
    <section className="mt-10 border-t border-[var(--border)] pt-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            {t("aboutProject")}
          </span>

          <h2 className="mt-3 text-2xl font-bold">
            {t("knowProject", { name: content.name })}
          </h2>

          <p className="mt-5 whitespace-pre-line text-base leading-8 text-[var(--muted)]">
            {content.longDescription}
          </p>
        </div>

        <aside className="flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div>
            <h3 className="font-semibold">
              {t("technologies")}
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
              {t("links")}
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
                  {t("repository")}
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--button-bg)] px-4 py-3 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]"
                >
                  {t("access")}
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-5">
            <p className="text-xs text-[var(--muted)]">
              {t("category")}
            </p>

            <p className="mt-1 text-sm font-medium">
              {content.category}
            </p>

            <p className="mt-4 text-xs text-[var(--muted)]">
              {t("status")}
            </p>

            <p className="mt-1 text-sm font-medium">
              {content.status}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
