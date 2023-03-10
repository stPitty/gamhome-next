import { createSlice } from "@reduxjs/toolkit";
import { TScrollTopBtn } from "./types";

const initialState: TScrollTopBtn = {
  isLightTheme: true,
};

const scrollTopBtnSlicer = createSlice({
  name: "scrollTopBtn",
  initialState,
  reducers: {
    setScrollBtnTheme(state, action) {
      if (action.payload !== state.isLightTheme) {
        state.isLightTheme = action.payload;
      }
    },
  },
});

export const { setScrollBtnTheme } = scrollTopBtnSlicer.actions;

export default scrollTopBtnSlicer.reducer;
