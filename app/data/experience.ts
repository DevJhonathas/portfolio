export const experience = {
  company: "Reneware Negócios e Soluções",
  role: "Técnico de Suporte de TI",
  location: "Serra, ES",

  summary:
    "Atuação em suporte técnico e sustentação de sistemas, com desenvolvimento de ferramentas em Python, análise e manutenção de bancos de dados relacionais e resolução de inconsistências em sistemas de gestão fiscal.",

  periods: ["Fev/2022 – Out/2022", "Recontratado: Jul/2024 – Jul/2026"],

  clientsServed: ["Rede Gazeta", "Águia Branca", "Transilva"],

  results: [
    {
      title: "Desenvolvimento de comparador de notas fiscais em Python",
      description:
        "Desenvolvi uma ferramenta em Python para comparar as chaves de acesso obtidas no banco de dados dos clientes com as notas cadastradas no sistema, cerca de 2 mil notas. A solução auxiliava na identificação de documentos ausentes e divergências entre as bases, incluindo notas com eventos de cancelamento que ainda não estavam refletidas corretamente no sistema.",
    },
    {
      title: "Análise e correção de inconsistências com SQL",
      description:
        "Desenvolvi e utilizei consultas SQL para cruzar informações, investigar divergências em notas fiscais e eventos, verificar situações de documentos e apoiar correções pontuais ou em lote, utilizando filtros, JOINs, subconsultas e agrupamentos.",
    },
    {
      title: "Manutenção e automação de estruturas de banco de dados",
      description:
        "Realizei alterações em estruturas de bancos relacionais, incluindo criação e modificação de colunas, ajuste de tipos de dados, funções e triggers em PostgreSQL. Também implementei uma rotina automática para preencher o modelo da NF-e a partir de sua chave de acesso.",
    },
    {
      title: "Integridade e migração de dados",
      description:
        "Atuei na identificação de registros duplicados e inconsistências em tabelas de NF-e, CT-e e NSU, além de apoiar processos de migração, importação e ajustes de sequências, codificação e formatos de dados entre bancos.",
    },
    {
      title: "Suporte técnico e integração de sistemas",
      description:
        "Prestei suporte em hardware, software, redes e bancos de dados, investigando problemas de comunicação entre aplicações e serviços externos. Também atuei em configurações de serviços, conectividade, rotinas programadas e integrações com serviços fiscais.",
    },
  ],

  technologies: [
    "Python",
    "PostgreSQL",
    "MySQL",
    "Microsoft SQL Server",
    "Oracle",
    "AWS",
    "SQL",
  ],
};

export const education = {
  degree: "Análise e Desenvolvimento de Sistemas",
  institution: "Universidade Vila Velha (UVV)",
  location: "Vila Velha, ES",
  period: "Fev/2022 — Ago/2025",
  status: "Formado",
};

export const courseGroups = [
  {
    provider: "Udemy",
    period: "2023",
    courses: [
      {
        name: "React do Zero",
      },
      {
        name: "Docker para Desenvolvedores",
      },
      {
        name: "PHP do Zero à Maestria",
      },
      {
        name: "CSS - The Complete Guide",
        topics: "Flexbox, Grid e Sass",
      },
      {
        name: "Node.js - The Complete Guide",
        topics: "MVC, REST APIs, GraphQL e Deno",
      },
      {
        name: "Iniciando no desenvolvimento de API Node.js com TypeScript",
      },
      {
        name: "Curso Completo APIs com Node.js, Express + MongoDB, SQL",
      },
    ],
  },
  {
    provider: "Danki Code",
    period: "2022",
    courses: [
      {
        name: "Desenvolvimento Web",
      },
      {
        name: "Webmaster",
      },
    ],
  },
  {
    provider: "Prepara Cursos",
    period: "2019 — 2021",
    courses: [
      {
        name: "Web Designer",
      },
      {
        name: "Programador",
      },
    ],
  },
];
