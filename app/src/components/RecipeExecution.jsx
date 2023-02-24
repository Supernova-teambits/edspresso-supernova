import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import steps from "../pages/dummy-steps";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinearProgress from "@mui/material/LinearProgress";
import { IngredientAndEquipCard } from "./Card/DetailsCard";
import MediaCarousel from "./RecipeExecution/MediaCarousel";
import RecipeAccordion from "./Accordion/Accordion";
import MobileStepper from "@mui/material/MobileStepper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
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

const TextMobileStepper = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const nextStepPage = () => {
    navigate("/app/step/2");
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
        {activeStep === maxSteps ? (
          <Button onClick={nextStepPage}>Next ›</Button>
        ) : (
          <Button onClick={handleNext}>Next ›</Button>
        )}
        <Button></Button>
      </Box>
    </Box>
  );
};

// const stepsTitle = steps.filter((step) => step.title);

const CoarseTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>GRIND SIZE</TableCell>
            <TableCell>BRWING METHODS</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Extra coarse
            </TableCell>
            <TableCell>Cold Brew Coffee, Cowboy Coffee</TableCell>
            <TableCell>
              <a href="/">see image</a>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Coarse
            </TableCell>
            <TableCell>French Press, Percolator, Coffee Cupping</TableCell>
            <TableCell>
              <a href="/">see image</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Step1 = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      {matches ? (
        <>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={16} />
            <p>Step 1/5</p>
          </Box>
          <Grid container>
            <Grid item md={4}>
              <div>
                <ul>
                  <li>Prepare Coffee</li>
                  <li>Ratio Calculation</li>
                  <li>Pouring</li>
                  <li>Serving</li>
                  <li>Additioanl Notes</li>
                  <li>Test</li>
                </ul>
              </div>
              <div>
                <p>Recap</p>
              </div>
            </Grid>
            <Grid item md={8}>
              <div>
                <h2>3 Cups Chemex Preperation</h2>
                <p>
                  The Chemex system was developed by the chemist Peter
                  Schlumbohn in 1941 to achieve a single result, prepare a
                  perfect cup of coffee. The Chemex method is the fractional
                  extraction of only the desirable parts of the coffee bean. An
                  adequate extraction at 88 94 degrees Celsius and the use of
                  its special filters leaves the bitter remains in the coffee
                  grounds, not in the cup.
                </p>
              </div>
              <div>
                <h3>Ingredients/Equipment</h3>
                <Grid container>
                  <IngredientAndEquipCard name="Chemex" amount="3 Cups" />
                  <IngredientAndEquipCard name="Grinder" amount="Medium" />
                  <IngredientAndEquipCard
                    name="Coffee Beans"
                    amount="64 grams"
                  />
                  <IngredientAndEquipCard name="Weight" amount="Oz" />
                  <IngredientAndEquipCard name="Kettle" amount="4 Oz Water" />
                  <IngredientAndEquipCard name="Chemex Filter" amount="1 qty" />
                </Grid>
              </div>
              <div>
                <h3>Grind Coffee</h3>
                <p>
                  The following seven grind sizes are all you’ll need to brew
                  great cups using different brewing methods.
                </p>
                <CoarseTable />
              </div>
              <div>
                <h3>Water</h3>
                <p>
                  Boil water up to 192 F, avoid pass the boiling temperature
                </p>
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={16} />
            <p>Step 1/5 - Prepare Coffee</p>
          </Box>
          <div>
            <TextMobileStepper />
          </div>
        </>
      )}
    </>
  );
};

const Step2 = () => {
  return;
};
const Step3 = () => {
  return;
};
const Step4 = () => {
  return;
};
const Step5 = () => {
  return;
};

const RecipeStep = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();

  switch (id) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step3 />;
    case 5:
      return <Step3 />;
    default:
      navigate("/app");
  }
};

const RecipeExecution = () => {
  return (
      <RecipeStep />
  );
};

export default RecipeExecution;
