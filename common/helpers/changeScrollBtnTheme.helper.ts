import { MutableRefObject, RefObject } from "react";

abstract class IOHandler {
  public static refs:
    | MutableRefObject<null>[]
    | RefObject<unknown>[]
    | undefined;
  public static observers: IntersectionObserver[] = [];

  static setRefs(...refs: MutableRefObject<null>[] | RefObject<unknown>[]) {
    if (this.refs) {
      return;
    }
    this.refs = [...refs];
    return this;
  }

  static init(callback: (isIntersecting: boolean) => void) {
    if (this.refs)
      for (let i = 0; i < this.refs.length; i++) {
        this.observers.push(
          new IntersectionObserver((target) => {
            target.forEach((el) => {
              callback(el.isIntersecting);
              console.log(el.isIntersecting);
            });
          })
        );
        this.observers[i].observe(this.refs[i].current as unknown as Element);
      }
  }

  static destroy() {
    if (this.observers.length !== 0 && this.refs) {
      for (let i = 0; i < this.refs.length; i++) {
        this.observers[i].unobserve(this.refs[i].current as unknown as Element);
      }
    }
  }
}

class BottomMenuSingleton extends IOHandler {}

export { BottomMenuSingleton };
