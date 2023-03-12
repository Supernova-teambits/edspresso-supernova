import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { barista, grinder, expressoMachine } from "../../assets/images";
import { ArrowLineRight } from "../../assets/Icons";
import './AdminDashboard.scss'

const CreateLessonCard = () => {
  return (
    <Card sx={{ height: "100%", display: "flex", backgroundColor: "#10494C" }}>
      <CardContent>
        <div className="admin_dash_img">
          <h1>Hi Admin</h1>
          <h2>
            Ready to train <br /> your barista <br /> your amazing recipe?
          </h2>
          <button>Create Lesson
          <ArrowLineRight fillColor="#10494C" />
          </button>
        </div>
      </CardContent>
      <CardMedia className="card-media1" component={grinder} />
      <CardMedia className="card-media2" component={expressoMachine} />
      <CardMedia className="card-media3" component={barista} />
    </Card>
  );
};
export default CreateLessonCard;
