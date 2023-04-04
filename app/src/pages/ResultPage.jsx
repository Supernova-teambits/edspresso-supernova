import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ResultPagination } from "../components/Buttons/Pagination";
import quizData from "./dummy-question";
import "./ResultPage.scss";
import { ArrowLineDown, ArrowLineUp, Vector } from "../assets/Icons";
import ResultDonutChart from "../components/Chart/ResultDonutChart";

const ResultPage = ({ score, totalQuestions, answers }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = score / totalQuestions >= 0.8;
  const [showAnswers, setShowAnswers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const pageSize = 1;
  const totalPages = Math.ceil(quizData.length / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const leaveResult = () => {
    navigate("/app/lesson/1");
  };
  const navigate = useNavigate();
  const updateTestResult = async () => {
    try {
      await axios.put(`${BASE_URL}/progress/64014b7e898a8420af6ab7f0`, {
        lesson_title: "Chemex",
        test_result: percentage,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getPassingMessage = () =>
    `Congratulations on completing your coffee training! We hope that you found the training informative and engaging, and that you gained new insights and skills that will help you excel in your role as a coffee professional.\n\nYour commitment to learning and professional development is commendable, and we are proud to have you as part of our team. By completing this training, you have demonstrated a strong dedication to delivering the highest quality coffee products and services to our customers.`;

  const getFailingMessage = () =>
    `We're sorry to inform you that you did not pass our coffee training. We understand that this may be disappointing, but please know that this is an opportunity to identify areas where you can improve and further develop your skills.\n\nWe encourage you to review the training materials and practice the techniques and concepts covered in the training. You can also reach out to your supervisor or mentor for additional support and guidance.`;

  return (
    <>
      <div className="result-page">
        {isMobile ? (
          <>
            <header className="result-header">
              <Vector
                style={{
                  display: "flex",
                  position: "absolute",
                  marginTop: "5px",
                }}
              />
              <div className="rs-header-wrapper">
                <h3>RESULTS</h3>
                <h2>3 Cups Chemex</h2>
              </div>
            </header>
            <main className="result-main">
              <h3 className="result-topic">Your Results</h3>
              <div className="result-wrapper">
                <div className="score-wrapper">
                  <h2>{passed ? "Great job!" : "Nice try"}</h2>
                  <div className="chart-wrapper">
                    <ResultDonutChart
                      score={score}
                      totalQuestions={totalQuestions}
                    />
                  </div>
                  <p className="score-text">
                    You got ({score}/{totalQuestions})<br />
                    correct answers
                  </p>
                </div>
                <div className="message-wrapper">
                  <p style={{ whiteSpace: "pre-line" }}>
                    {passed ? getPassingMessage() : getFailingMessage()}
                  </p>
                </div>
              </div>
              <button
                className="result-btn"
                onClick={() => setShowAnswers(!showAnswers)}
              >
                {showAnswers ? (
                  <>
                    Hide results
                    <ArrowLineUp fillColor="#10494C" />
                  </>
                ) : (
                  <>
                    Show results
                    <ArrowLineDown fillColor="#10494C" />
                  </>
                )}
              </button>
              {showAnswers && (
                <div className="rs-question-wrapper">
                  <p className="rs-question-topic">
                    Question {currentPage}/{totalPages}
                  </p>
                  {quizData
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map((question) => (
                      <div key={question.id} className="rs-question-container">
                        <h3>
                          {question.question}
                          {answers[question.id] === question.answer ? (
                            <span style={{ color: "#709294" }}> Correct</span>
                          ) : (
                            <span style={{ color: "#B00020" }}> Incorrect</span>
                          )}
                        </h3>
                        <div className="rs-options">
                          {question.options.map((option) => (
                            <div key={option}>
                              <label className="qz-radio-button">
                                <input
                                  type="radio"
                                  value={option}
                                  checked={answers[question.id] === option}
                                  readOnly
                                />
                                <span className="qz-option">{option}</span>
                                {option === question.answer && (
                                  <span
                                    className="qz-option"
                                    style={{
                                      color: "#709294",
                                    }}
                                  >
                                    &nbsp;(Correct)
                                  </span>
                                )}
                                {option === answers[question.id] &&
                                  option !== question.answer && (
                                    <span
                                      className="qz-option"
                                      style={{ color: "#B00020" }}
                                    >
                                      &nbsp;(Selected)
                                    </span>
                                  )}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  <div className="rs-pagination-container">
                    <ResultPagination
                      labelLeft="Back"
                      onClickLeft={handlePrevClick}
                      labelRight="Next"
                      onClickRight={handleNextClick}
                      isFirstPage={isFirstPage}
                      isLastPage={isLastPage}
                    />
                  </div>
                </div>
              )}
            </main>
            <footer className="result-footer">
              <button
                className="rs-close-btn"
                onClick={(event) => {
                  leaveResult();
                  updateTestResult();
                }}
              >
                Close
              </button>
            </footer>
          </>
        ) : (
          <>
            <header className="result-header">
              <div className="rs-header-wrapper">
                <div className="rs-header-left">
                  <h3>QUIZ</h3>
                  <h2>3 Cups Chemex</h2>
                </div>
                <div className="rs-header-middle">
                  <strong>RESULTS</strong>
                </div>
              </div>
            </header>
            <main className="result-main">
              <h2>Your Results</h2>
              <div className="result-wrapper">
                <div className="score-wrapper">
                  <h2>{passed ? "Great job!" : "Nice try"}</h2>
                  <div className="chart-wrapper">
                    <ResultDonutChart
                      score={score}
                      totalQuestions={totalQuestions}
                    />
                  </div>
                  <p className="score-text">
                    You got ({score}/{totalQuestions})<br />
                    correct answers
                  </p>
                </div>
                <div className="message-wrapper">
                  <p style={{ whiteSpace: "pre-line" }}>
                    {passed ? getPassingMessage() : getFailingMessage()}
                  </p>
                </div>
              </div>
              <button
                className="result-btn"
                onClick={() => setShowAnswers(!showAnswers)}
              >
                {showAnswers ? (
                  <>
                    Hide results
                    <ArrowLineUp fillColor="#10494C" />
                  </>
                ) : (
                  <>
                    Show results
                    <ArrowLineDown fillColor="#10494C" />
                  </>
                )}
              </button>
              {showAnswers && (
                <div>
                  {quizData.map((question) => (
                    <div key={question.id} className="rs-question-container">
                      <h3>
                        {question.question}
                        {answers[question.id] === question.answer ? (
                          <span style={{ color: "#709294" }}> Correct</span>
                        ) : (
                          <span style={{ color: "#B00020" }}> Incorrect</span>
                        )}
                      </h3>
                      <div className="rs-options">
                        {question.options.map((option) => (
                          <div key={option}>
                            <label className="qz-radio-button">
                              <input
                                type="radio"
                                name={`answer-${question.id}`}
                                value={option}
                                checked={answers[question.id] === option}
                                readOnly
                              />
                              <span className="qz-option">{option}</span>
                              {option === question.answer && (
                                <span
                                  className="qz-option"
                                  style={{
                                    color: "#709294",
                                  }}
                                >
                                  &nbsp;(Correct)
                                </span>
                              )}
                              {option === answers[question.id] &&
                                option !== question.answer && (
                                  <span
                                    className="qz-option"
                                    style={{ color: "#B00020" }}
                                  >
                                    &nbsp;(Selected)
                                  </span>
                                )}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
            <footer className="result-footer">
              <span className="note-text">
                {passed
                  ? ""
                  : "Note: You can access to these results from the lesson details page."}
              </span>
              <button
                className="rs-close-btn"
                onClick={(event) => {
                  leaveResult();
                  updateTestResult();
                }}
              >
                Close
              </button>
            </footer>
          </>
        )}
      </div>
    </>
  );
};
export default ResultPage;
