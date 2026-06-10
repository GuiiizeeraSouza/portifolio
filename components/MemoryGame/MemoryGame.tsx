"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useGameScores } from "@/hooks/useGameScores";
import "./MemoryGame.css";

interface Card {
  id: number;
  name: string;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface TechCard {
  name: string;
  icon: string;
}

const technologies: TechCard[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
];

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);
  const { saveScore } = useGameScores();

  // Inicializar jogo - memoizado para evitar recriações desnecessárias
  const initializeGame = useCallback(() => {
    const duplicated = [...technologies, ...technologies];
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((tech, index) => ({
        id: index,
        name: tech.name,
        icon: tech.icon,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
    setGameStarted(false);
    setIsAnimating(false);
    setScoreSaved(false);
  }, []);

  // Inicializar game na primeira renderização
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Verificar se há match
  useEffect(() => {
    if (flipped.length !== 2) return;

    setIsAnimating(true);
    const [first, second] = flipped;

    if (cards[first].name === cards[second].name) {
      // Match encontrado
      setMatched([...matched, first, second]);
      setFlipped([]);
      setMoves((prev) => prev + 1);
      setIsAnimating(false);
    } else {
      // Não é match - desvirar após delay
      setTimeout(() => {
        setFlipped([]);
        setMoves((prev) => prev + 1);
        setIsAnimating(false);
      }, 1000);
    }
  }, [flipped, cards, matched]);

  // Verificar vitória
  useEffect(() => {
    if (matched.length > 0 && matched.length === cards.length) {
      setGameWon(true);
    }
  }, [matched, cards.length]);

  // Salvar pontuação quando ganhar
  useEffect(() => {
    if (gameWon && !scoreSaved) {
      const score = Math.max(1000 - moves * 10, 100);
      saveScore({
        game: "memory",
        score,
        details: {
          moves,
        },
      });
      setScoreSaved(true);
    }
  }, [gameWon, scoreSaved, moves, saveScore]);

  const startGame = useCallback(() => {
    setGameStarted(true);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
    setScoreSaved(false);
  }, []);

  const handleCardClick = useCallback(
    (id: number) => {
      if (!gameStarted || isAnimating || gameWon) return;
      if (flipped.includes(id) || matched.includes(id)) return;

      setFlipped((prev) => (prev.length < 2 ? [...prev, id] : prev));
    },
    [flipped, matched, isAnimating, gameStarted, gameWon]
  );

  const progressPercentage = useMemo(
    () => (matched.length / cards.length) * 100,
    [matched.length, cards.length]
  );

  return (
    <div className="memory-game-container">
      <div className="memory-stats">
        <div className="stat">
          <span className="stat-label">Movimentos:</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Pares:</span>
          <span className="stat-value">
            {matched.length / 2}/{cards.length / 2}
          </span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {!gameStarted && (
        <div className="preview-panel">
          <p>Veja onde estão todas as imagens antes de começar o jogo.</p>
          <button className="start-button" onClick={startGame}>
            Começar Jogo
          </button>
        </div>
      )}

      <div className="cards-grid">
        {cards.map((card) => {
          const isVisible = !gameStarted || flipped.includes(card.id) || matched.includes(card.id);
          return (
            <button
              key={card.id}
              className={`memory-card ${isVisible ? "flipped" : ""} ${matched.includes(card.id) ? "matched" : ""}`}
              onClick={() => handleCardClick(card.id)}
              disabled={isAnimating || !gameStarted}
              aria-label={`Carta ${card.id}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon-placeholder" />
                </div>
                <div className="card-back">
                  <img
                    src={card.icon}
                    alt={card.name}
                    className="card-icon"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {gameWon && (
        <div className="game-won-modal">
          <div className="modal-content">
            <h2>🎉 Você Venceu!</h2>
            <p>Movimentos realizados: {moves}</p>
            <button className="restart-button" onClick={initializeGame}>
              Jogar Novamente
            </button>
          </div>
        </div>
      )}

      <button className="reset-button" onClick={initializeGame}>
        Reiniciar Jogo
      </button>
    </div>
  );
};

export default MemoryGame;
