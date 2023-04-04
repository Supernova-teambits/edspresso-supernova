import Grid from "@mui/material/Grid";
import ShortcutContainer from "./ShortcutContainer";
import CreateLessonCard from "../../components/Card/CreateLessonCard";
import "../../components/Card/AdminDashboard.scss";
const DashboardDetail = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 class="dashboard-title">Dashboard</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <CreateLessonCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutContainer />
      </Grid>
    </Grid>
  );
};

export default DashboardDetail;
