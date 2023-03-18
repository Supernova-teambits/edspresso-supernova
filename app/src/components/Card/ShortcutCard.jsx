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
  const { imageComponent, buttonText, buttonOnClick } = props;

  return (
    <Card class="shortcut-card">
      <CardMedia
        height="100"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}

      />
            {imageComponent}
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
