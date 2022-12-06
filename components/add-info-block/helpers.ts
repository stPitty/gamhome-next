import { Dispatch, SetStateAction } from "react";

const handleResizeMap = (
  width: number,
  setWidth: Dispatch<SetStateAction<number | undefined>>,
  setHeight: Dispatch<SetStateAction<number | undefined>>
) => {
  if (window.innerWidth >= 1440) {
    setWidth(864);
    setHeight(448);
  }
  if (window.innerWidth < 1440 && window.innerWidth >= 1024) {
    setWidth(624);
    setHeight(385);
  }
};

export { handleResizeMap };
