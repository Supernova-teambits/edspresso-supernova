import { useNavigate } from "react-router-dom";
import step from "../../pages/dummy-steps";

import { Box, Grid, useMediaQuery } from "@mui/material";

import {
  ProgressBar,
  StepProgressDesktop,
} from "../RecipeExecution/StepProgress";
import {
  PainText,
  MediaCarousel,
  IngredientsCard,
  DescWithRef,
  RatioCalculater,
} from "../RecipeExecution/StepMedia";
import TipsCard from "../Card/TipsCard";
import { PrimaryBtnTextWithLeftArrow } from "../Buttons/Button";
import "./LessonSteps.scss";

export const StepSubContent = ({ content }) => {
  let component;

  switch (content.content_type) {
    case "plain_text":
      component = <PainText content={content} />;
      break;
    case "ingredient":
      component = <IngredientsCard content={content} />;
      break;
    case "media_carousel":
      component = <MediaCarousel content={content} />;
      break;
    case "desc_with_ref":
      component = <DescWithRef content={content} />;
      break;
    case "ratio_calc":
      component = <RatioCalculater content={content} />;
      break;
    default:
      break;
  }

  return component;
};

// Step titles
const stepArr = [
  {
    title: "Prepare Coffee",
  },
  {
    title: "Ratio Calculation",
  },
  {
    title: "Pouring",
  },
  {
    title: "Serving",
  },
  {
    title: "Quiz",
  },
];

export const StepHeader = ({ lesson, index }) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="StepHeader">
      <PrimaryBtnTextWithLeftArrow
        label="My Learnings"
        onClick={() => navigate("/app/myTraining")}
      />
      <h4 className="Lesson-title">{lesson.title}</h4>
      {matches ? null : <p className="Lesson-title-sub">{step[index].title}</p>}
    </div>
  );
};

export const Step1 = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div className="StepContent">
      <Box sx={{ width: "100%" }}>
        <ProgressBar
          variant="determinate"
          value={33}
          currentStep={1}
          totalStep={3}
          title={step[0].content_detail[0].title}
        />
      </Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          {matches ? (
            <>
              <StepProgressDesktop stepArr={stepArr} done={0} />
              <TipsCard content={step[0].content_detail[0].note} />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} md={8}>
          <StepSubContent content={step[0].content_detail[0].sub_content[0]} />
          <StepSubContent content={step[0].content_detail[0].sub_content[1]} />
          {matches ? null : (
            <TipsCard content={step[0].content_detail[0].note} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export const Step2 = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="StepContent">
      <Box sx={{ width: "100%" }}>
        <ProgressBar
          variant="determinate"
          value={66}
          currentStep={2}
          totalStep={3}
          title={step[0].content_detail[1].title}
        />
      </Box>
      <Grid container>
        <Grid item md={4}>
          {matches ? (
            <>
              <StepProgressDesktop stepArr={stepArr} done={0} />
              <TipsCard content={step[0].content_detail[1].note} />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} md={8}>
          <StepSubContent content={step[0].content_detail[1].sub_content[0]} />
          {matches ? null : (
            <TipsCard content={step[0].content_detail[1].note} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export const Step3 = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="StepContent">
      <Box sx={{ width: "100%" }}>
        <ProgressBar
          variant="determinate"
          value={100}
          currentStep={3}
          totalStep={3}
          title={step[0].content_detail[2].title}
        />
      </Box>
      <Grid container>
        <Grid item md={4}>
          {matches ? (
            <>
              <StepProgressDesktop stepArr={stepArr} done={0} />
              <TipsCard content={step[0].content_detail[2].note} />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} md={8}>
          <StepSubContent content={step[0].content_detail[2].sub_content[0]} />
          {matches ? null : (
            <TipsCard content={step[0].content_detail[2].note} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export const Step4 = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="StepContent">
      <Box sx={{ width: "100%" }}>
        <ProgressBar
          variant="determinate"
          value={50}
          currentStep={1}
          totalStep={2}
          title={step[1].content_detail[0].title}
        />
      </Box>
      <Grid container>
        <Grid item md={4}>
          {matches ? (
            <>
              <StepProgressDesktop stepArr={stepArr} done={1} />
              <TipsCard content={step[1].content_detail[0].note} />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} md={8}>
          <StepSubContent content={step[1].content_detail[0].sub_content[0]} />
          <StepSubContent content={step[1].content_detail[0].sub_content[1]} />
          {matches ? null : (
            <TipsCard content={step[1].content_detail[0].note} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export const Step5 = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="StepContent">
      <Box sx={{ width: "100%" }}>
        <ProgressBar
          variant="determinate"
          value={100}
          currentStep={2}
          totalStep={2}
          title={step[1].content_detail[1].title}
        />
      </Box>
      <Grid container>
        <Grid item md={4}>
          {matches ? (
            <>
              <StepProgressDesktop stepArr={stepArr} done={1} />
              <TipsCard content={step[1].content_detail[1].note} />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} md={8}>
          <StepSubContent content={step[1].content_detail[1].sub_content[0]} />
          <StepSubContent content={step[1].content_detail[1].sub_content[1]} />
          {matches ? null : (
            <TipsCard content={step[1].content_detail[1].note} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
