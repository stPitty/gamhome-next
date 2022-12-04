import { TModalState } from "../../../redux/slicers/types";
import { ModalBodyData } from "./types";
import { AppDispatch } from "../../../redux/types";
import { Dispatch, SetStateAction } from "react";

const reduxStateHandler = (
  currentState: TModalState["currentState"],
  modalData: ModalBodyData,
  reduxState: any,
  dispatch: AppDispatch
) => {
  let rejectSubmit = false;
  for (let i = 0; i < modalData[currentState!].fieldNames!.length; i++) {
    if (
      reduxState[modalData[currentState!].stateName!][
        modalData[currentState!].fieldNames![i]
      ].value.length === 0
    ) {
      dispatch(
        modalData[currentState!].setSubmitErrorAction!({
          value: true,
          name: modalData[currentState!].fieldNames![i],
        })
      );
      rejectSubmit = true;
    }
    if (
      reduxState[modalData[currentState!].stateName!][
        modalData[currentState!].fieldNames![i]
      ].isValidationError
    ) {
      rejectSubmit = true;
    }
  }
  if (!rejectSubmit) {
    dispatch(modalData[currentState!].nextStateBtnAction!());
    dispatch(modalData[currentState!].clearAction!());
  }
};

const reactStateHandler = (
  currentState: TModalState["currentState"],
  modalData: ModalBodyData,
  dispatch: AppDispatch,
  isValidationError: boolean,
  setInputValue: Dispatch<SetStateAction<string>>,
  inputValue: string,
  setIsSubmitFailed: Dispatch<SetStateAction<boolean>>
) => {
  if (
    modalData[currentState!].modalType !== "withInput" &&
    !isValidationError
  ) {
    dispatch(modalData[currentState!].nextStateBtnAction!());
    setInputValue("");
    return;
  }
  if (inputValue.length === 0) {
    setIsSubmitFailed(true);
    return;
  } else if (
    modalData[currentState!].modalType === "withInput" &&
    !isValidationError
  ) {
    dispatch(modalData[currentState!].nextStateBtnAction!());
    setInputValue("");
  }
};

const handleChangeStateClick =
  (
    currentState: TModalState["currentState"],
    modalData: ModalBodyData,
    reduxState: any,
    dispatch: AppDispatch,
    isValidationError: boolean,
    setInputValue: Dispatch<SetStateAction<string>>,
    inputValue: string,
    setIsSubmitFailed: Dispatch<SetStateAction<boolean>>
  ) =>
  () => {
    if (currentState !== null && modalData[currentState].withMultiInputs) {
      reduxStateHandler(currentState, modalData, reduxState, dispatch);
    } else if (
      currentState !== null &&
      !modalData[currentState].withMultiInputs
    ) {
      reactStateHandler(
        currentState,
        modalData,
        dispatch,
        isValidationError,
        setInputValue,
        inputValue,
        setIsSubmitFailed
      );
    }
  };

export { handleChangeStateClick };
