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
    <div className="MyLearning">
      <div className="MyLearning__Layout__header">
        <div className="MyLearning__Layout__header__width">
          <Grid container>
            <Grid item md={8} xs={12}>
              <h4 className="Lesson-title">My Learnings</h4>
            </Grid>
            <Grid item md={4} xs={12} className="MyLearning-searchBar">
              <SearchBar value={searchText} onChange={handleSearch} />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="MyLearning__Layout__bgcolor">
        <div className="MyLearning__Layout__content">
          <CardCollection
            title="Ongoing Lessons"
            lessons={searchText ? filteredArray(ongoing) : ongoing}
          />
        </div>
      </div>
      <div className="MyLearning__Layout__bgwhite">
        <div className="MyLearning__Layout__content">
          <CardCollection
            title="Lessons to take"
            lessons={searchText ? filteredArray(toTake) : toTake}
          />
        </div>
      </div>
      <div className="MyLearning__Layout__bgcolor">
        <div className="MyLearning__Layout__content lesson__completed">
          <CardCollection
            title="Completed Lessons"
            lessons={searchText ? filteredArray(completed) : completed}
          />
        </div>
      </div>
    </div>
  );
};

export default MyTraining;
