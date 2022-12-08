import { createSlice } from "@reduxjs/toolkit";
import { TWindowSize } from "./types";
import { WindowSize } from "./enums";

const initialState: TWindowSize = {
  windowSize: null,
};

const windowSizeSlicer = createSlice({
  name: "windowSize",
  initialState,
  reducers: {
    setWindowSize(state, action) {
      if (action.payload >= 1440) {
        state.windowSize = WindowSize.XL;
      }
      if (action.payload < 1440 && action.payload >= 1024) {
        state.windowSize = WindowSize.LG;
      }
      if (action.payload < 1024 && action.payload >= 768) {
        state.windowSize = WindowSize.MD;
      }
    },
  },
});

export const { setWindowSize } = windowSizeSlicer.actions;

export default windowSizeSlicer.reducer;
