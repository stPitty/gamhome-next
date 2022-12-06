import { handleRedirClick } from "../../common/helpers";
import { Route } from "../../common/routes";
import MenuItems from "./header/MenuItems";
import Button from "../UI/button/Button";
import { ButtonType } from "../UI/button/enums";
import styled from "styled-components";
import { BlackColor, BrandColor, Font } from "../../common/enums";
import LogoSVG from "../../public/assets/svg/LogoSVG";
import { useRouter } from "next/router";
import HamburgerSVG from "../../public/assets/svg/HamburgerSVG";
import { memo } from "react";

type Props = {
  isHeader?: boolean;
};

const Body: React.FC<Props> = ({ isHeader = false }) => {
  const router = useRouter();

  return (
    <Container>
      <LogoSVG />
      <MenuWrapper>
        <MenuItems />
        {isHeader && (
          <BurgerMenuContainer>
            <MenuLabel>Меню</MenuLabel>
            <BurgerIcon />
          </BurgerMenuContainer>
        )}
        <ButtonsWrapper>
          <Button
            width={168}
            onClick={handleRedirClick(router, Route.HOME)}
            buttonType={ButtonType.OUTLINE}
          >
            Перейти в Telegram Bot
          </Button>
          <TelephoneNumberText href="tel:88009999999">
            8 800 999-99-99
          </TelephoneNumberText>
        </ButtonsWrapper>
      </MenuWrapper>
    </Container>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  column-gap: 185px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
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
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 24px;
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
