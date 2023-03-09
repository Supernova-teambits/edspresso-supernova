import { Card, CardContent, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import DonutChart from "../../components/Chart/DonutChart";
import { filteredProgressForChart } from "../../recoil/selectors";
import TraineeProgressFilter from "./TraineeProgressFilter";

const TraineeProgressChart = () => {
  const progressForChart = useRecoilValue(filteredProgressForChart);
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <h3>Lessons</h3>
          <TraineeProgressFilter />
          <DonutChart data={progressForChart} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TraineeProgressChart;
