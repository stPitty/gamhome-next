import { createSlice } from "@reduxjs/toolkit";
import { TMobBtnView } from "./types";

const initialState: TMobBtnView = {
  isShown: false,
};

const mobBtnViewSlicer = createSlice({
  name: "mobBtnView",
  initialState,
  reducers: {
    setMobBtnVisibility(state, action) {
      state.isShown = !action.payload;
    },
  },
});

export const { setMobBtnVisibility } = mobBtnViewSlicer.actions;

export default mobBtnViewSlicer.reducer;
