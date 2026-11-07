import { ExperienceDuration } from "../components/home/ExperienceDuration";

export const profile = {
  name: "Jhonathas",
  role: "Desenvolvedor Full Stack Júnior · React, Next.js e Node.js",

  description:(
    <>
      <p>
        Tenho <ExperienceDuration /> de experiência profissional trabalhando com bancos de dados SQL em ambientes de produção, atuando na manutenção de estruturas, elaboração e otimização de consultas e análise de dados. Nesse período, também desenvolvi uma ferramenta em Python para comparar chaves de acesso de notas fiscais entre bases de dados, identificar documentos ausentes e apontar divergências nos registros.
      </p>
      <br />
      <p>
        Além da experiência profissional, desenvolvo projetos próprios voltados ao desenvolvimento de software e mantenho contato com tecnologias relacionadas a Linux e infraestrutura. Busco oportunidades para ampliar minha atuação no desenvolvimento de aplicações, contribuir com equipes e construir soluções que atendam a necessidades reais.
      </p>
    </>
  ),

  github: "https://github.com/DevJhonathas",
  linkedin: "https://www.linkedin.com/in/jhonathas-souza/",
  whatsapp: "5527998440745",
  email: "jhonathas.souza94@gmail.com",
  // instagram: "https://www.instagram.com/...",


  studyStartDate: "2019-01-01",

  workPeriods: [
      {
        startDate: "2022-02-22",
        endDate: "2022-10-26",
      },
      {
        startDate: "2024-07-08",
        endDate: "2026-07-30",
      },
    ],
  about: (
    <>
      <p>
        Sou Jhonathas Souza, desenvolvedor de software formado em{" "}
        <strong className="font-semibold text-[var(--foreground)]">
          Análise e Desenvolvimento de Sistemas
        </strong>{" "}
        pela Universidade Vila Velha (UVV).
      </p>

      <p>
        Tenho experiência profissional em{" "}
        <strong className="font-semibold text-[var(--primary)]">
          Técnico de Suporte de TI
        </strong>
        , com gerenciamento de dados relacionais — incluindo
        modelagem, criação de estruturas{" "}
        <strong className="font-semibold text-[var(--foreground)]">
          SQL
        </strong>{" "}
        e otimização de consultas. Atuação em atendimento ao usuário e manutenção de ambientes
        tecnológicos. 
      </p>
      <br/>
      <p>
        Na área de desenvolvimento, trabalho com{" "}
        <strong className="font-semibold text-[var(--primary)]">
          React, Next.js, Vue.js, TypeScript e Node.js
        </strong>
        , aplicando esses conhecimentos na criação de aplicações web,
        sistemas de gerenciamento e projetos próprios. Também tenho
        experiência prática com administração de sistemas{" "}
        <strong className="font-semibold text-[var(--foreground)]">
          Linux
        </strong>{" "}
        e infraestrutura de rede, utilizando tecnologias como{" "}
        <strong className="font-semibold text-[var(--foreground)]">
          Armbian, Orange Pi, Pi-hole e Unbound
        </strong>. Possuo conhecimento em{" "}<strong className="font-semibold text-[var(--foreground)]"> NoSQL</strong>.
      </p>
      <br/>
      <p>
        Busco oportunidades na área de{" "}
        <strong className="font-semibold text-[var(--primary)]">
          desenvolvimento de software
        </strong>{" "}
        onde possa contribuir tecnicamente com soluções voltadas a
        problemas reais.
      </p>
    </>
  ),
};
