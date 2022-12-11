import { ObservableElementsNames, ObservableRefAttrs } from "../types";
import { MutableRefObject, RefObject } from "react";
import { AppDispatch } from "../../redux/types";
import {
  setScrollBtnDark,
  setScrollBtnLight,
} from "../../redux/slicers/scrollTopBtnSlicer";

type Ref = MutableRefObject<null>["current"] | ObservableRefAttrs[] | undefined;

abstract class IOSingletonConstructor {
  protected static ref: Ref;
  protected static observer: IntersectionObserver[] | IntersectionObserver;

  static setRefs(ref: Ref): void {}

  static isRefExisting() {
    return !!this.ref;
  }

  static init(
    callback?: (isInteresting: boolean) => void,
    dispatch?: AppDispatch
  ): void {}

  static destroy(): void {}
}

class IOBottomMenuSingleton extends IOSingletonConstructor {
  static ref: MutableRefObject<null>["current"];
  static observer: IntersectionObserver;

  static setRefs(ref: MutableRefObject<null>["current"]) {
    if (this.ref) {
      return;
    }
    this.ref = ref;
  }

  static init(callback: (isInteresting: boolean) => void) {
    if (this.ref) {
      this.observer = new IntersectionObserver((target) => {
        target.forEach((el) => {
          callback(el.isIntersecting);
        });
      });

      this.observer.observe(this.ref as unknown as Element);
    }
  }

  static destroy() {
    if (this.observer && this.ref) {
      this.observer.unobserve(this.ref as unknown as Element);
    }
  }
}

class IOScrollButtonSingleton extends IOSingletonConstructor {
  static ref: ObservableRefAttrs[];
  static observer: IntersectionObserver[] = [];

  private static visibleElements: Record<ObservableElementsNames, boolean> = {
    cardWithImage: false,
    mainServices: false,
    discountPartners: false,
    webinar: false,
  };

  static setRefs(ref: ObservableRefAttrs[]) {
    if (this.ref) {
      return;
    }
    this.ref = ref;
  }

  private static changeVisibility(dispatch: AppDispatch) {
    let lightTheme = true;
    const keys: ObservableElementsNames[] = Object.keys(
      this.visibleElements
    ) as ObservableElementsNames[];

    for (let i = 0; i < keys.length; i++) {
      if (this.visibleElements[keys[i]]) {
        if (keys[i] === "cardWithImage") {
          lightTheme = false;
          continue;
        }
        if (keys[i] === "mainServices") {
          lightTheme = true;
          continue;
        }
        if (keys[i] === "discountPartners") {
          lightTheme = false;
          continue;
        }
        if (keys[i] === "webinar") {
          lightTheme = true;
        }
      }
    }

    if (lightTheme) {
      dispatch(setScrollBtnLight());
    } else {
      dispatch(setScrollBtnDark());
    }
  }

  static init(dispatch: AppDispatch) {
    if (this.ref) {
      for (let i = 0; i < this.ref.length; i++) {
        this.observer.push(
          new IntersectionObserver((target) => {
            target.forEach((el) => {
              this.visibleElements[this.ref[i].name!] = el.isIntersecting;
              this.changeVisibility(dispatch);
            });
          })
        );
        this.observer[i].observe(this.ref[i].ref as unknown as Element);
      }
    }
  }

  static destroy() {
    if (this.observer && this.ref) {
      for (let i = 0; i < this.ref.length; i++) {
        this.observer[i].unobserve(this.ref[i].ref! as unknown as Element);
      }
    }
  }
}

export { IOBottomMenuSingleton, IOScrollButtonSingleton };
