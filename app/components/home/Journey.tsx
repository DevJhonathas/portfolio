import Link from "next/link";
import {
  Code2,
  Database,
  Server,
  ArrowUpRight,
} from "lucide-react";

import { StudyDuration } from "./StudyDuration";

const highlights = [
  {
    icon: Code2,
    title: "Front-end",
    description:
      "Desenvolvimento de interfaces e aplicações web utilizando React, Next.js, Vue.js e TypeScript, com atenção à organização e experiência do usuário.",
    project: "Camada",
    href: "/projetos/camada",
  },
  {
    icon: Database,
    title: "Back-end & Banco de Dados",
    description:
      "Integração com serviços de backend, autenticação e gerenciamento de dados, utilizando tecnologias como Firebase.",
    project: "MiniBlog",
    href: "/projetos/miniblog",
  },
  {
    icon: Server,
    title: "Infraestrutura & Linux",
    description:
      "Configuração e administração de ambientes Linux, serviços de rede e soluções de filtragem DNS utilizando Orange Pi, Armbian, Pi-hole e Unbound.",
    project: "Orange Pi",
    href: "/projetos/orange-pi",
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
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--surface-hover)]"
            >
              <Icon
                size={27}
                className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="mt-5 font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                <span className="text-xs font-medium text-[var(--primary)]">
                  Projeto relacionado: {item.project}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-[var(--muted)] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                />
              </div>
            </Link>
          );
        })}

        </div>
      </div>
    </section>
  );
}