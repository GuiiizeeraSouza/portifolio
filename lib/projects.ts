export interface ProjectItem {
  slug: string;
  name: string;
  coverImage: string;
  demoVideo?: string;
  website: string;
  category: "Pessoal" | "Profissional" | "Mobile";
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
    category: "Pessoal",
    shortDescription:
      "Landing page para locadora de veículos, com foco em conversão via WhatsApp e apresentação da frota.",
    objective:
      "Criar uma experiência moderna para apresentar os veículos, reforçar confiança com depoimentos reais e facilitar pedidos de orçamento com poucos cliques.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ESLint",
      "Framer Motion",
      "Lucide React",
    ],
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
    category: "Pessoal",
    shortDescription:
      "Site institucional para marca de roupas personalizadas, destacando catálogo, diferenciais e portfólio visual.",
    objective:
      "Valorizar o posicionamento da marca com uma identidade visual forte, facilitar a apresentação dos produtos e incentivar solicitações de orçamento.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "ESLint",
    ],
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
  {
    slug: "app-anilha",
    name: "App Anilha",
    coverImage: "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.06.jpeg",
    demoVideo: "/projetoAppMobileAnilha/WhatsApp%20Video%202026-06-10%20at%2011.41.47.mp4",
    website: "#",
    category: "Mobile",
    shortDescription:
      "Aplicativo mobile pessoal para visualizar treinos, progressos e conteúdo de musculação em formato prático.",
    objective:
      "Criar uma experiência mobile intuitiva para acompanhar séries, registrar treinos e consultar resultados de forma rápida.",
    technologies: [
      "Expo + Expo Router",
      "React Native / React Native Web",
      "React",
      "TypeScript",
      "Supabase",
      "Zustand",
      "React Hook Form",
      "Zod",
      "NativeWind",
      "Async Storage",
      "React Native Reanimated / Gesture Handler",
    ],
    highlights: [
      "Tela de consulta de treinos e exercícios",
      "Registro rápido de cargas e repetições",
      "Visualização de progresso em gráficos simples",
      "Navegação mobile otimizada para uso no treino",
    ],
    gallery: [
      "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.06.jpeg",
      "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.07.jpeg",
      "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.07%20(1).jpeg",
      "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.07%20(2).jpeg",
      "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.07%20(3).jpeg",
      "/projetoAppMobileAnilha/WhatsApp%20Image%202026-06-10%20at%2011.03.07%20(4).jpeg",
    ],
  },
  {
    slug: "alertai-education",
    name: "AlertAI Education",
    coverImage: "/projetoAlertAiEducation/banner.png",
    demoVideo: "/projetoAlertAiEducation/Gravação%20de%20Tela%202026-06-09%20170131.mp4",
    website: "https://education.alertai.com.br/",
    category: "Profissional",
    shortDescription:
      "Site de um dos produtos da empresa em que trabalho: um sistema de gerenciamento de acesso e monitoramento de colégios via IA com IoT.",
    objective:
      "Apresentar o produto corporativo que integra IA e IoT para gerenciamento de acesso e monitoramento de colégios, destacando funcionalidades, segurança e controle operacional.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"],
    highlights: [
      "Painel de gerenciamento de acesso de colégios com autenticação segura",
      "Monitoramento de ambientes escolares em tempo real via IoT",
      "Alertas inteligentes baseados em IA para eventos e anomalias",
      "Controle de permissões e visibilidade para equipes administrativas",
    ],
    gallery: [
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170144.png",
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170152.png",
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170157.png",
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170206.png",
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170213.png",
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170220.png",
      "/projetoAlertAiEducation/Captura%20de%20tela%202026-06-09%20170226.png",
    ],
  },
  {
    slug: "alertai-sports",
    name: "AlertAI Sports",
    coverImage: "/projetoAlertaiSports/banner.png",
    demoVideo: "/projetoAlertaiSports/Gravação%20de%20Tela%202026-06-10%20095237.mp4",
    website: "https://alertai.com.br/sports",
    category: "Profissional",
    shortDescription:
      "Site e solução para buscar e mostrar jogadas gravadas em quadras parceiras onde o sistema está instalado.",
    objective:
      "Apresentar a solução esportiva e permitir que usuários encontrem jogadas capturadas por câmera IA em quadras parceiras; ao apertar um botão na quadra, a jogada é gravada, enviada para a nuvem e buscada no banco de dados pelo site.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Chart.js"],
    highlights: [
      "Site que apresenta a solução e também busca jogadas capturadas em quadras parceiras",
      "Câmera com IA grava a jogada quando o usuário aperta o botão na quadra",
      "Envio automático das jogadas para a nuvem e busca em banco de dados",
      "Visualização de vídeos de jogadas e métricas esportivas em uma interface única",
    ],
    gallery: [
      "/projetoAlertaiSports/banner.png",
      "/projetoAlertaiSports/Captura%20de%20tela%202026-06-10%20095254.png",
      "/projetoAlertaiSports/Captura%20de%20tela%202026-06-10%20095259.png",
      "/projetoAlertaiSports/Captura%20de%20tela%202026-06-10%20095304.png",
      "/projetoAlertaiSports/Captura%20de%20tela%202026-06-10%20095310.png",
      "/projetoAlertaiSports/Captura%20de%20tela%202026-06-10%20095320.png",
      "/projetoAlertaiSports/Captura%20de%20tela%202026-06-10%20095341.png",
    ],
  },
  {
    slug: "alertai",
    name: "AlertAI",
    coverImage: "/projetoAlertAi/banner.png",
    demoVideo: "/projetoAlertAi/Gravação%20de%20Tela%202026-06-10%20100149.mp4",
    website: "https://alertai.com.br/",
    category: "Profissional",
    shortDescription:
      "Site institucional da empresa, onde o usuário conhece todas as soluções, baixa o instalador do sistema e faz login no web app.",
    objective:
      "Mostrar o portfólio da empresa e oferecer acesso direto ao instalador e ao sistema web em um único site informativo.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    highlights: [
      "Site corporativo com apresentação de todas as soluções AlertAI",
      "Download do instalador do sistema diretamente pelo site",
      "Acesso ao login do sistema web para clientes e equipe",
      "Conteúdo institucional que integra produto e experiência digital",
    ],
    gallery: [
      "/projetoAlertAi/banner.png",
      "/projetoAlertAi/Captura%20de%20tela%202026-06-10%20100215.png",
      "/projetoAlertAi/Captura%20de%20tela%202026-06-10%20100229.png",
      "/projetoAlertAi/Captura%20de%20tela%202026-06-10%20100242.png",
      "/projetoAlertAi/Captura%20de%20tela%202026-06-10%20100252.png",
      "/projetoAlertAi/Captura%20de%20tela%202026-06-10%20100300.png",
      "/projetoAlertAi/Captura%20de%20tela%202026-06-10%20100307.png",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
