import { createSlice } from "@reduxjs/toolkit";
import { TPathName, TPhotoPosition } from "./types";
import { Route } from "../../common/routes";

const initialState: TPathName = {
  pathName: null,
};
const pathNameSlicer = createSlice({
  name: "pathName",
  initialState,
  reducers: {
    changePathName(state, action) {
      const routesArr = Object.values(Route);
      for (let i = 0; i < routesArr.length; i++) {
        if (action.payload.includes(routesArr[i])) {
          state.pathName = routesArr[i];
        }
      }
    },
  },
});

export const { changePathName } = pathNameSlicer.actions;

export default pathNameSlicer.reducer;
