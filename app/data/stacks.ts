export interface TechnologyProject {
  name: string;
  slug?: string;
  usage: string;
}

export interface Technology {
  name: string;
  description: string;
  projectUses?: TechnologyProject[];
}

export interface Category {
  name: string;
  technologies: Technology[];
}

// Slugs dos projetos que possuem páginas próprias.
export const projectSlugs = new Set([
  "antigo_portfolio",
  "portfolio",
  "camada",
  "afterlands",
  "gerenciador-pacientes",
  "miniblog",
  "orange-pi",
  "invest",
]);

export const categories: Category[] = [
  {
    name: "Stack",
    technologies: [
      {
        name: "JavaScript",
        description:
          "Linguagem de programação utilizada no desenvolvimento de aplicações web interativas, tanto no frontend quanto no backend.",
        projectUses: [
          {
            name: "Gerenciador de Pacientes",
            slug: "gerenciador-pacientes",
            usage:
              "Utilizei para implementar as funcionalidades de cadastro, consulta, atualização e exclusão de pacientes.",
          },
        ],
      },
      {
        name: "TypeScript",
        description:
          "Superset do JavaScript que adiciona tipagem estática, facilitando a organização, manutenção e identificação de erros no código.",
        projectUses: [
          {
            name: "Camada",
            slug: "camada",
            usage:
              "Utilizei para definir tipagens das estruturas de dados, parâmetros de cálculo e informações utilizadas pela aplicação.",
          },
        ],
      },
      {
        name: "React",
        description:
          "Biblioteca JavaScript para construção de interfaces utilizando componentes reutilizáveis e gerenciamento de estados.",
        projectUses: [
          {
            name: "Camada",
            slug: "camada",
            usage:
              "Utilizei na construção da interface através de componentes reutilizáveis e gerenciamento de estados da calculadora.",
          },
        ],
      },
      {
        name: "Next.js",
        description:
          "Framework baseado em React que oferece recursos como App Router, renderização no servidor, geração estática e otimização de aplicações web.",
        projectUses: [
          {
            name: "Camada",
            slug: "camada",
            usage:
              "Utilizei como framework principal da aplicação, organizando a estrutura do projeto, rotas e componentes.",
          },
        ],
      },
      {
        name: "Vue.js",
        description:
          "Framework JavaScript progressivo para criação de interfaces e aplicações web utilizando componentes reativos.",
        projectUses: [
          {
            name: "Gerenciador de Pacientes",
            slug: "gerenciador-pacientes",
            usage:
              "Utilizei na construção da interface reativa e na organização dos componentes responsáveis pelo gerenciamento dos cadastros.",
          },
        ],
      },
      {
        name: "Nest.js",
        description:
          "Framework Node.js para construção de aplicações backend organizadas, escaláveis e geralmente desenvolvidas com TypeScript.",
        projectUses: [
          {
            name: "Invest",
            slug: "invest",
            usage:
              "Em andamento para o desenvolvimento do backend da plataforma, organizando a aplicação em módulos e serviços.",
          },
        ],
      },
      {
        name: "Node.js",
        description:
          "Ambiente de execução JavaScript que permite desenvolver aplicações e serviços no lado do servidor.",
        projectUses: [
          {
            name: "MiniBlog",
            slug: "miniblog",
            usage:
              "Utilizei Node.js no desenvolvimento do backend do MiniBlog, implementando a lógica de servidor, o processamento das requisições e a integração com o Firebase para armazenamento e gerenciamento dos dados da aplicação.",
          },
        ],
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
        projectUses: [
          {
            name: "Camada",
            slug: "camada",
            usage:
              "Utilizei na estilização da interface, construção dos layouts responsivos e personalização dos componentes.",
          },
        ],
      },
      {
        name: "CSS",
        description:
          "Linguagem de estilização utilizada para definir cores, layouts, espaçamentos, animações e responsividade de páginas web.",
        projectUses: [
          {
            name: "Gerenciador de Pacientes",
            slug: "gerenciador-pacientes",
            usage:
              "Utilizei na estilização das páginas, organização dos elementos, formulários e construção de uma interface responsiva.",
          },
        ],
      },
      {
        name: "Java",
        description:
          "Linguagem de programação orientada a objetos, utilizada principalmente no desenvolvimento de aplicações robustas e sistemas backend.",
        projectUses: [
          {
            name: "Mod de Minecraft",
            slug: "mod-minecraft",
            usage:
              "Utilizei Java no desenvolvimento de um mod para Minecraft, trabalhando com a implementação de funcionalidades para o jogo.",
          },
          {
            name: "Invest",
            slug: "invest",
            usage:
              "Utilizei Java no desenvolvimento da primeira API da plataforma.",
          },
        ],
      },
      {
        name: "Python",
        description:
          "Linguagem de programação versátil, utilizada no desenvolvimento de aplicações, automações, scripts e processamento de dados.",
        projectUses: [
          {
            name: "Experiência profissional",
            slug: "experiencia-profissional",
            usage:
              "Utilizei Python para desenvolver pequenas aplicações e ferramentas internas que auxiliavam nas atividades da empresa.",
          },
        ],
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
        projectUses: [
          {
            name: "Experiência profissional",
            usage:
              "Utilizei PostgreSQL em atividades profissionais envolvendo bancos de dados relacionais.",
          },
        ],
      },
      {
        name: "MongoDB",
        description:
          "Banco de dados NoSQL orientado a documentos, que armazena informações em estruturas flexíveis semelhantes ao JSON.",
        projectUses: [
          {
            name: "Portfólio 2024",
            slug: "antigo_portfolio",
            usage:
              "Utilizei MongoDB como banco de dados no desenvolvimento do meu portfólio de 2024.",
          },
        ],
      },
      {
        name: "Firebase",
        description:
          "Plataforma do Google que oferece serviços para aplicações, incluindo autenticação, banco de dados e hospedagem.",
        projectUses: [
          {
            name: "MiniBlog",
            slug: "miniblog",
            usage:
              "Utilizei o Firebase como banco de dados no desenvolvimento do MiniBlog. Utilizando para guardar informações de cadastros, posts, entre outros.",
          },
        ],
      },
      {
        name: "MySQL",
        description:
          "Sistema gerenciador de banco de dados relacional bastante utilizado em aplicações web e sistemas que trabalham com SQL.",
        projectUses: [
          {
            name: "Experiência profissional",
            usage:
              "Utilizei MySQL em atividades profissionais envolvendo armazenamento e gerenciamento de dados.",
          },
        ],
      },
      {
        name: "Redis",
        description:
          "Armazenamento de estruturas de dados em memória, frequentemente utilizado para cache, gerenciamento de sessões e processamento rápido.",
        projectUses: [
          {
            name: "Invest",
            slug: "invest",
            usage:
              "Planejo utilizar Redis como parte da infraestrutura de dados da plataforma.",
          },
        ],
      },
      {
        name: "Microsoft SQL Server",
        description:
          "Sistema gerenciador de banco de dados relacional desenvolvido pela Microsoft, utilizado em aplicações corporativas.",
        projectUses: [
          {
            name: "Experiência profissional",
            usage:
              "Utilizei SQL Server em atividades profissionais envolvendo gerenciamento de bancos de dados, como o da Águia Branca.",
          },
        ],
      },
      {
        name: "Oracle",
        description:
          "Sistema gerenciador de banco de dados relacional utilizado principalmente em ambientes corporativos e aplicações de grande porte.",
        projectUses: [
          {
            name: "Experiência profissional",
            usage:
              "Utilizei Oracle Database durante minha experiência profissional prestando suporte em empresas de grande porte, trabalhando com bancos de dados relacionais.",
          },
        ],
      },
    ],
  },
  {
    name: "Ferramentas",
    technologies: [
      {
        name: "Visual Studio Code",
        description:
          "Editor de código-fonte extensível, com suporte a diversas linguagens, ferramentas e extensões para desenvolvimento.",
        projectUses: [
          {
            name: "Principal editor para criação Web",
            usage:
              "Utilizo para programação de Websites para frontend e backend.",
          },
        ],
      },
      {
        name: "Docker",
        description:
          "Plataforma de containerização que permite empacotar aplicações e suas dependências em ambientes isolados e reproduzíveis.",
        projectUses: [
          {
            name: "Invest",
            slug: "invest",
            usage:
              "Em andamento para gerenciar os ambientes e os serviços necessários ao funcionamento da plataforma.",
          },
        ],
      },
      {
        name: "GitHub",
        description:
          "Plataforma de hospedagem de repositórios Git, colaboração entre desenvolvedores e gerenciamento de projetos.",
        projectUses: [
          {
            name: "Gerenciador de Pacientes",
            slug: "gerenciador-pacientes",
            usage:
              "Utilizei para hospedar o código-fonte e manter o versionamento do projeto.",
          },
        ],
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
        projectUses: [
          {
            name: "Ambiente de desenvolvimento",
            usage:
              "Utilizo Postman no meu computador principal para realizar requisições e testar APIs.",
          },
        ],
      },
      {
        name: "Bruno",
        description:
          "Cliente de API utilizado para criar, organizar e executar requisições HTTP, mantendo coleções de forma local.",
        projectUses: [
          {
            name: "Ambiente Linux",
            usage:
              "Utilizo Bruno no Arch Linux como ferramenta para realizar requisições e testar APIs.",
          },
        ],
      },
      {
        name: "Figma",
        description:
          "Ferramenta de design de interfaces e prototipação, utilizada para criar e organizar experiências visuais.",
        projectUses: [
          {
            name: "Portfólio",
            slug: "portfolio",
            usage:
              "Utilizo Figma para planejar e desenvolver os layouts e a identidade visual do meu próprio portfólio.",
          },
          {
            name: "Portfólio 2024",
            slug: "antigo_portfolio",
            usage:
              "Utilizo Figma para planejar e desenvolver os layouts e a identidade visual do meu próprio portfólio de 2024.",
          },
          {
            name: "Gerenciador de Pacientes",
            slug: "gerenciador-pacientes",
            usage:
              "Utilizo Figma para planejar e desenvolver os layouts e a identidade visual do Gerenciador de Pacientes.",
          },
          {
            name: "MiniBlog",
            slug: "miniblog",
            usage:
              "Utilizo Figma para planejar e desenvolver os layouts e a identidade visual do MiniBlog.",
          },
        ],
      },
      {
        name: "IntelliJ IDEA",
        description:
          "IDE da JetBrains com recursos avançados de desenvolvimento, especialmente para projetos Java e outras linguagens.",
        projectUses: [
          {
            name: "Invest",
            slug: "invest",
            usage:
              "Utilizei Intellij IDEA para utilizar Java no desenvolvimento da primeira API da plataforma.",
          },
        ],
      },
      {
        name: "AWS",
        description:
          "Plataforma de computação em nuvem da Amazon, oferecendo serviços de hospedagem, armazenamento, banco de dados e infraestrutura.",
        projectUses: [
          {
            name: "Experiência profissional",
            usage:
              "Utilizei com serviços da AWS durante minha experiência profissional.",
          },
        ],
      },
      {
        name: "Vercel",
        description:
          "Plataforma de hospedagem e implantação de aplicações web, com integração com GitHub e otimizações para projetos como Next.js.",
        projectUses: [
          {
            name: "Gerenciador de Pacientes",
            slug: "gerenciador-pacientes",
            usage:
              "Utilizei para realizar a hospedagem e publicação da aplicação web.",
          },
        ],
      },
    ],
  },
  {
    name: "Sistemas e Infraestrutura",
    technologies: [
      {
        name: "Linux",
        description:
          "Distribuição Linux independente e altamente personalizável, conhecida pelo modelo rolling release e pela filosofia de simplicidade e controle do sistema.",
        projectUses: [
          {
            name: "Arch Linux",
            usage:
              "Distribuição Linux independente e altamente personalizável, conhecida pelo modelo rolling release e pela filosofia de simplicidade e controle do sistema. Sistema operacional que utilizo atualmente no meu notebook, personalizando e administrando meu próprio ambiente de desenvolvimento.",
          },
          {
            name: "Fedora Server",
            usage:
              "Distribuição Linux voltada para ambientes de servidores, oferecendo tecnologias modernas para hospedagem, administração e gerenciamento de serviços. Utilizei Fedora Server em 2022 para explorar e trabalhar com ambientes Linux voltados a servidores.",
          },
          {
            name: "Debian",
            usage:
              "Distribuição GNU/Linux conhecida por sua estabilidade, segurança e ampla utilização em servidores e ambientes desktop. Utilizei Debian como sistema operacional em 2020.",
          },
          {
            name: "Linux Mint",
            usage:
              "Distribuição Linux baseada em Ubuntu e Debian, focada em facilidade de uso, estabilidade e uma experiência desktop acessível. Utilizei Linux Mint como sistema operacional em 2024.",
          },
        ],
      },
      {
        name: "Armbian",
        description:
          "Sistema operacional baseado em Debian e Ubuntu, otimizado para computadores de placa única com arquitetura ARM, como Orange Pi.",
        projectUses: [
          {
            name: "Orange Pi Zero 3 | Pi-hole + Unbound",
            slug: "orange-pi",
            usage:
              "Utilizei como sistema operacional do Orange Pi Zero 3, preparando o ambiente para executar os serviços de rede.",
          },
        ],
      },
      {
        name: "Pi-hole",
        description:
          "Ferramenta de filtragem DNS que bloqueia anúncios, rastreadores e domínios indesejados em toda a rede local.",
        projectUses: [
          {
            name: "Orange Pi Zero 3 | Pi-hole + Unbound",
            slug: "orange-pi",
            usage:
              "Configurei para realizar a filtragem DNS da rede local, bloqueando domínios associados a anúncios e rastreadores.",
          },
        ],
      },
      {
        name: "Unbound",
        description:
          "Resolvedor DNS recursivo e validador DNSSEC, utilizado para realizar consultas diretamente à infraestrutura DNS.",
        projectUses: [
          {
            name: "Orange Pi Zero 3 | Pi-hole + Unbound",
            slug: "orange-pi",
            usage:
              "Configurei como resolvedor DNS recursivo, integrado ao Pi-hole para realizar consultas DNS.",
          },
        ],
      },
      {
        name: "Nginx",
        description:
          "Servidor web de alto desempenho utilizado para disponibilizar aplicações, atuar como proxy reverso, balanceador de carga e gerenciar conexões HTTP.",
        projectUses: [
          {
            name: "Orange Pi Zero 3 | Pi-hole + Unbound",
            slug: "orange-pi",
            usage:
              "Incluído na configuração de infraestrutura do projeto para serviços web e gerenciamento de conexões.",
          },
        ],
      },
      {
        name: "WireGuard",
        description:
          "Solução moderna de VPN que permite criar redes privadas e túneis seguros de comunicação entre dispositivos e servidores.",
        projectUses: [
          {
            name: "Orange Pi Zero 3 | Pi-hole + Unbound",
            slug: "orange-pi",
            usage:
              "Incluído na infraestrutura para estabelecer conexões VPN e permitir comunicação privada entre dispositivos.",
          },
        ],
      },
    ],
  },
];
