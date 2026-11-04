
"use client";


import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Code2,
  Palette,
  GitBranch,
  Send,
  Network,
  PenTool,
  Terminal,
  Database
} from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNestjs,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiGithub,
  SiPython,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { DiAws } from "react-icons/di";
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
      {
        name: "Python",
        description:
          "Linguagem de programação versátil, utilizada no desenvolvimento de aplicações, automações, scripts e processamento de dados.",
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
      {
        name: "AWS",
        description:
          "Plataforma de computação em nuvem da Amazon, oferecendo serviços de hospedagem, armazenamento, banco de dados e infraestrutura.",
      },
      {
        name: "Vercel",
        description:
          "Plataforma de hospedagem e implantação de aplicações web, com integração com GitHub e otimizações para projetos como Next.js.",
      },
    ],
  },
  {
    name: "Sistemas e Infraestrutura",
    technologies: [
      {
        name: "Arch Linux",
        description:
          "Distribuição Linux independente e altamente personalizável, conhecida pelo modelo rolling release e pela filosofia de simplicidade e controle do sistema.",
      },
      {
        name: "Fedora Server",
        description:
          "Distribuição Linux voltada para ambientes de servidores, oferecendo tecnologias modernas para hospedagem, administração e gerenciamento de serviços.",
      },
      {
        name: "Debian",
        description:
          "Distribuição GNU/Linux conhecida por sua estabilidade, segurança e ampla utilização em servidores e ambientes desktop.",
      },
      {
        name: "Linux Mint",
        description:
          "Distribuição Linux baseada em Ubuntu e Debian, focada em facilidade de uso, estabilidade e uma experiência desktop acessível.",
      },
      {
        name: "Armbian",
        description:
          "Sistema operacional baseado em Debian e Ubuntu, otimizado para computadores de placa única com arquitetura ARM, como Orange Pi.",
      },
      {
        name: "Pi-hole",
        description:
          "Ferramenta de filtragem DNS que bloqueia anúncios, rastreadores e domínios indesejados em toda a rede local.",
      },
      {
        name: "Unbound",
        description:
          "Resolvedor DNS recursivo e validador DNSSEC, utilizado para realizar consultas diretamente à infraestrutura DNS.",
      },
      {
        name: "Nginx",
        description:
          "Servidor web de alto desempenho utilizado para disponibilizar aplicações, atuar como proxy reverso, balanceador de carga e gerenciar conexões HTTP.",
      },
      {
        name: "WireGuard",
        description:
          "Solução moderna de VPN que permite criar redes privadas e túneis seguros de comunicação entre dispositivos e servidores.",
      },
    ],
  },
];

const technologyIcons: Record<string, ReactNode> = {
  // Stack
  JavaScript: <SiJavascript size={18} color="#F7DF1E" />,
  Java: <Image src="/images/svg/java.svg" alt="" width={20} height={20} />,
  TypeScript: <SiTypescript size={18} color="#3178C6" />,
  React: <SiReact size={18} color="#61DAFB" />,
  "Next.js": <SiNextdotjs size={18} color="var(--foreground)" />,
  "Vue.js": <SiVuedotjs size={18} color="#42B883" />,
  "Nest.js": <SiNestjs size={18} color="#E0234E" />,
  "Node.js": <SiNodedotjs size={18} color="#5FA04E" />,
  HTML: <SiHtml5 size={18} color="#E34F26" />,
  "Tailwind CSS": <SiTailwindcss size={18} color="#06B6D4" />,
  CSS: <Image src="/images/svg/css.svg" alt="" width={20} height={20} />,

  // Banco de Dados
  PostgreSQL: <SiPostgresql size={18} color="#4479A1" />,
  MySQL: <SiMysql size={18} color="#4479A1" />,
  MongoDB: <SiMongodb size={18} color="#47A248" />,
  Redis: <SiRedis size={18} color="#FF4438" />,
  Firebase: <Image src="/images/svg/firebase.svg" alt="" width={20} height={20} />,
  "Microsoft SQL Server": <Image src="/images/svg/microsoft-sql-server.svg" alt="" width={20} height={20} />,
  Oracle: <Image src="/images/svg/oracle.svg" alt="" width={20} height={20} />,

  // Ferramentas
  Docker: <SiDocker size={18} color="#2496ED" />,
  GitHub: <SiGithub size={18} color="var(--foreground)" />,
  Vercel: <SiVercel size={18} color="var(--foreground)" />,
  Python: <SiPython size={18} color="#3776AB" />,
  GitLab: <Image src="/images/svg/gitlab.svg" alt="" width={20} height={20} />, 
  Postman: <Image src="/images/svg/postman.svg" alt="" width={20} height={20} />,
  Bruno: <Image src="/images/svg/bruno.svg" alt="" width={20} height={20} />,
  Figma: <Image src="/images/svg/figma.svg" alt="" width={20} height={20} />,
  "Visual Studio Code": <Image src="/images/svg/visual-studio-code.svg" alt="" width={20} height={20} />,
  "IntelliJ IDEA": <Terminal size={18} />,
  AWS: <Image src="/images/svg/aws.svg" alt="" width={20} height={20} />,

  //Sistemas e infra
  "Arch Linux": <Image src="/images/svg/arch-linux.svg" alt="" width={20} height={20} />,
  Debian: <Image src="/images/svg/debian.svg" alt="" width={20} height={20} />,
  "Fedora Server": <Image src="/images/svg/fedora.svg" alt="" width={20} height={20} />,
  "Linux Mint": <Image src="/images/svg/linux-mint.svg" alt="" width={20} height={20} />,
  Armbian: <Image src="/images/svg/armbian.webp" alt="" width={20} height={20} />,
  "Pi-hole": <Image src="/images/svg/pi-hole.svg" alt="" width={20} height={20} />,
  Unbound: <Image src="/images/svg/unbound.svg" alt="" width={20} height={20} />,
  WireGuard: <Image src="/images/svg/wireguard.svg" alt="" width={20} height={20} />,
  Nginx: <Image src="/images/svg/nginx.svg" alt="" width={20} height={20} />,
};

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
                        <span className="flex items-center gap-2">
                          {technologyIcons[tech.name] ?? <Code2 size={18} />}
                          <span>{tech.name}</span>
                        </span>

                        <ChevronDown
                          size={14}
                          className={`shrink-0 transition-transform duration-300 ${
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
