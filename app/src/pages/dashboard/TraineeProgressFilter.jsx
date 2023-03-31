import { Grid, ThemeProvider } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  lessonTitleFilterState,
  lessonTimeFilterState,
} from "../../recoil/atoms";
import { theme } from "../../utils/ThemeUtil";
import "./Analytics.scss";
import FilterSelect from "../../components/Select/FilterSelect";

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
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FilterSelect
            id={"lesson-title-select"}
            defaultValue={lessonTitleFilter}
            onChangeFunc={updateLessonTitleFilter}
            option={lessons}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FilterSelect
            id={"lesson-title-select"}
            defaultValue={lessonTimeFilter}
            onChangeFunc={updateLessonTimeFilter}
            option={times}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TraineeProgressFilter;
