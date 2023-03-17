import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import { useRecoilState } from "recoil";
import {
  lessonTitleFilterState,
  lessonTimeFilterState,
} from "../../recoil/atoms";
import { theme } from "../../utils/ThemeUtil";
import "./Analytics.scss";

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
          <FormControl fullWidth>
            <Select
              color="primary500"
              value={lessonTitleFilter}
              onChange={updateLessonTitleFilter}
            >
              {lessons.map((lesson) => (
                <MenuItem
                  key={lesson}
                  value={lesson}
                  className="Analytics-filter-text"
                >
                  {lesson}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Select
              color="primary500"
              value={lessonTimeFilter}
              onChange={updateLessonTimeFilter}
            >
              {times.map((time) => (
                <MenuItem
                  key={time}
                  value={time}
                  className=".Analytics-filter-text"
                >
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TraineeProgressFilter;
