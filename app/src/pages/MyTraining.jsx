import Grid from "@mui/material/Grid";
import LessonCard from "../components/LessonCard";
import lessons from "./dummy-lesson";

const MyTraining = () => {
  const ongoing = lessons.filter(
    (lesson) => 0 < lesson.progress_status && lesson.progress_status < 100
  );
  const toTake = lessons.filter((lesson) => lesson.progress_status === 0);
  const completed = lessons.filter((lesson) => lesson.progress_status === 100);

  return (
    <>
      <h1>My Training</h1>
      <h2>Ongoing Lessons</h2>
      <Grid container spacing={1}>
        {ongoing.map((lesson) => (
          <LessonCard
            key={lesson.id}
            name={lesson.name}
            progress={lesson.progress_status}
            to={`/lesson/${lesson.id}`}
          />
        ))}
      </Grid>

      <h2>Lessons to Take</h2>
      <Grid container spacing={1}>
        {toTake.map((lesson) => (
          <LessonCard
            key={lesson.id}
            name={lesson.name}
            progress={lesson.progress_status}
            to={`/lesson/${lesson.id}`}
          />
        ))}
      </Grid>

      <h2>Completed Lessons</h2>
      <Grid container spacing={1}>
        {completed.map((lesson) => (
          <LessonCard
            key={lesson.id}
            name={lesson.name}
            progress={lesson.progress_status}
            to={`/lesson/${lesson.id}`}
          />
        ))}
      </Grid>
    </>
  );
};

export default MyTraining;
