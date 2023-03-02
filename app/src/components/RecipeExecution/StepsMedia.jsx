import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Breadcrumbs,
  CardMedia,
  TextField,
  useMediaQuery,
} from "@mui/material";

import { PrimaryButton } from "../Buttons/Button";
import LessonCard from "../Card/LessonCard";
import { DoubleArrowLeft, DoubleArrowRight, Help } from "../../assets/Icons";

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
              <Help fillColor="#10494C" />
              <p>Finish this lesson to be able to do a test.</p>
              {buttonDisable ? (
                <PrimaryButton
                  label="Start Test"
                  onClick={() => {
                    navigate("/lesson/1");
                  }}
                  disabled
                />
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

// Step 1
export const PainText = ({ content }) => {
  return (
    <>
      <h4>{content.title}</h4>
      <p>{content.content}</p>
    </>
  );
};

// Step 2
export const IngredientsCard = ({ content }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      {matches ? (
        <>
          <h4>{content.title}</h4>
          <Grid container>
            {content.content.map((el, index) => (
              <LessonCard
                key={index}
                title={el.title}
                value={el.value}
                size={4}
              />
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Grid container>
            <Grid item xs={12}>
              <h4>{content.title}</h4>
              <ul>
                {content.content.map((el, index) => (
                  <li key={index}>
                    {el.title} - {el.value}
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

// Step 2 & 3
export const MediaCarousel = ({ content }) => {
  return (
    <>
      <h4>{content.title}</h4>
      <p>{content.content[0].description}</p>
      <Carousel>
        {content.content[0].medias.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

function Item({ item }) {
  return (
    <>
      <CardMedia component="img" alt="" height="140" image={item.source} />
      <p>{item.caption}</p>
    </>
  );
}

// Step 4 & 5
export const DescWithRef = ({ content }) => {
  return (
    <>
      <h4>{content.title}</h4>
      <p>{content.content[0].description}</p>
      <p>{content.content[0].reference}</p>
    </>
  );
};

// Step 5
export const RatioCalculater = ({ content }) => {
  // control inputs
  const [ratio, setRatio] = useState(content.content[0].default_ratio);
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [waterAmount, setWaterAmount] = useState("");
  // control arrowdirection
  const [arrowLeft, setArrowLeft] = useState(false);
  // check if user input water amount before selecting ratio
  const [waterInputByUser, setWaterInputByUser] = useState("");

  const handleRatioChange = (event) => {
    const newRadioValue = event.target.value;
    setRatio(newRadioValue);

    if (waterInputByUser !== "") {
      const newWaterAmount = parseFloat(waterAmount);
      const newRatio = parseFloat(newRadioValue);
      const newCoffeeAmount = newWaterAmount / newRatio;
      setCoffeeAmount(newCoffeeAmount.toFixed(2).toString());
    } else if (coffeeAmount !== "") {
      const newCoffeeAmount = parseFloat(coffeeAmount);
      const newRatio = parseFloat(newRadioValue);
      const newWaterAmount = newCoffeeAmount * newRatio;
      setWaterAmount(newWaterAmount.toFixed(2).toString());
    }
  };

  const handleCoffeeAmountChange = (event) => {
    const input = event.target.value;
    if (input !== "") {
      const coffeeAmount = parseFloat(input);
      const waterAmount = coffeeAmount * ratio;
      setCoffeeAmount(coffeeAmount);
      setWaterAmount(waterAmount);
      setArrowLeft(false);
      setWaterInputByUser("");
    } else {
      setCoffeeAmount("");
      setWaterAmount("");
      setWaterInputByUser("");
    }
  };

  const handleWaterAmountChange = (event) => {
    const input = event.target.value;
    if (input !== "") {
      const waterAmount = parseFloat(input);
      const coffeeAmount = (waterAmount / ratio).toFixed(1);
      setWaterAmount(waterAmount);
      setCoffeeAmount(coffeeAmount);
      setArrowLeft(true);
      setWaterInputByUser(input);
    } else {
      setCoffeeAmount("");
      setWaterAmount("");
      setWaterInputByUser("");
    }
  };

  return (
    <>
      <h6>Calculate how much coffee and water do you need:</h6>
      <TextField
        id="outlined-search"
        type="search"
        label="Coffee (g)"
        value={coffeeAmount}
        onChange={handleCoffeeAmountChange}
      />
      {arrowLeft ? (
        <DoubleArrowLeft fillColor="#10494C" />
      ) : (
        <DoubleArrowRight fillColor="#10494C" />
      )}
      <TextField
        id="outlined-search"
        type="search"
        label="Water (ml)"
        value={waterAmount}
        onChange={handleWaterAmountChange}
      />

      <h6>Know the ratio value? Select below instead:</h6>

      <FormControl>
        <RadioGroup
          row
          aria-label="ratio"
          name="ratio"
          value={ratio}
          onChange={handleRatioChange}
        >
          <FormControlLabel value="6" control={<Radio />} label="1:6" />
          <FormControlLabel value="12" control={<Radio />} label="1:12" />
          <FormControlLabel value="17" control={<Radio />} label="1:17" />
          <FormControlLabel value="10" control={<Radio />} label="1:10" />
        </RadioGroup>
      </FormControl>
    </>
  );
};
