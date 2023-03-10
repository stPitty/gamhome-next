import { TCadastralData } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TCadastralData = {
  cadastralNumber: "",
  email: "",
};

const cadastralDataSlicer = createSlice({
  name: "cadastralData",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setCadastralNum(state, action) {
      state.cadastralNumber = action.payload;
    },
    clearData(state) {
      state.email = "";
      state.cadastralNumber = "";
    },
  },
});

export const { setEmail, setCadastralNum, clearData } =
  cadastralDataSlicer.actions;

export default cadastralDataSlicer.reducer;
