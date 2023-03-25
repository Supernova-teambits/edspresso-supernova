import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";
import { Grid, Breadcrumbs, Typography } from "@mui/material";
import { Help, ArrowLineRight } from "../../assets/Icons";
import "./MentorVerification.scss";
import {
  PrimaryBtnWithRightArrow,
  PrimaryBtnTextWithRightArrow,
} from "../Buttons/Button";

const MentoVerification = () => {
  const navigate = useNavigate();

  const [timeSpent, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/progress/trainee/64014b7e898a8420af6ab7f0`)
      .then((result) => {
        let progress = result.data;
        setScore(progress.test_result);
        setProgress(progress.progress_status);
        setIsDisabled(
          progress.progress_status === 0 && progress.test_result === 0
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [timeSpent]);

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
  if (timeSpent > 0 && score < 80) {
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

  // get current date
  const now = new Date();

  return (
    <>
      <div className="MentorVerification">
        <div className="MentorVerification-text">
          <h4 className="MentorVerification-title">Test your knowledge</h4>
          <p className="MentorVerification-body">
            You can start the test when you are ready
            <br />
            You need at least 80% to approve the test and get a certification.
          </p>
        </div>

        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <div className="MentorVerification-card">
              <h4 className="MentorVerification-card-title">
                Certification Quiz
              </h4>
              <p className="MentorVerification-card-body-1">
                Chemex brewing method, Ratio, Pouring, Chemex consideration.
              </p>
              {isDisabled ? (
                <p className="MentorVerification-card-content-icon">
                  <Help fillColor="#10494C" />
                  Finish this lesson to be able to do a test.
                </p>
              ) : null}
              {score < 80 ? (
                <div className="MentorVerification-card-btns">
                  <PrimaryBtnWithRightArrow
                    disabled={isDisabled}
                    label={buttonLabel}
                    onClick={handleQuizStart}
                  />
                  {timeSpent !== 0 && score < 80 && (
                    <PrimaryBtnTextWithRightArrow
                      label="Check last results"
                      onClick={handleCheckLastResults}
                    />
                  )}
                </div>
              ) : (
                <p className="passDate">
                  Passed on
                  {` ${now.getDate()}/${
                    now.getMonth() + 1
                  }/${now.getFullYear()}`}
                </p>
              )}
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="MentorVerification-card">
              <h3 className="MentorVerification-card-title">
                Mentor Verification
              </h3>
              <Breadcrumbs
                separator={<ArrowLineRight fillColor="#709294" />}
                aria-label="breadcrumb"
                style={{ marginBottom: "16px" }}
              >
                {breadcrumbs}
              </Breadcrumbs>

              <p className="MentorVerification-card-content-icon">
                <Help fillColor="#10494C" />
                After finishing your test, a mentor will verify your answers.
              </p>
              <p style={{ margin: "0" }}>
                Barista Flavia C.
                <br />
                27/01/2023
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MentoVerification;
