import { createSlice } from "@reduxjs/toolkit";
import { FormActionType, ServiceInputFieldNames, TServiceData } from "./types";
import { serviceInputFieldsNames } from "./constants";
import ownerDataSlicer from "./ownerDataSlicer";

const initialState: TServiceData = {
  name: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  phone: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  city: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  isError: false,
};

const serviceDataSlicer = createSlice({
  name: "serviceData",
  initialState,
  reducers: {
    setServiceValue(state, action: FormActionType) {
      state[action.payload.name as ServiceInputFieldNames].value = action
        .payload.value as string;
    },
    setServiceValidationError(state, action: FormActionType) {
      state[action.payload.name as ServiceInputFieldNames].isValidationError =
        action.payload.value as boolean;
    },
    setServiceSubmitError(state, action: FormActionType) {
      state[action.payload.name as ServiceInputFieldNames].isSubmitFailed =
        action.payload.value as boolean;
    },
    clearServiceData(state) {
      for (let i = 0; i < serviceInputFieldsNames.length; i++) {
        state[serviceInputFieldsNames[i]].value = "";
        state[serviceInputFieldsNames[i]].isValidationError = false;
        state[serviceInputFieldsNames[i]].isSubmitFailed = false;
        state.isError = false;
      }
    },
  },
});

export const {
  setServiceValue,
  setServiceValidationError,
  setServiceSubmitError,
  clearServiceData,
} = serviceDataSlicer.actions;

export default serviceDataSlicer.reducer;
