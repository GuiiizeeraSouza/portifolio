"use client";

import React, { useMemo } from "react";
import { useGameScores, GameScore } from "@/hooks/useGameScores";
import "./GameScoreboard.css";

interface GameScoreboardProps {
  game: "memory" | "quiz";
  title: string;
}

const GameScoreboard: React.FC<GameScoreboardProps> = ({ game, title }) => {
  const { getGameStats, getTopScores } = useGameScores();
  
  const stats = useMemo(() => getGameStats(game), [game, getGameStats]);
  const topScores = useMemo(() => getTopScores(game, 5), [game, getTopScores]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getScoreDetails = (score: GameScore) => {
    if (game === "memory") {
      return `${score.details.moves} movimentos`;
    } else {
      return `${score.details.correctAnswers}/${score.details.totalQuestions} acertos`;
    }
  };

  return (
    <div className="scoreboard-container">
      <h3 className="scoreboard-title">{title}</h3>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <div className="stat-label">Melhor Pontuação</div>
            <div className="stat-value">{stats.bestScore}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎮</div>
          <div className="stat-content">
            <div className="stat-label">Jogos Realizados</div>
            <div className="stat-value">{stats.gamesPlayed}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">Média</div>
            <div className="stat-value">{stats.averageScore}</div>
          </div>
        </div>
      </div>

      {topScores.length > 0 && (
        <div className="top-scores">
          <h4 className="top-scores-title">🏅 Top 5 Pontuações</h4>
          <div className="scores-list">
            {topScores.map((score, index) => (
              <div key={score.id} className="score-item">
                <div className="score-rank">#{index + 1}</div>
                <div className="score-info">
                  <div className="score-points">{score.score} pontos</div>
                  <div className="score-details">
                    {getScoreDetails(score)} • {formatDate(score.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {topScores.length === 0 && (
        <div className="no-scores">
          <p>Nenhuma pontuação registrada ainda.</p>
          <p>Complete um jogo para aparecer aqui!</p>
        </div>
      )}
    </div>
  );
};

export default GameScoreboard;
