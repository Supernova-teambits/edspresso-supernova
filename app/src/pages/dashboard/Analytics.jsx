import { Grid } from "@mui/material";
import TraineeLearningProcess from "./TraineeLearningProcess";
import TraineeProgressChart from "./TraineeProgressChart";
import TraineeProgressStats from "./TraineeProgressStats";
import "./Analytics.scss";

const Analytics = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p className="Analytics-title">Analytics</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <TraineeProgressChart />
          <TraineeProgressStats />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} sx={{ mb: 4 }}>
        <TraineeLearningProcess />
      </Grid>
    </Grid>
  );
};

export default Analytics;
