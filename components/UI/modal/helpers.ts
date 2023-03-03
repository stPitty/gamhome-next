import { TModalState } from "../../../redux/slicers/types";
import { CrmReqBody, Deal, ModalBodyData } from "./types";
import { AppDispatch } from "../../../redux/types";
import { Dispatch, SetStateAction } from "react";
import {
  errorWithApplying,
  errorWithDocs,
} from "../../../redux/slicers/modalStateSlicer";
import { NextRouter } from "next/router";

const reduxStateHandler = async (
  currentState: TModalState["currentState"],
  modalData: ModalBodyData,
  reduxState: any,
  dispatch: AppDispatch,
  handleSendData: (arg: CrmReqBody) => void
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
    if (modalData[currentState!].isCrmDeal) {
      const data: CrmReqBody = {
        deal: {
          pipelineId: modalData[currentState!].pipelineId!,
        },
        contact: {},
      };

      if (modalData[currentState!].price) {
        data.deal.price = String(modalData[currentState!].price);
      }

      if (reduxState.flatData?.flatData?.id) {
        data.deal.propertyId = reduxState.flatData?.flatData?.id;
      }

      if (reduxState[modalData[currentState!].stateName!]?.city?.value) {
        data.deal.city =
          reduxState[modalData[currentState!].stateName!]?.city?.value;
      }

      if (reduxState[modalData[currentState!].stateName!]?.email?.value) {
        data.contact.email =
          reduxState[modalData[currentState!].stateName!]?.email?.value;
      }

      if (reduxState[modalData[currentState!].stateName!]?.phone?.value) {
        data.contact.phone =
          reduxState[modalData[currentState!].stateName!]?.phone?.value;
      }

      if (reduxState[modalData[currentState!].stateName!]?.name?.value) {
        data.contact.name =
          reduxState[modalData[currentState!].stateName!]?.name?.value;
      }

      console.log(data);

      const res = await handleSendData(data);

      if ((res as any)?.isError) {
        console.error((res as any)?.error);
        dispatch(errorWithApplying());
        dispatch(modalData[currentState!].clearAction!());
        return;
      }
    }

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
    setIsSubmitFailed: Dispatch<SetStateAction<boolean>>,
    handleSendData: (arg: CrmReqBody) => void
  ) =>
  () => {
    if (currentState !== null && modalData[currentState].withMultiInputs) {
      reduxStateHandler(
        currentState,
        modalData,
        reduxState,
        dispatch,
        handleSendData
      );
    } else if (
      currentState !== null &&
      !modalData[currentState]?.withMultiInputs
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
