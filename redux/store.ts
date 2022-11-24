import { AnyAction, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import photoPositionReducer from "./slicers/photoPositionSlicer";
import modalStateReducer from "./slicers/modalStateSlicer";

const combinedReducer = combineReducers({
  position: photoPositionReducer,
  modalState: modalStateReducer,
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
  } as any);

export const wrapper = createWrapper(makeStore, { debug: true });
