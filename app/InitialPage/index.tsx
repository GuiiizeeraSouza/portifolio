import ShinyText from "@/components/_ui/ShinyText/ShinyText"
import Carousel from "@/components/_ui/Carousel/Carousel"
import InfiniteCarousel from "@/components/_ui/InfiniteCarousel/InfiniteCarousel"
import FeedbackCarousel from "@/components/FeedbackCarousel/FeedbackCarousel"
import Services from "@/components/MyExperiences/MyExperiences"
import Technologies from "@/components/Technologies/Technologies"

export default function InitialPage() {
    const feedbacksData = [
        {
            name: "Francesco Krum",
            photoUrl: "https://media.licdn.com/dms/image/v2/D4D35AQHqKEanlxEvdw/profile-framedphoto-shrink_800_800/B4DZk0SZQiJMAg-/0/1757518861676?e=1769565600&v=beta&t=yomokORExH6NxJBVf6bAniLz0uQUvyQIRsbS_zLjENE",
            role: "Software Engineer - Java | Spring Boot | Angular | Microservices",
            text: "Trabalhei com o Guilherme durante alguns meses na Ideatos Soluções em Tecnologia, posso afirmar com convicção que é um profissional excelente dentro do desenvolvimento frontend e UI/UX. Ademais também é uma pessoa de muito boa comunicação e fácil convivência, com certeza recomendo ele a qualquer empresa!!"
        },
        {
            name: "Lucas Mendes Gonzales",
            photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQFSEVzGBNNoTQ/profile-displayphoto-scale_400_400/B56ZvhLWX2JEAk-/0/1769009409126?e=1770854400&v=beta&t=XqrSGRsIB7RNWDLDsrr8iJedRmwD5zBDd2f1ymTf_dw",
            role: "Desenvolvedor de Software Pleno @ Viasoft Korp | C# | .NET Framework | Typescript | Angular | PostgreSQL",
            text: "Profissional altamente qualificado e comprometido. A capacidade de resolver problemas complexos e a atenção aos detalhes fazem dele um asset valioso para qualquer equipe."
        },
        {
            name: "Evandro Cunha dos Santos Junior",
            photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQFDS_JqncCEsg/profile-displayphoto-scale_100_100/B56ZpfG3LhJwAc-/0/1762532226753?e=1770854400&v=beta&t=xvmwUpf060XYbENqPvFF5oMqnb1SfjmVtGKHzuZMjZs",
            role: "Desenvolvedor Full Stack Pleno | C# | .NET | .NET Framework | React | React Native | AWS",
            text: "Trabalhar com o Guilherme na MPE tem sido uma experiência muito positiva. Ele possui uma visão estratégica do desenvolvimento de software, sempre atento às melhores práticas e à qualidade do código. Sua capacidade de aprender rapidamente novas tecnologias e aplicá-las de forma prática no dia a dia é um diferencial que agrega muito ao time. Além das habilidades técnicas, o Guilherme é um colega que sabe colaborar, ouvir e ajudar. Ele tem uma postura profissional exemplar, transmitindo confiança e contribuindo para um ambiente de trabalho produtivo e motivador. Sem dúvida, é um profissional que recomendo para qualquer desafio na área de tecnologia."
        },
        {
            name: "Osmar Tassinari Neto",
            photoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEEO_X0JsPtPw/profile-displayphoto-scale_100_100/B4DZvCiWU0KYAg-/0/1768495343740?e=1770854400&v=beta&t=CNsE90eNU1-GN8W8agh9uNyxnD8QRHB7fo4IgsgsHbI",
            role: "Projetista Elétrico e Fotovoltaico | Projetos e execução para concessionárias e cooperativas | Técnico Eletricista Sênior",
            text: "É com grande satisfação que recomendo o Guilherme. Sua jornada de estagiário a Desenvolvedor Jr. na MPE foi uma das mais rápidas que já vi, impulsionada por sua dedicação e talento técnico. Ele entrega um trabalho de alta qualidade, aprende com velocidade e contribui positivamente para os objetivos da equipe. Um profissional exemplar com uma ética de trabalho impecável."
        },
    ]

    return (
        <>

            <div id="about" className="flex flex-col items-center text-center mb-16 mt-15 px-4 sm:px-6 md:px-8">
                <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-white rounded-full px-3 py-1 mb-6 animate-fade-in-down text-xs sm:text-sm">
                    <span className="text-purple-300">👋 Bem-vindo ao meu portfólio.</span>
                    <span className="text-white hidden sm:inline">Sou Guilherme</span>
                </div>
                <div className="max-w-2xl text-4xl sm:text-5xl md:text-6xl mb-6">
                    <ShinyText
                        text="Software Engineer & Front-End Developer"
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
                </div>
                <div className="max-w-full sm:max-w-[70vh] text-base sm:text-lg md:text-lg mb-6 px-2 sm:px-0">
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
                <div className="flex flex-col sm:flex-row justify-center gap-3 mb-2 w-full sm:w-auto px-2">
                    <a
                        href="/curriculo.pdf"
                        download
                        className="bg-white text-gray-900 px-4 sm:px-5 py-2 sm:py-1.5 rounded-[10px] hover:bg-gray-100 transition-colors font-medium text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
                    >

                        Baixar currículo
                    </a>
                    <a
                        href="mailto:guilhermefernandesouza.dev@gmail.com"
                        className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 sm:px-5 py-2 sm:py-1.5 rounded-[10px] hover:from-purple-700 hover:to-violet-700 transition-all font-medium text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
                    >

                        Enviar e-mail
                    </a>
                </div>
            </div >

            <div className="flex flex-col items-center gap-4 px-4 sm:px-6" >
                <div className="flex flex-wrap justify-center -space-x-3">
                    <a href="https://www.linkedin.com/in/francescokrum/" target="_blank" rel="noopener noreferrer" title="Clique para visitar o perfil">
                        <img src="https://media.licdn.com/dms/image/v2/D4D35AQHqKEanlxEvdw/profile-framedphoto-shrink_800_800/B4DZk0SZQiJMAg-/0/1757518861676?e=1769565600&v=beta&t=yomokORExH6NxJBVf6bAniLz0uQUvyQIRsbS_zLjENE" alt="Francesco Krum" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border hover:scale-110 transition-transform cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-mendes-gonzales-ba7607230/" target="_blank" rel="noopener noreferrer" title="Clique para visitar o perfil">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQFSEVzGBNNoTQ/profile-displayphoto-scale_400_400/B56ZvhLWX2JEAk-/0/1769009409126?e=1770854400&v=beta&t=XqrSGRsIB7RNWDLDsrr8iJedRmwD5zBDd2f1ymTf_dw" alt="Lucas Mendes Gonzales" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border hover:scale-110 transition-transform cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/evandrocsjr/" target="_blank" rel="noopener noreferrer" title="Clique para visitar o perfil">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQFDS_JqncCEsg/profile-displayphoto-scale_100_100/B56ZpfG3LhJwAc-/0/1762532226753?e=1770854400&v=beta&t=xvmwUpf060XYbENqPvFF5oMqnb1SfjmVtGKHzuZMjZs" alt="Evandro Cunha dos Santos Junior" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border hover:scale-110 transition-transform cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/osmar-tassinari-neto/" target="_blank" rel="noopener noreferrer" title="Clique para visitar o perfil">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEEO_X0JsPtPw/profile-displayphoto-scale_100_100/B4DZvCiWU0KYAg-/0/1768495343740?e=1770854400&v=beta&t=CNsE90eNU1-GN8W8agh9uNyxnD8QRHB7fo4IgsgsHbI" alt="Osmar Tassinari Neto" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border hover:scale-110 transition-transform cursor-pointer" />
                    </a>
                </div>
                <div className="relative inline-block">
                    <p className="text-gray-400 text-xs sm:text-sm cursor-help group">
                        Quem me recomendou no LinkedIn
                        <span className="invisible group-hover:visible absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                            Clique nas fotos ↑
                        </span>
                    </p>
                </div>
            </div >

            <div className="mb-20 relative overflow-hidden px-4 sm:px-6">
                <FeedbackCarousel
                    feedbacks={feedbacksData}
                    speed={50}
                    pauseOnHover={true}
                />


            </div>
            <div id="experiences" className="mb-20 relative overflow-hidden px-4 sm:px-6">
                <Services />


            </div>
            <div id="technologies" className="mb-20 relative overflow-hidden px-4 sm:px-6">
                <Technologies />
            </div>
        </>
    )
}