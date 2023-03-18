import { Grid } from "@mui/material";
import ShortcutCard from "../../components/Card/ShortcutCard";
import { Dashboard, User, Coffee, Admin } from "../../assets/Icons";

const ShortcutContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
      <ShortcutCard imageComponent={<Dashboard fillColor="#171717" />}
      buttonText="Manage Lesson" />
      </Grid>
      <Grid item xs={12} md={6}>
      <ShortcutCard imageComponent={<Coffee fillColor="#171717" />}
      buttonText="Assign Lesson" />
      </Grid>
      <Grid item xs={12} md={6}>
      <ShortcutCard imageComponent={<User fillColor="#171717" />}
      buttonText="Manage Trainee" />
      </Grid>
      <Grid item xs={12} md={6}>
      <ShortcutCard imageComponent={<Admin fillColor="#171717" />}
      buttonText="Add Trainee" />
      </Grid>
    </Grid>
  );
};

export default ShortcutContainer;
