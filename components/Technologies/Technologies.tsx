"use client"

import { JSX, useMemo, useEffect, useRef } from "react"

import ShinyText from "@/components/_ui/ShinyText/ShinyText"

type Tech = {
  name: string
  description: string
  level: "avançado" | "intermediário" | "básico"
  accent: string
  icon: JSX.Element
}

const iconClass = "w-10 h-10 object-contain drop-shadow" as const

const icons = {
  html: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Logo HTML5" className={iconClass} loading="lazy" />,
  css: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Logo CSS3" className={iconClass} loading="lazy" />,
  sass: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Logo SASS" className={iconClass} loading="lazy" />,
  tailwind: <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg" alt="Logo Tailwind CSS" className={iconClass} loading="lazy" />, 
  bootstrap: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Logo Bootstrap" className={iconClass} loading="lazy" />,
  mui: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Logo Material UI" className={iconClass} loading="lazy" />,
  chakra: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/chakraui.svg" alt="Logo Chakra UI" className={iconClass} loading="lazy" />,
  js: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo JavaScript" className={iconClass} loading="lazy" />,
  ts: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Logo TypeScript" className={iconClass} loading="lazy" />,
  react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Logo React" className={iconClass} loading="lazy" />,
  next: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Logo Next.js" className={iconClass} loading="lazy" style={{ filter: "invert(1)" }} />,
  vue: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Logo Vue.js" className={iconClass} loading="lazy" />,
  nuxt: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nuxtdotjs.svg" alt="Logo Nuxt.js" className={iconClass} loading="lazy" />,
  vite: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Logo Vite" className={iconClass} loading="lazy" />,
  webpack: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Logo Webpack" className={iconClass} loading="lazy" />,
  axios: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/axios.svg" alt="Logo Axios" className={iconClass} loading="lazy" />,
  graphql: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="Logo GraphQL" className={iconClass} loading="lazy" />,
  context: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Logo Context API" className={iconClass} loading="lazy" />,
  jest: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Logo Jest" className={iconClass} loading="lazy" />,
  cypress: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cypress.svg" alt="Logo Cypress" className={iconClass} loading="lazy" />,
  eslint: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="Logo ESLint" className={iconClass} loading="lazy" />,
  prettier: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/prettier.svg" alt="Logo Prettier" className={iconClass} loading="lazy" />,
  figma: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Logo Figma" className={iconClass} loading="lazy" />,
  framer: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framer.svg" alt="Logo Framer Motion" className={iconClass} loading="lazy" style={{ filter: "invert(1)" }} />,
  websockets: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/socketdotio.svg" alt="Logo WebSockets" className={iconClass} loading="lazy" />,
  webrtc: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webrtc.svg" alt="Logo WebRTC" className={iconClass} loading="lazy" />,
  rest: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg" alt="Logo RESTful APIs" className={iconClass} loading="lazy" />,
  json: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/json.svg" alt="Logo JSON" className={iconClass} loading="lazy" />,
}

const technologies: Tech[] = [
  { name: "HTML5", description: "Estruturo páginas acessíveis e semânticas.", level: "avançado", accent: "from-[#301b1b] via-[#3c1f1f] to-[#2b1717]", icon: icons.html },
  { name: "CSS3", description: "Layouts responsivos e efeitos visuais consistentes.", level: "avançado", accent: "from-[#0f1f3a] via-[#12284a] to-[#0d1930]", icon: icons.css },
  { name: "SASS", description: "Escalo estilos com variáveis, mixins e partials.", level: "avançado", accent: "from-[#311226] via-[#3d1530] to-[#2a0f20]", icon: icons.sass },
  { name: "Tailwind CSS", description: "Design system utilitário para alta velocidade de entrega.", level: "avançado", accent: "from-[#062c3a] via-[#0b4c5f] to-[#062c3a]", icon: icons.tailwind },
  { name: "Bootstrap", description: "Prototipação rápida com grid e componentes prontos.", level: "intermediário", accent: "from-[#1f1740] via-[#291b52] to-[#1a1236]", icon: icons.bootstrap },
  { name: "Material UI", description: "UI consistente guiada por Material Design.", level: "intermediário", accent: "from-[#0d1f2e] via-[#12354b] to-[#0c1d2a]", icon: icons.mui },
  { name: "Chakra UI", description: "Componentes acessíveis e theming simples.", level: "intermediário", accent: "from-[#0e1d20] via-[#143036] to-[#0c191c]", icon: icons.chakra },
  { name: "JavaScript", description: "Bases sólidas para interações dinâmicas.", level: "avançado", accent: "from-[#2e2207] via-[#3c2d0a] to-[#241a06]", icon: icons.js },
  { name: "TypeScript", description: "Tipagem estática para segurança e refatoração.", level: "avançado", accent: "from-[#0d2a6d] via-[#0f3a96] to-[#0b2b6d]", icon: icons.ts },
  { name: "React.js", description: "Componentização, hooks e ecosistema maduro.", level: "avançado", accent: "from-[#0f1f2a] via-[#11354d] to-[#0d1d28]", icon: icons.react },
  { name: "Next.js", description: "SSR, RSC e edge para performance.", level: "avançado", accent: "from-[#0c1020] via-[#0f172a] to-[#0b0b14]", icon: icons.next },
  { name: "Vue.js", description: "Abordagem progressiva e reatividade elegante.", level: "intermediário", accent: "from-[#0f211c] via-[#17352d] to-[#0c1915]", icon: icons.vue },
  { name: "Nuxt.js", description: "Meta-framework Vue para SSR e DX aprimorada.", level: "intermediário", accent: "from-[#0f1f20] via-[#154339] to-[#0d1717]", icon: icons.nuxt },
  { name: "Vite", description: "Dev server veloz e build simplificado.", level: "avançado", accent: "from-[#24163a] via-[#2f1c4d] to-[#1f1233]", icon: icons.vite },
  { name: "Webpack", description: "Bundling customizável e pipelines avançados.", level: "intermediário", accent: "from-[#0f1f2a] via-[#12354a] to-[#0d1d28]", icon: icons.webpack },
  { name: "Axios", description: "HTTP client com interceptors e tipagem.", level: "avançado", accent: "from-[#111820] via-[#162433] to-[#0e141c]", icon: icons.axios },
  { name: "GraphQL", description: "Schemas tipados e consultas declarativas.", level: "intermediário", accent: "from-[#2a1031] via-[#3a1544] to-[#250d2c]", icon: icons.graphql },
  { name: "Context API", description: "Estado global enxuto e sem boilerplate.", level: "avançado", accent: "from-[#122033] via-[#17344c] to-[#0f1b29]", icon: icons.context },
  { name: "Jest", description: "Testes unitários com mocks e snapshots.", level: "avançado", accent: "from-[#2d1a24] via-[#3b1f2e] to-[#24141d]", icon: icons.jest },
  { name: "Cypress", description: "Testes e2e rápidos com vídeos e retries.", level: "intermediário", accent: "from-[#0f1f1f] via-[#12312f] to-[#0d1717]", icon: icons.cypress },
  { name: "ESLint", description: "Linting opinativo e automatizado.", level: "avançado", accent: "from-[#161633] via-[#1f1f4a] to-[#111127]", icon: icons.eslint },
  { name: "Prettier", description: "Formatação consistente para todo o time.", level: "avançado", accent: "from-[#211c2b] via-[#2c2437] to-[#1a1422]", icon: icons.prettier },
  { name: "Figma", description: "Design colaborativo e handoff fluido.", level: "intermediário", accent: "from-[#1a1f2b] via-[#1f2838] to-[#141924]", icon: icons.figma },
  { name: "Framer Motion", description: "Animações declarativas e microinterações.", level: "avançado", accent: "from-[#1d0f2b] via-[#2d113e] to-[#1d0f2b]", icon: icons.framer },
  { name: "WebSockets", description: "Comunicação em tempo real e eventos.", level: "intermediário", accent: "from-[#0f1a24] via-[#15293a] to-[#0c141d]", icon: icons.websockets },
  { name: "WebRTC", description: "Áudio, vídeo e data channels peer-to-peer.", level: "intermediário", accent: "from-[#0f1f2a] via-[#12384c] to-[#0d1b27]", icon: icons.webrtc },
  { name: "RESTful APIs", description: "Design de endpoints idempotentes e versionados.", level: "avançado", accent: "from-[#2d170f] via-[#3a1d14] to-[#24100c]", icon: icons.rest },
  { name: "JSON", description: "Contratos claros para troca de dados.", level: "avançado", accent: "from-[#1d1d1d] via-[#262626] to-[#141414]", icon: icons.json },
]

const badgeStyle: Record<Tech["level"], string> = {
  avançado: "bg-white/10 text-white border-white/20",
  intermediário: "bg-amber-500/15 text-amber-100 border-amber-300/40",
  básico: "bg-slate-500/15 text-slate-100 border-slate-400/40",
}

export default function Technologies() {
  const mosaic = useMemo(() => technologies, [])
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollY = 0
    const speed = 0.5

    const animate = () => {
      scrollY += speed
      
      if (scrollY >= scrollContainer.scrollHeight / 2) {
        scrollY = 0
      }
      
      scrollContainer.style.transform = `translateY(-${scrollY}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const duplicatedTechs = [...mosaic, ...mosaic]

  return (
    <section className="w-full flex flex-col gap-6 h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center gap-3 relative z-10 pt-8">
        <div className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight">
          <span className="text-white">Tecnologias que </span>
          <ShinyText
            text="potencializam"
            speed={2}
            delay={0}
            color="#a78bfa"
            shineColor="#8b5cf6"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <span className="text-white"> meus projetos</span>
        </div>
        <div className="max-w-3xl text-sm md:text-base text-gray-300">
          <ShinyText
            text="Ferramentas que uso no dia a dia para entregar interfaces modernas, performáticas e cheias de movimento."
            speed={3}
            delay={0}
            color="#b1b1b1"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden" ref={containerRef}>

        <div ref={scrollRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto px-4">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${tech.accent} p-4 flex flex-col gap-3 min-h-[150px] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_15px_45px_rgba(0,0,0,0.35)]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),transparent_45%)]" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="rounded-xl bg-black/20 border border-white/10 p-2 shadow-inner">
                  <div className="drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">{tech.icon}</div>
                </div>         
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="text-base font-semibold text-white">{tech.name}</h3>
                <p className="text-xs text-gray-200/90 leading-snug line-clamp-3">{tech.description}</p>
              </div>

              <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-300" />
              <div className="absolute -bottom-10 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
