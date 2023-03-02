import Grid from "@mui/material/Grid";

const Analytics = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Analytics</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <p>Lessons</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <p>Learning process</p>
      </Grid>
    </Grid>
  );
};

export default Analytics;
