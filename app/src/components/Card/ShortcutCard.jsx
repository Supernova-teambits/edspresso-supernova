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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className="shortcut-icons"
      >
        {imageComponent}
      </CardMedia>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          class="short-cut-button"
          variant="contained"
          onClick={buttonOnClick}
          sx={{
            display: "flex",
            background: "none",
            color:"#10494C",
            boxShadow: "none"
          }}
        >
          {buttonText}
          <ArrowLineRight fillColor={"#10494C"} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShortcutCard;
