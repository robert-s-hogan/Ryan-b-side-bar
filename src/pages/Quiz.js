import { useState } from "react";
import Question from "../components/Question";
import Button from "../components/Button";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-6">Quiz Page</h1>

      {quizCompleted ? (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-3 text-lg">
            Your score: <span className="font-bold">{score}</span> /{" "}
            {questions.length}
          </p>
          <Button
            theme="primary"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setQuizCompleted(false);
            }}
          >
            Restart Quiz
          </Button>
        </div>
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswerClick}
        />
      )}
    </div>
  );
}
