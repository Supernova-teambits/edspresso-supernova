import { useState } from "react";
import { useEffect } from "react";
import quizData from "./dummy-question";
import CloseButton from "../components/CloseButton";
import Pagination from "../components/Pagination";
import ResultPage from "../components/ResultPage";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const totalQuestions = quizData.length;
  const [timeLeft, setTimeLeft] = useState(600);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const calculateScore = () => {
    let finalScore = 0;
    quizData.forEach((question) => {
      if (answers[question.id] === question.answer) {
        finalScore++;
      }
    });
    console.log("final score is: ", finalScore);
    setScore(finalScore);
  };

  const handleSubmit = () => {
    calculateScore();
    setCurrentQuestion(totalQuestions + 1);
    console.log("handleSubmit called");
    // redirect to result page
  };

  const currentQuiz = quizData.find(
    (question) => question.id === currentQuestion
  );

  return (
    <div className="quiz-page">
      {currentQuestion <= totalQuestions ? (
        <>
          <header>
            <CloseButton />
            <h3>Questionnaire:</h3>
            <h2>3 Cups Chemex</h2>
            <div className="header-middle">
              <span>
                Page {currentQuestion}/{totalQuestions}
              </span>
              &nbsp;
              <span>
                - {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
                {timeLeft % 60}
                min left
              </span>
            </div>
          </header>
          <main>
            <div className="question-container">
              <h2>{currentQuiz.question}</h2>
              <ul className="options">
                {currentQuiz.options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={answers[currentQuestion] === option}
                        onChange={() => handleAnswer(currentQuestion, option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <Pagination
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          </main>
        </>
      ) : (
        <ResultPage score={score} totalQuestions={totalQuestions} />
      )}
    </div>
  );
};

export default QuizPage;
