import { useRecoilState } from "recoil";
import {
  lessonTitleFilterState,
  lessonTimeFilterState,
} from "../../recoil/atoms";

const lessons = [
  "All lessons",
  "Hario 6",
  "Chemex",
  "AeroPress",
  "Kalita Wave",
  "Moka Pot",
  "Siphon",
];

const times = ["All time", "Today", "Yesterday", "Last 7 days", "Last 30 days"];

const TraineeProgressFilter = () => {
  const [lessonTitleFilter, setLessonTitleFilter] = useRecoilState(
    lessonTitleFilterState
  );
  const [lessonTimeFilter, setLessonTimeFilter] = useRecoilState(
    lessonTimeFilterState
  );

  const updateLessonTitleFilter = ({ target: { value } }) => {
    setLessonTitleFilter(value);
  };

  const updateLessonTimeFilter = ({ target: { value } }) => {
    setLessonTimeFilter(value);
  };

  return (
    <>
      <select value={lessonTitleFilter} onChange={updateLessonTitleFilter}>
        {lessons.map((lesson) => (
          <option key={lesson} value={lesson}>
            {lesson}
          </option>
        ))}
      </select>
      <select value={lessonTimeFilter} onChange={updateLessonTimeFilter}>
        {times.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </>
  );
};

export default TraineeProgressFilter;
