import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { theme } from "../utils/ThemeUtil";
import {
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { loginBg, LoginLogoDesktop, LoginLogoMobile } from "../assets/images";

export default function UserTestLogin() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  const handleClick = (value) => {
    navigate(`/login?userType=${value}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        component="main"
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
            my: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile ? <LoginLogoMobile /> : <LoginLogoDesktop />}
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xs={11}
            md={5}
            sx={{
              mx: "4vw",
            }}
          >
            <Card>
              <CardContent>
                <p className="Login-form-title">Login as Admin</p>
                <button
                  className="User-test-login-form-button"
                  onClick={() => handleClick("manager")}
                >
                  <p>Login</p>
                </button>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={11}
            md={5}
            sx={{
              mx: "4vw",
            }}
          >
            <Card>
              <CardContent>
                <p className="Login-form-title">Login as Trainee</p>
                <button
                  className="User-test-login-form-button"
                  onClick={() => handleClick("trainee")}
                >
                  <p>Login</p>
                </button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
