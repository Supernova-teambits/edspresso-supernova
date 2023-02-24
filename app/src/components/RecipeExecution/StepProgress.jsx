import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneIcon from "@mui/icons-material/Done";

import Typography from "@mui/material/Typography";

import LinearProgress from "@mui/material/LinearProgress";

export const StepProgresesDesktop = ({ stepArr, done }) => {
  const steps = stepArr.map((step, index) => {
    let style = {};
    if (index < done) {
      style = {
        fontWeight: "bold",
      };
      return (
        <ListItem key={index} style={style}>
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText>{step.title}</ListItemText>
        </ListItem>
      );
    } else {
      return (
        <ListItem key={index} style={style}>
          <ListItemIcon></ListItemIcon>
          <ListItemText>{step.title}</ListItemText>
        </ListItem>
      );
    }
  });
  return <List>{steps}</List>;
};

export const ProgressBarDesktop = ({ value, totalStep, currentStep }) => {
  return (
    <>
      <LinearProgress variant="determinate" value={value} />
      <Typography>
        Step {currentStep}/{totalStep}
      </Typography>
    </>
  );
};

export const ProgressBarMobile = ({ stepArr, value, currentStep }) => {
  return (
    <>
      <LinearProgress variant="determinate" value={value} />
      <Typography align="center">
        Step {currentStep} - {stepArr[currentStep - 1].title}
      </Typography>
    </>
  );
};
