import { STATUS_COLOR } from "../../utils/Constants";

const ProgressStatusLabel = ({ status }) => {
  let backgroundColor;

  switch (status) {
    case "Completed":
      backgroundColor = STATUS_COLOR[0];
      break;
    case "In progress":
      backgroundColor = STATUS_COLOR[1];
      break;
    case "Pending":
      backgroundColor = STATUS_COLOR[2];
      break;
    default:
      backgroundColor = STATUS_COLOR[0];
  }

  return (
    <span
      style={{
        color: "#FFFBF7",
        backgroundColor: backgroundColor,
        padding: "5px",
        borderRadius: "10px",
      }}
    >
      {status}
    </span>
  );
};

export default ProgressStatusLabel;
