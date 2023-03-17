import { useNavigate } from "react-router-dom";
import { PrimaryBtnTextWithLeftArrow } from "../Buttons/Button";
import "./LessonHeader.scss";

export const LessonHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="LessonHeader">
      <PrimaryBtnTextWithLeftArrow
        label="My Learnings"
        onClick={() => navigate("/app/myTraining")}
      />
      <h4 className="LessonHeader-title">{title}</h4>
    </div>
  );
};
