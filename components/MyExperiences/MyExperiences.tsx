"use client"

import { useState } from "react"
import ShinyText from "../_ui/ShinyText/ShinyText"

interface Service {
    title: string
    description: string
}

const services: Service[] = [
    {
        title: "Desenvolvedor Front-end Jr",
        description:
            "Desenvolvedor Front-end Jr (jan/2025 - presente). Atuando com CSS, TypeScript e React.js no desenvolvimento de soluções web escaláveis. Especializado em Vite.js, Oleo.js e Alert.js para criar interfaces modernas e performáticas.",
    },
    {
        title: "Estagiário Front-end",
        description:
            "MPE Distribuidora (out/2024 - dez/2024). Desenvolvedor de sites de volume interno da empresa, trabalhando com React.js, CSS e outras tecnologias front-end para melhorar a experiência do usuário e otimizar processos internos.",
    },
    {
        title: "Desenvolvedor Front-end Freelance",
        description:
            "Remoto/Híbrido - Santa Maria, RS. Experiência em desenvolvimento de APIs com Node.js, criação de interfaces responsivas e integração de sistemas. Foco em entregar soluções personalizadas e de alta qualidade para diversos clientes.",
    },
]

const floatingDots = [
    { left: 12, top: 82, delay: 0, duration: 3 },
    { left: 35, top: 30, delay: 0.5, duration: 4 },
    { left: 23, top: 32, delay: 1, duration: 5 },
    { left: 83, top: 27, delay: 1.5, duration: 6 },
    { left: 88, top: 59, delay: 2, duration: 7 },
]

export default function MyExperiences() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10 animate-fade-in">
                <div className="max-w-5xl text-5xl mb-6">
                    <span className="text-white">Experiência em </span>
                    <ShinyText
                        text="Desenvolvimento"
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
                    <span className="text-white"> Front-end  </span>
                </div>
                <div className="max-w-[70vh] text-lg mb-6">
                    <ShinyText
                        text="Especialista em desenvolvimento front-end, criando soluções personalizadas para web e mobile com foco em qualidade, inovação e resultado."
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start relative z-10">
                <div className="space-y-6">
                    <div className="group relative bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/20 p-8 md:p-12 rounded-2xl border border-blue-500/30 overflow-hidden backdrop-blur-sm hover:border-blue-400/50 transition-all duration-500 animate-fade-in-up">
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

                        <div className="absolute inset-0 overflow-hidden">
                            {floatingDots.map((dot, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
                                    style={{
                                        left: `${dot.left}%`,
                                        top: `${dot.top}%`,
                                        animationDelay: `${dot.delay}s`,
                                        animationDuration: `${dot.duration}s`
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">3+</span>{" "}
                                <span className="text-white">Anos de Experiência</span>
                            </h3>
                            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed animate-fade-in animation-delay-200">
                                Front-End & Mobile Engineer especializado em React, React Native, TypeScript e Next.js. Desenvolvo aplicações escaláveis e de alta performance com foco em UX/UI. Experiência em Tailwind CSS, MUI, REST e GraphQL APIs, além de explorar Flutter, Ionic, NativeScript e KMM para entregar soluções inovadoras.
                            </p>
                            <div className="inline-block group/wrapper">

                                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 group-hover/wrapper:opacity-100 transition-opacity duration-300 animate-gradient-x">
                                    <a
                                        className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600/90 hover:to-purple-600/90 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] backdrop-blur-xl"
                                        href="https://www.linkedin.com/in/guilherme-souza-/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >

                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient-x"></div>


                                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>


                                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                                        </div>


                                        <div className="relative z-10">
                                            <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-md scale-150 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-500"></div>
                                            <svg
                                                aria-hidden
                                                className="relative w-5 h-5 transition-all duration-500 group-hover/btn:scale-110 group-hover/btn:rotate-[360deg] drop-shadow-lg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                            </svg>
                                        </div>


                                        <span className="relative z-10 tracking-wide group-hover/btn:tracking-wider transition-all duration-300 text-base drop-shadow-lg">
                                            Conecte-se no LinkedIn
                                        </span>


                                        <svg
                                            className="relative z-10 w-4 h-4 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:scale-125 drop-shadow-lg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>


                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50 rounded-tl-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50 rounded-br-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                </div>


                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl opacity-0 group-hover/wrapper:opacity-70 transition-opacity duration-500 -z-10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="group/card relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 md:p-8 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.02] cursor-pointer animate-fade-in-up"
                        style={{ animationDelay: '300ms' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-xl"></div>
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-purple-500 group-hover/card:w-8 transition-all duration-300 shadow-lg shadow-purple-500/50"></div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-blue-400 transition-all duration-300">
                                    Certificações & Cursos
                                </h3>
                            </div>
                            <div className="space-y-3 pl-5">
                                <div className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                                    <div className="text-left">
                                        <p className="text-white font-medium">Faculdade de Sistemas de Informação</p>
                                        <p className="text-gray-400 text-sm">Cursando - Formação em desenvolvimento de software e tecnologia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                                    <div className="text-left">
                                        <p className="text-white font-medium">Mais de 10 Cursos</p>
                                        <p className="text-gray-400 text-sm">Fundamentos de HTTP, TypeScript, React, Node.js e diversas tecnologias front-end</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group/card relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-4 md:p-11 rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >

                            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-xl`}></div>


                            <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                            </div>


                            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-2 h-2 rounded-full bg-blue-500 transition-all duration-300 ${hoveredIndex === index ? 'w-8 shadow-lg shadow-blue-500/50' : ''}`}></div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-blue-400 group-hover/card:to-purple-400 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover/card:text-gray-300 transition-colors duration-300 pl-5">
                                    {service.description}
                                </p>
                            </div>


                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100px) translateX(20px);
                        opacity: 0;
                    }
                }

                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-float {
                    animation: float 4s infinite;
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }

                .animation-delay-200 {
                    animation-delay: 200ms;
                }

                .animation-delay-400 {
                    animation-delay: 400ms;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    )
}

