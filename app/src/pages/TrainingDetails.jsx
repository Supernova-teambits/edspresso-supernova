import { LessonHeader } from "../components/Header/LessonHeader";
import MentoVerification from "../components/MentorVerification/MentorVerification";
import RecipeDetails from "../components/RecipeDetails";
import "./TrainingDetails.scss";

const TrainingDetails = () => {
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
};

export default TrainingDetails;
