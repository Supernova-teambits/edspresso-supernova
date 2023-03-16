import { useNavigate, useParams } from "react-router-dom";
import { Grid, useMediaQuery } from "@mui/material";
import { chemex } from "../assets/images";
import {
  StepPagination,
  PrimaryBtnTextWithLeftArrow,
} from "../components/Buttons/Button";
import { StepProgressDesktop } from "../components/RecipeExecution/StepProgress";
import "./ProgressUpdate.scss";

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

const message = [
  {
    heading: "First step, done!",
    subtitle: "Check your lesson progress.",
    message1:
      "Your progress is saved. You can go to the next chapter, or come back later.",
  },
  {
    heading: "You've finished the lesson!",
    message1: "Congratulatinos! You've made it until the end.",
    subheading: "Test your knowledge",
    message2:
      "Go ahead and good luck if you are feeling prepared to do the Certification Quiz. If you need more preparation, you can review this lesson how many times as you want.",
  },
];

const ProgressUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:800px)");

  if (id === "1") {
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
          {matches ? (
            <>
              <Grid item xs={12} md={4}>
                <StepProgressDesktop stepArr={stepArr} done={1} />
              </Grid>
              <Grid item xs={12} md={8}>
                <h5 className="ProgressUpdate-title">{message[0].heading}</h5>
                <h6 className="ProgressUpdate-sub-title">
                  {message[0].subtitle}
                </h6>
                <p className="ProgressUpdate-content">{message[0].message1}</p>
                <img
                  src={chemex}
                  alt="Coffee cup on wooden table at dawn"
                  height={428}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={4}>
                <h5 className="ProgressUpdate-title">{message[0].heading}</h5>
                <h6 className="ProgressUpdate-sub-title">
                  {message[0].subtitle}
                </h6>
                <StepProgressDesktop stepArr={stepArr} done={0} />
                <p className="ProgressUpdate-content">{message[0].message1}</p>
              </Grid>
            </>
          )}

          <Grid item xs={12} className="Step-StepPagination">
            <StepPagination
              labelLeft="Back"
              onClickLeft={() => {
                navigate("/app/step/3");
              }}
              labelRight="Next chapter"
              onClickRight={() => {
                navigate("/app/step/4");
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  } else {
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
          {matches ? (
            <>
              <Grid item xs={12} md={4}>
                <StepProgressDesktop stepArr={stepArr} done={5} />
              </Grid>
              <Grid item xs={12} md={8}>
                <h5 className="ProgressUpdate-title">{message[1].heading}</h5>
                <p className="ProgressUpdate-content">{message[1].message1}</p>
                <h6 className="ProgressUpdate-sub-title">
                  {message[1].subheading}
                </h6>
                <p className="ProgressUpdate-content">{message[1].message2}</p>
                <img
                  src={chemex}
                  alt="Coffee cup on wooden table at dawn"
                  height={428}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={4}>
                <h5 className="ProgressUpdate-title">{message[1].heading}</h5>
                <p className="ProgressUpdate-content">{message[1].message1}</p>
                <StepProgressDesktop stepArr={stepArr} done={0} />
                <h6 className="ProgressUpdate-sub-title">
                  {message[1].subheading}
                </h6>
                <p className="ProgressUpdate-content">{message[1].message2}</p>
              </Grid>
            </>
          )}

          <Grid item xs={12} className="Step-StepPagination">
            <StepPagination
              labelLeft="Lesson Page"
              onClickLeft={() => {
                navigate("/app/lesson/1");
              }}
              labelRight="Star Quiz"
              onClickRight={() => {
                navigate("/app/step/6");
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }
};

export default ProgressUpdate;
