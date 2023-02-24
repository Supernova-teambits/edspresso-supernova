import { useParams } from "react-router-dom";
import assgined_lessons from "./dummy-lesson";
import RecipeExecution from "../components/RecipeExecution";
import RecipeDetails from "../components/RecipeDetails";

const TrainingDetails = () => {
   let { id } = useParams();

  return (
    <>
      <RecipeDetails id={id} />
    </>
  );
};

export default TrainingDetails;
