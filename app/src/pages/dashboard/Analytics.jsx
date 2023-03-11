import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import DonutChart from "../../components/Chart/DonutChart";
import {
  filteredProgressByTraineeState,
  filteredProgressForChart,
  filteredProgressStatsState,
} from "../../recoil/selectors";
import TraineeProgressFilter from "./TraineeProgressFilter";
import { User } from "../../assets/Icons";


const Analytics = () => {
  const filteredProgressByTraineeList = useRecoilValue(
    filteredProgressByTraineeState
  );
  const progressForChart = useRecoilValue(filteredProgressForChart);
  const progressStats = useRecoilValue(filteredProgressStatsState);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Analytics</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Lessons</p>
            <TraineeProgressFilter />
            <DonutChart data={progressForChart} />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Avg. Completion Rate</p>
            <p>{progressStats.percentageCompleted}</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Avg. Time to Complete</p>
            <p>{progressStats.avgTimeToCompleted}</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <ul>
          {filteredProgressByTraineeList.map((item) => (
            <li key={item.trainee_name + item.lesson_title}>
              <User fillColor="#4E4F54" />
              {item.trainee_name} | {item.status}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Analytics;
