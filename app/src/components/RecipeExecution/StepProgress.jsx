import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from "@mui/material";
import { Check, Coffee } from "../../assets/Icons";
import "./StepProgress.scss";

export const StepProgressDesktop = ({ stepArr, done }) => {
  const steps = stepArr.map((step, index) => {
    let style = {};
    if (index === done) {
      style = {
        fontWeight: "bold",
      };
      return (
        <ListItem
          className="StepProgressDesktop-current"
          key={index}
          style={style}
        >
          <ListItemIcon style={{ minWidth: "34px" }}>
            <Coffee fillColor="#10494C" />
          </ListItemIcon>
          <ListItemText className="StepProgressDesktop-text">
            {step.title}
          </ListItemText>
        </ListItem>
      );
    } else if (index < done) {
      return (
        <ListItem key={index} style={style}>
          <ListItemIcon style={{ minWidth: "34px" }}>
            <Check fillColor="#10494C" />
          </ListItemIcon>
          <ListItemText className="StepProgressDesktop-text">
            {step.title}
          </ListItemText>
        </ListItem>
      );
    } else {
      return (
        <ListItem
          className="StepProgressDesktop-rest"
          key={index}
          style={style}
        >
          <ListItemIcon style={{ minWidth: "34px" }}>
            <Coffee fillColor="#709294" />
          </ListItemIcon>
          <ListItemText className="StepProgressDesktop-text">
            {step.title}
          </ListItemText>
        </ListItem>
      );
    }
  });
  return <List className="StepProgressDesktop">{steps}</List>;
};

export const ProgressBar = ({ value, totalStep, currentStep, title }) => {
  return (
    <>
      <LinearProgress
        className="StepProgressBar"
        variant="determinate"
        value={value}
      />
      <p className="ProgressBar-sub">
        Step {currentStep} of {totalStep} - {title}
      </p>
    </>
  );
};
