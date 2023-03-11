import { Grid } from "@mui/material";
import ShortcutCard from "../../components/Card/ShortcutCard";

const ShortcutContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
      <ShortcutCard buttonText="Manage Lesson" />
      </Grid>
      <Grid item xs={12} md={6}>
      <ShortcutCard buttonText="Assign Lesson" />
      </Grid>
      <Grid item xs={12} md={6}>
      <ShortcutCard buttonText="Manage Trainee" />
      </Grid>
      <Grid item xs={12} md={6}>
      <ShortcutCard buttonText="Add Trainee" />
      </Grid>
    </Grid>
  );
};

export default ShortcutContainer;
