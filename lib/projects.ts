export interface ProjectItem {
  slug: string;
  name: string;
  coverImage: string;
  demoVideo?: string;
  website: string;
  shortDescription: string;
  objective: string;
  technologies: string[];
  highlights: string[];
  gallery: string[];
}

export const projects: ProjectItem[] = [
  {
    slug: "inovacao-carros",
    name: "Inovação Carros",
    coverImage: "/projectInovacao/inovacao-01.png",
    demoVideo: "/projectInovacao/inovacao-demo-20260605.mp4",
    website: "https://inova-o-web.vercel.app/",
    shortDescription:
      "Landing page para locadora de veículos, com foco em conversão via WhatsApp e apresentação da frota.",
    objective:
      "Criar uma experiência moderna para apresentar os veículos, reforçar confiança com depoimentos reais e facilitar pedidos de orçamento com poucos cliques.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Seção de frota com cards e diferenciais de cada veículo",
      "Fluxo de aluguel em etapas para reduzir dúvidas do usuário",
      "CTA estratégico para contato imediato via WhatsApp",
      "Bloco de depoimentos para prova social",
    ],
    gallery: [
      "/projectInovacao/inovacao-01.png",
      "/projectInovacao/inovacao-02.png",
      "/projectInovacao/inovacao-03.png",
      "/projectInovacao/inovacao-04.png",
      "/projectInovacao/inovacao-05.png",
      "/projectInovacao/inovacao-06.png",
      "/projectInovacao/inovacao-07.png",
      "/projectInovacao/inovacao-08.png",
      "/projectInovacao/inovacao-09.png",
    ],
  },
  {
    slug: "vveva-atelie",
    name: "VVEVA Atelie",
    coverImage: "/projectVeva/veva-01.png",
    demoVideo: "/projectVeva/veva-demo-20260605.mp4",
    website: "https://ateli-web-beige.vercel.app/",
    shortDescription:
      "Site institucional para marca de roupas personalizadas, destacando catálogo, diferenciais e portfólio visual.",
    objective:
      "Valorizar o posicionamento da marca com uma identidade visual forte, facilitar a apresentação dos produtos e incentivar solicitações de orçamento.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Catálogo com linhas de produtos e chamadas para ação",
      "Sessão de diferenciais com foco em qualidade e personalização",
      "Galeria visual para reforçar credibilidade da marca",
      "Fluxo de processo de produção em etapas",
    ],
    gallery: [
      "/projectVeva/veva-01.png",
      "/projectVeva/veva-02.png",
      "/projectVeva/veva-03.png",
      "/projectVeva/veva-04.png",
      "/projectVeva/veva-05.png",
      "/projectVeva/veva-06.png",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
