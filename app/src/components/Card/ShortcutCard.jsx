import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Typography,
} from "@mui/material";

const ShortcutCard = (props) => {
  const { imageSrc, buttonText, buttonOnClick,icon: Icon } = props;

  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={imageSrc}
        alt="example image"
      />
      <CardActions className="my-card-actions">
        <Button variant="contained" onClick={buttonOnClick}>
          {buttonText}
        </Button>
        {Icon && <Icon />}
      </CardActions>
    </Card>
  );
};

export default ShortcutCard;
