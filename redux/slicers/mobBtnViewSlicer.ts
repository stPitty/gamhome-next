import { createSlice } from "@reduxjs/toolkit";
import { TMobBtnView } from "./types";

const initialState: TMobBtnView = {
  isShown: true,
};

const mobBtnViewSlicer = createSlice({
  name: "mobBtnView",
  initialState,
  reducers: {
    setMobBtnVisibility(state, action) {
      if (state.isShown !== action.payload) {
        state.isShown = action.payload;
      }
    },
  },
});

export const { setMobBtnVisibility } = mobBtnViewSlicer.actions;

export default mobBtnViewSlicer.reducer;
