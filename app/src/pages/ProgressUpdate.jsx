import { useNavigate, useParams } from "react-router-dom";
import { Grid, useMediaQuery } from "@mui/material";
import { chemex } from "../assets/images";
import { StepPagination } from "../components/Buttons/Button";
import { StepProgressDesktop } from "../components/RecipeExecution/StepProgress";
import "./ProgressUpdate.scss";
import { LessonHeader } from "../components/Header/LessonHeader";

const stepArr = [
  {
    title: "Prepare coffee and Chemex",
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
    message1: "Congratulations! You’ve made it until the end.",
    subheading: "Test your knowledge",
    message2:
      "Go ahead and good luck if you are feeling prepared to do the Certification Quiz. If you need more preparation, you can review this lesson how many times as you want.",
  },
];

const ProgressUpdate = () => {
  const { id } = useParams();
  if (id === "1") {
    return <ProgressSaving />;
  } else {
    return <ProgressFinish />;
  }
};

const ProgressSaving = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:767px)");
  return (
    <>
      <div class="LayoutWrapper__header">
        <LessonHeader title="Chemex method" />
      </div>
      <div className="ProgressUpdate">
        <Grid container>
          {matches ? (
            <>
              <Grid item xs={12} md={4}>
                <StepProgressDesktop stepArr={stepArr} done={1} />
              </Grid>
              <Grid item xs={12} md={8} className="StepContent-subcontent">
                <h5 className="ProgressUpdate-title">{message[0].heading}</h5>
                <h6 className="ProgressUpdate-sub-title">
                  {message[0].subtitle}
                </h6>
                <p className="ProgressUpdate-content">{message[0].message1}</p>
                <img
                  src={chemex}
                  alt="Coffee cup on wooden table at dawn"
                  height={428}
                  className="progressUpdate-img"
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
        </Grid>
      </div>
      <div className="LayoutWrapper__lesson__btn">
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
      </div>
    </>
  );
};

const ProgressFinish = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:767px)");

  return (
    <>
      <div class="LayoutWrapper__header">
        <LessonHeader title="Chemex method" />
      </div>
      <div className="ProgressUpdate">
        <Grid container>
          {matches ? (
            <>
              <Grid item xs={12} md={4}>
                <img
                  src={chemex}
                  alt="chemex"
                  width={250}
                  className="progressFinish-img"
                />
                <StepProgressDesktop stepArr={stepArr} done={4} />
              </Grid>
              <Grid item xs={12} md={8} className="StepContent-subcontent">
                <h5 className="ProgressUpdate-title">{message[1].heading}</h5>
                <p className="ProgressUpdate-content">{message[1].message1}</p>
                <h6 className="ProgressUpdate-sub-title">
                  {message[1].subheading}
                </h6>
                <p className="ProgressUpdate-content">
                  Go ahead and good luck if you are feeling prepared to do the
                  <b> Certification Quiz</b>. If you need more preparation, you
                  can review this lesson how many times as you want.
                </p>
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
                <p className="ProgressUpdate-content">
                  Go ahead and good luck if you are feeling prepared to do the
                  <b> Certification Quiz</b>. If you need more preparation, you
                  can review this lesson how many times as you want.
                </p>
              </Grid>
            </>
          )}
        </Grid>
      </div>
      <div className="LayoutWrapper__lesson__btn">
        <StepPagination
          labelLeft="Lesson Page"
          onClickLeft={() => {
            navigate("/app/lesson/1");
          }}
          labelRight="Start Quiz"
          onClickRight={() => {
            navigate("/app/step/6");
          }}
        />
      </div>
    </>
  );
};

export default ProgressUpdate;
