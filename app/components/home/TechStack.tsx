
"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";

interface Technology {
  name: string;
  description: string;
}

interface Category {
  name: string;
  technologies: Technology[];
}

const categories: Category[] = [
  {
    name: "Stack",
    technologies: [
      {
        name: "JavaScript",
        description:
          "Linguagem de programação utilizada no desenvolvimento de aplicações web interativas, tanto no frontend quanto no backend.",
      },
      {
        name: "TypeScript",
        description:
          "Superset do JavaScript que adiciona tipagem estática, facilitando a organização, manutenção e identificação de erros no código.",
      },
      {
        name: "Java",
        description:
          "Linguagem de programação orientada a objetos, utilizada principalmente no desenvolvimento de aplicações robustas e sistemas backend.",
      },
      {
        name: "React",
        description:
          "Biblioteca JavaScript para construção de interfaces utilizando componentes reutilizáveis e gerenciamento de estados.",
      },
      {
        name: "Next.js",
        description:
          "Framework baseado em React que oferece recursos como App Router, renderização no servidor, geração estática e otimização de aplicações web.",
      },
      {
        name: "Vue.js",
        description:
          "Framework JavaScript progressivo para criação de interfaces e aplicações web utilizando componentes reativos.",
      },
      {
        name: "Nest.js",
        description:
          "Framework Node.js para construção de aplicações backend organizadas, escaláveis e geralmente desenvolvidas com TypeScript.",
      },
      {
        name: "Node.js",
        description:
          "Ambiente de execução JavaScript que permite desenvolver aplicações e serviços no lado do servidor.",
      },
      {
        name: "HTML",
        description:
          "Linguagem de marcação responsável por estruturar o conteúdo e os elementos de uma página web.",
      },
      {
        name: "Tailwind CSS",
        description:
          "Framework CSS baseado em classes utilitárias, permitindo desenvolver interfaces diretamente no HTML ou JSX.",
      },
      {
        name: "CSS",
        description:
          "Linguagem de estilização utilizada para definir cores, layouts, espaçamentos, animações e responsividade de páginas web.",
      },
    ],
  },
  {
    name: "Banco de Dados",
    technologies: [
      {
        name: "PostgreSQL",
        description:
          "Sistema gerenciador de banco de dados relacional e open source, conhecido por sua robustez e suporte a recursos avançados de SQL.",
      },
      {
        name: "MySQL",
        description:
          "Sistema gerenciador de banco de dados relacional bastante utilizado em aplicações web e sistemas que trabalham com SQL.",
      },
      {
        name: "Microsoft SQL Server",
        description:
          "Sistema gerenciador de banco de dados relacional desenvolvido pela Microsoft, utilizado em aplicações corporativas.",
      },
      {
        name: "MongoDB",
        description:
          "Banco de dados NoSQL orientado a documentos, que armazena informações em estruturas flexíveis semelhantes ao JSON.",
      },
      {
        name: "Redis",
        description:
          "Armazenamento de estruturas de dados em memória, frequentemente utilizado para cache, gerenciamento de sessões e processamento rápido.",
      },
      {
        name: "Firebase",
        description:
          "Plataforma do Google que oferece serviços para aplicações, incluindo autenticação, banco de dados e hospedagem.",
      },
      {
        name: "Oracle",
        description:
          "Sistema gerenciador de banco de dados relacional utilizado principalmente em ambientes corporativos e aplicações de grande porte.",
      },
    ],
  },
  {
    name: "Ferramentas",
    technologies: [
      {
        name: "Docker",
        description:
          "Plataforma de containerização que permite empacotar aplicações e suas dependências em ambientes isolados e reproduzíveis.",
      },
      {
        name: "GitHub",
        description:
          "Plataforma de hospedagem de repositórios Git, colaboração entre desenvolvedores e gerenciamento de projetos.",
      },
      {
        name: "GitLab",
        description:
          "Plataforma de desenvolvimento colaborativo que oferece gerenciamento de repositórios, integração e entrega contínuas.",
      },
      {
        name: "Postman",
        description:
          "Ferramenta utilizada para realizar, testar e documentar requisições HTTP e APIs.",
      },
      {
        name: "Bruno",
        description:
          "Cliente de API utilizado para criar, organizar e executar requisições HTTP, mantendo coleções de forma local.",
      },
      {
        name: "Figma",
        description:
          "Ferramenta de design de interfaces e prototipação, utilizada para criar e organizar experiências visuais.",
      },
      {
        name: "Visual Studio Code",
        description:
          "Editor de código-fonte extensível, com suporte a diversas linguagens, ferramentas e extensões para desenvolvimento.",
      },
      {
        name: "IntelliJ IDEA",
        description:
          "IDE da JetBrains com recursos avançados de desenvolvimento, especialmente para projetos Java e outras linguagens.",
      },
    ],
  },
];

export function TechStack() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedCategory = categories.find((category) =>
    category.technologies.some((tech) => tech.name === selectedTech)
  );

  const selectedTechnology = selectedCategory?.technologies.find(
    (tech) => tech.name === selectedTech
  );

  useEffect(() => {
    if (!selectedTech) return;

    const frame = window.requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [selectedTech]);

  function handleSelect(name: string) {
    setSelectedTech((current) => (current === name ? null : name));
  }

  return (
    <section id="tecnologias" className="scroll-mt-32 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          Ferramentas
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Tecnologias
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
          Tecnologias, bancos de dados e ferramentas que utilizo durante
          minha jornada no desenvolvimento.
        </p>

        <div className="mt-7 space-y-7">
          {categories.map((category) => {
            const categorySelected = category.technologies.some(
              (tech) => tech.name === selectedTech
            );

            return (
              <div key={category.name}>
                
                <h3 className="mb-3 text-sm font-semibold text-[var(--muted)]">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => {
                    const isSelected = selectedTech === tech.name;

                    return (
                      <button
                        key={tech.name}
                        type="button"
                        onClick={() => handleSelect(tech.name)}
                        aria-expanded={isSelected}
                        aria-controls={`description-${category.name}`}
                        className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)]"
                            : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        }`}
                      >
                        {tech.name}

                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isSelected ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    categorySelected
                      ? "mt-4 grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      id={`description-${category.name}`}
                      ref={categorySelected ? detailsRef : null}
                      aria-hidden={!categorySelected}
                      aria-live="polite"
                      className={`max-w-2xl rounded-xl border border-[var(--primary)]/30 bg-[var(--surface)] p-5 transition-all duration-300 ${
                        categorySelected
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Code2
                          size={18}
                          className="text-[var(--primary)]"
                        />

                        <h4 className="font-semibold">
                          {selectedTechnology?.name}
                        </h4>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {selectedTechnology?.description}
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
