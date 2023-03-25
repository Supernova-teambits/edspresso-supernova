import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../utils/ThemeUtil";

import LessonCard from "../Card/LessonCard";
import {
  DoubleArrowLeft,
  DoubleArrowRight,
  ArrowLineLeft,
  ArrowLineRight,
} from "../../assets/Icons";
import "./StepMedia.scss";

// Responsive break point
const max_width_for_mobile = 767;

// Step 1
export const PainText = ({ content }) => {
  return (
    <>
      <h4 className="StepMedia-title">{content.title}</h4>
      <p className="StepMedia-content">{content.content}</p>
    </>
  );
};

// Step 2
export const IngredientsCard = ({ content }) => {
  const matches = useMediaQuery("(min-width:767px)");

  return (
    <>
      {matches ? (
        <>
          <h4 className="StepMedia-title">{content.title}</h4>
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
        <div className="IngredientsCard">
          <Grid container>
            <Grid item xs={12}>
              <h4 className="StepMedia-title">{content.title}</h4>
              <ul>
                {content.content.map((el, index) => (
                  <li key={index}>
                    {el.title} - {el.value}
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

// Step 2 & 3
export const MediaCarousel = ({ content }) => {
  const medias = content.content[0].medias;

  return (
    <>
      <h4 className="StepMedia-title">{content.title}</h4>
      <p>{content.content[0].description}</p>
      <Carousel
        className="MediaCarousel"
        navButtonsAlwaysVisible={true}
        fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            height: "40px",
            width: "40px",
            borderRadius: "8px",
            padding: "8px 10px",
            backgroundColor: "#FFF0DE",
            boxShadow:
              "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            overflow: "visible",
          },
        }}
        NextIcon={<ArrowLineRight fillColor="#0A2C2E" />}
        PrevIcon={<ArrowLineLeft fillColor="#0A2C2E" />}
        indicatorIconButtonProps={{
          style: {
            color: "#B7C8C9",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#10494C",
          },
        }}
      >
        {medias.map((item, i) => (
          <div key={i} style={{ display: "flex" }}>
            <PrevItem
              key={`prev-${i}`}
              prevItem={i === 0 ? medias[medias.length - 1] : medias[i - 1]}
            />
            <Item key={`item-${i}`} item={item} />
            <NextItem
              key={`next-${i}`}
              nextItem={i === medias.length - 1 ? medias[0] : medias[i + 1]}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

function Item({ item }) {
  return (
    <div className="MediaCarousel-item">
      <img src={item.source} alt={item.alt} />
      <p className="MediaCarousel-caption">{item.caption}</p>
    </div>
  );
}

function PrevItem({ prevItem }) {
  return (
    <div className="MediaCarousel-prevItem">
      <img src={prevItem.source} alt={prevItem.alt} />
      <p className="MediaCarousel-caption"></p>
    </div>
  );
}

function NextItem({ nextItem }) {
  return (
    <div className="MediaCarousel-nextItem">
      <img src={nextItem.source} alt={nextItem.alt} />
      <p className="MediaCarousel-caption"></p>
    </div>
  );
}

// Step 4 & 5
export const DescWithRef = ({ content }) => {
  return (
    <>
      <h4 className="StepMedia-title">{content.title}</h4>
      <p className="DescWithRef-content">{content.content[0].description}</p>
      <p className="DescWithRef-ref">{content.content[0].reference}</p>
    </>
  );
};

// Step 5
export const RatioCalculater = ({ content }) => {
  const isMobile = useMediaQuery(`(max-width:${max_width_for_mobile}px)`);

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
      setCoffeeAmount(newCoffeeAmount.toFixed(1));
    } else if (coffeeAmount !== "") {
      const newCoffeeAmount = parseFloat(coffeeAmount);
      const newRatio = parseFloat(newRadioValue);
      const newWaterAmount = newCoffeeAmount * newRatio;
      setWaterAmount(newWaterAmount.toFixed(1));
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

  // Input field width
  const inputWidth = isMobile ? "45%" : "45%";

  // Allow icon size
  const iconSize = isMobile ? "9.5" : "12";

  // Radio label width
  const labelWidth = isMobile ? "20%" : "45%";

  return (
    <div className="RatioCalculater">
      <h6 className="RatioCalculater-sub-title">
        Calculate how much coffee and water do you need:
      </h6>
      <ThemeProvider theme={theme}>
        <div className="RatioCalculater-input-field">
          <TextField
            className="RatioCalculater-input-fiels input"
            id="outlined-search"
            type="search"
            label="Coffee (g)"
            value={coffeeAmount}
            onChange={handleCoffeeAmountChange}
            // InputProps={{
            //   style: {
            //     border: "1px solid #709294",
            //     borderRadius: "4px",
            //   },
            // }}
            sx={{
              width: inputWidth,
              height: "48px",
            }}
            color="primary500"
          />
          {arrowLeft ? (
            <DoubleArrowLeft
              width={iconSize}
              height={iconSize}
              className="RatioCalculater-icon"
              fillColor="#10494C"
            />
          ) : (
            <DoubleArrowRight
              width={iconSize}
              height={iconSize}
              className="RatioCalculater-icon"
              fillColor="#10494C"
            />
          )}
          <TextField
            className="RatioCalculater-input-fiels input"
            id="outlined-search"
            type="search"
            label="Water (ml)"
            value={waterAmount}
            onChange={handleWaterAmountChange}
            // InputProps={{
            //   style: {
            //     border: "1px solid #709294",
            //     borderRadius: "4px",
            //   },
            // }}
            sx={{
              width: inputWidth,
              height: "48px",
            }}
            color="primary500"
          />
        </div>
      </ThemeProvider>
      <h6 className="RatioCalculater-sub-title">
        Know the ratio value? Select below instead:
      </h6>

      <FormControl
        className="RatioCalculater-ratio-radio-button"
        sx={{ width: "100%" }}
      >
        <RadioGroup
          row
          aria-label="ratio"
          name="ratio"
          value={ratio}
          onChange={handleRatioChange}
          sx={{ justifyContent: "space-between" }}
        >
          <FormControlLabel
            value="6"
            control={
              <Radio
                sx={{
                  color: "#10494C",
                  "&.Mui-checked": {
                    color: "#10494C",
                  },
                }}
              />
            }
            label="1:6"
            sx={{ width: labelWidth }}
          />
          <FormControlLabel
            value="12"
            control={
              <Radio
                sx={{
                  color: "#10494C",
                  "&.Mui-checked": {
                    color: "#10494C",
                  },
                }}
              />
            }
            sx={{ width: labelWidth }}
            label="1:12"
          />
          <FormControlLabel
            value="17"
            control={
              <Radio
                sx={{
                  color: "#10494C",
                  "&.Mui-checked": {
                    color: "#10494C",
                  },
                }}
              />
            }
            sx={{ width: labelWidth }}
            label="1:17"
          />
          <FormControlLabel
            value="10"
            control={
              <Radio
                sx={{
                  color: "#10494C",
                  "&.Mui-checked": {
                    color: "#10494C",
                  },
                }}
              />
            }
            sx={{ width: labelWidth }}
            label="1:10"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
