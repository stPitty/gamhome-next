import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styled, { css } from "styled-components";
import { modalData } from "./constants";
import { TModalState } from "../../../redux/slicers/types";
import { BlackColor, Font } from "../../../common/enums";
import ModalText from "./ModalText";
import { useState } from "react";
import Button from "../button/Button";
import { ButtonSize } from "../button/enums";
import { Modal } from "./types";
import Form from "../../check-owner-block/Form";
import { handleChangeStateClick } from "./helpers";

const ModalBody = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSubmitFailed, setIsSubmitFailed] = useState<boolean>(false);
  const [isValidationError, setIsValidationError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { currentState } = useAppSelector<TModalState>(
    (state) => state.modalState
  );

  const reduxState = useAppSelector((state) => state);

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
            {modalData[currentState].desc && (
              <ModalText data={modalData[currentState]} />
            )}
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
          {modalData[currentState].subDesc && (
            <SubDescText>{modalData[currentState].subDesc}</SubDescText>
          )}
          {modalData[currentState].buttonText && (
            <ButtonContainer modalType={modalData[currentState].modalType}>
              <Button
                buttonSize={ButtonSize.MEDIUM}
                onClick={handleChangeStateClick(
                  currentState,
                  modalData,
                  reduxState,
                  dispatch,
                  isValidationError,
                  setInputValue,
                  inputValue,
                  setIsSubmitFailed
                )}
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

const SubDescText = styled.p`
  font-family: ${Font.ROBOTO_FLEX};
  font-size: 16px;
  line-height: 120%;
  color: ${BlackColor.BLACK_80};
  width: 478px;
  margin: 4px 0 22px;
`;

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
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export default ModalBody;
