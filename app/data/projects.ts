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
  cover: string;
  coverAlt: string;

  githubUrl?: string;
  liveUrl?: string;

  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "camada",
    name: "Camada.",
    description:
      "Calculadora de preços para impressão 3D, facilitando o cálculo de custos, margens de lucro e preços de venda.",

    longDescription: `
      O Camada é uma aplicação web desenvolvida para auxiliar no cálculo
      de preços de peças produzidas por minhas impressões 3D.

      O projeto foi pensado para simplificar o processo de precificação,
      considerando custos de filamento, energia elétrica, tempo de impressão
      e outros fatores envolvidos na produção.

      A aplicação também conta com recursos para organizar cálculos
      e facilitar o acompanhamento dos preços sugeridos.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lógica"],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/camada/telaInicial.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

    githubUrl: "",
    liveUrl: "",

    media: [
      {
        type: "video",
        src: "/images/projects/camada/demo.mp4",
        poster: "/images/projects/camada/cover.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/camada/telaInicial.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/camada/telaInicial.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/camada/telaInicial.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
    ],
  },

  {
    slug: "comparadorchaves",
    name: "Comparador De Chaves",
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

    category: "Software",
    status: "Finalizado",

    technologies: ["Roblox Studio", "Lua", "Game Design"],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/comparador-chaves/cover.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

    githubUrl: "",
    liveUrl: "",

    media: [
      {
        type: "video",
        src: "/images/projects/comparador-chaves/demo.mp4",
        poster: "/images/projects/comparador-chaves/cover.png",
        title: "Demonstração do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/cover.png",
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/testaconexao.png",
        alt: "Painel da aplicação Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/salvaconfig.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/comparando.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/resultado.png",
        alt: "Calculadora de preços do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/salvando.png",
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

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/gerenciador-pacientes/telaInicial.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

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
    slug: "miniblog",
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

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/miniblog/cover.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

    githubUrl: "https://github.com/DevJhonathas/Pacientes",
    liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      {
        type: "video",
        src: "/images/projects/miniblog/demo.mp4",
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
    slug: "orange-pi",
    name: "Orange Pi Zero 3 | Pi-hole + Unbound",
    description:
      "Aplicação web para gerenciamento de cadastros de pacientes, com operações CRUD e interface desenvolvida com Vue.js.",

    longDescription: `
      Projeto desenvolvido utilizando Vue.js para gerenciar cadastros
      de pacientes através de uma interface organizada e intuitiva.

      A aplicação permite realizar operações de cadastro, consulta,
      atualização e exclusão de registros, explorando conceitos
      fundamentais do desenvolvimento de aplicações web.
    `,

    category: "Filtragem DNS",
    status: "Finalizado",

    technologies: [
      "Pi-hole",
      "Unbound",
      "Armbian",
      "Orange Pi Zero 3",
      "WireGuard",
      "Nginx",
      "Linux",
    ],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/gerenciador-pacientes/telaInicial.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

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
    slug: "antigo_portfolio",
    name: "Portfolio 2024",
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

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/gerenciador-pacientes/telaInicial.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

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
    slug: "portfolio",
    name: "Portfolio",
    description:
      "Calculadora de preços para impressão 3D, facilitando o cálculo de custos, margens de lucro e preços de venda.",

    longDescription: `
      O Camada é uma aplicação web desenvolvida para auxiliar no cálculo
      de preços de peças produzidas por minhas impressões 3D.

      O projeto foi pensado para simplificar o processo de precificação,
      considerando custos de filamento, energia elétrica, tempo de impressão
      e outros fatores envolvidos na produção.

      A aplicação também conta com recursos para organizar cálculos
      e facilitar o acompanhamento dos preços sugeridos.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lógica"],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/gerenciador-pacientes/telaInicial.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

    githubUrl: "",
    liveUrl: "",

    media: [
      {
        type: "video",
        src: "/images/projects/camada/demo.mp4",
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
    slug: "impostometro",
    name: "Impostometro",
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

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/impostometro/cover.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

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
    slug: "invest",
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

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/invest/cover.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

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
