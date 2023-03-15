import { ArrowLineLeft, ArrowLineRight } from "../../assets/Icons";

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
    <div
      className="pagination"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      {!isFirstPage ? (
        <button
          onClick={handleBack}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 6px",
            width: "148px",
            height: "40px",
            background: "transparent",
            borderRadius: "8px",
            textAlign: "center",
            color: "#10494C",
            border: "none",
          }}
        >
          <ArrowLineLeft fillColor="#10494C" style={{ marginRight: "4px" }} />
          <span style={{ flex: 1, textAlign: "center" }}>Back</span>
        </button>
      ) : (
        <button
          disabled
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 6px",
            width: "148px",
            height: "40px",
            borderRadius: "8px",
            textAlign: "center",
            border: "none",
          }}
        >
          <ArrowLineLeft fillColor="#0000004D" style={{ marginRight: "4px" }} />
          <span style={{ flex: 1, textAlign: "center" }}>Back</span>
        </button>
      )}
      {isLastPage ? (
        <button
          onClick={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 6px",
            width: "148px",
            height: "40px",
            background: "#B84B11",
            borderRadius: "8px",
            textAlign: "center",
            border: "none",
          }}
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handleNext}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 6px",
            width: "148px",
            height: "40px",
            background: "#B84B11",
            borderRadius: "8px",
            textAlign: "center",
            border: "none",
          }}
        >
          <span style={{ flex: 1, textAlign: "center" }}>Next</span>
          <ArrowLineRight fillColor="#FFFFFF" style={{ marginLeft: "4px" }} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
