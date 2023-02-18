import { AnyAction, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import photoPositionReducer from "./slicers/photoPositionSlicer";
import modalStateReducer from "./slicers/modalStateSlicer";
import flatDataReducer from "./slicers/flatDataSlicer";
import ownerDataReducer from "./slicers/ownerDataSlicer";
import serviceDataReducer from "./slicers/serviceDataSlicer";
import windowSizeReducer from "./slicers/windowSizeSlicer";
import sideMenuReducer from "./slicers/sideMenuSlicer";
import mobBtnViewReducer from "./slicers/mobBtnViewSlicer";
import cookiePopUpReducer from "./slicers/cookiePopUpSlicer";
import scrollTopBtnReducer from "./slicers/scrollTopBtnSlicer";
import pathNameReducer from "./slicers/pathNameSlicer";
import formDataReducer from "./slicers/formDataSlicer";
import disableSelectsReducer from "./slicers/disableSelectsSlicer";
import { parametersApi } from "./APIs/parametersApi";
import { banksApi } from "./APIs/banksApi";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const combinedReducer = combineReducers({
  [parametersApi.reducerPath]: parametersApi.reducer,
  [banksApi.reducerPath]: banksApi.reducer,
  formData: formDataReducer,
  disableSelects: disableSelectsReducer,
  position: photoPositionReducer,
  modalState: modalStateReducer,
  flatData: flatDataReducer,
  ownerData: ownerDataReducer,
  serviceData: serviceDataReducer,
  windowSize: windowSizeReducer,
  sideMenu: sideMenuReducer,
  mobBtnView: mobBtnViewReducer,
  cookiePopUp: cookiePopUpReducer,
  scrollTopBtn: scrollTopBtnReducer,
  pathName: pathNameReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<any>) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(parametersApi.middleware)
        .concat(banksApi.middleware),
  } as any);

export const wrapper = createWrapper(makeStore, { debug: true });
