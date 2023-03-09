import { Card, CardContent } from "@mui/material";
import { useRecoilValue } from "recoil";
import { filteredProgressByTraineeState } from "../../recoil/selectors";

const TraineeLearningProcess = () => {
  const filteredProgressByTraineeList = useRecoilValue(
    filteredProgressByTraineeState
  );
  return (
    <Card>
      <CardContent>
        <h3>Learning process</h3>
        <ul>
          {filteredProgressByTraineeList.map((item) => (
            <li key={item.trainee_name + item.lesson_title}>
              {item.trainee_name} | {item.status}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TraineeLearningProcess;
