import dynamic from "next/dynamic";
import "../../components/_ui/Header/header.css";
import "./memory.css";
import Header from "@/components/_ui/Header/Header";

// Lazy loading do MemoryGame com suspense
const MemoryGame = dynamic(() => import("@/components/MemoryGame/MemoryGame"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-white text-xl">Carregando jogo...</div>
    </div>
  ),
});

const GameScoreboard = dynamic(() => import("@/components/GameScoreboard/GameScoreboard"));

export const metadata = {
  title: "Jogo da Memória | Meu App",
  description: "Teste suas habilidades com um jogo da memória baseado em tecnologias web",
};

export default function MemoryPage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f] to-[#0f0a20]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-[200px]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <Header title="Jogo da Memória" />
        <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-2xl">
            <h1 className="memory-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 mt-16 sm:mt-20 text-center">
              Jogo da <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Memória</span>
            </h1>
            <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-2">
              Encontre os pares de tecnologias e complete o desafio!
            </p>
            <MemoryGame />
            <GameScoreboard game="memory" title="🏆 Placar - Jogo da Memória" />
          </div>
        </main>
      </div>
    </>
  );
}
