import React, { useState } from "react";
import quiz from "../api/quizz";

export default function Quizz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (option) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
    }
  };

  const handleNextQuestion = () => {
    const currentQuiz = quiz[currentQuestionIndex];

    // Check answer
    if (selectedAnswer === currentQuiz.answer) {
      setScore(score + 1);
    }

    // Reset answer and move to next question or show results
    setSelectedAnswer(null);

    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const currentQuiz = quiz[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-6">
      {!showResult ? (
        <div className="bg-slate p-6 rounded-lg shadow-md w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-button mb-4">
            Question {currentQuestionIndex + 1} of {quiz.length}
          </h2>
          <p className="text-lg text-button mb-6">{currentQuiz.question}</p>
          {currentQuiz.gambar && currentQuiz.id === 4 && (
            <div className="flex flex-row mb-4  gap-3 ">
              {currentQuiz.gambar.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Quiz Illustration ${index + 1}`}
                  className="rounded-md w-24 h-24 object-cover"
                />
              ))}
            </div>
          )}
          {/* Render Image if available */}
          {currentQuiz.gambar && currentQuiz.id === 5 && (
            <div className="mb-4">
              <img
                src={currentQuiz.gambar}
                alt="Quiz Illustration"
                className="rounded-md w-40 h-40 "
              />
            </div>
          )}

          <div className="space-y-4">
            {currentQuiz.options.map((option, index) => {
              // Determine button styles based on the answer
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuiz.answer;
              const isWrong = isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  className={`w-full py-3 px-4 rounded-lg text-left border transition-all ${
                    isSelected
                      ? isCorrect
                        ? "bg-green border-green text-slate"
                        : isWrong
                        ? "bg-red border-red text-slate"
                        : "bg-slate border-border"
                      : "bg-slate border-border hover:bg-blue"
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer} // Disable button after selection
                >
                  {option}
                </button>
              );
            })}
          </div>

          <button
            className={`mt-6 w-full py-3 px-4 rounded-lg text-slate font-semibold shadow-md transition-all ${
              selectedAnswer
                ? "bg-button hover:bg-secondary"
                : "bg-silver cursor-not-allowed"
            }`}
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestionIndex < quiz.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      ) : (
        <div className="bg-slate p-6 rounded-lg shadow-md w-full max-w-xl text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Quiz Completed</h2>
          <p className="text-lg text-black mb-6">
            Your score: <span className="font-bold">{score}</span> out of{" "}
            {quiz.length}
          </p>
          <button
            className="py-3 px-6 bg-green text-slate font-semibold rounded-lg shadow-md hover:bg-secondary transition-all"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
