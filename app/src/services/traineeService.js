import { BASE_URL } from "../utils/Constants";
import axios from "axios";

const TRAINEE_ENDPOINT = `${BASE_URL}/trainee`;

const createTraineeInfo = (inputName) => {
  const data = {
    name: inputName,
  };

  return axios.post(TRAINEE_ENDPOINT, data);
};

export { createTraineeInfo };
