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

    githubUrl: "https://github.com/DevJhonathas/.Camada",
    liveUrl: "https://devjhonathas.github.io/.Camada/",

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
    name: "Comparador de Chaves",
    description:
      "Aplicativo desktop desenvolvido em Python para comparar chaves de acesso de NF-e entre bancos de dados e arquivos XML, identificando divergências e facilitando a conferência de documentos fiscais.",

    longDescription: `
      Projeto desenvolvido em Python com o objetivo de automatizar
      a conferência de chaves de acesso de notas fiscais eletrônicas
      (NF-e), comparando registros armazenados em bancos de dados
      com as chaves encontradas em arquivos XML.

      A aplicação permite configurar conexões com diferentes
      sistemas de gerenciamento de bancos de dados, selecionar
      tabelas e colunas específicas e escolher diretórios contendo
      arquivos XML para processamento.

      Durante a comparação, o sistema extrai as chaves de acesso
      dos documentos XML, valida seu formato e identifica registros
      encontrados em ambas as origens, chaves ausentes no banco
      ou nos arquivos e possíveis duplicidades.

      O aplicativo também oferece teste de conexão, salvamento
      de configurações, armazenamento seguro de credenciais
      e exportação dos resultados em formato CSV.

      O desenvolvimento envolveu conceitos de programação
      orientada a objetos, arquitetura MVVM, Repository Pattern,
      integração com diferentes bancos de dados, processamento
      de arquivos XML e criação de interfaces desktop com PySide6.

      A aplicação pode ser distribuída como um executável
      independente para Windows, facilitando sua utilização
      sem a necessidade de instalar Python no computador.
    `,

    category: "Software",
    status: "Finalizado",

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
    coverAlt: "Interface do aplicativo Comparador de Chaves",

    githubUrl: "https://github.com/DevJhonathas/ComparadorChaves",
    liveUrl:
      "https://github.com/DevJhonathas/ComparadorChaves/releases/tag/v0.3.0-beta.1",

    media: [
      {
        type: "video",
        src: "/images/projects/comparador-chaves/demo.mp4",
        poster: "/images/projects/comparador-chaves/cover.png",
        title: "Demonstração do Comparador de Chaves",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/cover.png",
        alt: "Tela principal do Comparador de Chaves",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/testaconexao.png",
        alt: "Interface de teste de conexão com o banco de dados",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/salvaconfig.png",
        alt: "Configurações de conexão e armazenamento de credenciais",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/comparando.png",
        alt: "Processamento e comparação das chaves de acesso",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/resultado.png",
        alt: "Resultados da comparação entre banco de dados e XMLs",
      },
      {
        type: "image",
        src: "/images/projects/comparador-chaves/salvando.png",
        alt: "Etapa de salvamento dos resultados da comparação",
      },
    ],
  },
  {
    slug: "gerenciador-pacientes",
    name: "Gerenciador de Pacientes",
    description:
      "Aplicação web para gerenciamento de cadastros de pacientes, com operações CRUD e interface desenvolvida com Vue.js.",

    longDescription: `
        O Gerenciador de Pacientes é uma aplicação web desenvolvida com Vue.js, criada para facilitar a organização e o gerenciamento de cadastros de pacientes por meio de uma interface intuitiva e funcional.

        O sistema permite realizar operações de cadastro, consulta, atualização e exclusão de registros, oferecendo uma maneira prática de administrar as informações dos pacientes. Sua interface foi pensada para proporcionar uma experiência simples e organizada durante a utilização.

        O projeto também representa a aplicação de conceitos fundamentais do desenvolvimento front-end, como componentes, gerenciamento de dados, reatividade e operações CRUD, utilizando JavaScript, Vue.js e CSS.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

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
      "Plataforma de blog desenvolvida com React, permitindo criar, editar, excluir e pesquisar publicações. Conta com autenticação de usuários, editor de texto rico e gerenciamento de conteúdo integrado ao Firebase.",

    longDescription: `
    Projeto desenvolvido utilizando React e Firebase para criar uma
    plataforma de blog interativa, permitindo que usuários compartilhem
    ideias, experiências e conhecimentos por meio de publicações.

    A aplicação conta com autenticação de usuários, gerenciamento de
    publicações e um dashboard para organizar os conteúdos criados.
    Também permite pesquisar publicações por títulos, conteúdo e tags.

    O editor de texto rico oferece recursos de formatação para a criação
    de publicações mais completas, com suporte a imagens e tags.

    O desenvolvimento envolveu conceitos de gerenciamento de estado,
    React Hooks, Context API, navegação com React Router e integração
    com serviços do Firebase.
  `,

    category: "Aplicação Web",
    status: "Finalizado",

    technologies: ["React", "JavaScript", "CSS", "Firebase", "React Router"],

    cover: "/images/projects/miniblog/cover.png",
    coverAlt: "Interface da página inicial do MiniBlog",

    githubUrl: "https://github.com/DevJhonathas/MiniBlog",
    liveUrl: "https://miniblogjohnny.netlify.app/",

    media: [
      {
        type: "video",
        src: "/images/projects/miniblog/demo.mp4",
        poster: "/images/projects/miniblog/cover.png",
        title: "Demonstração do MiniBlog",
      },
      {
        type: "image",
        src: "/images/projects/miniblog/cover.png",
        alt: "Página inicial do MiniBlog",
      },
      {
        type: "image",
        src: "/images/projects/miniblog/dashboard.png",
        alt: "Dashboard de gerenciamento das publicações",
      },
      {
        type: "image",
        src: "/images/projects/miniblog/editor.png",
        alt: "Editor de criação e formatação de publicações",
      },
      {
        type: "image",
        src: "/images/projects/miniblog/post.png",
        alt: "Página de visualização de uma publicação",
      },
    ],
  },
  {
    slug: "orange-pi",
    name: "Network-wide Ad Blocking & Private DNS Server",
    description:
      "Projeto de infraestrutura de rede desenvolvido utilizando uma Orange Pi Zero 3 como servidor DNS doméstico, com o objetivo de proporcionar uma navegação mais limpa.",

    longDescription: `
    Projeto de infraestrutura de rede desenvolvido utilizando uma Orange Pi Zero 3 como servidor DNS doméstico, com o objetivo de proporcionar uma navegação mais limpa, segura e com maior privacidade para todos os dispositivos conectados à rede local. A solução utiliza o Pi-hole para bloquear anúncios, rastreadores e domínios indesejados diretamente no nível do DNS, eliminando a necessidade de instalar bloqueadores individualmente em cada dispositivo.

    A infraestrutura utiliza o Unbound como resolvedor DNS recursivo local, permitindo realizar consultas diretamente à hierarquia DNS, reduzindo a dependência de provedores DNS públicos. O servidor é executado sobre Armbian (Linux), com configurações de rede estática e serviços organizados para manter a disponibilidade e o funcionamento contínuo da solução. O projeto também contempla WireGuard para estabelecer conexões VPN criptografadas e Nginx para disponibilizar serviços web e atuar como proxy reverso, conforme a configuração da infraestrutura.

    Além da implementação de software e configuração dos serviços de rede, foi desenvolvida uma case personalizada por meio de impressão 3D para acomodar a Orange Pi Zero 3, proporcionando proteção física, organização dos componentes e ventilação adequada. O projeto reúne conceitos de administração Linux, redes de computadores, segurança, virtual private networks, DNS e prototipagem física.
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
    cover: "/images/projects/orangepi/telaInicial.png",
    coverAlt: "Interface do Gerenciador de Pacientes",

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
        alt: "Página inicial do Gerenciador Pacientes",
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
    name: "Portfolio 2024",
    description:
      "O Portfolio 2024 foi meu primeiro projeto de portfólio pessoal, desenvolvido com o objetivo de apresentar minhas habilidades em desenvolvimento Front-end e Back-end.",

    longDescription: `
      O Portfolio 2024 foi meu primeiro projeto de portfólio pessoal, desenvolvido com o objetivo de apresentar minhas habilidades em desenvolvimento Front-end e Back-end, reunindo projetos, experiências e trabalhos pessoais em uma única plataforma. A aplicação conta com uma interface desenvolvida em React, priorizando a organização do conteúdo, a navegação intuitiva e a apresentação visual dos projetos.

      Um dos principais diferenciais é a implementação de um backend próprio com Node.js e Express, responsável por disponibilizar uma API REST integrada ao MongoDB. Por meio de um sistema de autenticação e gerenciamento de conteúdo, é possível realizar operações de cadastro, consulta, atualização e exclusão de projetos, permitindo administrar as informações do portfólio sem a necessidade de alterar diretamente o código-fonte.

      O desenvolvimento envolveu conceitos de arquitetura REST, gerenciamento de estado com Redux Toolkit, persistência de dados com MongoDB, autenticação com JWT e organização de código baseada em boas práticas de desenvolvimento. O projeto também representa uma etapa importante da minha evolução como desenvolvedor, integrando conhecimentos de programação, design de interfaces e desenvolvimento de aplicações completas.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

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
        src: "/images/projects/portfolio2024/cover.png",
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
      "Portfólio pessoal desenvolvido com Next.js, apresentando projetos, experiências profissionais e habilidades técnicas em uma interface moderna, responsiva e interativa.",

    longDescription: `
      Projeto desenvolvido com Next.js, React e TypeScript para apresentar
      minha trajetória como desenvolvedor, reunindo projetos, experiências
      profissionais e tecnologias utilizadas ao longo da minha jornada.

      A aplicação conta com uma página principal organizada em diferentes
      seções, além de páginas individuais para cada projeto, permitindo
      explorar suas funcionalidades, tecnologias, imagens e demonstrações.
      Também possui suporte a temas claro e escuro e uma interface
      totalmente responsiva.

      Um dos diferenciais é a seção interativa de tecnologias, que permite
      visualizar onde cada ferramenta foi utilizada nos projetos apresentados.
      O desenvolvimento prioriza a componentização, reutilização de código,
      organização da estrutura e uma experiência de navegação intuitiva.
    `,

    category: "Aplicação Web",
    status: "Finalizado",

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
    coverAlt: "Interface do Gerenciador de Pacientes",

    githubUrl: "",
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
        alt: "Página inicial do Gerenciador Pacientes",
      },
      {
        type: "image",
        src: "/images/projects/portfolio/telaInicial.png",
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
    slug: "invest",
    name: "Invest",
    description:
      "O Invest é uma plataforma de acompanhamento e gerenciamento de investimentos, desenvolvida com foco no mercado financeiro brasileiro.",

    longDescription: `
    O Invest é uma plataforma de acompanhamento e gerenciamento de investimentos, desenvolvida com foco no mercado financeiro brasileiro. Seu objetivo é centralizar informações sobre ações, fundos imobiliários (FIIs), ETFs e outros ativos, permitindo que investidores acompanhem suas carteiras, consultem cotações e visualizem o desempenho de seus investimentos em uma interface moderna e intuitiva.

    Um dos principais diferenciais da plataforma é o sistema de alertas personalizados de valorização. A proposta é permitir que cada usuário defina metas percentuais para seus ativos e receba notificações quando determinada valorização for atingida, facilitando o acompanhamento das oportunidades de realização de lucro. A plataforma também prevê dashboards financeiros, gráficos de distribuição de carteira, histórico de operações e indicadores de desempenho.

    O desenvolvimento utiliza Next.js, React e TypeScript no frontend, com uma arquitetura de backend baseada em NestJS. O projeto envolve conceitos de componentização, gerenciamento de interfaces, visualização de dados financeiros, integração com serviços externos e desenvolvimento de APIs, além de uma estrutura preparada para autenticação e persistência de dados.
    `,

    category: "Aplicação Web",
    status: "Em Desenvolvimento",

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
    coverAlt: "Interface do Gerenciador de Pacientes",

    githubUrl: "https://github.com/DevJhonathas/Invest",
    // liveUrl: "https://cg-crud-git-master-jhonathas-projects.vercel.app/",

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
    slug: "impostometro",
    name: "Impostometro",

    description:
      "Plataforma desenvolvida para ajudar os consumidores a entender quanto pagam em impostos ao comprar produtos no mercado brasileiro, trazendo mais transparência sobre a carga tributária presente nos preços.",

    longDescription: `
      O Impostômetro é uma aplicação web que busca tornar mais
      acessíveis as informações sobre a tributação no Brasil,
      permitindo consultar produtos e visualizar a estimativa
      de impostos incluídos em seus preços.

      A proposta é oferecer uma visão mais clara sobre quanto
      do dinheiro gasto pelos consumidores corresponde a tributos,
      contribuindo para uma maior conscientização sobre a carga
      tributária presente no dia a dia dos brasileiros.

      O projeto está sendo desenvolvido com Next.js, NestJS,
      MongoDB, Redis, Docker e Tailwind CSS, combinando tecnologias
      modernas para construir uma aplicação organizada, escalável
      e de fácil utilização.
    `,

    category: "Aplicação Web",
    status: "Em Desenvolvimento",

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
