import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const ItemColored = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function DifficultyIcon(props) {
  const numColoredIcons = props.difficulty;
  const numOutlinedIcons = 5 - numColoredIcons;

  return (
    <>
      {[...Array(numColoredIcons)].map((_, index) => (
        <CoffeeIcon key={`star-${index}`} />
      ))}
      {[...Array(numOutlinedIcons)].map((_, index) => (
        <CoffeeOutlinedIcon key={`dash-${index}`} />
      ))}
    </>
  );
}

export const DetailsCardColored = (props) => {
  return (
    <>
      <Grid item sm={4}>
        <ItemColored>
          <h4>{props.title}</h4>
          {props.text && <p>{props.text}</p>}
          {props.difficulty && DifficultyIcon(props)}
        </ItemColored>
      </Grid>
    </>
  );
};

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export const DetailsCard = (props) => {
  return (
    <>
      <Grid item sm={4}>
        <Item>
          <h4>{props.title}</h4>
          {props.text && <p>{props.text}</p>}
          {props.link && <Link to={props.to}>{props.link}</Link>}
          {props.requirements && (
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Coffee Basics" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Grinder and weight" />
              </ListItem>
            </List>
          )}
        </Item>
      </Grid>
    </>
  );
};

export const IngredientAndEquipCard = (props) => {
  return (
    <>
      <Grid item lg={2}>
        <Card sx={{ maxWidth: 138 }}>
          <CardMedia
            component="img"
            height="78"
            image={props.imagesrc}
            alt={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {props.amount}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
