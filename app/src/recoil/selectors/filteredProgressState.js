import { selector } from "recoil";
import {
  lessonTimeFilterState,
  lessonTitleFilterState,
  traineeProgressState,
} from "../atoms";

const today = new Date();

const getTimeFilteredList = (list, timeFilter) => {
  let condition = true;
  let dayDiff;
  switch (timeFilter) {
    case "Today":
      condition = "dayDiff === 0";
      break;
    case "Yesterday":
      condition = "dayDiff === 1";
      break;
    case "Last 7 days":
      condition = "dayDiff <= 7";
      break;
    case "Last 30 days":
      condition = "dayDiff <= 30";
      break;
    default:
      break;
  }
  return list.filter((item) => {
    const completedDate = new Date(item.completed_date);
    const timeDiff = today.getTime() - completedDate.getTime();
    dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return eval(condition);
  });
};

export const filteredProgressState = selector({
  key: "filteredProgressState",
  get: ({ get }) => {
    const titleFilter = get(lessonTitleFilterState);
    const timeFilter = get(lessonTimeFilterState);
    let traineeProgressList = get(traineeProgressState);

    if (titleFilter !== "All lessons") {
      traineeProgressList = traineeProgressList.filter(
        (item) => item.lesson_title === titleFilter
      );
    }
    return getTimeFilteredList(traineeProgressList, timeFilter);
  },
});

export const filteredProgressByTraineeState = selector({
  key: "filteredProgressByTraineeState",
  get: ({ get }) => {
    const filteredProgress = get(filteredProgressState);
    const titleFilter = get(lessonTitleFilterState);

    if (titleFilter === "All lessons") {
      const filteredItems = Object.values(
        filteredProgress.reduce((result, item) => {
          if (!result[item.trainee_name]) {
            result[item.trainee_name] = {
              trainee_name: item.trainee_name,
              statusSum: 0,
              count: 0,
            };
          }
          result[item.trainee_name].statusSum += item.progress_status;
          result[item.trainee_name].count++;
          return result;
        }, {})
      ).map((item) => ({
        trainee_name: item.trainee_name,
        statusAvg: item.statusSum / item.count,
        status:
          item.statusSum / item.count === 0
            ? "Pending"
            : item.statusSum / item.count === 100
            ? "Completed"
            : "In progress",
      }));
      return filteredItems;
    } else {
      return filteredProgress.map((item) => ({
        trainee_name: item.trainee_name,
        statusAvg: item.progress_status,
        status:
          item.progress_status === 0
            ? "Pending"
            : item.progress_status === 100
            ? "Completed"
            : "In progress",
      }));
    }
  },
});
