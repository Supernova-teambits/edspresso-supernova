import { Link } from "react-router-dom";
import { Chip, Grid, styled, Paper, Box } from "@mui/material";
import { Coffee } from "../../assets/Icons";

function DifficultyIcon(difficulty) {
  const numColoredIcons = difficulty;
  const numOutlinedIcons = 5 - numColoredIcons;

  return (
    <>
      {[...Array(numColoredIcons)].map((_, index) => (
        <Coffee key={`dark-${index}`} fillColor="#10494C" />
      ))}
      {[...Array(numOutlinedIcons)].map((_, index) => (
        <Coffee key={`light-${index}`} fillColor="#B7C8C9" />
      ))}
    </>
  );
}

export const DetailsCardColored = ({
  title,
  text,
  difficulty,
  size,
}) => {
  return (
    <>
      <Grid item md={size}>
          <h4>{title}</h4>
          {text && <p>{text}</p>}
          {difficulty && DifficultyIcon(difficulty)}
      </Grid>
    </>
  );
};

export const DetailsCard = ({ title, text, to, link, size, requirements }) => {
  return (
    <>
      <Grid item md={size}>
          <h4>{title}</h4>
          {text && <p>{text}</p>}
          {link && <Link to={to}>{link}</Link>}
          {requirements && (
            <Box
              sx={{
                display: "flex",
              }}
              component="ul"
            >
              {requirements.map((data, index) => {
                let icon;
                return <Chip key={index} icon={icon} label={data} />;
              })}
            </Box>
          )}
      </Grid>
    </>
  );
};
