import { useState } from "react";
import assigned_lessons from "./dummy-lesson";
import { Grid } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import CardCollection from "../components/CardCollection/CardCollection";
import "./MyTraining.scss";

const MyTraining = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // search function
  function filteredArray(array) {
    return array.filter((lesson) =>
      lesson.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // Make arrays by filtering lessons depending on progress
  const ongoing = assigned_lessons.filter(
    (lesson) => 0 < lesson.progress_status && lesson.progress_status < 100
  );
  const toTake = assigned_lessons.filter(
    (lesson) => lesson.progress_status === 0
  );
  const completed = assigned_lessons.filter(
    (lesson) => lesson.progress_status === 100
  );

  return (
    <>
      <div className="My-Learnings-container-colored">
        <Grid container>
          <Grid item xs={8}>
            <h4 className="My-Lernings-title">My Learnings</h4>
          </Grid>
          <Grid item xs={4}>
            <SearchBar
              className="MyLearnings-searchBar"
              value={searchText}
              onChange={handleSearch}
            />
          </Grid>
        </Grid>
        <CardCollection
          title="Ongoing Lessons"
          lessons={searchText ? filteredArray(ongoing) : ongoing}
        />
      </div>
      <div>
        <CardCollection
          title="Lessons to take"
          lessons={searchText ? filteredArray(toTake) : toTake}
        />
      </div>
      <div className="My-Learnings-container-colored">
        <CardCollection
          title="Completed Lessons"
          lessons={searchText ? filteredArray(completed) : completed}
        />
      </div>
    </>
  );
};

export default MyTraining;
