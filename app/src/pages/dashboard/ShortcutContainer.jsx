import { Grid, Paper } from "@mui/material";
import ShortcutCard from "../../components/Card/ShortcutCard";

const ShortcutContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ShortcutCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShortcutCard />
      </Grid>
    </Grid>
  );
};

export default ShortcutContainer;
