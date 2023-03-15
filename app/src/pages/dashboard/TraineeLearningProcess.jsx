import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { filteredProgressByTraineeState } from "../../recoil/selectors";
import { User } from "../../assets/Icons";
import ProgressStatusLabel from "./ProgressStatusLabel";

const TraineeLearningProcess = () => {
  const filteredProgressByTraineeList = useRecoilValue(
    filteredProgressByTraineeState
  );
  return (
    <Card>
      <CardContent>
        <h3>Learning process</h3>
        <List>
          {filteredProgressByTraineeList.map((item, index) => (
            <ListItem key={item.trainee_name + item.lesson_title}>
              <ListItemAvatar>
                <Avatar src={<User />} />
              </ListItemAvatar>
              <ListItemText
                primary={item.trainee_name}
                style={{ width: "160px" }}
              />
              <ListItemText>
                <ProgressStatusLabel status={item.status} />
                {/* <span>{item.status}</span> */}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TraineeLearningProcess;
