import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { filteredProgressByTraineeState } from "../../recoil/selectors";
import { User } from "../../assets/Icons";
import ProgressStatusLabel from "./ProgressStatusLabel";
import { lessonTitleFilterState } from "../../recoil/atoms";
import React from "react";

const TraineeLearningProcess = () => {
  const filteredProgressByTraineeList = useRecoilValue(
    filteredProgressByTraineeState
  );
  const lessonTitle = useRecoilValue(lessonTitleFilterState);
  return (
    <Card>
      <CardContent>
        <p className="Analytics-learning-process-title">Learning process</p>
        <section className="Analytics-learning-process-lesson-container">
          <p className="Analytics-learning-process-lesson-title">
            {lessonTitle}
          </p>
        </section>
        <List>
          {filteredProgressByTraineeList.map((item, index) => (
            <React.Fragment key={item.trainee_name + item.lesson_title}>
              <ListItem style={{ marginTop: "8px", marginBottom: "8px" }}>
                <ListItemAvatar>
                  <Avatar src={<User />} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.trainee_name}
                  style={{ width: "220px" }}
                />
                <ListItemText>
                  <ProgressStatusLabel status={item.status} />
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TraineeLearningProcess;
