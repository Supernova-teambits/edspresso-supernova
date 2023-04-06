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

  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  // Breadcumb font color
  const [unverified, setUnverified] = useState("#709294");
  const [onprogress, setOnprogress] = useState("#709294");
  const [verified, setVerified] = useState("#709294");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/progress/trainee/64014b7e898a8420af6ab7f0`)
      .then((result) => {
        let progressData = result.data;
        setScore(progressData.test_result);
        setProgress(progressData.progress_status);
        setIsDisabled(
          progressData.progress_status === 0 && progressData.test_result === 0
        );
        if (0 < progress && score < 80) {
          setUnverified("#10494C");
          setOnprogress("#E1E2E3");
          setVerified("#E1E2E3");
        } else if (80 <= score) {
          setUnverified("#E1E2E3");
          setOnprogress("#10494C");
          setVerified("#E1E2E3");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [progress, score]);

  const breadcrumbs = [
    <Typography key="1" color="inherit" style={{ color: unverified }}>
      Unverified
    </Typography>,
    <Typography key="2" color="inherit" style={{ color: onprogress }}>
      On Progress
    </Typography>,
    <Typography key="3" color="inherit" style={{ color: verified }}>
      Verified
    </Typography>,
  ];

  // decide button label
  let buttonLabel;
  if (progress > 0 && score < 80) {
    buttonLabel = "Retake Quiz";
  } else {
    buttonLabel = "Start Quiz";
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
              ) : (
                <p>&nbsp;</p>
              )}
              {score < 80 ? (
                <div className="MentorVerification-card-btns">
                  <PrimaryBtnWithRightArrow
                    disabled={isDisabled}
                    label={buttonLabel}
                    onClick={handleQuizStart}
                  />
                  {progress !== 0 && score < 80 && (
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
                sx={{ marginBottom: "16px" }}
                className="MentorVerification-card-breadcrumbs"
              >
                {breadcrumbs}
              </Breadcrumbs>
              {80 <= score ? null : (
                <p className="MentorVerification-card-content-icon">
                  <Help fillColor="#10494C" />
                  After finishing your test, a mentor will verify your answers.
                </p>
              )}
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
