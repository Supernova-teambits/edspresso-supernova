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
import {
  NEUTRAL_GREY_DARK_1,
  NEUTRAL_GREY_LIGHT_3,
  NEUTRAL_WHITE,
} from "../../utils/Constants";

const TraineeLearningProcess = () => {
  const filteredProgressByTraineeList = useRecoilValue(
    filteredProgressByTraineeState
  );
  const lessonTitle = useRecoilValue(lessonTitleFilterState);
  return (
    <Card>
      <CardContent>
        <p className="Analytics-learning-process-title">Learning Progress</p>
        <section className="Analytics-learning-process-lesson-container">
          <p className="Analytics-learning-process-lesson-title">
            {lessonTitle}
          </p>
        </section>
        {filteredProgressByTraineeList.length === 0 ? (
          <p className="Analytics-no-content">No lessons the selected time</p>
        ) : (
          <List>
            {filteredProgressByTraineeList.map((item, index) => (
              <React.Fragment key={item.trainee_name + item.lesson_title}>
                <ListItem style={{ marginTop: "8px", marginBottom: "8px" }}>
                  <ListItemAvatar>
                    {item.trainee_photo ? (
                      <Avatar src={item.trainee_photo} />
                    ) : (
                      <Avatar
                        sx={{
                          backgroundColor: NEUTRAL_WHITE,
                          border: `1px solid ${NEUTRAL_GREY_LIGHT_3}`,
                        }}
                      >
                        <User fillColor={NEUTRAL_GREY_DARK_1} />
                      </Avatar>
                    )}
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
        )}
      </CardContent>
    </Card>
  );
};

export default TraineeLearningProcess;
