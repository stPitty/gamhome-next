import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styled, { css } from "styled-components";
import { modalData } from "./constants";
import { TModalState } from "../../../redux/slicers/types";
import { BlackColor } from "../../../common/enums";
import ModalText from "./ModalText";
import Input from "../input/Input";
import { useState } from "react";
import Button from "../button/Button";
import { ButtonSize } from "../button/enums";
import { Modal } from "./types";
import Form from "../../check-owner-block/Form";

const ModalBody = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSubmitFailed, setIsSubmitFailed] = useState<boolean>(false);
  const [isValidationError, setIsValidationError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { currentState } = useAppSelector<TModalState>(
    (state) => state.modalState
  );

  const reduxState = useAppSelector((state) => state);

  const handleChangeStateClick = () => {
    if (currentState !== null && modalData[currentState].withMultiInputs) {
      let rejectSubmit = false;
      for (let i = 0; i < modalData[currentState].fieldNames!.length; i++) {
        if (
          reduxState[modalData[currentState].stateName!][
            modalData[currentState].fieldNames![i]
          ].value.length === 0
        ) {
          dispatch(
            modalData[currentState].setSubmitErrorAction!({
              value: true,
              name: modalData[currentState].fieldNames![i],
            })
          );
          rejectSubmit = true;
        }
        if (
          reduxState[modalData[currentState].stateName!][
            modalData[currentState].fieldNames![i]
          ].isValidationError
        ) {
          rejectSubmit = true;
        }
      }
      if (!rejectSubmit) {
        dispatch(modalData[currentState].nextStateBtnAction!());
        dispatch(modalData[currentState].clearAction!());
      }
    } else if (
      currentState !== null &&
      !modalData[currentState].withMultiInputs
    ) {
      if (
        modalData[currentState].modalType !== "withInput" &&
        !isValidationError
      ) {
        dispatch(modalData[currentState].nextStateBtnAction!());
        setInputValue("");
        return;
      }
      if (inputValue.length === 0) {
        setIsSubmitFailed(true);
        return;
      } else if (
        modalData[currentState].modalType === "withInput" &&
        !isValidationError
      ) {
        dispatch(modalData[currentState].nextStateBtnAction!());
        setInputValue("");
      }
    }
  };

  return (
    <>
      {currentState !== null && (
        <Container isLast={modalData[currentState].modalType === "lastMessage"}>
          {modalData[currentState].modalType === "lastMessage" && (
            <Image image={modalData[currentState].image!} />
          )}
          <TextWrapper
            isErrorMessage={!!modalData[currentState].isErrorMessage}
            modalType={modalData[currentState].modalType}
          >
            <Header>{modalData[currentState].header}</Header>
            <ModalText data={modalData[currentState]} />
          </TextWrapper>
          {modalData[currentState].modalType === "withInput" && (
            <Form
              data={modalData[currentState]}
              inputValue={inputValue}
              setInputValue={setInputValue}
              isSubmitFailed={isSubmitFailed}
              isValidationError={isValidationError}
              setIsValidationError={setIsValidationError}
            />
          )}
          {modalData[currentState].buttonText && (
            <ButtonContainer modalType={modalData[currentState].modalType}>
              <Button
                buttonSize={ButtonSize.MEDIUM}
                onClick={handleChangeStateClick}
              >
                {modalData[currentState].buttonText}
              </Button>
            </ButtonContainer>
          )}
        </Container>
      )}
    </>
  );
};

const ButtonContainer = styled.div<{ modalType: Modal }>`
  transition: none;
  width: fit-content;
  ${({ modalType }) => {
    if (modalType !== "withInput") {
      return css`
        margin-top: 32px;
      `;
    } else {
      return css`
        margin-top: 10px;
      `;
    }
  }}
`;

const StyledInput = styled(Input)<{ withoutInfo: boolean }>`
  margin-top: ${({ withoutInfo }) => (withoutInfo ? "0" : "20px")};
  transition: none;
`;

const Image = styled.div<{ image: string }>`
  width: 271px;
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ image }) => image});
  align-self: center;
  margin-bottom: 24px;
`;

const Container = styled.div<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isLast }) => isLast && "center"};
  padding-right: 40px;
`;

const TextWrapper = styled.div<{ modalType: Modal; isErrorMessage: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 480px;
  transition: none;
  & > * {
    margin: 0;
  }
  ${({ modalType, isErrorMessage }) => {
    if (modalType === "lastMessage") {
      return css`
        row-gap: ${isErrorMessage ? "16px" : "4px"};
        & > * {
          align-self: center;
          text-align: center;
        }
      `;
    } else {
      return css`
        row-gap: 16px;
      `;
    }
  }}
`;

const Header = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_SECONDARY};
  width: 430px;
`;

export default ModalBody;
