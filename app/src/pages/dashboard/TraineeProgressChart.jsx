import { Card, CardContent, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import DonutChart from "../../components/Chart/DonutChart";
import { filteredProgressForChart } from "../../recoil/selectors";
import TraineeProgressFilter from "./TraineeProgressFilter";
import "./Analytics.scss";

const TraineeProgressChart = () => {
  const progressForChart = useRecoilValue(filteredProgressForChart);
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={4} md={12}>
              <p className="Analytics-chart-title">Lessons</p>
            </Grid>
            <Grid item xs={8} md={12}>
              <TraineeProgressFilter />
            </Grid>
          </Grid>
          <DonutChart data={progressForChart} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TraineeProgressChart;
