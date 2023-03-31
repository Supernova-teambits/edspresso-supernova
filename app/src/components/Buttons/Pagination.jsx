import { ArrowLineLeft, ArrowLineRight } from "../../assets/Icons";

export const Pagination = ({
  currentPage,
  totalPages,
  onBack,
  onNext,
  onSubmit,
}) => {
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
      style={{
        display: "flex",
        height: "inherit",
        width: "inherit",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <button
        onClick={handleBack}
        disabled={isFirstPage}
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
          color: isFirstPage ? "#0000004D" : "#10494C",
          border: "none",
          marginRight: "20px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#eaf2f2",
          },
        }}
      >
        <ArrowLineLeft
          fillColor={isFirstPage ? "#0000004D" : "#10494C"}
          style={{ marginRight: "4px" }}
        />
        <span
          className="qz-custom-pagination"
          style={{ flex: 1, textAlign: "center" }}
        >
          Back
        </span>
      </button>
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
            color: "#FFFFFF",
            borderRadius: "8px",
            textAlign: "center",
            border: "none",
            marginLeft: "20px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#6c2c09",
            },
          }}
        >
          <span
            className="qz-custom-pagination"
            style={{ flex: 1, textAlign: "center" }}
          >
            Submit
          </span>
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
            color: "#FFFFFF",
            borderRadius: "8px",
            textAlign: "center",
            border: "none",
            marginLeft: "20px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#6c2c09",
            },
          }}
        >
          <span
            className="qz-custom-pagination"
            style={{ flex: 1, textAlign: "center" }}
          >
            Next
          </span>
          <ArrowLineRight fillColor="#FFFFFF" style={{ marginLeft: "4px" }} />
        </button>
      )}
    </div>
  );
};

export const ResultPagination = ({
  labelLeft,
  onClickLeft,
  labelRight,
  onClickRight,
  isFirstPage,
  isLastPage,
}) => {
  return (
    <div
      className="pagination"
      style={{
        display: "flex",
        height: "inherit",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <button
        onClick={onClickLeft}
        disabled={isFirstPage}
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
          color: isFirstPage ? "#0000004D" : "#10494C",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowLineLeft
          fillColor={isFirstPage ? "#0000004D" : "#10494C"}
          style={{ marginRight: "4px" }}
        />
        <span
          className="rs-custom-pagination"
          style={{ flex: 1, textAlign: "center" }}
        >
          {labelLeft}
        </span>
      </button>
      <button
        onClick={onClickRight}
        disabled={isLastPage}
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
          color: isLastPage ? "#0000004D" : "#10494C",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="rs-custom-pagination"
          style={{ flex: 1, textAlign: "center" }}
        >
          {labelRight}
        </span>
        <ArrowLineRight
          fillColor={isLastPage ? "#0000004D" : "#10494C"}
          style={{ marginLeft: "4px" }}
        />
      </button>
    </div>
  );
};
