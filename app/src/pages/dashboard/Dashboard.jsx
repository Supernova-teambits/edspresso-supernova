import DashboardDetail from "./DashboardDetail";
import Analytics from "./Analytics";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { traineeProgressState, userRoleState } from "../../recoil/atoms";
import { getProgressAccToMngrCode } from "../../services/progressService";

const Dashboard = () => {
  const manager = useRecoilValue(userRoleState);
  const setTraineeProgress = useSetRecoilState(traineeProgressState);

  const getTraineeProgress = (managerCode) => {
    getProgressAccToMngrCode(managerCode)
      .then((progressList) => {
        setTraineeProgress(progressList.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (manager.manager_code === undefined) {
      getTraineeProgress(localStorage.getItem("managerInfo"));
    } else {
      getTraineeProgress(manager.manager_code);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DashboardDetail />
      </Grid>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
