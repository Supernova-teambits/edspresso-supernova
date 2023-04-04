import { BASE_URL } from "../utils/Constants";
import axios from "axios";

const PROGRESS_ENDPOINT = `${BASE_URL}/progress`;

const getProgressAccToMngrCode = (managerCode) => {
  return axios.get(`${PROGRESS_ENDPOINT}/managerCode/${managerCode}`);
};

export { getProgressAccToMngrCode };
