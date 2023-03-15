import { handleRedirClick } from "../../common/helpers";
import { Hook, Route } from "../../common/routes";
import MenuItems from "./header/MenuItems";
import Button from "../UI/button/Button";
import { ButtonType } from "../UI/button/enums";
import styled from "styled-components";
import { BlackColor, BrandColor, Font } from "../../common/enums";
import LogoSVG from "../../public/assets/svg/LogoSVG";
import { useRouter } from "next/router";
import HamburgerSVG from "../../public/assets/svg/HamburgerSVG";
import { memo } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { openMenu, setWontBeClosed } from "../../redux/slicers/sideMenuSlicer";
import Link from "next/link";

type Props = {
  isHeader?: boolean;
  className?: string;
};

const Body: React.FC<Props> = ({ isHeader = false, className }) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleOpenMenuClick = () => {
    dispatch(setWontBeClosed());
    dispatch(openMenu());
  };

  return (
    <Container className={className}>
      <Link href={Route.HOME}>
        <LogoSVG />
      </Link>
      <MenuWrapper>
        <MenuItems />
        {isHeader && (
          <BurgerMenuContainer onClick={handleOpenMenuClick}>
            <MenuLabel>Меню</MenuLabel>
            <BurgerIcon />
          </BurgerMenuContainer>
        )}
        <ButtonsWrapper>
          <Link href="https://t.me/GamhomeBot" target="_blank">
            <Button width={168} buttonType={ButtonType.OUTLINE}>
              Перейти в Telegram Bot
            </Button>
          </Link>
          <TelephoneNumberText href="tel:+79260211033">
            +7&nbsp;926 021-10-33
          </TelephoneNumberText>
        </ButtonsWrapper>
      </MenuWrapper>
    </Container>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  column-gap: 185px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    column-gap: 28px;
  }
`;

const BurgerIcon = styled(HamburgerSVG)``;

const MenuLabel = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
  color: ${BrandColor.BRAND};
`;

const BurgerMenuContainer = styled.div`
  display: flex;
  column-gap: 7px;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1360px;
  padding: 16px 24px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 1024px;
    padding-left: 36px;
    padding-right: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 375px;
    padding: 13px 13px;
  }
  @media screen and (max-width: 374px) {
    max-width: 320px;
    padding: 13px 16px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    column-gap: 24px;
  }
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;
const TelephoneNumberText = styled.a`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  transition: 0.1s all linear;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

export default memo(Body);
