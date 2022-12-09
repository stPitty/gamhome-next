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
import { ScrollBtnState } from "../../../redux/slicers/enums";

const ScrollTopBtn = () => {
  const { isShown } = useAppSelector<TMobBtnView>((state) => state.mobBtnView);

  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  const { btnState } = useAppSelector<TScrollTopBtn>(
    (state) => state.scrollTopBtn
  );

  return (
    <Link href={"#" + Hook.HOME} scroll={false}>
      <Container
        btnState={btnState}
        isCookieAccepted={isCookieAccepted}
        isMenuShown={isShown}
      >
        <ChevronIcon btnState={btnState} />
      </Container>
    </Link>
  );
};

const ChevronIcon = styled(ChevronSVG)<{ btnState: ScrollBtnState }>`
  transform: rotate(90deg);
  width: 23px;
  height: 23px;
  & path {
    fill: ${({ btnState }) =>
      btnState === ScrollBtnState.DARK && BlackColor.BLACK_SECONDARY};
  }
`;

const Container = styled.div<{
  isMenuShown: boolean;
  isCookieAccepted: boolean;
  btnState: ScrollBtnState;
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
  background: ${({ btnState }) =>
    btnState === ScrollBtnState.LIGHT
      ? BlackColor.BLACK_32
      : WhiteColor.WHITE_80};
  backdrop-filter: blur(8px);
  z-index: 2;
  transition: 0.2s linear;
  &:hover {
    background: ${({ btnState }) =>
      btnState === ScrollBtnState.LIGHT
        ? BlackColor.BLACK_64
        : WhiteColor.WHITE};
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    left: calc(50% + 432px);
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    left: calc(50% + 304px);
  }
`;

export default ScrollTopBtn;
