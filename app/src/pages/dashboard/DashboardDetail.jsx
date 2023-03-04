import Grid from "@mui/material/Grid";
import ShortcutContainer from "./ShortcutContainer";

const DashboardDetail = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Dashboard</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <p>Image</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutContainer />
      </Grid>
    </Grid>
  );
};

export default DashboardDetail;
