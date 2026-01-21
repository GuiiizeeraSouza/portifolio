import dynamic from "next/dynamic";
import "../../components/_ui/Header/header.css";
import "./quiz.css";
import Header from "@/components/_ui/Header/Header";

// Lazy loading do QuizGame com suspense
const QuizGame = dynamic(() => import("@/components/QuizGame/QuizGame"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-white text-xl">Carregando quiz...</div>
    </div>
  ),
});

const GameScoreboard = dynamic(() => import("@/components/GameScoreboard/GameScoreboard"));

export const metadata = {
  title: "Quiz de Programação | Meu App",
  description: "Teste seus conhecimentos sobre tecnologias web e programação",
};

export default function QuizPage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f] to-[#0f0a20]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-[200px]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <Header title="Quiz de Programação" />
        <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-3xl">
            <h1 className="quiz-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 mt-16 sm:mt-20 text-center">
              Quiz de <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Programação</span>
            </h1>
            <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-2">
              Teste seus conhecimentos sobre tecnologias web e programação!
            </p>
            <QuizGame />
            <GameScoreboard game="quiz" title="🏆 Placar - Quiz de Programação" />
          </div>
        </main>
      </div>
    </>
  );
}
