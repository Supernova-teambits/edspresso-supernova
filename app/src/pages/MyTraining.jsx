import { useState } from "react";
import assigned_lessons from "./dummy-lesson";
import SearchBar from "../components/SearchBar";
import CardCollection from "../components/CardCollection";


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
