import { useNavigate, useParams } from "react-router-dom";
import { Step1, Step2, Step3, Step4, Step5 } from "./LessonSteps/LessonSteps";

const RecipeExecution = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let component;

  switch (id) {
    case "1":
      component = <Step1 />;
      break;
    case "2":
      component = <Step2 />;
      break;
    case "3":
      component = <Step3 />;
      break;
    case "4":
      component = <Step4 />;
      break;
    case "5":
      component = <Step5 />;
      break;
    default:
      navigate("/app");
  }

  return component;
};

export default RecipeExecution;