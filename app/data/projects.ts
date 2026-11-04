export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  title?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  status: string;
  technologies: string[];
  initials: string;
  gradient: string;

  githubUrl?: string;
  liveUrl?: string;

  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "camada",
    name: "Camada",
    description:
      "Calculadora de preços para impressão 3D, facilitando o cálculo de custos, margens de lucro e preços de venda.",

    longDescription: `
      O Camada é uma aplicação web desenvolvida para auxiliar no cálculo
      de preços de peças produzidas por impressão 3D.

      O projeto foi pensado para simplificar o processo de precificação,
      considerando custos de filamento, energia elétrica, tempo de impressão
      e outros fatores envolvidos na produção.

      A aplicação também conta com recursos para organizar cálculos
      e facilitar o acompanhamento dos preços sugeridos.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    initials: "C.",
    gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",

    githubUrl: "",
    liveUrl: "",

    media: [
      {
        type: "video",
        src: "/projects/gerenciador-pacientes/demo.mp4",
        poster: "/projects/gerenciador-pacientes/cover.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/telaInicial.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/cadastroPacientes.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/gestao.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
    ],
  },

  {
    slug: "afterlands",
    name: "Afterlands",
    description:
      "Projeto de sobrevivência e construção inspirado em jogos sandbox, com exploração, criação e interação com o ambiente.",

    longDescription: `
      Afterlands é um projeto de desenvolvimento de jogos inspirado
      em experiências sandbox de sobrevivência e construção.

      A proposta é permitir que os jogadores explorem o ambiente,
      construam estruturas e desenvolvam suas próprias histórias
      através da interação com o mundo.

      O projeto envolve experimentação com geração de terreno,
      sistemas de sobrevivência, movimentação e inteligência artificial.
    `,

    category: "Game Development",
    status: "Finalizado",

    technologies: ["Roblox Studio", "Lua", "Game Design"],

    initials: "A.",
    gradient: "linear-gradient(135deg, #314c55 0%, #17242e 100%)",

    githubUrl: "",
    liveUrl: "",

    media: [
      {
        type: "video",
        src: "/projects/gerenciador-pacientes/demo.mp4",
        poster: "/projects/gerenciador-pacientes/cover.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/telaInicial.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/cadastroPacientes.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/gestao.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
    ],
  },

  {
    slug: "gerenciador-pacientes",
    name: "Gerenciador de Pacientes",
    description:
      "Aplicação web para gerenciamento de cadastros de pacientes, com operações CRUD e interface desenvolvida com Vue.js.",

    longDescription: `
      Projeto desenvolvido utilizando Vue.js para gerenciar cadastros
      de pacientes através de uma interface organizada e intuitiva.

      A aplicação permite realizar operações de cadastro, consulta,
      atualização e exclusão de registros, explorando conceitos
      fundamentais do desenvolvimento de aplicações web.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

    technologies: ["Vue.js", "JavaScript", "CSS"],

    initials: "GP.",
    gradient: "linear-gradient(135deg, #395b78 0%, #19283c 100%)",

    githubUrl: "https://github.com/DevJhonathas/Pacientes",
    liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      {
        type: "video",
        src: "/images/projects/gerenciador-pacientes/demo.mp4",
        poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/telaInicial.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/gestao.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
    ],
  },
  {
    slug: "MiniBlog",
    name: "MiniBlog",
    description:
      "Aplicação web para gerenciamento de cadastros de pacientes, com operações CRUD e interface desenvolvida com Vue.js.",

    longDescription: `
      Projeto desenvolvido utilizando Vue.js para gerenciar cadastros
      de pacientes através de uma interface organizada e intuitiva.

      A aplicação permite realizar operações de cadastro, consulta,
      atualização e exclusão de registros, explorando conceitos
      fundamentais do desenvolvimento de aplicações web.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

    technologies: ["Vue.js", "JavaScript", "CSS"],

    initials: "MB.",
    gradient: "linear-gradient(135deg, #453978 0%, #3111a3 100%)",

    githubUrl: "https://github.com/DevJhonathas/Pacientes",
    liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      {
        type: "video",
        src: "/images/projects/gerenciador-pacientes/demo.mp4",
        poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/telaInicial.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/gestao.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
    ],
  },
  {
    slug: "Invest",
    name: "Invest",
    description:
      "Aplicação web para gerenciamento de cadastros de pacientes, com operações CRUD e interface desenvolvida com Vue.js.",

    longDescription: `
      Projeto desenvolvido utilizando Vue.js para gerenciar cadastros
      de pacientes através de uma interface organizada e intuitiva.

      A aplicação permite realizar operações de cadastro, consulta,
      atualização e exclusão de registros, explorando conceitos
      fundamentais do desenvolvimento de aplicações web.
    `,

    category: "Aplicação Web",
    status: "Em Desenvolvimento",

    technologies: ["Vue.js", "JavaScript", "CSS"],

    initials: "I.",
    gradient: "linear-gradient(135deg, #6dc5a0 0%, #0004ff 100%)",

    githubUrl: "https://github.com/DevJhonathas/Pacientes",
    liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      {
        type: "video",
        src: "/images/projects/gerenciador-pacientes/demo.mp4",
        poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/telaInicial.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/gestao.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
    ],
  },
];
