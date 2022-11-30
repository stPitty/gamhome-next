import { Route } from "../routes";
import { NextRouter } from "next/router";
import { decrement, increment } from "../../redux/slicers/photoPositionSlicer";
import { AppDispatch } from "../../redux/types";

const handleRedirClick = (router: NextRouter, path: string) => () => {
  router.push(path);
};

const handleSwapImageClick =
  (
    orientation: "left" | "right",
    dispatch: AppDispatch,
    length: number | undefined
  ) =>
  () => {
    switch (orientation) {
      case "left":
        dispatch(decrement());
        break;
      case "right":
        if (length) dispatch(increment(length));
        break;
    }
  };

const handleMoneyDataFormatter = (num: number | undefined) => () => {
  if (num)
    return String(num)
      .split("")
      .reduce((previousValue, currentValue, currentIndex) => {
        if ((currentIndex + 1) % 3 === 0) {
          currentValue = " " + currentValue;
        }
        return previousValue + currentValue;
      }, "");
};

export { handleRedirClick, handleSwapImageClick, handleMoneyDataFormatter };
