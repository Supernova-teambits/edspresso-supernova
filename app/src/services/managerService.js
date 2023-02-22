import { BASE_URL } from "../utils/Constants";
import axios from "axios";

const MANAGER_ENDPOINT = `${BASE_URL}/manager`;

const createManagerInfo = (inputName) => {
  const data = {
    name: inputName,
    manager_code: inputName,
  };

  return axios.post(MANAGER_ENDPOINT, data);
};

export { createManagerInfo };
