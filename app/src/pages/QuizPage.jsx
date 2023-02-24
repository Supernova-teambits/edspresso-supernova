import { useState, useEffect } from "react";
import quizData from "./dummy-question";
import CloseButton from "../components/Buttons/CloseButton";
import Pagination from "../components/Buttons/Pagination";
import ResultPage from "./ResultPage";
import { useMediaQuery } from "react-responsive";

const QuizPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const totalPages = quizData.length;
  const [timeLeft, setTimeLeft] = useState(600);
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

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
    setErrorMessage(false);
  };

  const handleNext = () => {
    if (answers[currentPage]) {
      setCurrentPage((prevPage) => prevPage + 1);
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setErrorMessage(false);
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
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  const currentQuiz = quizData.find((question) => question.id === currentPage);

  return (
    <div className="quiz-page">
      {isMobile ? (
        currentPage <= totalPages ? (
          <>
            <header>
              <CloseButton
                buttonName="X"
                message="Do you want to leave the test? Your answers will not be saved."
              />
              <h3>Quiz:</h3>
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
                <h3>{currentQuiz.question}</h3>
                <div className="options">
                  {currentQuiz.options.map((option, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          checked={answers[currentPage] === option}
                          onChange={() => {
                            handleAnswer(currentPage, option);
                          }}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {errorMessage && (
                <p style={{ color: "red" }} className="error-message">
                  Please choose an answer.
                </p>
              )}
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
          <ResultPage
            score={score}
            totalQuestions={totalPages}
            answers={answers}
          />
        )
      ) : currentPage <= totalPages ? (
        <>
          <header>
            <h3>Quiz:</h3>
            <h2>3 Cups Chemex</h2>
            <div className="header-middle">
              <strong>
                Time Left {Math.floor(timeLeft / 60)}:
                {timeLeft % 60 < 10 ? "0" : ""}
                {timeLeft % 60}
                &nbsp;min
              </strong>
            </div>
          </header>
          <main>
            {quizData.map((question) => (
              <div key={question.id} className="question-container">
                <h3>{question.question}</h3>
                <div className="options">
                  {question.options.map((option, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="radio"
                          name={`answer-${question.id}`}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={() => {
                            handleAnswer(question.id, option);
                          }}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {errorMessage && !answers[question.id] && (
                  <p style={{ color: "red" }} className="error-message">
                    Please choose an answer.
                  </p>
                )}
              </div>
            ))}
            {errorMessage && Object.keys(answers).length < quizData.length && (
              <div style={{ color: "red" }} className="error-message">
                Please answer all questions.
              </div>
            )}
            <CloseButton
              buttonName="Close"
              message="Do you want to leave the test? Your answers will not be saved."
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </main>
        </>
      ) : (
        <ResultPage
          score={score}
          totalQuestions={totalPages}
          answers={answers}
        />
      )}
    </div>
  );
};

export default QuizPage;
