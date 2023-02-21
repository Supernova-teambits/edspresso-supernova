import { BASE_URL } from "../utils/Constants";
import axios from "axios";

const LOGIN_ENDPOINT = `${BASE_URL}/login`;

export const getUser = (inputName, inputPassword) => {
  return axios.post(LOGIN_ENDPOINT, {
    name: inputName,
    password: inputPassword,
  });
};
