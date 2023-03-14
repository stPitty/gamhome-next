import { TModalState } from "../../../redux/slicers/types";
import { CrmReqBody, Deal, ModalBodyData } from "./types";
import { AppDispatch } from "../../../redux/types";
import { Dispatch, SetStateAction } from "react";
import {
  errorWithApplying,
  errorWithDocs,
} from "../../../redux/slicers/modalStateSlicer";
import { NextRouter } from "next/router";
import { clearData } from "../../../redux/slicers/cadastralDataSlicer";

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
        data.deal.price = modalData[currentState!].price;
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

const reactStateHandler = async (
  currentState: TModalState["currentState"],
  modalData: ModalBodyData,
  dispatch: AppDispatch,
  isValidationError: boolean,
  setInputValue: Dispatch<SetStateAction<string>>,
  inputValue: string,
  setIsSubmitFailed: Dispatch<SetStateAction<boolean>>,
  checkSubject: Function,
  checkProperty: Function,
  checkDocs: Function,
  freeDocs: Function,
  reduxState: any,
  router: NextRouter
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
    if (modalData[currentState!].isPayable) {
      if (modalData[currentState!].paymentObj?.saveDataAction) {
        dispatch(
          modalData[currentState!].paymentObj?.saveDataAction!(inputValue)
        );
      }
      if (modalData[currentState!].paymentObj?.isLast) {
        const token = sessionStorage.getItem("token");

        if (modalData[currentState!].paymentObj?.type === "property") {
          const cadastralNumber = reduxState.cadastralData.cadastralNumber;

          const data = await checkProperty({
            token: token ?? "",
            check: {
              amount: 79900,
              cadastralNumber,
              email: inputValue,
            },
          });
          dispatch(clearData());
          if (data?.isError || !data?.data?.Success) {
            console.error(data.error);
            dispatch(modalData[currentState!].errorAction!());
            setInputValue("");
            return;
          }

          window.open(data?.data?.PaymentURL, "_blank");
        }

        if (modalData[currentState!].paymentObj?.type === "subject") {
          const ownerData = reduxState.ownerData;

          const username = ownerData.nameValue.value.split(" ");

          const body: any = {
            token: token ?? "",
            check: {
              email: inputValue,
              amount: 54900,
              name: username[0],
              surname: username[1],
              birthDate: ownerData.bornDate.value,
              passNumber: ownerData.passNum.value,
              passSeries: ownerData.passSer.value,
              passIssueDate: ownerData.dateGet.value,
              issuerCode: ownerData.divCode.value,
            },
          };

          if (username?.[2]) {
            body.patronymic = username?.[2];
          }

          const data = await checkSubject(body);

          if (data?.isError || !data?.data?.Success) {
            console.error(data.error);
            dispatch(modalData[currentState!].errorAction!());
            dispatch(modalData[currentState!].clearAction!());
            setInputValue("");
            return;
          }

          window.open(data?.data?.PaymentURL, "_blank");
          dispatch(modalData[currentState!].clearAction!());
        }

        if (modalData[currentState!].paymentObj?.type === "check-list") {
          const data = await checkDocs({
            amount: 79900,
            email: inputValue,
          });

          if (data?.isError || !data?.data?.Success) {
            console.error(data.error);
            dispatch(modalData[currentState!].errorAction!());
            setInputValue("");
            return;
          }

          window.open(data?.data?.PaymentURL, "_blank");
        }

        if (modalData[currentState!].paymentObj?.type === "freeDocs") {
          const docType = router.asPath.split("/")[1];

          const data = await freeDocs({
            email: inputValue,
            docType,
          });

          if (data?.isError) {
            console.error(data.error);
            dispatch(modalData[currentState!].errorAction!());
            setInputValue("");
            return;
          }
        }
      }
    }

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
    handleSendData: (arg: CrmReqBody) => void,
    checkSubject: Function,
    checkProperty: Function,
    checkDocs: Function,
    freeDocs: Function,
    router: NextRouter
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
        setIsSubmitFailed,
        checkSubject,
        checkProperty,
        checkDocs,
        freeDocs,
        reduxState,
        router
      );
    }
  };

export { handleChangeStateClick };
