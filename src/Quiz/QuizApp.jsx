import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../Auth/App.css";
import { useNavigate } from "react-router-dom";
import "./Resultpage"
import "./Resultpage"

function QuizApp() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); 
  const navigate = useNavigate();
  useEffect(() => {
    setQuestionIndex(0);
    setSelected(null);
    setTimeLeft(15);
    setIsAnswered(false);
    setCorrectAnswers(0);
  }, []);
  
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Jupiter",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Seoul", "Beijing", "Hanoi"],
      answer: "Tokyo",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Ozone"],
      answer: "Oxygen",
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Saturn", "Venus", "Earth"],
      answer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Nauru", "Malta"],
      answer: "Vatican City",
    },
  ];

  const current = questions[questionIndex];

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0 && !isAnswered) {
      Swal.fire({
        icon: "warning",
        title: "Time's up!",
        text: `The correct answer was: ${current.answer}`,
      });
      setIsAnswered(true);
    }

    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isAnswered, current.answer]);

  const handleAnswer = (option) => {
    if (isAnswered) return;

    setSelected(option);
    setIsAnswered(true);
    setUserAnswers((prev) => [...prev, { question: current.question, selected: option, correct: option === current.answer }]);

    if (option === current.answer) {
      setCorrectAnswers((prev) => prev + 1);
      Swal.fire({
        icon: "success",
        title: "Correct!",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong!",
        text: `Correct answer: ${current.answer}`,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelected(null);
      setIsAnswered(false);
      setTimeLeft(15);
    } else {
      const scorePercentage = (correctAnswers / questions.length) * 100;
      navigate("/result", { state: { userAnswers, scorePercentage } });
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz App</h2>
      <div className="quiz-timer">Time Left: {timeLeft}s</div>
      <div className="quiz-question">{current.question}</div>
      <div className="quiz-options">
        {current.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
            className={`option-btn ${
              isAnswered && option === current.answer
                ? "correct"
                : selected === option
                ? "selected"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="next-btn"
        onClick={handleNext}
        disabled={!isAnswered}
      >
        Next
      </button>
    </div>
  );
}

export default QuizApp;
