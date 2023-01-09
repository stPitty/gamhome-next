import { NextRouter } from "next/router";
import { decrement, increment } from "../../redux/slicers/photoPositionSlicer";
import { AppDispatch } from "../../redux/types";
import { FlatData, Parameter, TFlatState } from "../../redux/slicers/types";
import { regexpList } from "./constants";
import { fetchFlatData } from "../../redux/slicers/flatDataSlicer";
import { WindowSize } from "../../redux/slicers/enums";
import { Dispatch, RefObject, SetStateAction } from "react";
import { ObservableRefAttrs } from "../types";
import { Route } from "../routes";

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

const handleMoneyDataFormatter = (num: string | number): string => {
  if (num) {
    return String(num)
      .split("")
      .reduce((previousValue, currentValue, currentIndex, array) => {
        if (array.length > 3) {
          currentValue =
            currentIndex === (array.length - 1) % 3 ||
            currentIndex === (array.length - 4) % 6
              ? (currentValue += " ")
              : currentValue;
        }
        return previousValue + currentValue;
      }, "");
  }
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
      .filter((el) => {
        return !(
          el.parameterId !== 16 && /этажей в доме/gi.test(el.parameter.name)
        );
      })
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
    squarePrice: string | undefined,
    fee: boolean | undefined,
    feeAmount: number | string | undefined,
    pathName: Route | null
  ) =>
  () => {
    if (pathName === Route.RENT && price) {
      return `Залог ${price} ₽, ${
        fee && "комиссия " + feeAmount + " ₽,"
      } предоплата за 1 месяц, от года`;
    }
    if (pathName === Route.BUY && squarePrice) {
      return `${squarePrice} ₽/м²`;
    }
    return "";
  };

const SortByPriority = (windowSize: WindowSize | null, arr: any[]) => () => {
  if (windowSize === WindowSize.XL) {
    return arr.sort((a, b) => a.xlPriority - b.xlPriority);
  }
  if (windowSize === WindowSize.LG) {
    return arr.sort((a, b) => a.lgPriority - b.lgPriority);
  }
  if (windowSize === WindowSize.MD) {
    return arr.sort((a, b) => a.mdPriority - b.mdPriority);
  }
  if (windowSize === WindowSize.SM) {
    return arr.sort((a, b) => a.smPriority - b.smPriority);
  }
  if (windowSize === WindowSize.XS) {
    return arr.sort((a, b) => a.xsPriority - b.xsPriority);
  }
  return arr;
};

const handleShowNumberClick =
  (
    showNumber: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setShowNumber: Dispatch<SetStateAction<boolean>>
  ) =>
  () => {
    if (!showNumber) {
      setLoading(true);
      setTimeout(() => {
        setShowNumber(true);
        setLoading(false);
      }, 500);
    }
  };

const getRefsArr = (
  cardWithImageDarkRef: RefObject<unknown>["current"],
  mainServicesLightRef: RefObject<unknown>["current"],
  discountPartnersDarkRef: RefObject<unknown>["current"],
  webinarLightRef: RefObject<unknown>["current"]
): ObservableRefAttrs[] => {
  return [
    {
      ref: cardWithImageDarkRef,
      name: "cardWithImage",
    },
    {
      ref: mainServicesLightRef,
      name: "mainServices",
    },
    {
      ref: discountPartnersDarkRef,
      name: "discountPartners",
    },
    {
      ref: webinarLightRef,
      name: "webinar",
    },
  ];
};

const getSquarePrice = (genPrice: number | string, params: Parameter[]) => {
  const value = params.find(
    (el) =>
      el.parameterId === 15 ||
      el.parameterId === 42 ||
      el.parameterId === 4 ||
      el.parameterId === 12
  );
  if (value?.value && typeof genPrice === "string") {
    return handleMoneyDataFormatter(
      Math.floor(Number.parseInt(genPrice) / Number.parseInt(value.value))
    );
  }
  return "";
};

const handleFormatValue = (
  value: string,
  minNum: number | undefined,
  maxNum: number | undefined
): number | string | null => {
  const newValue = value
    .split("")
    .filter((el) => el !== " " && !/^\D$/gi.test(el))
    .join("");
  const numValue = newValue === "" ? 0 : Number.parseInt(newValue);
  if (minNum && numValue < minNum) {
    return minNum;
  }
  if (maxNum && numValue > maxNum) {
    return maxNum;
  }
  return numValue;
};

const handleGetYears = (num: string) => {
  if (num === "1" || num === "21" || num === "") {
    return " год";
  }
  if (
    num === "2" ||
    num === "3" ||
    num === "4" ||
    num === "22" ||
    num === "23" ||
    num === "24"
  ) {
    return " года";
  }
  return " лет";
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
  SortByPriority,
  handleShowNumberClick,
  getRefsArr,
  getSquarePrice,
  handleFormatValue,
  handleGetYears,
};
