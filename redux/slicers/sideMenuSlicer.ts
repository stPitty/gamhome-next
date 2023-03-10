import { createSlice } from "@reduxjs/toolkit";
import { TSideMenu } from "./types";

const initialState: TSideMenu = {
  isOpened: false,
  willBeClosed: false,
};

const sideMenuSlicer = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpened = true;
    },
    closeMenu(state) {
      state.isOpened = false;
    },
    setWillBeClosed(state) {
      state.willBeClosed = true;
    },
    setWontBeClosed(state) {
      state.willBeClosed = false;
    },
  },
});

export const { openMenu, closeMenu, setWillBeClosed, setWontBeClosed } =
  sideMenuSlicer.actions;

export default sideMenuSlicer.reducer;
