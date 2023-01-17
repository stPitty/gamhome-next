import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { City, FieldAction, TFormData } from "./types";
import {
  handleClearData,
  handleErrorFetch,
  handleNumFormat,
  handlePendingFetch,
  handleSetComplexField,
  handleSetParamInput,
  handleSetPrimitiveField,
} from "./helpers";
import { axiosInstance } from "../../common/axios";

export const fetchCitiesData = createAsyncThunk<{ data: City[] }>(
  "formData/fetchCitiesData",
  async function (_, { rejectWithValue }) {
    try {
      return await axiosInstance.get(`adv/regions`);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const initialState: TFormData = {
  citiesData: null,
  data: {
    lastFloor: null,
    minYear: "",
    maxYear: "",
    city: {
      name: "",
      id: null,
    },
    metros: [],
    districts: [],
    polygon: null,
    category: 2,
    type: 2,
    minPrice: "10 000 000",
    maxPrice: "15 000 000",
    minKmMetro: "1",
    maxKmMetro: "5",
    fee: true,
    params: {
      repair: null,
      wallMaterial: null,
      houseType: null,
      minFloorsInHouse: "",
      maxFloorsInHouse: "",
      minKitchenSquare: "",
      maxKitchenSquare: "",
      minSquare: "",
      maxSquare: "",
      roomsQuantity: null,
      minFloor: "",
      maxFloor: "",
      minLivingSquare: "",
      maxLivingSquare: "",
      minDeliveryTime: "",
      maxDeliveryTime: "",
      minHouseSquare: "",
      maxHouseSquare: "",
      minLandSquare: "",
      maxLandSquare: "",
      roomsInFlatQuantity: null,
      minRoomSquare: "",
      maxRoomSquare: "",
      dealType: "",
      objType: "",
    },
  },
  isError: false,
  isLoading: false,
};

const formDataSlicer = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setPrimitiveField(state, action: FieldAction) {
      handleSetPrimitiveField(state, action);
    },
    setComplexField(state, action: FieldAction) {
      handleSetComplexField(state, action);
    },
    setParamInput(state, action: FieldAction) {
      handleSetParamInput(state, action);
    },
    clearFormData(state) {
      handleClearData(state);
    },
    setFormData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitiesData.pending, (state) => {
        handlePendingFetch(state);
      })
      .addCase(fetchCitiesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.citiesData = action.payload.data;
      })
      .addCase(fetchCitiesData.rejected, (state, action) => {
        handleErrorFetch(state, action as any);
      });
  },
});

export const {
  setPrimitiveField,
  setComplexField,
  clearFormData,
  setParamInput,
  setFormData,
} = formDataSlicer.actions;

export default formDataSlicer.reducer;
