export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
  title?: string;
}

export interface ProjectContent {
  name: string;
  description: string;
  longDescription: string;
  category: string;
  status: string;
  coverAlt: string;
  media: {
    alt?: string;
    title?: string;
  }[];
}

export interface Project {
  slug: string;
  technologies: string[];
  cover: string;

  githubUrl?: string;
  liveUrl?: string;

  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "camada",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lógica"],

    cover: "/images/projects/camada/telaInicial.png",

    githubUrl: "https://github.com/DevJhonathas/.Camada",
    liveUrl: "https://devjhonathas.github.io/.Camada/",

    media: [
      {
        type: "video",
        src: "/images/projects/camada/demo.mp4",
        poster: "/images/projects/camada/cover.png",
      },
      {
        type: "image",
        src: "/images/projects/camada/telaInicial.png",
      },
      {
        type: "image",
        src: "/images/projects/camada/telaInicial.png",
      },
      {
        type: "image",
        src: "/images/projects/camada/telaInicial.png",
      },
    ],
  },
  {
    slug: "comparadorchaves",

    technologies: [
      "Python",
      "psycopg-binary",
      "PyMySQL",
      "pyodbc",
      "oracledb",
      "sqlite3",
      "Nuitka",
      "pyside6-deploy",
      "MVVM",
      "Repository Pattern",
      "POO",
    ],

    cover: "/images/projects/comparador-chaves/cover.png",

    githubUrl: "https://github.com/DevJhonathas/ComparadorChaves",
    liveUrl:
      "https://github.com/DevJhonathas/ComparadorChaves/releases/tag/v0.3.0-beta.1",

    media: [
      {
        type: "video",
        src: "/images/projects/comparador-chaves/demo.mp4",
        poster: "/images/projects/comparador-chaves/cover.png",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/cover.png",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/testaconexao.png",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/salvaconfig.png",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/comparando.png",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/resultado.png",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/salvando.png",
      },
    ],
  },
  {
    slug: "gerenciador-pacientes",

    technologies: [
      "Vue.js",
      "Vuetify",
      "Ag-grid",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "CRUD",
    ],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/gerenciador-pacientes/telaInicial.png",

    githubUrl: "https://github.com/DevJhonathas/Pacientes",
    liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      // {
      //   type: "video",
      //   src: "/images/projects/gerenciador-pacientes/demo.mp4",
      //   poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
      //   title: "Demonstração do Gerenciador Pacientes",
      // },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/telaInicial.png",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
      },
      {
        type: "image",
        src: "/images/projects/gerenciador-pacientes/gestao.png",
      },
    ],
  },

  {
    slug: "miniblog",

    technologies: ["React", "JavaScript", "CSS", "Firebase", "React Router"],

    cover: "/images/projects/miniblog/cover.png",

    githubUrl: "https://github.com/DevJhonathas/MiniBlog",
    liveUrl: "https://miniblogjohnny.netlify.app/",

    media: [
      {
        type: "video",
        src: "/images/projects/miniblog/demo.mp4",
        poster: "/images/projects/miniblog/cover.png",
      },
      {
        type: "image",
        src: "/images/projects/miniblog/cover.png",
      },
      // {
      //   type: "image",
      //   src: "/images/projects/miniblog/dashboard.png",
      //   alt: "Dashboard de gerenciamento das publicações",
      // },
      // {
      //   type: "image",
      //   src: "/images/projects/miniblog/editor.png",
      //   alt: "Editor de criação e formatação de publicações",
      // },
      // {
      //   type: "image",
      //   src: "/images/projects/miniblog/post.png",
      //   alt: "Página de visualização de uma publicação",
      // },
    ],
  },
  {
    slug: "orange-pi",

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
    cover: "/images/projects/orangepi/telaInicial.png",

    // githubUrl: "https://github.com/DevJhonathas/Pacientes",
    // liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      // {
      //   type: "video",
      //   src: "/images/projects/gerenciador-pacientes/demo.mp4",
      //   poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
      //   title: "Demonstração do Gerenciador Pacientes",
      // },
      {
        type: "image",
        src: "/images/projects/orangepi/telaInicial.png",
      },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
      //   alt: "Painel da aplicação Gerenciador Pacientes",
      // },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/gestao.png",
      //   alt: "Calculadora de preços do Gerenciador Pacientes",
      // },
    ],
  },
  {
    slug: "antigo_portfolio",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "Styled-components",
      "Cors",
      "Multer",
      "Dotenv",
      "Bycriptjs",
      "express",
      "express-validator",
      "JsonWebtoken",
      "React Router Dom",
      "React icons",
      "@Reduxjs/toolkit",
    ],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/portfolio2024/cover.png",

    githubUrl: "https://github.com/DevJhonathas/Portfolio2024",
    liveUrl: "https://portfolio2024-e4t3.vercel.app/",

    media: [
      // {
      //   type: "video",
      //   src: "/images/projects/gerenciador-pacientes/demo.mp4",
      //   poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
      //   title: "Demonstração do Gerenciador Pacientes",
      // },
      {
        type: "image",
        src: "/images/projects/portfolio2024/cover.png",
      },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
      //   alt: "Painel da aplicação Gerenciador Pacientes",
      // },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/gestao.png",
      //   alt: "Calculadora de preços do Gerenciador Pacientes",
      // },
    ],
  },
  {
    slug: "portfolio",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next-themes",
      "Lucide-react",
      "React-icons",
    ],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/portfolio/cover.png",

    githubUrl: "https://github.com/DevJhonathas/portfolio",
    liveUrl: "",

    media: [
      // {
      //   type: "video",
      //   src: "/images/projects/camada/demo.mp4",
      //   poster: "/projects/portfolio/cover.png",
      //   title: "Demonstração do Gerenciador Pacientes",
      // },
      {
        type: "image",
        src: "/images/projects/portfolio/cover.png",
      },
      {
        type: "image",
        src: "/images/projects/portfolio/telaInicial.png",
      },
      {
        type: "image",
        src: "/portfolio/public/images/projects/gerenciador-pacientes/gestao.png",
      },
    ],
  },
  {
    slug: "invest",

    technologies: [
      "Next.js",
      "Typescript",
      "Nest.js",
      "Tailwind CSS",
      "MongoDB",
      "Redis",
      "Nginx",
      "Docker",
      "Postman",
      "Lucide-react",
      "React-datepicker",
      "Recharts",
      "Date-fns",
      "Dotenv",
      "Bullmq",
      "Mongoose",
      "Terminus",
      "JWT",
    ],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/invest/cover.png",

    githubUrl: "https://github.com/DevJhonathas/Invest",
    // liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      // {
      //   type: "video",
      //   src: "/images/projects/gerenciador-pacientes/demo.mp4",
      //   poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
      //   title: "Demonstração do Gerenciador Pacientes",
      // },
      {
        type: "image",
        src: "/images/projects/invest/cover.png",
      },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
      //   alt: "Painel da aplicação Gerenciador Pacientes",
      // },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/gestao.png",
      //   alt: "Calculadora de preços do Gerenciador Pacientes",
      // },
    ],
  },
  {
    slug: "impostometro",

    technologies: [
      "Next.js",
      "Nest.js",
      "JavaScript",
      "Typescript",
      "Tailwind CSS",
      "MongoDB",
      "Redis",
      "Docker",
    ],

    // initials: "C.",
    // gradient: "linear-gradient(135deg, #463678 0%, #17192e 100%)",
    cover: "/images/projects/impostometro/cover.png",

    // githubUrl: "https://github.com/DevJhonathas/Pacientes",
    // liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

    media: [
      // {
      //   type: "video",
      //   src: "/images/projects/gerenciador-pacientes/demo.mp4",
      //   poster: "/images/projects/gerenciador-pacientes/telaInicial.png",
      //   title: "Demonstração do Gerenciador Pacientes",
      // },
      {
        type: "image",
        src: "/images/projects/impostometro/cover.png",
      },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/cadastroPacientes.png",
      //   alt: "Painel da aplicação Gerenciador Pacientes",
      // },
      // {
      //   type: "image",
      //   src: "/images/projects/gerenciador-pacientes/gestao.png",
      //   alt: "Calculadora de preços do Gerenciador Pacientes",
      // },
    ],
  },
];
