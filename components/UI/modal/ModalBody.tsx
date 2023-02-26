import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styled, { css } from "styled-components";
import { modalData } from "./constants";
import { TModalState } from "../../../redux/slicers/types";
import { BlackColor, Font, WhiteColor } from "../../../common/enums";
import ModalText from "./ModalText";
import { useState } from "react";
import Button from "../button/Button";
import { ButtonSize } from "../button/enums";
import { Modal } from "./types";
import Form from "../../common/check_owner_block/Form";
import { handleChangeStateClick } from "./helpers";
import { useLazySendContactDataQuery } from "../../../redux/APIs/crmApi";

const ModalBody = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSubmitFailed, setIsSubmitFailed] = useState<boolean>(false);
  const [isValidationError, setIsValidationError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const [sendData, data] = useLazySendContactDataQuery();

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
              <StyledButton
                buttonSize={ButtonSize.MEDIUM}
                onClick={handleChangeStateClick(
                  currentState,
                  modalData,
                  reduxState,
                  dispatch,
                  isValidationError,
                  setInputValue,
                  inputValue,
                  setIsSubmitFailed,
                  sendData
                )}
              >
                {modalData[currentState].buttonText}
              </StyledButton>
            </ButtonContainer>
          )}
        </Container>
      )}
    </>
  );
};

const WhiteBlock = styled.div`
  display: none;
  background-color: ${WhiteColor.WHITE};
  @media screen and (max-width: 767px) {
    display: block;
    width: 375px;
    height: 32px;
  }
  @media screen and (max-width: 374px) {
    width: 296px;
    height: 24px;
  }
`;

const StyledButton = styled(Button)`
  @media screen and (max-width: 767px) {
    width: 335px;
  }
  @media screen and (max-width: 374px) {
    width: 296px;
  }
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
  }};
  @media screen and (max-width: 767px) {
    ${({ modalType }) => {
      if (modalType !== "withInput") {
        return css`
          margin-top: 20px;
        `;
      } else {
        return css`
          margin-top: 5px;
        `;
      }
    }};
    position: fixed;
    flex-direction: column;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(white, white) no-repeat center;
    background-size: 355px 100%;
    padding-bottom: 32px;
  }
  @media screen and (max-width: 374px) {
    background-size: 320px 100%;
    padding-bottom: 24px;
  }
`;

const SubDescText = styled.p`
  font-family: ${Font.ROBOTO_FLEX};
  font-size: 16px;
  line-height: 120%;
  color: ${BlackColor.BLACK_80};
  width: 478px;
  margin: 4px 0 22px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
  @media screen and (max-width: 374px) {
    width: 280px;
  }
`;

const Image = styled.div<{ image: string }>`
  width: 271px;
  height: 180px;
  background-repeat: no-repeat;
  background-size: 285px;
  background-position: center;
  background-image: url(${({ image }) => image});
  align-self: center;
  margin-bottom: 24px;
`;

const Container = styled.div<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isLast }) => isLast && "center"};
  padding-right: ${({ isLast }) => (isLast ? "32px" : "40px")};
  @media screen and (max-width: 767px) {
    padding-right: 20px;
    margin-top: 32px;
  }
`;

const TextWrapper = styled.div<{ modalType: Modal; isErrorMessage: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: ${({ modalType }) =>
    modalType !== "lastMessage" ? "480px" : "446px"};
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
  }};
  @media screen and (max-width: 767px) {
    width: 335px;
    row-gap: 4px;
  }
  @media screen and (max-width: 374px) {
    width: 280px;
  }
`;

const Header = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_SECONDARY};
  width: 430px;
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    font-size: 28px;
    line-height: 36px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
  @media screen and (max-width: 374px) {
    width: 280px;
  }
`;

export default ModalBody;
