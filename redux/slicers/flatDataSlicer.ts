import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FlatData, TFlatState } from "./types";
import { axiosInstance } from "../../common/axios";
import {
  getSquarePrice,
  handleMoneyDataFormatter,
  handlePhoneFormatter,
} from "../../common/helpers";

export const fetchFlatData = createAsyncThunk<{ data: FlatData }, string>(
  "flatData/getFlatData",
  async function (payload: string, { rejectWithValue }) {
    try {
      return await axiosInstance.get(`adv/properties/${payload}`);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const initialState: TFlatState = {
  flatData: null,
  isLoading: true,
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
        state.flatData = data;
        state.flatData.nonFormattedPrice = data.price as number;
        state.flatData.squarePrice = getSquarePrice(
          data?.price,
          data?.parameters
        );
        state.flatData.phone = handlePhoneFormatter(data.phone);
        state.flatData.price = handleMoneyDataFormatter(data?.price);
        state.flatData.feeAmount = handleMoneyDataFormatter(data?.feeAmount);
        state.flatData.deposit = handleMoneyDataFormatter(data?.deposit);
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
