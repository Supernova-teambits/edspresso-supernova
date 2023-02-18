const ResultPage = ({ score, totalQuestions }) => {
  return (
    <div className="result-page">
      <h2>Questionnaire Result</h2>
      <p>
        You got {score} out of {totalQuestions} questions correct.
      </p>
    </div>
  );
};

export default ResultPage;
