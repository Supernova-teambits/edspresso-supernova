import Grid from "@mui/material/Grid";
import { useRecoilValue } from "recoil";
import {
  filteredProgressState,
  filteredProgressByTraineeState,
} from "../../recoil/selectors";
import TraineeProgressFilter from "./TraineeProgressFilter";

const Analytics = () => {
  const filteredProgressList = useRecoilValue(filteredProgressState);
  const filteredProgressByTraineeList = useRecoilValue(
    filteredProgressByTraineeState
  );
  console.log(
    "[knulp]filteredProgressByTraineeList : ",
    filteredProgressByTraineeList
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Analytics</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <p>Lessons</p>
        <TraineeProgressFilter />
      </Grid>
      <Grid item xs={12} md={6}>
        <p>Learning process</p>
        <ul>
          {filteredProgressByTraineeList.map((item) => (
            <li key={item.trainee_name + item.lesson_title}>
              {item.trainee_name} | {item.status}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Analytics;
