import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  LinearProgress,
} from "@mui/material";
import { Check, Coffee } from "../../assets/Icons";

export const StepProgresesDesktop = ({ stepArr, done }) => {
  const steps = stepArr.map((step, index) => {
    let style = {};
    if (index === done) {
      style = {
        fontWeight: "bold",
      };
      return (
        <ListItem key={index} style={style}>
          <ListItemIcon>
            <Coffee fillColor="#10494C" />
          </ListItemIcon>
          <ListItemText>{step.title}</ListItemText>
        </ListItem>
      );
    } else if (index < done) {
      return (
        <ListItem key={index} style={style}>
          <ListItemIcon>
            <Check fillColor="#10494C" />
          </ListItemIcon>
          <ListItemText>{step.title}</ListItemText>
        </ListItem>
      );
    } else {
      return (
        <ListItem key={index} style={style}>
          <ListItemIcon>
            <Coffee fillColor="#709294" />
          </ListItemIcon>
          <ListItemText>{step.title}</ListItemText>
        </ListItem>
      );
    }
  });
  return <List>{steps}</List>;
};

export const ProgressBar = ({ value, totalStep, currentStep, title }) => {
  return (
    <>
      <LinearProgress variant="determinate" value={value} />
      <Typography>
        Step {currentStep}/{totalStep} - {title}
      </Typography>
    </>
  );
};

