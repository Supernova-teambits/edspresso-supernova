import { useState, useEffect, useCallback } from "react";
import quizData from "./dummy-question";
import CloseButton from "../components/Buttons/CloseButton";
import { Pagination } from "../components/Buttons/Pagination";
import ResultPage from "./ResultPage";
import { useMediaQuery } from "react-responsive";
import { LinearProgress } from "@mui/material";
import "./QuizPage.scss";
import { CloseLine, Vector } from "../assets/Icons";

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

  const calculateScore = useCallback(() => {
    let finalScore = 0;
    quizData.forEach((question) => {
      if (answers[question.id] === question.answer) {
        finalScore++;
      }
    });
    setScore(finalScore);
  }, [answers]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          calculateScore();
          setCurrentPage(totalPages + 1);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [totalPages, calculateScore]);

  const currentQuiz = quizData.find((question) => question.id === currentPage);

  return (
    <div className="quiz-page">
      {isMobile ? (
        currentPage <= totalPages ? (
          <>
            <header className="quiz-header">
              <Vector
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "5px",
                }}
              />
              <CloseButton
                buttonName={<CloseLine fillColor="#FFF0DE" />}
                messageHeader="Leave the Test"
                message={
                  <>
                    Do you want to leave the test?
                    <br />
                    Your answers will not be saved.
                  </>
                }
                buttonStyle={{
                  display: "flex",
                  position: "absolute",
                  right: 0,
                  width: "50px",
                  marginTop: "3px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  },
                }}
              />
              <h3>QUIZ</h3>
              <h2>3 Cups Chemex</h2>
            </header>
            <div className="qz-header-middle-mobile">
              <LinearProgress
                variant="determinate"
                value={(currentPage / totalPages) * 100}
                sx={{
                  height: 8,
                  borderRadius: 8,
                  backgroundColor: "#FFF0DE",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 8,
                    backgroundColor: "#FF9B57",
                    width: "100%",
                  },
                  margin: "0 15px",
                }}
              />
              <div className="qz-question-mobile">
                Question {currentPage} of {totalPages} -{" "}
                {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
                {timeLeft % 60}
                &nbsp;min left
              </div>
            </div>

            <main className="quiz-main">
              <div className="qz-question-container">
                <p>Select one option in each question.</p>
                <h3>{currentQuiz.question}</h3>
                <div className="qz-options">
                  {currentQuiz.options.map((option, index) => (
                    <div key={index}>
                      <label className="qz-radio-button">
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          checked={answers[currentPage] === option}
                          onChange={() => {
                            handleAnswer(currentPage, option);
                          }}
                        />
                        <span className="qz-option">{option}</span>
                      </label>
                    </div>
                  ))}
                </div>
                {errorMessage && (
                  <p style={{ color: "#B00020" }} className="qz-error-message">
                    Please choose an answer.
                  </p>
                )}
              </div>
            </main>
            <footer className="quiz-footer">
              <div className="qz-footer-wrapper">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onBack={handleBack}
                  onNext={handleNext}
                  onSubmit={handleSubmit}
                />
              </div>
            </footer>
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
          <header className="quiz-header">
            <div class="qz-header-wrapper">
              <div class="qz-header-left">
                <h3>QUIZ</h3>
                <h2>3 Cups Chemex</h2>
              </div>
              <div className="qz-header-middle">
                <strong>
                  Time Left {Math.floor(timeLeft / 60)}:
                  {timeLeft % 60 < 10 ? "0" : ""}
                  {timeLeft % 60}
                  &nbsp;min
                </strong>
              </div>
            </div>
          </header>
          <main className="quiz-main">
            <p>Select one option in each question.</p>
            {quizData.map((question) => (
              <div key={question.id} className="qz-question-container">
                <h3>{question.question}</h3>
                <div className="qz-options">
                  {question.options.map((option, index) => (
                    <div key={index}>
                      <label className="qz-radio-button">
                        <input
                          type="radio"
                          name={`answer-${question.id}`}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={() => {
                            handleAnswer(question.id, option);
                          }}
                        />
                        <span className="qz-option">{option}</span>
                      </label>
                    </div>
                  ))}
                </div>
                {errorMessage && !answers[question.id] && (
                  <p style={{ color: "#B00020" }} className="qz-error-message">
                    Please choose an answer.
                  </p>
                )}
              </div>
            ))}
          </main>
          <footer className="quiz-footer">
            <div className="qz-footer-wrapper">
              <CloseButton
                buttonName="Cancel"
                message={
                  <>
                    Do you want to leave the test?
                    <br />
                    Your answers will not be saved.
                  </>
                }
                buttonStyle={{
                  textTransform: "capitalize",
                  border: "none",
                  height: "40px",
                  minWidth: "144px",
                  borderRadius: "8px",
                  padding: "10px 11px",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#eaf2f2",
                    boxShadow: "none",
                  },
                }}
              />
              <button className="qz-submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </footer>
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
