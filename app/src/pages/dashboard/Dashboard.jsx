import DashboardDetail from "./DashboardDetail";
import Analytics from "./Analytics";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DashboardDetail />
      </Grid>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
