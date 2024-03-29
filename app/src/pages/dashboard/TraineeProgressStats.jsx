import { Card, CardContent, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { filteredProgressStatsState } from "../../recoil/selectors";
import "./Analytics.scss";

const TraineeProgressStats = () => {
  const progressStats = useRecoilValue(filteredProgressStatsState);
  return (
    <>
      <Grid item xs={6}>
        <Card class="Analytics-card-container">
          <CardContent class="Analytics-stat-container">
            <p className="Analytics-stat-title">Avg. Completion Rate</p>
            <p className="Analytics-stat-text">
              {progressStats.percentageCompleted}
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card class="Analytics-card-container">
          <CardContent class="Analytics-stat-container">
            <p className="Analytics-stat-title">Avg. Time to Complete</p>
            <p className="Analytics-stat-text">
              {progressStats.avgTimeToCompleted}
            </p>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default TraineeProgressStats;
