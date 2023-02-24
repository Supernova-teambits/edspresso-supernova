import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {
  DetailsCardColored,
  DetailsCard,
  IngredientAndEquipCard,
} from "./Card/DetailsCard";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import RecipeAccordion from "./Accordion/Accordion";

const RecipeDetails = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const breadcrumbs = [
    <Typography key="1" color="inherit">
      Unverified
    </Typography>,
    <Typography key="2" color="inherit">
      On Progress
    </Typography>,
    <Typography key="3" color="inherit">
      Verified
    </Typography>,
  ];

  return (
    <>
      <div>
        <h2>3 Cups Chemex</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="">
            My Learnings
          </Link>
          <Typography color="text.primary">Chemex</Typography>
        </Breadcrumbs>
      </div>

      {/* image and desc */}
      <div>
        <img src="" alt="" />
        <p>
          The Chemex Coffeemaker is a manual pour-over style glass coffeemaker,
          invented by Peter Schlumbohm in 1941, manufactured by the Chemex
          Corporation in Chicopee, Massachusetts.
        </p>
      </div>

      {/* training & ingredient/equip details */}
      <div>
        <h3>Training Desctription</h3>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <DetailsCardColored title="Status" text="Not Status" />
            <DetailsCardColored title="Progress" text="0%" />
            <DetailsCardColored title="Difficulty" difficulty={3} />
          </Grid>
          <Grid container spacing={2}>
            <DetailsCard
              title="Certification"
              text="✔Achieve 80% or above to get a certification"
            />
            <DetailsCard
              title="Category"
              link="Brewing Methods"
              to="/category"
            />
            <DetailsCard
              title="Requirement"
              requirements={["Coffee Basics", "Grinder and weight"]}
            />
          </Grid>
          <Grid container spacing={2}>
            <DetailsCard title="Preparation Time" text="6 minutes" />
            <DetailsCard title="Mentor" link="Flavia C." to="/" />
          </Grid>
        </Box>
      </div>
      <div>
        {matches ? (
          <>
            <h3>Ingredients/Equipment</h3>{" "}
            <Grid container>
              <IngredientAndEquipCard name="Chemex" amount="3 Cups" />
              <IngredientAndEquipCard name="Grinder" amount="Medium" />
              <IngredientAndEquipCard name="Coffee Beans" amount="64 grams" />
              <IngredientAndEquipCard name="Weight" amount="Oz" />
              <IngredientAndEquipCard name="Kettle" amount="4 Oz Water" />
              <IngredientAndEquipCard name="Chemex Filter" amount="1 qty" />
            </Grid>
          </>
        ) : (
          <RecipeAccordion />
        )}
      </div>

      {/* test verification section */}
      <div>
        <h2>Test your knowledge</h2>
        <p>You can start the test when you are ready</p>
        <p>
          You need at least 80% to approve the test and get a ecrtification.
        </p>
        <h4>Mentor verification</h4>
        <p>
          The mentor verification will be sent after approving the Questionnaire
          successfully.
        </p>
        <Grid container>
          <Grid item md={6}>
            <div>
              <h3>Chemex Test</h3>
              <p>
                Cehemex brewing method, Ratio, Pouring, Chemex consideration.
              </p>
              <ErrorIcon />
              <p>Finish this lesson to be able to do a test.</p>
              <Button variant="contained" color="primary" disabled>
                Start test
              </Button>
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <h3>Mentor Verification</h3>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>
              <p>Barista Flavia C.</p>
              <p>27/01/2023</p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <Button variant="contained" onClick={()=>navigate("/app/step/1")}>
          Start Training
        </Button>
      </div>
    </>
  );
};

export default RecipeDetails;
