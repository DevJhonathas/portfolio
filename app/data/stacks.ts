export interface TechnologyProject {
  id: string;
  slug?: string;
  icon?: string;
}

export interface Technology {
  id: string;
  name: string;
  projectUses?: TechnologyProject[];
}

export interface Category {
  id: string;
  technologies: Technology[];
}

export const categories: Category[] = [
  {
    id: "stack",
    technologies: [
      {
        id: "javascript",
        name: "JavaScript",
        projectUses: [
          { id: "patientManagement", slug: "gerenciador-pacientes" },
        ],
      },
      {
        id: "typescript",
        name: "TypeScript",
        projectUses: [{ id: "camada", slug: "camada" }],
      },
      {
        id: "react",
        name: "React",
        projectUses: [{ id: "camada", slug: "camada" }],
      },
      {
        id: "nextjs",
        name: "Next.js",
        projectUses: [{ id: "camada", slug: "camada" }],
      },
      {
        id: "vuejs",
        name: "Vue.js",
        projectUses: [
          { id: "patientManagement", slug: "gerenciador-pacientes" },
        ],
      },
      {
        id: "nestjs",
        name: "Nest.js",
        projectUses: [{ id: "invest", slug: "invest" }],
      },
      {
        id: "nodejs",
        name: "Node.js",
        projectUses: [{ id: "miniblog", slug: "miniblog" }],
      },
      {
        id: "html",
        name: "HTML",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
        projectUses: [{ id: "camada", slug: "camada" }],
      },
      {
        id: "css",
        name: "CSS",
        projectUses: [
          { id: "patientManagement", slug: "gerenciador-pacientes" },
        ],
      },
      {
        id: "java",
        name: "Java",
        projectUses: [{ id: "invest", slug: "invest" }],
      },
      {
        id: "python",
        name: "Python",
        projectUses: [{ id: "keyComparison", slug: "comparadorchaves" }],
      },
    ],
  },
  {
    id: "databases",
    technologies: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        projectUses: [{ id: "professionalExperience" }],
      },
      {
        id: "mongodb",
        name: "MongoDB",
        projectUses: [{ id: "portfolio2024", slug: "antigo_portfolio" }],
      },
      {
        id: "firebase",
        name: "Firebase",
        projectUses: [{ id: "miniblog", slug: "miniblog" }],
      },
      {
        id: "mysql",
        name: "MySQL",
        projectUses: [{ id: "professionalExperience" }],
      },
      {
        id: "redis",
        name: "Redis",
        projectUses: [{ id: "invest", slug: "invest" }],
      },
      {
        id: "sqlserver",
        name: "Microsoft SQL Server",
        projectUses: [{ id: "professionalExperience" }],
      },
      {
        id: "oracle",
        name: "Oracle",
        projectUses: [{ id: "professionalExperience" }],
      },
    ],
  },
  {
    id: "tools",
    technologies: [
      {
        id: "vscode",
        name: "Visual Studio Code",
        projectUses: [{ id: "webEditor" }],
      },
      {
        id: "docker",
        name: "Docker",
        projectUses: [{ id: "invest", slug: "invest" }],
      },
      {
        id: "github",
        name: "GitHub",
        projectUses: [
          { id: "patientManagement", slug: "gerenciador-pacientes" },
        ],
      },
      {
        id: "gitlab",
        name: "GitLab",
      },
      {
        id: "postman",
        name: "Postman",
        projectUses: [{ id: "developmentEnvironment" }],
      },
      {
        id: "bruno",
        name: "Bruno",
        projectUses: [{ id: "linuxEnvironment" }],
      },
      {
        id: "figma",
        name: "Figma",
        projectUses: [
          { id: "portfolio", slug: "portfolio" },
          { id: "portfolio2024", slug: "antigo_portfolio" },
          {
            id: "patientManagement",
            slug: "gerenciador-pacientes",
          },
          { id: "miniblog", slug: "miniblog" },
        ],
      },
      {
        id: "intellij",
        name: "IntelliJ IDEA",
        projectUses: [{ id: "invest", slug: "invest" }],
      },
      {
        id: "aws",
        name: "AWS",
        projectUses: [{ id: "professionalExperience" }],
      },
      {
        id: "vercel",
        name: "Vercel",
        projectUses: [
          { id: "patientManagement", slug: "gerenciador-pacientes" },
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    technologies: [
      {
        id: "linux",
        name: "Linux",
        projectUses: [
          { id: "archLinux", icon: "Arch Linux" },
          { id: "fedoraServer", icon: "Fedora Server" },
          { id: "debian", icon: "Debian" },
          { id: "linuxMint", icon: "Linux Mint" },
        ],
      },
      {
        id: "armbian",
        name: "Armbian",
        projectUses: [{ id: "orangePi", slug: "orange-pi" }],
      },
      {
        id: "pihole",
        name: "Pi-hole",
        projectUses: [{ id: "orangePi", slug: "orange-pi" }],
      },
      {
        id: "unbound",
        name: "Unbound",
        projectUses: [{ id: "orangePi", slug: "orange-pi" }],
      },
      {
        id: "nginx",
        name: "Nginx",
        projectUses: [{ id: "orangePi", slug: "orange-pi" }],
      },
      {
        id: "wireguard",
        name: "WireGuard",
        projectUses: [{ id: "orangePi", slug: "orange-pi" }],
      },
    ],
  },
];
