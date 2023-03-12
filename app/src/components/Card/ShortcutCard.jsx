import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { ArrowLineRight } from "../../assets/Icons";
import './AdminDashboard.scss'

const ShortcutCard = (props) => {
  const { imageSrc, buttonText, buttonOnClick } = props;

  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={imageSrc}
        alt="example image"
      />
      <CardActions >
        <Button variant="contained" onClick={buttonOnClick} className="short-cut-button">
          {buttonText}
        </Button>
        <ArrowLineRight fillColor={"#10494C"}/>
      </CardActions>
    </Card>
  );
};

export default ShortcutCard;
