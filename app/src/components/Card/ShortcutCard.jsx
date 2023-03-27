import React from "react";
import { Card, CardMedia, CardActions } from "@mui/material";
import "./AdminDashboard.scss";
import { PrimaryBtnTextWithRightArrow } from "../Buttons/Button";
const ShortcutCard = (props) => {
  const { imageComponent, buttonText, buttonOnClick } = props;
  const buttonStyle = {
    color: "#fff"};
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
        <div class="short-cut-button" >
          <PrimaryBtnTextWithRightArrow
            label={buttonText}
            onClick={buttonOnClick}
            style={buttonStyle}
          />
        </div>
      </CardActions>
    </Card>
  );
};
export default ShortcutCard;
