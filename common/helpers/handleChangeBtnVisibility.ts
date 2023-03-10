import { Hook } from "../routes";
import { WindowSize } from "../../redux/slicers/enums";
import { setMobBtnVisibility } from "../../redux/slicers/mobBtnViewSlicer";
import { AppDispatch } from "../../redux/types";

const handleChangeBtnVisibility =
  (windowSize: WindowSize | null, dispatch: AppDispatch) => () => {
    const rowWrapper = document.getElementById(Hook.ROW_WRAPPER);

    if (
      rowWrapper &&
      windowSize !== WindowSize.XL &&
      windowSize !== WindowSize.LG
    ) {
      const offsetTop =
        rowWrapper.getBoundingClientRect().top +
        rowWrapper.getBoundingClientRect().bottom;
      const showMenu = offsetTop + 500 >= 0;
      dispatch(setMobBtnVisibility(showMenu));
    } else {
      dispatch(setMobBtnVisibility(false));
    }
  };

export { handleChangeBtnVisibility };
