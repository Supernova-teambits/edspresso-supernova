import { Grid } from "@mui/material";
import TraineeLearningProcess from "./TraineeLearningProcess";
import TraineeProgressChart from "./TraineeProgressChart";
import TraineeProgressStats from "./TraineeProgressStats";

const Analytics = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Analytics</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <TraineeProgressChart />
          <TraineeProgressStats />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <TraineeLearningProcess />
      </Grid>
    </Grid>
  );
};

export default Analytics;
