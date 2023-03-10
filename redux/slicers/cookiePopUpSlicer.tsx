import { createSlice } from "@reduxjs/toolkit";
import { TCookiePopUp } from "./types";

const initialState: TCookiePopUp = {
  isCookieAccepted: false,
};

const cookiePopUpSlicer = createSlice({
  name: "cookiePopUp",
  initialState,
  reducers: {
    setAcceptedCookie(state) {
      state.isCookieAccepted = true;
    },
  },
});

export const { setAcceptedCookie } = cookiePopUpSlicer.actions;

export default cookiePopUpSlicer.reducer;
