
import { getTranslations } from "next-intl/server";

import {
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  Languages,
  MapPin,
  CheckCircle2,
  Clock3,
} from "lucide-react";

interface Result {
  title: string;
  description: string;
}

interface Course {
  name: string;
  topics?: string;
}

interface CourseGroup {
  provider: string;
  period: string;
  courses: Course[];
}

export async function Experience() {
  const t = await getTranslations("experience");

  const periods = t.raw("professional.periods") as string[];
  const results = t.raw("professional.results") as Result[];
  const clients = t.raw("professional.clients") as string[];
  const courseGroups = t.raw("courses.groups") as CourseGroup[];

  return (
    <section id="formacao" className="scroll-mt-32 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            {t("description")}
          </p>
        </div>

        <div className="space-y-5">
          <article className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <BriefcaseBusiness
                    size={22}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                    {t("professional.label")}
                  </span>

                  <h3 className="mt-1 text-lg font-semibold">
                    {t("professional.company")}
                  </h3>
                </div>
              </div>

              <h4 className="mt-6 font-medium">
                {t("professional.role")}
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {periods.map((period, index) => (
                  <span
                    key={`${period}-${index}`}
                    className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {period}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
                <MapPin size={15} />
                {t("professional.location")}
              </div>

              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <h4 className="text-sm font-semibold">
                  {t("professional.resultsTitle")}
                </h4>

                <ul className="mt-4 space-y-4">
                  {results.map((item, index) => (
                    <li
                      key={`${item.title}-${index}`}
                      className="flex items-start gap-3 text-sm leading-6"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-[var(--primary)]"
                      />

                      <div>
                        <h5 className="font-semibold text-[var(--foreground)]">
                          {item.title}
                        </h5>

                        <p className="mt-1 text-[var(--muted)]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {clients.length > 0 && (
              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <h4 className="text-sm font-semibold">
                  {t("professional.clientsTitle")}
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {clients.map((client) => (
                    <span
                      key={client}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <article className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <GraduationCap
                      size={23}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                    {t("education.label")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {t("education.degree")}
                </h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  {t("education.institution")}
                </p>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  {t("education.location")}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                <span className="text-xs text-[var(--muted)]">
                  {t("education.period")}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                  <CheckCircle2 size={13} />
                  {t("education.status")}
                </span>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <Languages
                    size={22}
                    className="text-[var(--primary)]"
                  />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                  {t("languages.title")}
                </span>
              </div>

              <div className="my-auto space-y-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      {t("languages.english.name")}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {t("languages.english.provider")}
                    </p>
                  </div>

                  <span className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-2 text-sm font-semibold text-[var(--primary)]">
                    {t("languages.english.level")}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      {t("languages.french.name")}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {t("languages.french.status")}
                    </p>
                  </div>

                  <span className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-2 text-sm font-semibold text-[var(--primary)]">
                    {t("languages.french.level")}
                  </span>
                </div>
              </div>
            </article>
          </div>

          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                <BookOpen
                  size={22}
                  className="text-[var(--primary)]"
                />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                  {t("courses.eyebrow")}
                </span>

                <h3 className="mt-1 text-lg font-semibold">
                  {t("courses.title")}
                </h3>
              </div>
            </div>

            <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courseGroups.map((group) => (
                <div key={group.provider}>
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
                    <h4 className="font-semibold">
                      {group.provider}
                    </h4>

                    <span className="text-xs text-[var(--muted)]">
                      {group.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-4">
                    {group.courses.map((course) => (
                      <li
                        key={course.name}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />

                        <div>
                          <p className="text-sm font-medium">
                            {course.name}
                          </p>

                          {course.topics && (
                            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                              {t("courses.topicsLabel")} {course.topics}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 rounded-xl border border-[var(--primary)]/25 bg-[var(--primary)]/5 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <BookOpen
                  size={20}
                  className="shrink-0 text-[var(--primary)]"
                />

                <div>
                  <h4 className="text-sm font-semibold">
                    {t("courses.featured.title")}
                  </h4>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {t("courses.featured.description")}
                  </p>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--primary)]">
                <Clock3 size={13} />
                {t("courses.featured.status")}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
