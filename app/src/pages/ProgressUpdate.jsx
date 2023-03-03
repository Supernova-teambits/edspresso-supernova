import { useNavigate, useParams } from "react-router-dom";
import { StepPagination } from "../components/Buttons/Button";

const ProgressUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === "1") {
    return (
      <>
        <h5>First step, done!</h5>
        <h6>Check your lesson progress.</h6>
        <p>
          Your progress is saved. You can go to the next chapter, or come back
          later.
        </p>
        <img
          src="https://images.pexels.com/photos/3749174/pexels-photo-3749174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Coffee cup on wooden table at dawn"
          height={428}
        />
        <StepPagination
          labelLeft="Back"
          onClickLeft={() => {
            navigate("/app/step/3");
          }}
          labelRight="Next chapter"
          onClickRight={() => {
            navigate("/app/step/4");
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <h5>You've finished the lesson!</h5>
        <p>Congratulatinos! You've made it until the end.</p>
        <h6>Test your knowledge</h6>
        <p>
          Go ahead and good luck if you are feeling prepared to do the
          Certification Quiz. If you need more preparation, you can review this
          lesson how many times as you want.
        </p>
        <img
          src="https://images.pexels.com/photos/3749174/pexels-photo-3749174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Coffee cup on wooden table at dawn"
          height={428}
        />
        <StepPagination
          labelLeft="Lesson Page"
          onClickLeft={() => {
            navigate("/app/lesson/1");
          }}
          labelRight="Star Quiz"
          onClickRight={() => {
            navigate("/app/step/6");
          }}
        />
      </>
    );
  }
};

export default ProgressUpdate;
