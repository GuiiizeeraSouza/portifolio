"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useGameScores } from "@/hooks/useGameScores";
import "./QuizGame.css";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "O que significa a sigla HTML?",
    options: [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: 0,
    category: "HTML",
  },
  {
    id: 2,
    question: "Qual hook do React é usado para gerenciar estado?",
    options: ["useEffect", "useState", "useContext", "useMemo"],
    correctAnswer: 1,
    category: "React",
  },
  {
    id: 3,
    question: "Qual dessas NÃO é uma estrutura de dados em JavaScript?",
    options: ["Array", "Object", "Map", "Tuple"],
    correctAnswer: 3,
    category: "JavaScript",
  },
  {
    id: 4,
    question: "O que é CSS Grid?",
    options: [
      "Um sistema de layout bidimensional",
      "Uma biblioteca de animações",
      "Um framework JavaScript",
      "Um pré-processador CSS",
    ],
    correctAnswer: 0,
    category: "CSS",
  },
  {
    id: 5,
    question: "Qual é o método correto para fazer uma requisição GET com fetch?",
    options: [
      "fetch.get(url)",
      "fetch(url, { method: 'GET' })",
      "get.fetch(url)",
      "fetch(url)",
    ],
    correctAnswer: 3,
    category: "JavaScript",
  },
  {
    id: 6,
    question: "O que o Next.js oferece que o React puro não oferece?",
    options: [
      "Componentes funcionais",
      "Hooks",
      "Server-Side Rendering (SSR)",
      "Virtual DOM",
    ],
    correctAnswer: 2,
    category: "Next.js",
  },
  {
    id: 7,
    question: "Qual a diferença entre let e const em JavaScript?",
    options: [
      "let é global e const é local",
      "const não permite reatribuição",
      "let é mais rápido que const",
      "Não há diferença",
    ],
    correctAnswer: 1,
    category: "JavaScript",
  },
  {
    id: 8,
    question: "O que é TypeScript?",
    options: [
      "Um framework para React",
      "Um superset tipado de JavaScript",
      "Uma biblioteca de testes",
      "Um banco de dados",
    ],
    correctAnswer: 1,
    category: "TypeScript",
  },
  {
    id: 9,
    question: "Para que serve o useEffect no React?",
    options: [
      "Para criar estados",
      "Para efeitos colaterais e lifecycle",
      "Para estilizar componentes",
      "Para criar contextos",
    ],
    correctAnswer: 1,
    category: "React",
  },
  {
    id: 10,
    question: "O que é Tailwind CSS?",
    options: [
      "Um framework JavaScript",
      "Um framework CSS utility-first",
      "Um pré-processador CSS",
      "Uma biblioteca de componentes",
    ],
    correctAnswer: 1,
    category: "CSS",
  },
];

const QuizGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [scoreSaved, setScoreSaved] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const { saveScore } = useGameScores();

  // Embaralhar perguntas apenas no cliente
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerClick = useCallback(
    (answerIndex: number) => {
      if (answered) return;

      setSelectedAnswer(answerIndex);
      setAnswered(true);
      setUserAnswers([...userAnswers, answerIndex]);

      if (answerIndex === shuffledQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    },
    [answered, currentQuestion, shuffledQuestions, score, userAnswers]
  );

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  }, [currentQuestion, shuffledQuestions.length]);

  const restartQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setUserAnswers([]);
    setScoreSaved(false);
  }, []);

  const progressPercentage = useMemo(
    () => ((currentQuestion + 1) / shuffledQuestions.length) * 100,
    [currentQuestion, shuffledQuestions.length]
  );

  const getScoreMessage = useCallback(() => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage === 100) return "Perfeito! Você é um mestre! 🏆";
    if (percentage >= 70) return "Excelente trabalho! 🌟";
    if (percentage >= 50) return "Bom trabalho! 👍";
    return "Continue praticando! 💪";
  }, [score, shuffledQuestions.length]);

  // Salvar pontuação quando mostrar resultado
  useEffect(() => {
    if (showResult && !scoreSaved) {
      const totalScore = score * 100;
      const percentage = (score / shuffledQuestions.length) * 100;
      saveScore({
        game: "quiz",
        score: totalScore,
        details: {
          correctAnswers: score,
          totalQuestions: shuffledQuestions.length,
          percentage: Math.round(percentage),
        },
      });
      setScoreSaved(true);
    }
  }, [showResult, scoreSaved, score, shuffledQuestions.length, saveScore]);

  if (shuffledQuestions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-400">Carregando...</div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <div className="result-content">
            <h2 className="result-title">Quiz Concluído!</h2>
            <div className="score-circle">
              <div className="score-value">
                {score}/{shuffledQuestions.length}
              </div>
              <div className="score-label">Acertos</div>
            </div>
            <p className="score-message">{getScoreMessage()}</p>
            <div className="score-percentage">
              {Math.round((score / shuffledQuestions.length) * 100)}% de acertos
            </div>
            <button className="restart-button" onClick={restartQuiz}>
              Jogar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = shuffledQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <span className="progress-text">
            Pergunta {currentQuestion + 1} de {shuffledQuestions.length}
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <div className="quiz-score-box">
          <span className="quiz-score-label">Pontuação:</span>
          <span className="quiz-score-number">{score}</span>
        </div>
      </div>

      <div className="question-container">
        <div className="question-category">{currentQ.category}</div>
        <h2 className="question-text">{currentQ.question}</h2>
      </div>

      <div className="options-container">
        {currentQ.options.map((option, index) => {
          const isCorrect = index === currentQ.correctAnswer;
          const isSelected = index === selectedAnswer;
          const showCorrect = answered && isCorrect;
          const showWrong = answered && isSelected && !isCorrect;

          return (
            <button
              key={index}
              className={`option-button ${isSelected ? "selected" : ""} ${
                showCorrect ? "correct" : ""
              } ${showWrong ? "wrong" : ""}`}
              onClick={() => handleAnswerClick(index)}
              disabled={answered}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
              {showCorrect && <span className="option-icon">✓</span>}
              {showWrong && <span className="option-icon">✗</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="next-button-container">
          <button className="next-button" onClick={handleNextQuestion}>
            {currentQuestion < shuffledQuestions.length - 1
              ? "Próxima Pergunta"
              : "Ver Resultado"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
