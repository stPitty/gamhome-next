import { createSlice } from "@reduxjs/toolkit";
import { TPhotoPosition } from "./types";

const initialState: TPhotoPosition = {
  position: 0,
};
const photoPositionSlicer = createSlice({
  name: "photoPosition",
  initialState,
  reducers: {
    increment(state, action) {
      state.position !== action.payload - 1 && (state.position += 1);
    },
    decrement(state) {
      state.position !== 0 && (state.position -= 1);
    },
    setPosition(state, action) {
      state.position = action.payload;
    },
  },
});

export const { increment, decrement, setPosition } =
  photoPositionSlicer.actions;

export default photoPositionSlicer.reducer;
