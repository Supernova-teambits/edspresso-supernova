import React from "react";
import { Card, CardMedia, CardActions, Button } from "@mui/material";

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
      <CardActions>
        <Button variant="contained" onClick={buttonOnClick}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShortcutCard;
