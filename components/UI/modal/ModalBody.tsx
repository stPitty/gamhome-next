import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styled, { css } from "styled-components";
import { emailValidationRegexp, modalData } from "./constants";
import { TModalState } from "../../../redux/slicers/types";
import { BlackColor } from "../../../common/enums";
import ModalText from "./ModalText";
import Input from "../input/Input";
import { useState } from "react";
import Button from "../button/Button";
import { ButtonSize } from "../button/enums";
import { Modal } from "./types";

const ModalBody = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitFailed, setIsSubmitFailed] = useState<boolean>(false);
  const [isValidationError, setIsValidationError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { currentState } = useAppSelector<TModalState>(
    (state) => state.modalState
  );

  const handleChangeStateClick = () => {
    if (
      currentState !== null &&
      modalData[currentState].modalType !== "withEmailInput"
    ) {
      dispatch(modalData[currentState].nextStateBtnAction());
      return;
    }
    if (email.length === 0) {
      setIsSubmitFailed(true);
      return;
    } else if (
      currentState !== null &&
      modalData[currentState].modalType === "withEmailInput" &&
      !isValidationError
    ) {
      dispatch(modalData[currentState].nextStateBtnAction());
    }
  };

  return (
    <Container>
      {currentState !== null && (
        <>
          {modalData[currentState].modalType === "lastMessage" && <Image />}
          <TextWrapper modalType={modalData[currentState].modalType}>
            <Header>{modalData[currentState].header}</Header>
            <ModalText data={modalData[currentState]} />
          </TextWrapper>
          {modalData[currentState].modalType === "withEmailInput" && (
            <StyledInput
              value={email}
              setValue={setEmail}
              placeHolder="email"
              validationPattern={emailValidationRegexp}
              errorMessage="Введите корректный Email"
              required={true}
              isSubmitFailed={isSubmitFailed}
              submitFailedMessage="Укажите Email"
              isValidationError={isValidationError}
              setIsValidationError={setIsValidationError}
            />
          )}
          {modalData[currentState].modalType !== "lastMessage" && (
            <ButtonContainer modalType={modalData[currentState].modalType}>
              <Button
                buttonSize={ButtonSize.MEDIUM}
                onClick={handleChangeStateClick}
              >
                {modalData[currentState].buttonText}
              </Button>
            </ButtonContainer>
          )}
        </>
      )}
    </Container>
  );
};

const ButtonContainer = styled.div<{ modalType: Modal }>`
  transition: none;
  width: fit-content;
  ${({ modalType }) => {
    if (modalType === "withInfo") {
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

const StyledInput = styled(Input)`
  margin-top: 20px;
`;

const Image = styled.div`
  width: 271px;
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/man-sends-message.jpg");
  align-self: center;
  margin-bottom: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
`;

const TextWrapper = styled.div<{ modalType: Modal }>`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 480px;
  transition: none;
  & > * {
    margin: 0;
  }
  ${({ modalType }) => {
    if (modalType === "lastMessage") {
      return css`
        row-gap: 4px;
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
