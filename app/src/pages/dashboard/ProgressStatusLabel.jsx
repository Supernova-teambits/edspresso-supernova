import { STATUS_COLOR } from "../../utils/Constants";
import "./Analytics.scss";

const ProgressStatusLabel = ({ status }) => {
  let backgroundColor;
  let color = "#FFFBF7";

  switch (status) {
    case "Completed":
      backgroundColor = STATUS_COLOR[0];
      break;
    case "In progress":
      backgroundColor = STATUS_COLOR[1];
      break;
    case "Pending":
      backgroundColor = STATUS_COLOR[2];
      color = "#4E3311";
      break;
    default:
      backgroundColor = STATUS_COLOR[0];
  }

  return (
    <span
      className="Analytics-learning-process-status-label"
      style={{
        color: color,
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
