import { Route } from "../routes";
import { NextRouter } from "next/router";
import { decrement, increment } from "../../redux/slicers/photoPositionSlicer";
import { AppDispatch } from "../../redux/types";
import { FlatData, Parameter, TFlatState } from "../../redux/slicers/types";
import { regexpList } from "./constants";
import { fetchFlatData } from "../../redux/slicers/flatDataSlicer";
import { useMemo } from "react";

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

const sortMainFlatParams = (arr: FlatData["parameters"] | undefined) => () => {
  if (arr) {
    let newArr: (Parameter & { priority?: number })[] = structuredClone(arr);

    const floors = newArr.find((el) =>
      /этажей в доме/gi.test(el.parameter.name)
    );

    for (let i = 0; i < newArr.length; i++) {
      let isOther = true;
      for (let j = 0; j < regexpList.length; j++) {
        if (regexpList[j].regexp.test(newArr[i].parameter.name)) {
          newArr[i].priority = regexpList[j].priority;
          isOther = false;
          break;
        }
      }
      if (/^этаж$/gi.test(newArr[i].parameter.name)) {
        newArr[i].value = `этаж ${newArr[i].value} из ${floors?.value}`;
      }
      if (
        /площадь/gi.test(newArr[i].parameter.name) &&
        !newArr[i].value.includes("м²")
      ) {
        newArr[i].value += " м²";
      }
      if (isOther) newArr[i].priority = 100;
    }

    newArr = newArr
      .filter((el) => !/этажей в доме/gi.test(el.parameter.name))
      .sort((a, b) => (a.priority as number) - (b.priority as number));

    return newArr;
  }
  return [];
};

const handleGetFlatData = (
  router: NextRouter,
  flatData: TFlatState["flatData"] | null,
  dispatch: AppDispatch
) => {
  if (router.query.id && flatData === null) {
    dispatch(fetchFlatData(router.query.id as string));
  }
};

const handleGetSubHeader =
  (
    price: number | string | undefined,
    fee: boolean | undefined,
    feeAmount: number | string | undefined
  ) =>
  () => {
    if (price) {
      return `Залог ${price} ₽, ${
        fee && "комиссия " + feeAmount + " ₽,"
      } предоплата за 1 месяц, от года`;
    }
    return "";
  };

export {
  handleRedirClick,
  handleSwapImageClick,
  handleMoneyDataFormatter,
  handlePhoneFormatter,
  getTimeToMetro,
  sortMainFlatParams,
  handleGetFlatData,
  handleGetSubHeader,
};
