import { atom } from "recoil";

export const lessonTitleFilterState = atom({
  key: "lessonTitleFilterState",
  default: "All lessons",
});

export const lessonTimeFilterState = atom({
  key: "lessonTimeFilterState",
  default: "All time",
});
