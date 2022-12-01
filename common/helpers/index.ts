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

const handleMoneyDataFormatter = (num: number | undefined | string): string => {
  if (num)
    return String(num)
      .split("")
      .reduce((previousValue, currentValue, currentIndex) => {
        if ((currentIndex + 1) % 3 === 0) {
          currentValue = " " + currentValue;
        }
        return previousValue + currentValue;
      }, "");
  return "";
};

const handlePhoneFormatter = (phone: string): string => {
  if (phone)
    return phone
      .split("")
      .reduce((previousValue, currentValue, currentIndex) => {
        if (currentIndex === 0) currentValue = "+7 ";
        if (currentIndex === 3) currentValue += " ";
        if (currentIndex === 6 || currentIndex === 8) currentValue += "-";
        return previousValue + currentValue;
      }, "");
  return "";
};

const getTimeToMetro = (dist: number | undefined) => (): string => {
  if (dist) {
    const minsToMetroMin = Math.floor(60 * Number((dist / 5).toFixed(2)));
    const minsToMetroMax = Math.floor(minsToMetroMin * 1.2);
    return `${minsToMetroMin}-${minsToMetroMax} мин. пешком`;
  }
  return "";
};

export {
  handleRedirClick,
  handleSwapImageClick,
  handleMoneyDataFormatter,
  handlePhoneFormatter,
  getTimeToMetro,
};
