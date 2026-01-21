"use client";

import { useState, useEffect, useCallback } from "react";

export interface GameScore {
  id: string;
  game: "memory" | "quiz";
  score: number;
  details: {
    moves?: number;
    time?: number;
    percentage?: number;
    correctAnswers?: number;
    totalQuestions?: number;
  };
  date: string;
}

export interface GameStats {
  bestScore: number;
  gamesPlayed: number;
  averageScore: number;
  lastPlayed: string | null;
}

const STORAGE_KEY = "game_scores";

export const useGameScores = () => {
  const [scores, setScores] = useState<GameScore[]>([]);

  // Carregar pontuações do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setScores(parsed);
      }
    } catch (error) {
      console.error("Erro ao carregar pontuações:", error);
    }
  }, []);

  // Salvar nova pontuação
  const saveScore = useCallback((newScore: Omit<GameScore, "id" | "date">) => {
    const score: GameScore = {
      ...newScore,
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toISOString(),
    };

    setScores((prevScores) => {
      const updatedScores = [...prevScores, score];
      // Manter apenas as últimas 100 pontuações
      const limitedScores = updatedScores.slice(-100);
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedScores));
      } catch (error) {
        console.error("Erro ao salvar pontuação:", error);
      }
      
      return limitedScores;
    });

    return score;
  }, []);

  // Obter estatísticas de um jogo específico
  const getGameStats = useCallback(
    (game: "memory" | "quiz"): GameStats => {
      const gameScores = scores.filter((s) => s.game === game);
      
      if (gameScores.length === 0) {
        return {
          bestScore: 0,
          gamesPlayed: 0,
          averageScore: 0,
          lastPlayed: null,
        };
      }

      const bestScore = Math.max(...gameScores.map((s) => s.score));
      const averageScore =
        gameScores.reduce((sum, s) => sum + s.score, 0) / gameScores.length;
      const lastPlayed = gameScores[gameScores.length - 1].date;

      return {
        bestScore,
        gamesPlayed: gameScores.length,
        averageScore: Math.round(averageScore),
        lastPlayed,
      };
    },
    [scores]
  );

  // Obter top N pontuações de um jogo
  const getTopScores = useCallback(
    (game: "memory" | "quiz", limit = 10): GameScore[] => {
      return scores
        .filter((s) => s.game === game)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
    },
    [scores]
  );

  // Limpar todas as pontuações
  const clearScores = useCallback(() => {
    setScores([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Erro ao limpar pontuações:", error);
    }
  }, []);

  // Limpar pontuações de um jogo específico
  const clearGameScores = useCallback((game: "memory" | "quiz") => {
    setScores((prevScores) => {
      const filtered = prevScores.filter((s) => s.game !== game);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      } catch (error) {
        console.error("Erro ao limpar pontuações:", error);
      }
      return filtered;
    });
  }, []);

  return {
    scores,
    saveScore,
    getGameStats,
    getTopScores,
    clearScores,
    clearGameScores,
  };
};
