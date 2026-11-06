import {
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  Languages,
  MapPin,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { experience, education, courseGroups } from "@/app/data/experience";

export function Experience() {
  return (
    <section id="formacao" className="scroll-mt-32 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Minha trajetória
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formação e experiência
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Minha formação acadêmica, experiências profissionais e cursos
            complementares ao longo da minha trajetória em tecnologia.
          </p>
        </div>

        {/* Grid principal com stretch para igualar alturas */}
        <div className="grid gap-5 lg:grid-cols-2 items-stretch">
          {/* Card Esquerdo: Experiência Profissional */}
          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between">
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
                    Experiência profissional
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">
                    {experience.company}
                  </h3>
                </div>
              </div>
              <h4 className="mt-6 font-medium">
                {experience.role}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {experience.periods.map((period) => (
                  <span
                    key={period}
                    className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {period}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
                <MapPin size={15} />
                {experience.location}
              </div>
              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <h4 className="text-sm font-semibold">
                  Principais atividades
                </h4>
                <ul className="mt-4 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-[var(--primary)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {experience.clientsServed.length > 0 && (
              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <h4 className="text-sm font-semibold">
                  Algumas empresas atendidas
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.clientsServed.map((client) => (
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

          {/* Coluna Direita: Empilha os dois cards e divide 50/50 no desktop via grid-rows-2 */}
          <div className="flex flex-col gap-5 lg:grid lg:grid-rows-2">
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <GraduationCap
                      size={23}
                      className="text-[var(--primary)]"
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                    Formação acadêmica
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  {education.degree}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {education.institution}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {education.location}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                <span className="text-xs text-[var(--muted)]">
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                  <CheckCircle2 size={13} />
                  {education.status}
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <Languages
                      size={22}
                      className="text-[var(--primary)]"
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                    Idiomas
                  </span>
                </div>
              </div>
              <div className="my-auto space-y-4 py-2">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Inglês</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Cambridge Assessment
                    </p>
                  </div>
                  <span className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-2 text-sm font-semibold text-[var(--primary)]">
                    B2
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Francês</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Estudando
                    </p>
                  </div>
                  <span className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-2 text-sm font-semibold text-[var(--primary)]">
                    A2
                  </span>
                </div>
              </div>
              <div /> {/* Espaçador invisível para manter o alinhamento com justify-between */}
            </article>
          </div>
        </div>

        {/* Cursos complementares */}
        <article className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
              <BookOpen
                size={22}
                className="text-[var(--primary)]"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                Desenvolvimento profissional
              </span>
              <h3 className="mt-1 text-lg font-semibold">
                Cursos complementares
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
                            Conteúdos: {course.topics}
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
                  Oracle Java Foundations - 2026
                </h4>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Formação complementar em andamento
                </p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--primary)]">
              <Clock3 size={13} />
              Em andamento
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}