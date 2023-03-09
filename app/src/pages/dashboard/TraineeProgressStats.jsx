import { Card, CardContent, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { filteredProgressStatsState } from "../../recoil/selectors";

const TraineeProgressStats = () => {
  const progressStats = useRecoilValue(filteredProgressStatsState);
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <p>Avg. Completion Rate</p>
            <p>{progressStats.percentageCompleted}</p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <p>Avg. Time to Complete</p>
            <p>{progressStats.avgTimeToCompleted}</p>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default TraineeProgressStats;
