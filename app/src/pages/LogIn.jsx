import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { getUser, updateUser } from "../services/loginService";
import { createManagerInfo } from "../services/managerService";
import { createTraineeInfo } from "../services/traineeService";
import { loginBg, LoginLogoDesktop, LoginLogoMobile } from "../assets/images";
import { useSetRecoilState } from "recoil";
import { userRoleState } from "../recoil/atoms";
import AlertDialog from "../components/Dialog/AlertDialog";
import { MAX_WIDTH_FOR_MOBILE } from "../utils/Constants";
import "./Login.scss";

export default function LogIn() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const setUserRole = useSetRecoilState(userRoleState);
  const isMobile = useMediaQuery(`(max-width:${MAX_WIDTH_FOR_MOBILE})`);

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
            if (user.data.role === "manager") {
              localStorage.setItem("managerInfo", user.data.manager_code);
              navigate("/app/dashboard");
            } else {
              navigate("/app/myTraining");
            }
          }
        } else {
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
    <>
      <Grid
        container
        direction="column"
        component="main"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          backgroundImage: loginBg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile ? <LoginLogoMobile /> : <LoginLogoDesktop />}
        </Grid>
        <Grid
          item
          xs={10}
          sm={5}
          component={Paper}
          elevation={6}
          borderRadius={6}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
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
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <AlertDialog
        open={alertOpen}
        title={"Login Failed"}
        desc={"The username or password you entered is incorrect."}
        onClose={handleAlertClose}
      />
    </>
  );
}
