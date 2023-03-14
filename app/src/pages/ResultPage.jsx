import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { StepPagination } from "../components/Buttons/Button";
import quizData from "./dummy-question";

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
        <h2>Your Results</h2>
        <p>{passed ? "Great job!" : "Nice try"}</p>
        <p>{percentage}%</p>
        <p>
          You got ({score}/{totalQuestions})<br />
          correct answers
        </p>
        <p style={{ whiteSpace: "pre-line" }}>
          {passed ? getPassingMessage() : getFailingMessage()}
        </p>
        <button onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? "Hide" : "Show"} results
        </button>
        {showAnswers && (
          <>
            {isMobile ? (
              <div>
                <p>
                  <strong>
                    Question {currentPage}/{totalPages}
                  </strong>
                </p>
                {quizData
                  .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                  .map((question) => (
                    <div key={question.id}>
                      <strong>
                        {question.question}
                        {answers[question.id] === question.answer ? (
                          <span style={{ color: "green" }}> Correct</span>
                        ) : (
                          <span style={{ color: "red" }}> Incorrect</span>
                        )}
                      </strong>
                      <div>
                        {question.options.map((option) => (
                          <div key={option}>
                            <label>
                              <input
                                type="radio"
                                value={option}
                                checked={answers[question.id] === option}
                                readOnly
                              />
                              {option}
                            </label>
                            {option === question.answer && (
                              <span style={{ color: "green" }}>
                                {" (correct answer)"}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                <StepPagination
                  labelLeft="Back"
                  onClickLeft={handlePrevClick}
                  labelRight="Next"
                  onClickRight={handleNextClick}
                />
              </div>
            ) : (
              <div>
                {quizData.map((question) => (
                  <div key={question.id}>
                    <strong>
                      {question.question}
                      {answers[question.id] === question.answer ? (
                        <span style={{ color: "green" }}> Correct</span>
                      ) : (
                        <span style={{ color: "red" }}> Incorrect</span>
                      )}
                    </strong>
                    <div>
                      {question.options.map((option) => (
                        <div key={option}>
                          <label>
                            <input
                              type="radio"
                              name={`answer-${question.id}`}
                              value={option}
                              checked={answers[question.id] === option}
                              readOnly
                            />
                            {option}
                          </label>
                          {option === question.answer && (
                            <span style={{ color: "green" }}>
                              {" (correct answer)"}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                Note: You can access to these results from the lesson details
                page.
              </div>
            )}
          </>
        )}
      </div>
      <div>
        <button
          className="close-btn"
          onClick={(event) => {
            leaveResult();
            updateTestResult();
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default ResultPage;
