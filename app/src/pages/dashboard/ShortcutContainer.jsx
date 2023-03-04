import { Grid, Paper } from "@mui/material";
import ShortcutCard from "../../components/Card/ShortcutCard";

const ShortcutContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ShortcutCard name = "Manage Lesson "/>
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard name = "Assign Lesson" />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard name = "Manage Trainee" />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard  name = "Add Trainee" />
      </Grid>
    </Grid>
  );
};

export default ShortcutContainer;
