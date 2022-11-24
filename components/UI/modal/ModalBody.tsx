import { useAppSelector } from "../../../redux/hooks";
import styled from "styled-components";
import { emailValidationRegexp, modalData } from "./constants";
import { TModalState } from "../../../redux/slicers/types";
import { BlackColor, Font } from "../../../common/enums";
import ModalText from "./ModalText";
import Input from "../input/Input";
import { useState } from "react";

const ModalBody = () => {
  const [email, setEmail] = useState<string>("");

  const { currentState } = useAppSelector<TModalState>(
    (state) => state.modalState
  );

  return (
    <Container>
      {currentState !== null && (
        <>
          <TextWrapper>
            <Header>{modalData[currentState].header}</Header>
            <ModalText data={modalData[currentState]} />
          </TextWrapper>
          {modalData[currentState].modalType === "withEmailInput" && (
            <Input
              required={true}
              value={email}
              setValue={setEmail}
              type="email"
              validationPattern={emailValidationRegexp}
            />
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  row-gap: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 480px;
  & > * {
    margin: 0;
  }
`;

const Header = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  align-items: center;
  color: ${BlackColor.BLACK_SECONDARY};
  width: 430px;
`;

export default ModalBody;
