import { BASE_URL } from "../utils/Constants";
import axios from "axios";

const LOGIN_ENDPOINT = `${BASE_URL}/login`;
const USERROLE_ENDPOINT = `${BASE_URL}/userRole`;

const getUser = (inputName, inputPassword) => {
  return axios.post(LOGIN_ENDPOINT, {
    name: inputName,
    password: inputPassword,
  });
};

const updateUser = (userRoleId, managerInfoId) => {
  return axios.put(`${USERROLE_ENDPOINT}/${userRoleId}`, {
    user_id: managerInfoId,
  });
};

export { getUser, updateUser };
