import { WindowSize } from "../../../../redux/slicers/enums";
const handleEmblaSelect =
  (emblaApi: any, windowSize: WindowSize | null) => () => {
    const selectedIndex = emblaApi?.selectedScrollSnap() ?? 0;
    const slides = emblaApi?.slideNodes() ?? [];

    const quantifier = windowSize === WindowSize.LG ? 1 : 0;

    for (let i = 0; i < slides.length; i++) {
      if (selectedIndex !== 0) {
        (slides?.[i]?.firstChild as Element)?.classList.add("moved");
      } else {
        (slides?.[i]?.firstChild as Element)?.classList.remove("moved");
      }

      if (
        windowSize === WindowSize.LG &&
        (selectedIndex === 9 || selectedIndex === 1)
      ) {
        (slides?.[i]?.firstChild as Element)?.classList.remove("moved");
      }

      if (i === selectedIndex + quantifier) {
        (slides?.[i]?.firstChild as Element)?.classList.add("selected");
        continue;
      }
      (slides[i]?.firstChild as Element)?.classList.remove("selected");
    }
    if (selectedIndex === 9 && quantifier) {
      (slides?.[0]?.firstChild as Element)?.classList.add("selected");
    }
  };

const handleLeftBtnClick = (emblaApi: any) => () => {
  emblaApi?.scrollPrev();
};

const handleRightBtnClick = (emblaApi: any) => () => {
  emblaApi?.scrollNext();
};

export { handleEmblaSelect, handleRightBtnClick, handleLeftBtnClick };
