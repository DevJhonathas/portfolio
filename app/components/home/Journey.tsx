import { BookOpen, Code2, Lightbulb } from "lucide-react";
import { StudyDuration } from "./StudyDuration";

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Criando projetos para colocar conhecimentos em prática.",
  },
  {
    icon: BookOpen,
    title: "Aprendizado",
    description: "Estudando tecnologias e buscando evoluir constantemente.",
  },
  {
    icon: Lightbulb,
    title: "Criatividade",
    description: "Transformando ideias em soluções e experiências digitais.",
  },
];

export function Journey() {
  return (
    <section id="trajetoria" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-6xl px-5">

        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          Minha jornada
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Aprendendo e evoluindo.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:col-span-3">

            <p className="text-sm text-[var(--muted)]">
              Tempo estudando programação
            </p>

            <div className="mt-3 text-3xl font-bold text-[var(--primary)] sm:text-4xl">
              <StudyDuration />
            </div>

            <p className="mt-3 text-sm text-[var(--muted)]">
              Uma jornada de aprendizado, experimentação e desenvolvimento.
            </p>

          </div>

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:bg-[var(--surface-hover)]"
              >
                <Icon size={26} className="text-[var(--primary)]" />

                <h3 className="mt-5 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}