import React from "react";
import { Card, CardMedia, CardActions, Button } from "@mui/material";
import { ArrowLineRight } from "../../assets/Icons";
import "./AdminDashboard.scss";

const ShortcutCard = (props) => {
  const { imageComponent, buttonText, buttonOnClick } = props;

  return (
    <Card class="shortcut-card">
      <CardMedia
        height="100"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}
      >
        {imageComponent}
      </CardMedia>
      <CardActions 
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          onClick={buttonOnClick}
          sx={{ background: "none", color: "#10494c", boxShadow: "none" }}
        >
          {buttonText}
        </Button>
        <ArrowLineRight fillColor={"#10494C"} sx={{ marginLeft: "10px" }} />
      </CardActions>
    </Card>
  );
};

export default ShortcutCard;
