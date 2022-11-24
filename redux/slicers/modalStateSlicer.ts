import { createSlice } from "@reduxjs/toolkit";
import { TModalState } from "./types";
import { ModalState } from "./enums";

const initialState: TModalState = {
  currentState: null,
  isOpened: false,
};

const modalStateSlicer = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    openBuyCheckListInformation(state) {
      state.currentState = ModalState.CHECK_LISTS_INFORMATION;
      state.isOpened = true;
    },
    openBuyCheckListWithEmail(state) {
      state.currentState = ModalState.CHECK_LISTS_ENTER_EMAIL;
      if (!state.isOpened) state.isOpened = true;
    },
    thanksForBuy(state) {
      state.currentState = ModalState.THANKS_FOR_BUY;
    },
    openFreeDocsWithEmail(state) {
      state.currentState = ModalState.FREE_DOCS_BAG_ENTER_EMAIL;
      if (!state.isOpened) state.isOpened = true;
    },
    openFreeDocsInformation(state) {
      state.currentState = ModalState.FREE_DOCS_BAG_INFORMATION;
      state.isOpened = true;
    },
    docsSent(state) {
      state.currentState = ModalState.DOCS_SENT;
    },
    closeModal(state) {
      state.currentState = null;
      state.isOpened = false;
    },
  },
});

export const {
  openBuyCheckListInformation,
  openBuyCheckListWithEmail,
  openFreeDocsInformation,
  openFreeDocsWithEmail,
  docsSent,
  thanksForBuy,
  closeModal,
} = modalStateSlicer.actions;

export default modalStateSlicer.reducer;
