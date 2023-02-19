const Pagination = ({ currentPage, totalPages, onBack, onNext, onSubmit }) => {
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

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
      {!isFirstPage && <button onClick={handleBack}>Back</button>}
      {isLastPage ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
