import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import steps from "../pages/dummy-steps";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IngredientAndEquipCard } from "../Card/DetailsCard";
import RecipeAccordion from "../Accordion/Accordion";

import {
  ProgressBarDesktop,
  ProgressBarMobile,
  StepProgresesDesktop,
} from "../RecipeExecution/StepProgress";
import {
  CoarseTable,
  MediaCarousel,
  RatioCalcTable,
  RatioCalc,
  PouringPic,
  QuizSection,
} from "../RecipeExecution/StepsMedia";

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
    title: "Additioanl Notes",
  },
  {
    title: "Test",
  },
];

// Description for each steps
const steps1 = [
  {
    label: "3 Cups Chemex Preperation",
    description: `The Chemex system was developed by the chemist Peter Schlumbohn in 1941 to achieve a single result, prepare a perfect cup of coffee. The Chemex method is the fractional extraction of only the desirable parts of the coffee bean. An adequate extraction at 88 94 degrees Celsius and the use of its special filters leaves the bitter remains in the coffee grounds, not in the cup.`,
    media: <RecipeAccordion />,
    // RecipeAccordion is going to be replaced with table
  },
  {
    label: "Grind Coffe",
    description:
      "The following seven grind sizes are all you’ll need to brew great cups using different brewing methods.",
    media: <MediaCarousel />,
  },
  {
    label: "Water",
    description: `Boil water up to 192 F, avoid pass the boiling temperature`,
    media: <MediaCarousel />,
  },
];

const steps2 = [
  {
    label: "Ratio Calculation",
    description:
      "The following seven grind sizes are all you’ll need to brew great cups using different brewing methods.",
    media: <RatioCalcTable />,
  },
  {
    label: "Ratio",
    description:
      "Use this tool to calculate how much water and coffee you need to brew a cup.",
    media: <RatioCalc />,
  },
];

const steps3 = [
  {
    label: "Pouring Method",
    description: null,
    media: <PouringPic />,
  },
];

// Display for Mobile
// currentStep={ 2}  steps={steps2}
const StepMobile = ({ steps, currentStep }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const nextStepPage = () => {
    navigate(`/app/step/${currentStep + 1}`);
  };

  const moveToMyTraining = () => {
    navigate("/app");
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Typography>{steps[activeStep].label}</Typography>
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
        {steps[activeStep].description}
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          {steps[activeStep].media}
        </Box>
        {activeStep === 0 ? (
          <Button onClick={moveToMyTraining}>✗ Close</Button>
        ) : (
          <Button onClick={handleBack}>‹ Back</Button>
        )}
        {activeStep === maxSteps - 1 ? (
          <Button onClick={nextStepPage}>Next ›</Button>
        ) : (
          <Button onClick={handleNext}>Next ›</Button>
        )}
      </Box>
    </Box>
  );
};

// const stepsTitle = steps.filter((step) => step.title);

const StepHeader = () => {
  return (
    <div>
      <h4>3 Cups Chemex</h4>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="">
          My Learnings
        </Link>
        <Typography color="text.primary">Chemex</Typography>
      </Breadcrumbs>
    </div>
  );
};

export const Step1 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  const IngreAndEquip = [
    { name: "Chemex", amount: "3 Cups" },
    { name: "Grinder", amount: "Medium" },
    { name: "Coffee Beans", amount: "64 grams" },
    { name: "Weight", amount: "Oz" },
    { name: "Kettle", amount: "4 Oz Water" },
    { name: "Chemex Filter", amount: "1 qty" },
  ];

  return (
    <>
      <StepHeader />
      {matches ? (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarDesktop
              variant="determinate"
              value={16}
              currentStep={1}
              totalStep={5}
            />
          </Box>
          <Grid container>
            <Grid item md={4}>
              <StepProgresesDesktop stepArr={stepArr} done={1} />
            </Grid>
            <Grid item md={8}>
              <div>
                <h2>{steps1[0].label}</h2>
                <p>{steps1[0].description}</p>
              </div>
              <div>
                <h3>Ingredients/Equipment</h3>
                <Grid container>
                  {IngreAndEquip.map((el, index) => (
                    <IngredientAndEquipCard
                      key={index}
                      name={el.name}
                      amount={el.amount}
                    />
                  ))}
                </Grid>
              </div>
              <div>
                <h3>{steps1[1].label}</h3>
                <p>{steps1[1].description}</p>
                <CoarseTable />
              </div>
              <div>
                <h3>{steps1[2].label}</h3>
                <p>{steps1[2].description}</p>
              </div>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/app/step/2");
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarMobile
              variant="determinate"
              value={16}
              stepArr={stepArr}
              currentStep={1}
            />
          </Box>
          <div>
            <StepMobile currentStep={1} steps={steps1} />
          </div>
        </>
      )}
    </>
  );
};

export const Step2 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <StepHeader />
      {matches ? (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarDesktop
              variant="determinate"
              value={32}
              currentStep={2}
              totalStep={5}
            />
          </Box>
          <Grid container>
            <Grid item md={4}>
              <StepProgresesDesktop stepArr={stepArr} done={2} />
            </Grid>
            <Grid item md={8}>
              <div>
                <h2>{steps2[0].label}</h2>
                <h3>{steps2[1].label}</h3>
                <p>{steps2[0].description}</p>
                <div>{steps2[1].media}</div>
              </div>
              <div>
                <p>{steps2[0].description}</p>
                <div>{steps2[0].media}</div>
              </div>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/app/step/1");
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/app/step/3");
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarMobile
              variant="determinate"
              value={32}
              stepArr={stepArr}
              currentStep={2}
            />
          </Box>
          <div>
            <StepMobile currentStep={2} steps={steps2} />
          </div>
        </>
      )}
    </>
  );
};

export const Step3 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <StepHeader />
      {matches ? (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarDesktop
              variant="determinate"
              value={48}
              currentStep={3}
              totalStep={5}
            />
          </Box>
          <Grid container>
            <Grid item md={4}>
              <StepProgresesDesktop stepArr={stepArr} done={3} />
              <h5>Recap</h5>
              <ul>
                <li>Chemex Ready</li>
                <li>Water Temp 192 F</li>
                <li>
                  Selected Ratio 1:17
                  <ul>
                    <li>Coffee 25.67 g</li>
                    <li>Water 428.33 ml</li>
                  </ul>
                </li>
              </ul>
            </Grid>
            <Grid item md={8}>
              <div>
                <h2>Pouring</h2>
                <h3>{steps3[0].label}</h3>
                <p>{steps3[0].description}</p>
                <div>{steps3[0].media}</div>
              </div>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/app/step/2");
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/app/step/4");
                }}
              >
                Finish lesson
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarMobile
              variant="determinate"
              value={32}
              stepArr={stepArr}
              currentStep={3}
            />
          </Box>
          <div>
            <StepMobile currentStep={3} steps={steps3} />
          </div>
        </>
      )}
    </>
  );
};

export const Step4 = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <StepHeader />
      {matches 
      ? (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarDesktop
              variant="determinate"
              value={100}
              currentStep={5}
              totalStep={5}
            />
          </Box>
          <Grid container>
            <Grid item md={4}>
              <StepProgresesDesktop stepArr={stepArr} done={5} />
            </Grid>
            <Grid item md={8}>
              <QuizSection breadcrumbs={false} buttonDisable={false} />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/app/lesson/1");
                }}
              >
                Do lesson again
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <ProgressBarMobile
              variant="determinate"
              value={100}
              stepArr={stepArr}
              currentStep={5}
            />
          </Box>
        </>
      )}
    </>
  );
};

export const Step5 = () => {
  return;
};
