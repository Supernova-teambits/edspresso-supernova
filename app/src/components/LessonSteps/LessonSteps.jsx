import { Link, useNavigate } from "react-router-dom";
import step from "../../pages/dummy-steps";
import assigned_lessons from "../../pages/dummy-lesson";

import { Box, Grid, useMediaQuery } from "@mui/material";

import {
  ProgressBar,
  StepProgresesDesktop,
} from "../RecipeExecution/StepProgress";
import {
  PainText,
  MediaCarousel,
  IngredientsCard,
  DescWithRef,
  RatioCalculater,
} from "../RecipeExecution/StepsMedia";
import TipsCard from "../Card/TipsCard";
import { ArrowLineLeft } from "../../assets/Icons";
import { StepPagination } from "../Buttons/Button";

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
    title: "Test",
  },
];

export const StepHeader = ({ lesson, index }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Link href="/app/myTraining">
        <ArrowLineLeft fillColor="#10494C" />
        My Learning
      </Link>
      <h4>{lesson.title}</h4>
      {matches ? null : <p>{step[index].title}</p>}
    </div>
  );
};

export const Step1 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StepHeader lesson={assigned_lessons[0]} index={0} />

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
              <StepProgresesDesktop stepArr={stepArr} done={0} />
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
        <Grid item>
          <StepPagination
            labelLeft="Back"
            onClickLeft={() => {
              navigate("/app/lesson/1");
            }}
            labelRight="Next"
            onClickRight={() => {
              navigate("/app/step/2");
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export const Step2 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StepHeader lesson={assigned_lessons[0]} index={0} />
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
              <StepProgresesDesktop stepArr={stepArr} done={0} />
              <TipsCard content={step[0].content_detail[1].note} />
            </>
          ) : null}
        </Grid>
        <Grid item md={8}>
          <StepSubContent content={step[0].content_detail[1].sub_content[0]} />
          {matches ? null : (
            <TipsCard content={step[0].content_detail[1].note} />
          )}
        </Grid>
        <Grid item>
          <StepPagination
            labelLeft="Back"
            onClickLeft={() => {
              navigate("/app/step/1");
            }}
            labelRight="Next"
            onClickRight={() => {
              navigate("/app/step/3");
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export const Step3 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StepHeader lesson={assigned_lessons[0]} index={0} />
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
              <StepProgresesDesktop stepArr={stepArr} done={0} />
              <TipsCard content={step[0].content_detail[2].note} />
            </>
          ) : null}
        </Grid>
        <Grid item md={8}>
          <StepSubContent content={step[0].content_detail[2].sub_content[0]} />
          {matches ? null : (
            <TipsCard content={step[0].content_detail[2].note} />
          )}
        </Grid>
        <Grid item>
          <StepPagination
            labelLeft="Back"
            onClickLeft={() => {
              navigate("/app/step/2");
            }}
            labelRight="Next"
            onClickRight={() => {
              navigate("/app/progress/1"); // to progress record
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export const Step4 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StepHeader lesson={assigned_lessons[0]} index={1} />
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
              <StepProgresesDesktop stepArr={stepArr} done={1} />
              <TipsCard content={step[1].content_detail[0].note} />
            </>
          ) : null}
        </Grid>
        <Grid item md={8}>
          <StepSubContent content={step[1].content_detail[0].sub_content[0]} />
          <StepSubContent content={step[1].content_detail[0].sub_content[1]} />
          {matches ? null : (
            <TipsCard content={step[1].content_detail[0].note} />
          )}
        </Grid>
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/3");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/step/5"); // to progress record
          }}
        />
      </Grid>
    </>
  );
};

export const Step5 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StepHeader lesson={assigned_lessons[0]} index={1} />
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
              <StepProgresesDesktop stepArr={stepArr} done={1} />
              <TipsCard content={step[1].content_detail[1].note} />
            </>
          ) : null}
        </Grid>
        <Grid item md={8}>
          <StepSubContent content={step[1].content_detail[1].sub_content[0]} />
          <StepSubContent content={step[1].content_detail[1].sub_content[1]} />
          {matches ? null : (
            <TipsCard content={step[1].content_detail[1].note} />
          )}
        </Grid>
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/4");
          }}
          labelRight="Next"
          onClickRight={() => {
            navigate("/app/progress/2"); // to progress record
          }}
        />
      </Grid>
    </>
  );
};
