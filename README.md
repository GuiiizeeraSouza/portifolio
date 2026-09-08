# Portfólio — Guilherme Souza

Portfólio pessoal desenvolvido com [Next.js](https://nextjs.org) para apresentar minha trajetória como Software Engineer & Front-End Developer, com projetos, tecnologias, depoimentos e dois mini-games interativos.

🔗 Deploy: (https://guiizeerasouza.vercel.app/)

## 🛠️ Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) e [Motion](https://motion.dev/) para animações
- [Lucide React](https://lucide.dev/) para ícones
- [class-variance-authority](https://cva.style/) e [tailwind-merge](https://github.com/dcastil/tailwind-merge) para composição de estilos
- [ESLint](https://eslint.org/) para lint

## 📁 Estrutura do projeto

```
app/
  page.tsx              # Home
  InitialPage/           # Seção hero + depoimentos + experiências + tecnologias
  projetos/               # Listagem e detalhe (/projetos/[slug]) dos projetos
  memory/                 # Página do Jogo da Memória
  quiz/                   # Página do Quiz de Programação
components/
  _ui/                    # Componentes de UI reutilizáveis (Header, Footer, Carousel, Modal...)
  MemoryGame/, QuizGame/  # Lógica e UI dos jogos
  GameScoreboard/         # Placar dos jogos
  FeedbackCarousel/       # Carrossel de depoimentos
  Technologies/, MyExperiences/
hooks/
  useGameScores.ts        # Persistência de pontuação no localStorage
lib/
  projects.ts             # Dados dos projetos exibidos em /projetos
  utils.ts
public/                   # Imagens, vídeos de demo e currículo
```

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ e npm.

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Outros scripts disponíveis:

```bash
npm run build   # build de produção
npm run start   # inicia o build de produção
npm run lint    # roda o ESLint
```

## 📦 Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com/new), criadora do Next.js. Basta importar o repositório e seguir o fluxo padrão de deploy.

## 📬 Contato

- LinkedIn: [linkedin.com/in/guilherme-souza-](https://www.linkedin.com/in/guilherme-souza-/)
- E-mail: guilhermefernandesouza.dev@gmail.com

---
