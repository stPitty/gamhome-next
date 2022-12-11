import { WindowSize } from "../../redux/slicers/enums";
import { IOBottomMenuSingleton, IOScrollButtonSingleton } from "./IOSingleton";
import React, { RefObject } from "react";
import { AppDispatch } from "../../redux/types";
import { setMobBtnVisibility } from "../../redux/slicers/mobBtnViewSlicer";
import { getRefsArr } from "./index";

const changeVisibility =
  (dispatch: AppDispatch) => (isInteresting: boolean) => {
    dispatch(setMobBtnVisibility(isInteresting));
  };

const setIOForBottomMenu = (
  windowSize: WindowSize | null,
  currentEl: React.MutableRefObject<null>["current"],
  dispatch: AppDispatch
) => {
  if (windowSize === WindowSize.MD) {
    if (!IOBottomMenuSingleton.isRefExisting()) {
      IOBottomMenuSingleton.setRefs(currentEl);
    }
    IOBottomMenuSingleton.init(changeVisibility(dispatch));
  } else {
    changeVisibility(dispatch)(true);
    IOBottomMenuSingleton.destroy();
  }
};

const setIOForScrollBtn = (
  dispatch: AppDispatch,
  cardWithImageDarkRef: RefObject<unknown>["current"],
  mainServicesLightRef: RefObject<unknown>["current"],
  discountPartnersDarkRef: RefObject<unknown>["current"],
  webinarLightRef: RefObject<unknown>["current"]
) => {
  if (!IOScrollButtonSingleton.isRefExisting()) {
    IOScrollButtonSingleton.setRefs(
      getRefsArr(
        cardWithImageDarkRef,
        mainServicesLightRef,
        discountPartnersDarkRef,
        webinarLightRef
      )
    );
  }
  IOScrollButtonSingleton.init(dispatch);
};

export { setIOForBottomMenu, setIOForScrollBtn };
