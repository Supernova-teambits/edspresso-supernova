import { useNavigate, useParams } from "react-router-dom";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  StepHeader,
} from "./LessonSteps/LessonSteps";
import QuizPage from "../pages/QuizPage";
import "./RecipeExecution.scss";
import { StepPagination } from "./Buttons/Button";
import assigned_lessons from "../pages/dummy-lesson";
import "./RecipeExecution.scss";

const RecipeExecution = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let header;
  let component;
  let footer;

  switch (id) {
    case "1":
      header = <StepHeader lesson={assigned_lessons[0]} index={0} />;
      component = <Step1 />;
      footer = (
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/lesson/1");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/step/2");
          }}
        />
      );
      break;
    case "2":
      header = <StepHeader lesson={assigned_lessons[0]} index={0} />;
      component = <Step2 />;
      footer = (
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/1");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/step/3");
          }}
        />
      );
      break;
    case "3":
      header = <StepHeader lesson={assigned_lessons[0]} index={0} />;
      component = <Step3 />;
      footer = (
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/2");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/progress/1"); // to progress record
          }}
        />
      );
      break;
    case "4":
      header = <StepHeader lesson={assigned_lessons[0]} index={1} />;
      component = <Step4 />;
      footer = (
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/3");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/step/5");
          }}
        />
      );
      break;
    case "5":
      header = <StepHeader lesson={assigned_lessons[0]} index={1} />;
      component = <Step5 />;
      footer = (
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/4");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/progress/2"); // to progress record
          }}
        />
      );
      break;
    case "6":
      component = <QuizPage />;
      break;
    default:
      navigate("/app/myTraining");
  }

  return (
    <div className="LayoutContainer">
      <div className="LayoutWrapper__header">{header}</div>
      <div className="LayoutWrapper__content">{component}</div>
      <div className="LayoutWrapper__lesson__btn">{footer}</div>
    </div>
  );
};

export default RecipeExecution;
