import { atom } from "recoil";

export const userRoleState = atom({
  key: "userRoleState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
