import { Hook } from "../routes";
import { WindowSize } from "../../redux/slicers/enums";
import { setScrollBtnTheme } from "../../redux/slicers/scrollTopBtnSlicer";
import { AppDispatch } from "../../redux/types";

const handleChangeScrollBtnTheme =
  (windowSize: WindowSize | null, dispatch: AppDispatch) => () => {
    const scrollBtn = document.getElementById(Hook.SCROLL_TOP_BTN);
    const cardWithImage = document.getElementById(Hook.CARD_WITH_IMG);
    const partners = document.getElementById(Hook.PARTNERS);

    const deliveryContent = document.getElementById(Hook.DELIVERY_CONTENT);
    const cleaningContent = document.getElementById(Hook.CLEANING_CONTENT);

    const cardWithImageQuantifier = windowSize === WindowSize.MD ? 72 : 90;

    const partnersQuantifierTop = windowSize === WindowSize.MD ? 72 : 90;
    const partnersQuantifierBottom = windowSize === WindowSize.MD ? 104 : 116;

    let lightCardWithImage;
    let lightPartners;

    let darkDelivery;
    let darkCleaning;

    try {
      if (scrollBtn && scrollBtn.getClientRects()[0]) {
        if (cardWithImage) {
          lightCardWithImage =
            scrollBtn?.getClientRects()[0].bottom <=
              cardWithImage?.getClientRects()[0].bottom + 24 &&
            scrollBtn?.getClientRects()[0].top >=
              cardWithImage?.getClientRects()[0].top + cardWithImageQuantifier;
        }

        if (partners) {
          lightPartners =
            scrollBtn?.getClientRects()[0].bottom <=
              partners?.getClientRects()[0].bottom + partnersQuantifierBottom &&
            scrollBtn?.getClientRects()[0].top >=
              partners?.getClientRects()[0].top + partnersQuantifierTop;
        }

        if (windowSize === WindowSize.MD) {
          if (deliveryContent) {
            darkDelivery =
              scrollBtn?.getClientRects()[0].bottom <=
                deliveryContent?.getClientRects()[0].bottom + 64 &&
              scrollBtn?.getClientRects()[0].top >=
                deliveryContent?.getClientRects()[0].top - 64;
          }

          if (cleaningContent) {
            darkCleaning =
              scrollBtn?.getClientRects()[0].bottom <=
                cleaningContent?.getClientRects()[0].bottom + 64 &&
              scrollBtn?.getClientRects()[0].top >=
                cleaningContent?.getClientRects()[0].top - 64;
          }
        }
        dispatch(
          setScrollBtnTheme(
            !(lightCardWithImage || lightPartners) ||
              darkDelivery ||
              darkCleaning
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

export { handleChangeScrollBtnTheme };
