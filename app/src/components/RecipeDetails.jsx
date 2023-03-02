import { useState } from "react";
import { useNavigate } from "react-router-dom";
import step from "../pages/dummy-steps";

import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DetailsCardColored, DetailsCard } from "./Card/DetailsCard";
import { QuizSection } from "./RecipeExecution/StepsMedia";
import { PrimaryButton } from "./Buttons/Button";
import {
  StepSubContent,
  StepHeaderForDesktop,
} from "./LessonSteps/LessonSteps";
import LessonCard from "./Card/LessonCard";

const RecipeDetails = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  // Control accordion expand
  const [expanded, setExpanded] = useState("panel");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <StepHeaderForDesktop />

      <Grid container>
        <Grid item md={4}>
          {/* image and desc */}
          <div>
            <img src="" alt="" />
            <PrimaryButton
              label={"Start Lesson"}
              onClick={() => navigate("/app/step/1")}
            />
          </div>
        </Grid>
        <Grid item md={8}>
          <h4>About the lesson</h4>
          <p>
            The Chemex Coffeemaker is a manual pour-over style glass
            coffeemaker, invented by Peter Schlumbohm in 1941, manufactured by
            the Chemex Corporation in Chicopee, Massachusetts.
          </p>

          {/* training & ingredient/equip details */}
          <Grid container>
            <DetailsCardColored title="Status" text="Not Status" size={4} />
            <DetailsCardColored title="Progress" text="0%" size={4} />
            <DetailsCardColored title="Difficulty" difficulty={2} size={4} />
          </Grid>
        </Grid>
      </Grid>

      <Accordion
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>
            {expanded === "panel" ? "See less details" : "See more deatils"}
          </Typography>
        </AccordionSummary>
        <Grid container>
          <Grid item md={8}>
            <Grid container>
              <DetailsCard title="Preparation Time" text="6 minutes" size={4} />
              <DetailsCard title="Mentor" link="Flavia C." to="/" size={4} />
              <DetailsCard
                title="Category"
                link="Brewing Methods"
                to="/category"
                size={4}
              />
            </Grid>
            <Grid container>
              <DetailsCard
                title="Certification"
                text="✔Achieve 80% or above to get a certification"
                size={6}
              />
              <DetailsCard
                title="Requirement"
                requirements={["Coffee Basics", "Grinder and weight"]}
                size={6}
              />
            </Grid>
          </Grid>
        </Grid>
        <div>
          {matches ? (
            <>
              <h4>What you will need</h4>
              <Grid container>
                {step[0].content_detail[0].sub_content[1].content.map(
                  (element) => (
                    <LessonCard title={element.title} value={element.value} />
                  )
                )}
              </Grid>
            </>
          ) : (
            <StepSubContent
              content={step[0].content_detail[0].sub_content[1]}
            />
          )}
        </div>
      </Accordion>
      {/* test verification section */}
      <div>
        <QuizSection breadcrumbs={breadcrumbs} buttonDisable={true} />
      </div>
    </>
  );
};

export default RecipeDetails;
