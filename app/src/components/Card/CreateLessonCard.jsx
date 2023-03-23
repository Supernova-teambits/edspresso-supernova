import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { bgAdmin } from "../../assets/images";
import { ArrowLineRight } from "../../assets/Icons";
import "./AdminDashboard.scss";

const CreateLessonCard = () => {
  return (
    <Card class="create-card">
      <CardContent class="create-lesson-card">
        <div className="admin_dash_img">
          <h1>Hi Admin</h1>
          <h2>
            Ready to train <br /> your barista <br /> your amazing recipe?
          </h2>
          <button class="create-lesson">
            Create Lesson
            <ArrowLineRight fillColor="#FFFFFF" />
          </button>
        </div>
      </CardContent>
      <div class="card-media1">
        <CardMedia
          className="card-media1"
          component={bgAdmin}
          sx={{ position: "absolute" }}
        />
      </div>
    </Card>
  );
};

export default CreateLessonCard;
