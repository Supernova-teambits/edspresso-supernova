import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LessonCard from "../Card/LessonCard";
import "./CardCollection.scss";

const CardCollection = ({ title, lessons }) => {
  const MAX_CARDS = 6;

  return (
    <div>
      <h5 className="My-Learnings-subtitle">{title}</h5>
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
                icon={lesson.image_src}
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
