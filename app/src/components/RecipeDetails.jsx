import { useState } from "react";
import { useNavigate } from "react-router-dom";
import step from "../pages/dummy-steps";

import {
  Grid,
  Accordion,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import { DetailsCardColored, DetailsCard } from "./Card/DetailsCard";
import MentoVerification from "./MentorVerification/MentorVerification";

import { PrimaryBtnWide, PrimaryBtnTextWithLeftArrow } from "./Buttons/Button";
import { StepSubContent } from "./LessonSteps/LessonSteps";
import LessonCard from "./Card/LessonCard";
import { chemex } from "../assets/images";
import { ArrowLineRight } from "../assets/Icons";
import "./RecipeDetails.scss";

const RecipeDetails = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  // Control accordion expand
  const [expanded, setExpanded] = useState("panel");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="RecipeDetails-header">
        <PrimaryBtnTextWithLeftArrow
          label="My Learnings"
          onClick={() => navigate("/app/myTraining")}
        />
        <h4 className="Lesson-title">Chemex method</h4>
      </div>

      <Grid container>
        <Grid item md={4}>
          {/* image and desc */}
          <div className="RecipeDetails-img-btn">
            <img src={chemex} alt="chemex" width={250} />
            <PrimaryBtnWide
              label={"Start Lesson"}
              onClick={() => navigate("/app/step/1")}
            />
          </div>
        </Grid>
        <Grid item md={8}>
          <h4 className="Lesson-title">About the lesson</h4>
          <p className="RecipeDetails-body">
            The Chemex Coffeemaker is a manual pour-over style glass
            coffeemaker, invented by Peter Schlumbohm in 1941, manufactured by
            the Chemex Corporation in Chicopee, Massachusetts.
          </p>

          {/* training & ingredient/equip details */}
          <Grid container>
            <DetailsCardColored title="Status" text="Not Status" size={4} />
            <DetailsCardColored title="Progress" text="0%" size={4} />
            <DetailsCardColored title="Difficulty" difficulty={5} size={4} />
          </Grid>
        </Grid>
      </Grid>

      <Accordion
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary
          aria-controls="panel-content"
          id="panel-header"
          className="Accordion-text-container"
        >
          <p className="Accordion-text">
            {expanded === "panel" ? "See less details" : "See more deatils"}
            <ArrowLineRight fillColor="#10494C" />
          </p>
        </AccordionSummary>
        <Grid container>
          <Grid item md={8}>
            <Grid container>
              <DetailsCard title="Preparation Time" text="6 minutes" size={4} />
              <DetailsCard title="Mentor" text="Flavia C." size={4} />
              <DetailsCard title="Category" text="Brewing Methods" size={4} />
            </Grid>
            <Grid container>
              <DetailsCardColored
                title="Certification"
                text="✔Achieve 80% or above to get a certification"
                size={6}
              />
              <DetailsCardColored
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
              <h4 className="RecipeDetails-title">What you will need</h4>
              <Grid container>
                {step[0].content_detail[0].sub_content[1].content.map(
                  (element, index) => (
                    <LessonCard
                      key={index}
                      title={element.title}
                      value={element.value}
                    />
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
      <div className="RecipeDetails-Test-section">
        <MentoVerification />
      </div>
    </>
  );
};

export default RecipeDetails;
