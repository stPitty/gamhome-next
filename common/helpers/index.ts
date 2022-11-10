import { Route } from "../routes";
import { NextRouter } from "next/router";
import { decrement, increment } from "../../redux/slicers/photoPositionSlicer";
import { AppDispatch } from "../../redux/types";
import { photos } from "../../mock";

const handleRedirClick = (router: NextRouter, path: Route) => () => {
  router.push(path);
};

const handleSwapImageClick =
  (orientation: "left" | "right", dispatch: AppDispatch) => () => {
    switch (orientation) {
      case "left":
        dispatch(decrement());
        break;
      case "right":
        dispatch(increment(photos.length));
        break;
    }
  };

export { handleRedirClick, handleSwapImageClick };
