import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonType } from "../../UI/button/enums";

type Props = {
  acceptCookies: boolean;
  setAcceptCookies: Dispatch<SetStateAction<boolean>>;
};

const CookiesPopup: React.FC<Props> = ({ setAcceptCookies, acceptCookies }) => {
  const handleButtonClick = () => {
    setAcceptCookies(true);
    localStorage.setItem("acceptCookies", "true");
  };

  return (
    <Wrapper isAccept={acceptCookies}>
      <Container>
        <Text>Мы используем cookies</Text>
        <StyledButton
          onClick={handleButtonClick}
          buttonType={ButtonType.OUTLINE}
          width={73}
        >
          Хорошо
        </StyledButton>
      </Container>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  height: 36px;
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  padding: 18px 64px;
  align-items: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 1024px;
  }
`;

const Wrapper = styled.div<{ isAccept: boolean }>`
  display: ${({ isAccept }) => (isAccept ? "none" : "flex")};
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  height: 72px;
  background-color: ${LightBlueColor.LB_100};
  z-index: 3;
`;

export default CookiesPopup;
