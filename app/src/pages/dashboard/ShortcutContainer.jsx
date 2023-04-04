import { Grid } from "@mui/material";
import ShortcutCard from "../../components/Card/ShortcutCard";
import { Dashboard, User, ShortcutCoffee, Admin } from "../../assets/Icons";
import "../../components/Card/AdminDashboard.scss";

const ShortcutContainer = () => {
  return (
    <Grid
      container
      spacing={2}
      className="shortcut-parent"
      sx={{
        "@media (max-width: 767px)": {
          display: "grid",
          gridTemplateColumn: "1fr 1fr",
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <ShortcutCard
          imageComponent={
            <Dashboard sx={{ paddingTop: "10px" }} fillColor="#171717" />
          }
          buttonText="Manage Lesson"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard
          imageComponent={
            <ShortcutCoffee sx={{ paddingTop: "10px" }} fillColor="#171717" />
          }
          buttonText="Assign Lesson"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard
          imageComponent={
            <User sx={{ paddingTop: "10px" }} fillColor="#171717" />
          }
          buttonText="Manage Trainee"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard
          imageComponent={
            <Admin sx={{ paddingTop: "10px" }} fillColor="#171717" />
          }
          buttonText="Add Trainee"
        />
      </Grid>
    </Grid>
  );
};

export default ShortcutContainer;
