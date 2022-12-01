import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FlatData, TFlatState } from "./types";
import { axiosInstance } from "../../common/axios";
import {
  handleMoneyDataFormatter,
  handlePhoneFormatter,
} from "../../common/helpers";

export const fetchFlatData = createAsyncThunk<{ data: FlatData }, string>(
  "flatData/getFlatData",
  async function (payload: string, { rejectWithValue }) {
    try {
      return await axiosInstance.get(`adv/properties/${payload}`);
    } catch (error: any) {
      return rejectWithValue(error.response);
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
        const data = action.payload.data;
        const priceStr = handleMoneyDataFormatter(data?.price);
        const formattedPhone = handlePhoneFormatter(data.phone);
        state.flatData = data;
        state.flatData.phone = formattedPhone;
        state.flatData.price = priceStr as string;
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
