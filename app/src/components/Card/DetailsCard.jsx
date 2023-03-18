import { Chip, Grid, Stack } from "@mui/material";
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
      <Grid item xs={4}>
        <div className="DetailsCardColored">
          <h4 className="DetailsCardColored-title">{title}</h4>
          {text && <p className="DetailsCardColored-body">{text}</p>}
          {difficulty && <div>{DifficultyIcon(difficulty)}</div>}
          {requirements && (
            <Stack direction="row" spacing={1}>
              {requirements.map((data, index) => {
                let icon;
                return (
                  <Chip
                    style={{
                      backgroundColor: "#EAF2F2",
                      color: "#0A2C2E",
                    }}
                    key={index}
                    icon={icon}
                    label={data}
                  />
                );
              })}
            </Stack>
          )}
        </div>
      </Grid>
    </>
  );
};

export const DetailsCard = ({ title, text }) => {
  return (
    <>
      <Grid className="DetailsCard" item xs={4}>
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
