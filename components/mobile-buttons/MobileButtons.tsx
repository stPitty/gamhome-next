import styled from "styled-components";
import { WhiteColor } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  TCookiePopUp,
  TFlatState,
  TMobBtnView,
  TWindowSize,
} from "../../redux/slicers/types";
import KeySVG from "../../public/assets/svg/KeySVG";
import Link from "next/link";
import { Hook } from "../../common/routes";
import { handleShowNumberClick } from "../../common/helpers";
import { WindowSize } from "../../redux/slicers/enums";

const MobileButtons = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const { isShown } = useAppSelector<TMobBtnView>((state) => state.mobBtnView);

  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  return (
    <Wrapper isShown={isShown}>
      <TopShadow />
      <Container isCookieAccepted={isCookieAccepted}>
        <ButtonsContainer>
          {showNumber ? (
            <StyledLink href={`tel:${flatData?.phone}`}>
              <StyledButton
                buttonType={ButtonType.OUTLINE}
                buttonSize={ButtonSize.LARGE}
              >
                {flatData?.phone}
              </StyledButton>
            </StyledLink>
          ) : (
            <StyledButton
              buttonSize={ButtonSize.LARGE}
              loading={loading}
              onClick={handleShowNumberClick(
                showNumber,
                setLoading,
                setShowNumber
              )}
            >
              Показать телефон
            </StyledButton>
          )}
          <StyledLink href={"#" + Hook.SERVICES} scroll={false}>
            <StyledButton
              buttonSize={ButtonSize.LARGE}
              buttonType={ButtonType.PRIMARY_PURPLE}
            >
              <KeyIcon />
              {windowSize === WindowSize.MD
                ? "Подберите мне квартиру"
                : "Подбор квартиры"}
            </StyledButton>
          </StyledLink>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  @media screen and (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
    padding: 7px 15px;
    height: 36px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 169.5px;
  }
  @media screen and (max-width: 374px) {
    width: 142px;
  }
`;

const KeyIcon = styled(KeySVG)`
  margin-right: 7px;
  @media screen and (max-width: 374px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  min-width: 338px;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    min-width: 169.5px;
  }
  @media screen and (max-width: 374px) {
    min-width: 142px;
  }
`;

const TopShadow = styled.div`
  width: 100%;
  height: 19px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 768px;
  padding: 24px 40px;
  column-gap: 12px;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 375px;
    padding: 13px 12px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    padding: 12px;
  }
`;

const Container = styled.div<{ isCookieAccepted: boolean }>`
  width: 100%;
  height: ${({ isCookieAccepted }) => (isCookieAccepted ? "130px" : "202px")};
  transition: 0.2s linear all;
  margin-top: -1px;
  background-color: ${WhiteColor.WHITE};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    height: ${({ isCookieAccepted }) => (isCookieAccepted ? "81px" : "153px")};
  }
`;

const Wrapper = styled.div<{ isShown: boolean }>`
  display: none;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  width: 100%;
  bottom: ${({ isShown }) => (isShown ? "0" : "-150px")};
  transition: 0.2s linear all;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`;

export default MobileButtons;
