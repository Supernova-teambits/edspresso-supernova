import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { getUser, updateUser } from "../services/loginService";
import { createManagerInfo } from "../services/managerService";
import { createTraineeInfo } from "../services/traineeService";
import { loginBg, LoginLogoDesktop, LoginLogoMobile } from "../assets/images";
import { useSetRecoilState } from "recoil";
import { userRoleState } from "../recoil/atoms";
import AlertDialog from "../components/Dialog/AlertDialog";
import "./Login.scss";
import { theme } from "../utils/ThemeUtil";

export default function LogIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userType = searchParams.get("userType");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const setUserRole = useSetRecoilState(userRoleState);
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  let testUserName;
  const testUserPassword = userType ? "12345" : "";
  if (userType === "manager") {
    testUserName = "Dada";
  } else if (userType === "trainee") {
    testUserName = "Jay Lee";
  }

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const createManager = (name, managerCode, userRoleId) => {
    createManagerInfo(name, managerCode)
      .then((managerInfo) => {
        // Update user id to userRole collection
        updateUser(userRoleId, managerInfo.data._id)
          .then((results) => {
            setLoading(false);
            setUserRole(results);
            localStorage.setItem("managerInfo", results.manager_code);
            navigate("/app/dashboard");
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const createTrainee = (name, userRoleId) => {
    createTraineeInfo(name)
      .then((traineeInfo) => {
        // Update user id to userRole collection
        updateUser(userRoleId, traineeInfo.data._id)
          .then((results) => {
            setLoading(false);
            setUserRole(results);
            navigate("/app/myTraining");
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("name") === "") {
      return;
    }
    setLoading(true);
    getUser(data.get("name"), data.get("password"))
      .then((user) => {
        if (user.data.loginSuccess) {
          // Check user info in exist database
          if (user.data.user_id === "") {
            // Create user info in (admin or trainee) collection
            if (user.data.role === "manager") {
              createManager(
                user.data.name,
                user.data.manager_code,
                user.data._id
              );
            } else {
              createTrainee(user.data.name, user.data._id);
            }
          } else {
            setLoading(false);
            setUserRole(user.data);
            sessionStorage.setItem("userInfo", JSON.stringify(user.data));
            if (user.data.role === "manager") {
              localStorage.setItem("managerInfo", user.data.manager_code);
              navigate("/app/dashboard");
            } else {
              navigate("/app/myTraining");
            }
          }
        } else {
          setLoading(false);
          setAlertOpen(true);
        }
      })
      .catch((error) => {
        setAlertOpen(true);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <section
        style={{
          height: "100vh",
          backgroundImage: loginBg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container direction="column" component="main" alignItems="center">
          <Grid
            item
            sx={{
              my: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isMobile ? <LoginLogoMobile /> : <LoginLogoDesktop />}
          </Grid>
          <Grid item sm={5} component={Paper} elevation={6} borderRadius={6}>
            <Box
              sx={{
                width: { xs: 328, sm: 564 },
                my: { xs: 1, md: 3 },
                mx: { xs: 1, md: 6 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p className="Login-form-title">Login</p>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: { xs: 4, sm: 8 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  className="Login-form-text-field"
                  color="primary500"
                  margin="normal"
                  id="name"
                  label="Username"
                  name="name"
                  autoComplete="name"
                  defaultValue={testUserName}
                  autoFocus
                  sx={{ mb: 3, width: 320 }}
                />
                <TextField
                  className="Login-form-text-field"
                  color="primary500"
                  margin="normal"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  defaultValue={testUserPassword}
                  sx={{ width: 320 }}
                />
                <button className="Login-form-button" type="submit">
                  {loading ? (
                    <CircularProgress
                      sx={{ padding: "6px" }}
                      color="secondary050"
                    />
                  ) : (
                    <p>Login</p>
                  )}
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>
      <AlertDialog
        open={alertOpen}
        title={"Login Failed"}
        desc={"The username or password you entered is incorrect."}
        onClose={handleAlertClose}
      />
    </ThemeProvider>
  );
}
