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
    errorWithDocs(state) {
      state.currentState = ModalState.ERROR_WITH_DOCS_POST;
    },
    checkObjInputNum(state) {
      state.currentState = ModalState.CHECK_OBJ_INPUT_NUM;
      state.isOpened = true;
    },
    checkObjInputEmail(state) {
      state.currentState = ModalState.CHECK_OBJ_INPUT_EMAIL;
    },
    checkOwnerInputInfo(state) {
      state.currentState = ModalState.CHECK_OWNER_INPUT_INFO;
      state.isOpened = true;
    },
    checkOwnerInputEmail(state) {
      state.currentState = ModalState.CHECK_OWNER_INPUT_EMAIL;
    },
    wantToLendFlat(state) {
      state.currentState = ModalState.WANT_TO_LEND_FLAT;
      state.isOpened = true;
    },
    agentForContract(state) {
      state.currentState = ModalState.AGENT_FOR_CONTRACT;
      state.isOpened = true;
    },
    conciergeService(state) {
      state.currentState = ModalState.CONCIERGE_SERVICE;
      state.isOpened = true;
    },
    keySearch(state) {
      state.currentState = ModalState.KEY_SEARCH;
      state.isOpened = true;
    },
    thanksForOrder(state) {
      state.currentState = ModalState.THANKS_FOR_ORDER;
    },
    informationSent(state) {
      state.currentState = ModalState.INFORMATION_SENT;
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
  errorWithDocs,
  checkObjInputEmail,
  checkObjInputNum,
  informationSent,
  checkOwnerInputInfo,
  checkOwnerInputEmail,
  wantToLendFlat,
  agentForContract,
  conciergeService,
  keySearch,
  thanksForOrder,
} = modalStateSlicer.actions;

export default modalStateSlicer.reducer;
