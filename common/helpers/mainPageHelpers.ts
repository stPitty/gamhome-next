import { WindowSize } from "../../redux/slicers/enums";
import { IOBottomMenuSingleton, IOScrollButtonSingleton } from "./IOSingleton";
import React, { RefObject } from "react";
import { AppDispatch } from "../../redux/types";
import { setMobBtnVisibility } from "../../redux/slicers/mobBtnViewSlicer";
import { getRefsArr, getRefsArrBuy } from "./index";

const changeVisibility =
  (dispatch: AppDispatch) => (isInteresting: boolean) => {
    dispatch(setMobBtnVisibility(isInteresting));
  };

const setIOForBottomMenu = (
  windowSize: WindowSize | null,
  currentEl: any,
  dispatch: AppDispatch
) => {
  if (
    windowSize === WindowSize.MD ||
    windowSize === WindowSize.SM ||
    windowSize === WindowSize.XS
  ) {
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
  cardWithImageDarkRef: RefObject<HTMLDivElement>["current"],
  mainServicesLightRef: RefObject<HTMLDivElement>["current"],
  discountPartnersDarkRef: RefObject<HTMLDivElement>["current"],
  webinarLightRef: RefObject<HTMLDivElement>["current"]
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

const setIOForScrollBtnBuy = (
  dispatch: AppDispatch,
  discountPartnersDarkRef: RefObject<HTMLDivElement>["current"],
  webinarLightRef: RefObject<HTMLDivElement>["current"]
) => {
  if (!IOScrollButtonSingleton.isRefExisting()) {
    IOScrollButtonSingleton.setRefs(
      getRefsArrBuy(discountPartnersDarkRef, webinarLightRef)
    );
  }
  IOScrollButtonSingleton.init(dispatch);
};

export { setIOForBottomMenu, setIOForScrollBtn };
