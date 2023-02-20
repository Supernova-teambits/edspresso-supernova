import { useState } from "react";
import { useEffect } from "react";
import quizData from "./dummy-question";
import CloseButton from "../components/Buttons/CloseButton";
import Pagination from "../components/Buttons/Pagination";
import ResultPage from "./ResultPage";

const QuizPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const totalPages = quizData.length;
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
    if (answers[currentPage]) {
      setCurrentPage((prevPage) => prevPage + 1);
      hideErrorMessage();
    } else {
      displayErrorMessage();
    }
  };

  const displayErrorMessage = () => {
    const messageBox = document.getElementById("error-message");
    messageBox.style.display = "block";
  };

  const hideErrorMessage = () => {
    const messageBox = document.getElementById("error-message");
    messageBox.style.display = "none";
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const calculateScore = () => {
    let finalScore = 0;
    quizData.forEach((question) => {
      if (answers[question.id] === question.answer) {
        finalScore++;
      }
    });
    setScore(finalScore);
  };

  const handleSubmit = () => {
    const unansweredQuestions = quizData.filter(
      (question) => !answers[question.id]
    );
    if (unansweredQuestions.length === 0) {
      calculateScore();
      setCurrentPage(totalPages + 1);
      hideErrorMessage();
    } else {
      displayErrorMessage();
    }
  };

  const currentQuiz = quizData.find((question) => question.id === currentPage);

  return (
    <div className="quiz-page">
      {currentPage <= totalPages ? (
        <>
          <header>
            <CloseButton message="Do you want to leave the test? Your answers will not be saved." />
            <h3>Questionnaire:</h3>
            <h2>3 Cups Chemex</h2>
            <div className="header-middle">
              <span>
                Page {currentPage}/{totalPages}
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
                        checked={answers[currentPage] === option}
                        onChange={() => {
                          handleAnswer(currentPage, option);
                          hideErrorMessage();
                        }}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div id="error-message" style={{ display: "none" }}>
              Please choose an answer.
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          </main>
        </>
      ) : (
        <ResultPage score={score} totalQuestions={totalPages} />
      )}
    </div>
  );
};

export default QuizPage;
