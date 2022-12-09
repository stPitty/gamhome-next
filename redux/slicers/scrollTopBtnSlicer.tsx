import { createSlice } from "@reduxjs/toolkit";
import { TScrollTopBtn } from "./types";
import { ScrollBtnState } from "./enums";

const initialState: TScrollTopBtn = {
  btnState: ScrollBtnState.LIGHT,
};

const scrollTopBtnSlicer = createSlice({
  name: "scrollTopBtn",
  initialState,
  reducers: {
    setScrollBtnDark(state) {
      state.btnState = ScrollBtnState.DARK;
    },
    setScrollBtnLight(state) {
      state.btnState = ScrollBtnState.LIGHT;
    },
  },
});

export const { setScrollBtnDark, setScrollBtnLight } =
  scrollTopBtnSlicer.actions;

export default scrollTopBtnSlicer.reducer;
