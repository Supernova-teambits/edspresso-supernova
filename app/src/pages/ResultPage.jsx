import { useState } from "react";
import quizData from "./dummy-question";
import CloseButton from "../components/Buttons/CloseButton";

const ResultPage = ({ score, totalQuestions, answers }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = score / totalQuestions >= 0.8;
  const [showAnswers, setShowAnswers] = useState(false);

  const getPassingMessage = () =>
    `Congratulations on completing your coffee training! We hope that you found the training informative and engaging, and that you gained new insights and skills that will help you excel in your role as a coffee professional.\n\nYour commitment to learning and professional development is commendable, and we are proud to have you as part of our team. By completing this training, you have demonstrated a strong dedication to delivering the highest quality coffee products and services to our customers.`;

  const getFailingMessage = () =>
    `We're sorry to inform you that you did not pass our coffee training. We understand that this may be disappointing, but please know that this is an opportunity to identify areas where you can improve and further develop your skills.\n\nWe encourage you to review the training materials and practice the techniques and concepts covered in the training. You can also reach out to your supervisor or mentor for additional support and guidance.`;

  return (
    <>
      <div className="result-page">
        <h2>Your Results</h2>
        <p>{passed ? "Great job!" : "Nice try"}</p>
        <p>You got {percentage}%</p>
        <p>
          ({score}/{totalQuestions}) correct answers
        </p>
        <p style={{ whiteSpace: "pre-line" }}>
          {passed ? getPassingMessage() : getFailingMessage()}
        </p>
        <button onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? "Hide" : "Show"} results
        </button>
        {showAnswers && (
          <>
            <div>
              {quizData.map((question) => (
                <div key={question.id}>
                  <strong>
                    {question.question}
                    {answers[question.id] === question.answer ? (
                      <span style={{ color: "green" }}> - Correct</span>
                    ) : (
                      <span style={{ color: "red" }}> - Incorrect</span>
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
            </div>
          </>
        )}
      </div>
      <div>
        <CloseButton
          buttonName="Close"
          message="Leave this page and go back to lesson?"
        />
      </div>
    </>
  );
};

export default ResultPage;
