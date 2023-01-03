import styled, { css } from "styled-components";
import { useState } from "react";
import {
  TCookiePopUp,
  TFlatState,
  TMobBtnView,
  TWindowSize,
} from "../../../redux/slicers/types";
import { Hook } from "../../../common/routes";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import { WindowSize } from "../../../redux/slicers/enums";
import KeySVG from "../../../public/assets/svg/KeySVG";
import { useAppSelector } from "../../../redux/hooks";
import { handleShowNumberClick } from "../../../common/helpers";
import { WhiteColor } from "../../../common/enums";
import Link from "next/link";
import Button from "../../UI/button/Button";

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
                phone={true}
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

const StyledButton = styled(Button)<{ phone?: boolean }>`
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
    padding: 0;
    position: relative;
    bottom: 7px;
    ${({ phone }) =>
      phone &&
      css`
        background-color: ${WhiteColor.WHITE};

        &:hover {
          background-color: #dcdff1;
        }

        &:active {
          background-color: #d5daf1;
        }
      `}
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
    padding: 0 12px 32px;
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
  @media screen and (max-width: 374px) {
    height: ${({ isCookieAccepted }) => (isCookieAccepted ? "61px" : "133px")};
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
