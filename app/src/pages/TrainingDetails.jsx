import { useParams } from "react-router-dom";
import { LessonHeader } from "../components/Header/LessonHeader";
import MentoVerification from "../components/MentorVerification/MentorVerification";
import RecipeDetails from "../components/RecipeDetails";
import MyTraining from "../pages/MyTraining";
import "./TrainingDetails.scss";

const TrainingDetails = () => {
  const { id } = useParams();

  if(id === "1"){
    return (
      <div className="LayoutContainer">
        <div className="LayoutWrapper__header">
          <LessonHeader title="Chemex method" />
        </div>
        <div className="LayoutWrapper__content">
          <RecipeDetails />
        </div>
        <div className="LayoutWrapper__footer">
          <MentoVerification />
        </div>
      </div>
    );
  } else {
    return <MyTraining />;
  }
};

export default TrainingDetails;
