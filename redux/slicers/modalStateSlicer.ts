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
      if (!state.isOpened) state.isOpened = true;
    },
    errorWithApplying(state) {
      state.currentState = ModalState.ERROR_APPLYING;
      if (!state.isOpened) state.isOpened = true;
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
    conciergeServiceRent(state) {
      state.currentState = ModalState.CONCIERGE_SERVICE_RENT;
      state.isOpened = true;
    },
    conciergeServiceBuy(state) {
      state.currentState = ModalState.CONCIERGE_SERVICE_BUY;
      state.isOpened = true;
    },
    keySearchRent(state) {
      state.currentState = ModalState.KEY_SEARCH_RENT;
      state.isOpened = true;
    },
    keySearchBuy(state) {
      state.currentState = ModalState.KEY_SEARCH_BUY;
      state.isOpened = true;
    },
    thanksForOrder(state) {
      state.currentState = ModalState.THANKS_FOR_ORDER;
      if (!state.isOpened) state.isOpened = true;
    },
    thanksForOrder2(state) {
      state.currentState = ModalState.THANKS_FOR_ORDER_2;
    },
    informationSent(state) {
      state.currentState = ModalState.INFORMATION_SENT;
    },
    contactManager(state) {
      state.currentState = ModalState.CONTACT_MANAGER;
      state.isOpened = true;
    },
    propertyEval(state) {
      state.currentState = ModalState.PROPERTY_EVAL;
      state.isOpened = true;
    },
    insurance(state) {
      state.currentState = ModalState.INSURANCE;
      state.isOpened = true;
    },
    typeDeal(state) {
      state.currentState = ModalState.TYPE_DEAL;
      state.isOpened = true;
    },
    law(state) {
      state.currentState = ModalState.LAW;
      state.isOpened = true;
    },
    dealFollowing(state) {
      state.currentState = ModalState.DEAL_FOLLOWING;
      state.isOpened = true;
    },
    makeDeclarations(state) {
      state.currentState = ModalState.MAKE_DECLARATION;
      state.isOpened = true;
    },
    makeDealInfo(state) {
      state.currentState = ModalState.MAKE_DEAL_INFO;
      state.isOpened = true;
    },
    taxConsult(state) {
      state.currentState = ModalState.TAX_CONSULT;
      state.isOpened = true;
    },
    makeDeal(state) {
      state.currentState = ModalState.MAKE_DEAL;
      if (!state.isOpened) state.isOpened = true;
    },
    freeConsult(state) {
      state.currentState = ModalState.FREE_CONSULTATION;
      state.isOpened = true;
    },
    followingDeal(state) {
      state.currentState = ModalState.FOLLOWING_DEAL;
      if (!state.isOpened) state.isOpened = true;
    },
    sellOrChange(state) {
      state.currentState = ModalState.SELL_OR_CHANGE;
      if (!state.isOpened) state.isOpened = true;
    },
    agentDeal(state) {
      state.currentState = ModalState.AGENT_DEAL;
      if (!state.isOpened) state.isOpened = true;
    },
    underKey(state) {
      state.currentState = ModalState.UNDER_KEY;
      if (!state.isOpened) state.isOpened = true;
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
  errorWithApplying,
  checkObjInputEmail,
  checkObjInputNum,
  informationSent,
  checkOwnerInputInfo,
  checkOwnerInputEmail,
  wantToLendFlat,
  agentForContract,
  conciergeServiceRent,
  conciergeServiceBuy,
  keySearchBuy,
  keySearchRent,
  thanksForOrder,
  contactManager,
  thanksForOrder2,
  propertyEval,
  insurance,
  typeDeal,
  law,
  dealFollowing,
  makeDeclarations,
  makeDealInfo,
  makeDeal,
  taxConsult,
  freeConsult,
  followingDeal,
  sellOrChange,
  agentDeal,
  underKey,
} = modalStateSlicer.actions;

export default modalStateSlicer.reducer;
