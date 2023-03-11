import { Dispatch, SetStateAction } from "react";
import { WindowSize } from "../../../redux/slicers/enums";
import { Hook } from "../../../common/routes";

const handleResizeMap = (
  windowSize: WindowSize,
  setWidth: Dispatch<SetStateAction<number | undefined>>,
  setHeight: Dispatch<SetStateAction<number | undefined>>
) => {
  if (windowSize === WindowSize.XL) {
    setWidth(864);
    setHeight(448);
  }
  if (windowSize === WindowSize.LG) {
    setWidth(624);
    setHeight(385);
  }
  if (windowSize === WindowSize.MD) {
    setWidth(688);
    setHeight(416);
  }
  if (windowSize === WindowSize.SM) {
    setWidth(349);
    setHeight(297);
  }
  if (windowSize === WindowSize.XS) {
    setWidth(288);
    setHeight(297);
  }
};

const handleClickConciergeButton = (windowSize: WindowSize | null) => () => {
  const conciergeCard = document.getElementById(Hook.CONCIERGE);
  let num = 0;

  if (windowSize === WindowSize.MD) {
    num = 82;
  }
  if (windowSize === WindowSize.SM) {
    num = 58;
  }
  if (windowSize === WindowSize.XS) {
    num = 57;
  }

  const top = conciergeCard
    ? conciergeCard?.getBoundingClientRect().top - num
    : 0;
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};

export { handleResizeMap, handleClickConciergeButton };
