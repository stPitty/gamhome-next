import { createSlice } from "@reduxjs/toolkit";
import { CheckOwnerInputFieldNames, FormActionType, TOwnerData } from "./types";
import { ownerInputFieldsNames } from "./constants";

const initialState: TOwnerData = {
  nameValue: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  bornDate: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  passSer: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  passNum: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  dateGet: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  divCode: {
    value: "",
    isSubmitFailed: false,
    isValidationError: false,
  },
  isError: false,
};

const ownerDataSlicer = createSlice({
  name: "ownerData",
  initialState,
  reducers: {
    setOwnerValue(state, action: FormActionType) {
      state[action.payload.name as CheckOwnerInputFieldNames].value = action
        .payload.value as string;
    },
    setOwnerValidationError(state, action: FormActionType) {
      state[
        action.payload.name as CheckOwnerInputFieldNames
      ].isValidationError = action.payload.value as boolean;
    },
    setOwnerSubmitError(state, action: FormActionType) {
      state[action.payload.name as CheckOwnerInputFieldNames].isSubmitFailed =
        action.payload.value as boolean;
    },
    clearOwnerOwnerData(state) {
      for (let i = 0; i < ownerInputFieldsNames.length; i++) {
        state[ownerInputFieldsNames[i]].value = "";
        state[ownerInputFieldsNames[i]].isValidationError = false;
        state[ownerInputFieldsNames[i]].isSubmitFailed = false;
        state.isError = false;
      }
    },
  },
});

export const {
  setOwnerValue,
  setOwnerValidationError,
  setOwnerSubmitError,
  clearOwnerOwnerData,
} = ownerDataSlicer.actions;

export default ownerDataSlicer.reducer;
