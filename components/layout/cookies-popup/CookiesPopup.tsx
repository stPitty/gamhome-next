import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonType } from "../../UI/button/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setAcceptedCookie } from "../../../redux/slicers/cookiePopUpSlicer";
import { TCookiePopUp } from "../../../redux/slicers/types";

const CookiesPopup: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  const handleButtonClick = () => {
    dispatch(setAcceptedCookie());
    localStorage.setItem("acceptCookies", "true");
  };

  return (
    <Wrapper isAccept={isCookieAccepted}>
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
    padding: 18px 36px;
    width: 1024px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 18px 40px;
    width: 768px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 18px 13px;
    width: 375px;
  }
  @media screen and (max-width: 374px) {
    padding: 18px 16px;
    width: 320px;
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
