import Grid from "@mui/material/Grid";
import { useRecoilValue } from "recoil";
import { userRoleState } from "../../recoil/atoms";
import ShortcutContainer from "./ShortcutContainer";

const DashboardDetail = () => {
  const manager = useRecoilValue(userRoleState);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Dashboard : {manager.name}</h2>
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
