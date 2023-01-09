import { Dispatch, SetStateAction } from "react";
import { WindowSize } from "../../../redux/slicers/enums";

const carouselHandler = (windowSize: WindowSize | null) => {
  if (windowSize === WindowSize.XL) {
    return {
      quantifier: 246,
      width: 1348,
    };
  }
  if (windowSize === WindowSize.LG) {
    return {
      quantifier: 218,
      width: 1409,
    };
  }
  if (windowSize === WindowSize.MD) {
    return {
      quantifier: 203,
      width: 1424,
    };
  }
  if (windowSize === WindowSize.SM || windowSize === WindowSize.XS) {
    return {
      quantifier: 208,
      width: 4160,
    };
  }
};

const handleControlClick =
  (
    type: "left" | "right",
    translate: number,
    setTranslate: Dispatch<SetStateAction<number>>,
    windowSize: WindowSize | null
  ) =>
  () => {
    const values = carouselHandler(windowSize);
    if (values) {
      if (type === "left" && translate > 0) {
        setTranslate((prev) => prev - values.quantifier);
      }
      if (type === "right" && translate < values.width) {
        setTranslate((prev) => prev + values.quantifier);
      }
    }
  };

export { carouselHandler, handleControlClick };
