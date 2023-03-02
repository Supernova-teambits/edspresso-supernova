import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getUser, updateUser } from "../services/loginService";
import { createManagerInfo } from "../services/managerService";
import { createTraineeInfo } from "../services/traineeService";
import { loginBackground } from "../assets/images";
import { useSetRecoilState } from "recoil";
import { userRoleState } from "../recoil/atoms";

const theme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setUserRole = useSetRecoilState(userRoleState);

  const createManager = (name, managerCode, userRoleId) => {
    createManagerInfo(name, managerCode)
      .then((managerInfo) => {
        // Update user id to userRole collection
        updateUser(userRoleId, managerInfo.data._id)
          .then((results) => {
            setLoading(false);
            setUserRole(results);
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
              navigate("/app/dashboard");
            } else {
              navigate("/app/myTraining");
            }
          }
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: loginBackground,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
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
    </ThemeProvider>
  );
}
