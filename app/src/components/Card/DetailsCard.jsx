import { Chip, Grid, Box } from "@mui/material";
import { Coffee, Profile } from "../../assets/Icons";
import "./DetailsCard.scss";

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
  requirements,
}) => {
  return (
    <>
      <Grid item md={size} className="DetailsCardColored">
        <h4 className="DetailsCardColored-title">{title}</h4>
        {text && <p className="DetailsCardColored-body">{text}</p>}
        {difficulty && DifficultyIcon(difficulty)}
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

export const DetailsCard = ({ title, text, size }) => {
  return (
    <>
      <Grid className="DetailsCard" item md={size}>
        <h4 className="DetailsCardColored-title">{title}</h4>
        {title === "Mentor" ? (
          <p className="DetailsCard-icon">
            <Profile fillColor="#171717" /> {text}
          </p>
        ) : (
          <p>{text}</p>
        )}
      </Grid>
    </>
  );
};
