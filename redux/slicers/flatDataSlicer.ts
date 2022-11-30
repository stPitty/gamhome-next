import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TFlatState } from "./types";
import { axiosInstance } from "../../common/axios";

export const fetchFlatData = createAsyncThunk<
  { data: TFlatState["flatData"] },
  string
>(
  "flatData/getFlatData",
  async function (payload: string, { rejectWithValue }) {
    try {
      return await axiosInstance.get(`adv/properties/${payload}`);
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const initialState: TFlatState = {
  flatData: null,
  isLoading: false,
  isError: false,
};

const flatDataSlicer = createSlice({
  name: "flatData",
  initialState,
  reducers: {
    clearFlatData(state) {
      state.flatData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlatData.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchFlatData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.flatData = action.payload.data;
      })
      .addCase(fetchFlatData.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        console.error(action.payload);
      });
  },
});

export const { clearFlatData } = flatDataSlicer.actions;

export default flatDataSlicer.reducer;
