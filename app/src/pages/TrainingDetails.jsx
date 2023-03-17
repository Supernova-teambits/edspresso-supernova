import { LessonHeader } from "../components/LessonHeader/LessonHeader";
import MentoVerification from "../components/MentorVerification/MentorVerification";
import RecipeDetails from "../components/RecipeDetails";
import "./TrainingDetails.scss";

const TrainingDetails = () => {
  return (
      <div className="LayoutContent">
        <div className="LayoutWrapper header">
          <LessonHeader title="Chemex method" />
        </div>
        <div className="LayoutWrapper">
          <RecipeDetails className="LayoutRecipeDetails" />
        </div>
        <div className="LayoutWrapper">
          <MentoVerification />
        </div>
      </div>
  );
};

export default TrainingDetails;
