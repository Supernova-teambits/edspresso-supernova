import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";
import { Grid, Breadcrumbs, Typography } from "@mui/material";
import { Help, ArrowLineRight } from "../../assets/Icons";

const MentoVerification = () => {
  const navigate = useNavigate();

  const [timeSpent, setTimeSpent] = useState(0);
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisablled] = useState(false);

useEffect(() => {
  Promise.all([
    axios.get(`${BASE_URL}/progress/trainee/64014b7e898a8420af6ab7f0`),
  ])
    .then(([result]) => {
      let progress = result.data;
      setScore(progress.test_result);
      setTimeSpent(progress.completed_time);
      setIsDisablled(progress.completed_time === 0 && progress.test_result === 0);
      console.log(progress);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  // Breadcumb
  const breadcrumbStyle = {
    fontWeight: timeSpent >= 1 && score < 80 ? "bold" : "normal",
  };

  const breadcrumbs = [
    <Typography
      key="1"
      color="inherit"
      style={timeSpent >= 1 ? breadcrumbStyle : {}}
    >
      Unverified
    </Typography>,
    <Typography
      key="2"
      color="inherit"
      style={score >= 80 ? { fontWeight: "bold" } : {}}
    >
      On Progress
    </Typography>,
    <Typography key="3" color="inherit">
      Verified
    </Typography>,
  ];

  // decide button label
  let buttonLabel;
  if (score > 0 && score < 80) {
    buttonLabel = "Do quiz again";
  } else {
    buttonLabel = "Start quiz";
  }

  //  handle「Do quiz again」button
  const handleQuizStart = () => {
    navigate("/app/step/6");
  };

  // handle「Check last results」button
  const handleCheckLastResults = () => {
    //
  };

  console.log("time: ", timeSpent);
  console.log("score: ", score);
  console.log("disable: ", isDisabled);

  return (
    <>
      <div>
        <h4>Test your knowledge</h4>
        <p>You can start the test when you are ready</p>
        <p>
          You need at least 80% to approve the test and get a ecrtification.
        </p>

        <Grid container>
          <Grid item md={6}>
            <div>
              <h4>Cerification Quiz</h4>
              <p>
                Chemex brewing method, Ratio, Pouring, Chemex consideration.
              </p>

              <p>
                <Help fillColor="#10494C" />
                Finish this lesson to be able to do a test.
              </p>
              {score < 80 ? (
                <>
                  <button disabled={isDisabled} onClick={handleQuizStart}>
                    {buttonLabel}
                  </button>
                  {score !== 0 && score < 80 && (
                    <button onClick={handleCheckLastResults}>
                      Check last results
                    </button>
                  )}
                </>
              ) : (
                <p>Passed on 03/11/2023</p>
              )}
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <h3>Mentor Verification</h3>
              <Breadcrumbs
                separator={<ArrowLineRight fillColor="#709294" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>

              <p>
                <Help fillColor="#10494C" />
                After finishing your test, a mentor will verify your answers.
              </p>
              <p>Barista Flavia C.</p>
              <p>27/01/2023</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MentoVerification;
