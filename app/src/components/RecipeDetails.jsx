import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import step from "../pages/dummy-steps";
import {
  Grid,
  Accordion,
  AccordionSummary,
  useMediaQuery,
  Stack,
  Chip,
} from "@mui/material";
import chemex from "../assets/images/chemex.jpg";
import { DetailsCardColored, DetailsCard } from "./Card/DetailsCard";
import { PrimaryBtnWide, PrimaryBtnOutlineWide } from "./Buttons/Button";
import { StepSubContent } from "./LessonSteps/LessonSteps";
import LessonCard from "./Card/LessonCard";
import { ArrowLineRight, Check } from "../assets/Icons";
import "./RecipeDetails.scss";

const RecipeDetails = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  // Control accordion expand
  const [expanded, setExpanded] = useState("panel");
  const [progress, setProgress] = useState(0);

  // retrieve progress_status
  useEffect(() => {
    axios
      .get(`${BASE_URL}/progress/trainee/64014b7e898a8420af6ab7f0`)
      .then((result) => {
        let progress = result.data;
        setProgress(progress.progress_status);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [progress]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="RecipeDetails">
      <Grid container justifyContent="center">
        <Grid item md={4}>
          {/* image and desc */}
          <div className="RecipeDetails-img-btn">
            <img src={chemex} alt="chemex" width={250} />
            {progress > 0 ? (
              <PrimaryBtnOutlineWide
                label={"Review Lesson"}
                onClick={() => navigate("/app/step/1")}
              />
            ) : (
              <PrimaryBtnWide
                label={"Start Lesson"}
                onClick={() => navigate("/app/step/1")}
              />
            )}
          </div>
        </Grid>
        <Grid item md={8}>
          <h4 className="Lesson-title">About the lesson</h4>

          {matches ? (
            <p className="RecipeDetails-body">
              The Chemex Coffeemaker is a manual pour-over style glass
              coffeemaker, invented by Peter Schlumbohm in 1941, manufactured by
              the Chemex Corporation in Chicopee, Massachusetts.
            </p>
          ) : null}

          {/* training & ingredient/equip details */}
          <Grid
            container
            justifyContent="center"
            style={{ padding: "0" }}
            spacing={{ xs: 0.5, md: 2 }}
          >
            <DetailsCardColored
              title="Status"
              text={progress === 0 ? "Not Started" : "Finished"}
            />
            <DetailsCardColored title="Progress" text={progress + "%"} />
            <DetailsCardColored title="Difficulty" difficulty={5} />
          </Grid>

          <Accordion
            expanded={expanded === "panel"}
            onChange={handleChange("panel")}
            style={{ boxShadow: "none" }}
          >
            <AccordionSummary
              aria-controls="panel-content"
              id="panel-header"
              className="Accordion-text-container"
            >
              <p className="Accordion-text">
                {expanded === "panel" ? "See less details" : "See more details"}
                <ArrowLineRight fillColor="#10494C" />
              </p>
            </AccordionSummary>
            <Grid
              container
              justifyContent="center"
              style={{ padding: "0 8px" }}
            >
              <Grid item md={12}>
                <Grid container style={{ marginBottom: "16px" }}>
                  <DetailsCard title="Preparation Time" text="6 minutes" />
                  <DetailsCard title="Mentor" text="Flavia C." />
                  <DetailsCard title="Category" text="Brewing Methods" />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  className="DetailsCardWideColored-container"
                >
                  <Grid item md={6} xs={12} className="DetailsCardWideColored">
                    <h4 className="DetailsCard-Colored-title">Certification</h4>
                    <p className="DetailsCard-Colored-body DetailsCard-icon">
                      <Check fillColor="#171717" />
                      Achieve 80% or above to get a certification
                    </p>
                  </Grid>

                  <Grid item md={6} xs={12} className="DetailsCardWideColored">
                    <h4 className="DetailsCard-Colored-title">Requirement</h4>
                    <Stack direction="row" spacing={1}>
                      {["Coffee Basics", "Grinder and weight"].map(
                        (data, index) => {
                          let icon;
                          return (
                            <Chip
                              style={{
                                backgroundColor: "#EAF2F2",
                                color: "#0A2C2E",
                              }}
                              key={index}
                              icon={icon}
                              label={data}
                            />
                          );
                        }
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              {matches ? null : (
                <p className="RecipeDetails-body">
                  The Chemex Coffeemaker is a manual pour-over style glass
                  coffeemaker, invented by Peter Schlumbohm in 1941,
                  manufactured by the Chemex Corporation in Chicopee,
                  Massachusetts.
                </p>
              )}
            </Grid>
          </Accordion>
        </Grid>
        {expanded === "panel" ? (
          <Grid item className="RecipeDetails-ingredientsList">
            {matches ? (
              <>
                <h4 className="RecipeDetails-title">What you will need</h4>
                <Grid
                  container
                  className="RecipeDetails-ingredient"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {step[0].content_detail[0].sub_content[1].content.map(
                    (element, index) => (
                      <LessonCard
                        key={index}
                        title={element.title}
                        value={element.value}
                        icon={element.image_src}
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
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default RecipeDetails;
