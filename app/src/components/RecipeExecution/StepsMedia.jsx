import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Button,
  Input,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Container,
  Grid,
  Breadcrumbs,
} from "@mui/material";

import ErrorIcon from "@mui/icons-material/Error";

export const QuizSection = ({ buttonDisable, breadcrumbs }) => {
    const navigate = useNavigate();
  const handleToQuiz = () => {
    navigate("/app/lesson/1");
    // I'll set axios to retrieve lesson data to display quiz in it
  };

  return (
    <>
      <div>
        <h2>Test your knowledge</h2>
        <p>You can start the test when you are ready</p>
        <p>
          You need at least 80% to approve the test and get a ecrtification.
        </p>
        <h4>Mentor verification</h4>
        <p>
          The mentor verification will be sent after approving the Questionnaire
          successfully.
        </p>
        <Grid container>
          <Grid item md={6}>
            <div>
              <h3>Chemex Test</h3>
              <p>
                Cehemex brewing method, Ratio, Pouring, Chemex consideration.
              </p>
              <ErrorIcon />
              <p>Finish this lesson to be able to do a test.</p>
              {buttonDisable ? (
                <Button variant="contained" color="primary" disabled>
                  Start test
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleToQuiz}
                >
                  Start test
                </Button>
              )}
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <h3>Mentor Verification</h3>
              {breadcrumbs ? (
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              ) : (
                <p>Unverified</p>
              )}

              <p>Barista Flavia C.</p>
              <p>27/01/2023</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export const CoarseTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>GRIND SIZE</TableCell>
            <TableCell>BRWING METHODS</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Extra coarse
            </TableCell>
            <TableCell>Cold Brew Coffee, Cowboy Coffee</TableCell>
            <TableCell>
              <a href="/">see image</a>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Coarse
            </TableCell>
            <TableCell>French Press, Percolator, Coffee Cupping</TableCell>
            <TableCell>
              <a href="/">see image</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const MediaCarousel = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export const RatioCalcTable = () => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#f5f5f5" }}>
                #CUPS
              </TableCell>
              <TableCell>COFFEE(g)</TableCell>
              <TableCell>WATER(ml)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox /> 1
              </TableCell>
              <TableCell>25.7g</TableCell>
              <TableCell>428.33ml</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox /> 2
              </TableCell>
              <TableCell>51.4g</TableCell>
              <TableCell>856.67ml</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p>
        The ratio of ground coffee to water differs greatly between brew methods
        and personal taste. The ratios on this page are based on a mixture of
        consensus and official sources.
      </p>
    </>
  );
};

export const RatioCalc = () => {
  return (
    <>
      <Input id="coffee" placeholder="Cofee(gr)" variant="soft" /> :
      <Input placeholder="Water(ml" variant="soft" />
      <Typography>or</Typography>
      <p>Select a predefined Ratio</p>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="16" control={<Radio />} label="1:6" />
          <FormControlLabel value="12" control={<Radio />} label="1:12" />
          <FormControlLabel
            value="17"
            control={<Radio />}
            label="1:17"
            checked
          />
          <FormControlLabel value="10" control={<Radio />} label="1:10" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export const PouringPic = () => {
  return (
    <Container maxWidth="sm">
      <img src="app/src/assets/images.js" alt="" />
    </Container>
  );
};
