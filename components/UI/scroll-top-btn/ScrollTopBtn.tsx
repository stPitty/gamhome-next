import styled from "styled-components";
import ChevronSVG from "../../../public/assets/svg/ChevronSVG";
import { BlackColor, WhiteColor } from "../../../common/enums";
import Link from "next/link";
import { Hook } from "../../../common/routes";
import { useAppSelector } from "../../../redux/hooks";
import {
  TCookiePopUp,
  TMobBtnView,
  TScrollTopBtn,
} from "../../../redux/slicers/types";

const ScrollTopBtn = () => {
  const { isShown } = useAppSelector<TMobBtnView>((state) => state.mobBtnView);

  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  const { isLightTheme } = useAppSelector<TScrollTopBtn>(
    (state) => state.scrollTopBtn
  );

  return (
    <Link href={"#" + Hook.HOME} scroll={false}>
      <Container
        isLightTheme={isLightTheme}
        isCookieAccepted={isCookieAccepted}
        isMenuShown={isShown}
      >
        <ChevronIcon isLightTheme={isLightTheme} />
      </Container>
    </Link>
  );
};

const ChevronIcon = styled(ChevronSVG)<{ isLightTheme: boolean }>`
  transform: rotate(90deg);
  width: 23px;
  height: 23px;
  & path {
    fill: ${({ isLightTheme }) => !isLightTheme && BlackColor.BLACK_SECONDARY};
  }
`;

const Container = styled.div<{
  isMenuShown: boolean;
  isCookieAccepted: boolean;
  isLightTheme: boolean;
}>`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  bottom: ${({ isMenuShown, isCookieAccepted }) =>
    isMenuShown ? "150px" : "32px"};
  margin-bottom: ${({ isCookieAccepted }) => (isCookieAccepted ? "0" : "72px")};
  left: calc(50% + 640px);
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: ${({ isLightTheme }) =>
    isLightTheme ? BlackColor.BLACK_32 : WhiteColor.WHITE_80};
  backdrop-filter: blur(8px);
  z-index: 2;
  transition: 0.2s linear;
  &:hover {
    background: ${({ isLightTheme }) =>
      isLightTheme ? BlackColor.BLACK_64 : WhiteColor.WHITE};
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    left: calc(50% + 432px);
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    left: calc(50% + 304px);
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    left: calc(50% + 108px);
  }
`;

export default ScrollTopBtn;
