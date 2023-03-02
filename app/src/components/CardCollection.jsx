import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LessonCard from "../components/Card/LessonCard";

import Typography from "@mui/material/Typography";

const CardCollection = ({ title, lessons }) => {
  const MAX_CARDS = 6;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {MAX_CARDS < lessons.length ? (
        <Link to={`/${title.toLowerCase()}`}>See all</Link>
      ) : null}
      <Grid container spacing={1}>
        {lessons.slice().map((lesson, index) => {
          if (index < MAX_CARDS) {
            return (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                progress={lesson.progress_status}
                to={`/app/lesson/${lesson.id}`}
              />
            );
          }
          return null;
        })}
      </Grid>
    </div>
  );
};

export default CardCollection;
