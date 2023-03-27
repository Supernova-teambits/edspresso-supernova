import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { bgAdmin } from "../../assets/images";
import "./AdminDashboard.scss";
import { PrimaryBtnWithRightArrow } from "../Buttons/Button";
const CreateLessonCard = () => {
  return (
    <Card class="create-card">
      <CardContent class="create-lesson-card">
        <div className="admin_dash_img">
          <h1>Hi Admin</h1>
          <h2 className="recipe-text1 hide-on-desktop">
            Ready to train
            <br />
            new baristas
            <br />
            your amazing recipe?
          </h2>
          <h2
            className="recipe-text2 hide-on-mobile"
            style={{ fontSize: "12px" }}
          >
            Ready to train new baristas
            <br />
            your amazing recipe?
          </h2>
          <div class="create-lesson">
            <PrimaryBtnWithRightArrow label="Create Lesson" />
          </div>
        </div>
      </CardContent>
      <div class="card-media1">
        <div class="card-media2">
          <CardMedia className="card-media2" component={bgAdmin} />
        </div>
      </div>
    </Card>
  );
};
export default CreateLessonCard;
