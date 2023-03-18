import Grid from "@mui/material/Grid";
import ShortcutContainer from "./ShortcutContainer";
import CreateLessonCard from "../../components/Card/CreateLessonCard";



const DashboardDetail = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 style={{
            color: "#10494C",
            width: "101px",
            height: "23px",
            left: "0px",
            top: "0px",
            marginLeft: "24px",
          }}
>Dashboard</h2>
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
