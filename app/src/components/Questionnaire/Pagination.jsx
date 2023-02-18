const Pagination = ({
  currentQuestion,
  totalQuestions,
  onBack,
  onNext,
  onSubmit,
}) => {
  const isLastQuestion = currentQuestion === totalQuestions;
  const isFirstQuestion = currentQuestion === 1;

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="pagination">
      {!isFirstQuestion && <button onClick={handleBack}>Back</button>}
      {isLastQuestion ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
