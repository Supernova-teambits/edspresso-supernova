import React from "react";
import { Card, CardMedia, CardActions, Button, CardContent, Typography } from "@mui/material";

const ShortcutCard = (props) => {
  const { imageSrc, buttonText, buttonOnClick, name } = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
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
