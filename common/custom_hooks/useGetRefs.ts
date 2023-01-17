import { createRef } from "react";
import { Refs } from "../form_utils/types";
import { ParamType, RefType } from "../form_utils/enums";

const useGetRefs = (arr: Refs["refs"], type: any, paramType?: any): Refs => {
  const refs = arr.reduce((previousValue: Refs["refs"], currentValue) => {
    if (currentValue) {
      currentValue.ref = createRef();
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);

  return {
    refs,
    type,
    paramType,
  };
};

export { useGetRefs };
