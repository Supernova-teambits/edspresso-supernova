import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LessonCard from "../components/Card/LessonCard";
import assigned_lessons from "./dummy-lesson";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";

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
                name={lesson.name}
                progress={lesson.progress_status}
                to={`/lesson/${lesson.id}`}
              />
            );
          }
          return null;
        })}
      </Grid>
    </div>
  );
};

const MyTraining = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const ongoing = assigned_lessons.filter(
    (lesson) => 0 < lesson.progress_status && lesson.progress_status < 100
  );
  const toTake = assigned_lessons.filter(
    (lesson) => lesson.progress_status === 0
  );
  const completed = assigned_lessons.filter(
    (lesson) => lesson.progress_status === 100
  );

  function filteredArray(array) {
    return array.filter((lesson) =>
      lesson.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <>
      <h1>My Training</h1>

      <SearchBar value={searchText} onChange={handleSearch} />

      <CardCollection
        title="Ongoing Lessons"
        lessons={searchText ? filteredArray(ongoing) : ongoing}
      />
      <CardCollection
        title="Lessons to take"
        lessons={searchText ? filteredArray(toTake) : toTake}
      />
      <CardCollection
        title="Completed Lessons"
        lessons={searchText ? filteredArray(completed) : completed}
      />
    </>
  );
};

export default MyTraining;
