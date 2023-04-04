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
    <p
      className="Analytics-learning-process-status-label"
      style={{
        textAlign: "center",
        color: color,
        backgroundColor: backgroundColor,
        padding: "5px",
        borderRadius: "10px",
        width: "77px",
      }}
    >
      {status}
    </p>
  );
};

export default ProgressStatusLabel;
