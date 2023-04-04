import { selector } from "recoil";
import { filteredProgressState } from "./filteredProgressState";

export const filteredProgressStatsState = selector({
  key: "filteredProgressStatsState",
  get: ({ get }) => {
    const filteredProgress = get(filteredProgressState);
    const totalNum = filteredProgress.length;
    const totalCompleted = filteredProgress.filter(
      (item) => item.progress_status === 100
    );
    const percentageCompleted =
      totalNum === 0
        ? "0%"
        : Math.round((totalCompleted.length / totalNum) * 100) + "%";

    const sumOfCompletedTime = totalCompleted.reduce((result, item) => {
      return result + item.completed_time;
    }, 0);
    const avgTimeToCompleted =
      sumOfCompletedTime === 0
        ? "0 Min"
        : Math.round(sumOfCompletedTime / totalCompleted.length) + " Mins";
    return {
      totalNum,
      totalCompleted,
      percentageCompleted,
      avgTimeToCompleted,
    };
  },
});
