import styled from "styled-components";
import LogoSVG from "../../../public/assets/svg/LogoSVG";
import { BlackColor, Font } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import { ChildrenProp } from "../../../common/form_utils/types";
import { FC } from "react";
import HamburgerSVG from "../../../public/assets/svg/HamburgerSVG";

const LandingLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderLeftBlock>
            <Logo />
            <XlMenu>
              <MenuItem>Продать</MenuItem>
              <MenuItem>Сдать в аренду</MenuItem>
              <MenuItem>Найти жилье</MenuItem>
              <MenuItem>О нас</MenuItem>
              <MenuItem>Отзывы</MenuItem>
            </XlMenu>
          </HeaderLeftBlock>
          <HeaderRightBlock>
            <HeaderPhoneLink href="tel:88009999999">
              8 800 999-99-99
            </HeaderPhoneLink>
            <HeaderButtonsContainer>
              <HeaderMenuButton
                buttonSize={ButtonSize.MEDIUM}
                buttonType={ButtonType.OUTLINE}
              >
                <BurgerIconContainer>
                  <HamburgerSVG />
                </BurgerIconContainer>
                Меню
              </HeaderMenuButton>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Оставить заявку
              </StyledButton>
            </HeaderButtonsContainer>
          </HeaderRightBlock>
        </HeaderContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <FooterContainer>
          <FooterMenuContainer>
            <HeaderLeftBlock>
              <Logo />
              <XlMenu>
                <MenuItem>Продать</MenuItem>
                <MenuItem>Сдать в аренду</MenuItem>
                <MenuItem>Найти жилье</MenuItem>
                <MenuItem>О нас</MenuItem>
                <MenuItem>Отзывы</MenuItem>
              </XlMenu>
            </HeaderLeftBlock>
            <FooterRightBlock>
              <PhoneLink href="tel:88009999999">8 800 999-99-99</PhoneLink>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Оставить заявку
              </StyledButton>
            </FooterRightBlock>
          </FooterMenuContainer>
          <Divider />
          <LgMenu>
            <MenuItem>Продать</MenuItem>
            <MenuItem>Сдать в аренду</MenuItem>
            <MenuItem>Найти жилье</MenuItem>
            <MenuItem>О нас</MenuItem>
            <MenuItem>Отзывы</MenuItem>
          </LgMenu>
          <Divider />
          <FooterConditionsBlock>
            <ConditionsText>
              Использование сервиса означает согласие с&nbsp;
              <ConditionsLink>Политикой конфиденциальности</ConditionsLink>{" "}
              и&nbsp;
              <ConditionsLink>Пользовательским соглашением</ConditionsLink>
            </ConditionsText>
            <ConditionsText>Иллюстраци взяты с&nbsp;icons8.com</ConditionsText>
          </FooterConditionsBlock>
        </FooterContainer>
      </Container>
    </Wrapper>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #dfe6ec;
  display: none;
  @media screen and (max-width: 1439px) {
    display: block;
  }
`;

const BurgerIconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderMenuButton = styled(Button)`
  display: none;
  @media screen and (max-width: 1439px) {
    display: flex;
    width: 113px;
    height: 44px;
    column-gap: 4px;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
    padding: 0;
    width: 89px;
    height: 36px;
  }
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ConditionsLink = styled.a`
  color: #0086ff;
  cursor: pointer;
`;

const ConditionsText = styled.p`
  margin: 0;
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  text-align: center;
  @media screen and (max-width: 1439px) {
    max-width: 624px;
    text-align: start;
  }
  @media screen and (max-width: 1023px) {
    max-width: 328px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
`;

const FooterConditionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (max-width: 1439px) {
    flex-direction: row;
    column-gap: 82px;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    column-gap: 82px;
  }
`;

const FooterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 284px;
  @media screen and (max-width: 1439px) {
    column-gap: 442px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 178px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 64px 72px;
  row-gap: 48px;
  @media screen and (max-width: 1439px) {
    padding: 0 36px 40px;
    row-gap: 24px;
  }
  @media screen and (max-width: 1023px) {
    padding: 0 40px 32px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 13px 32px;
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 167px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const PhoneLink = styled.a`
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

const HeaderPhoneLink = styled(PhoneLink)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
`;

const HeaderRightBlock = styled(RightBlock)`
  @media screen and (max-width: 1439px) {
    column-gap: 24px;
  }
`;

const FooterRightBlock = styled(RightBlock)``;

const MenuItem = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  margin: 0;
`;

const MenuLayout = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const XlMenu = styled(MenuLayout)`
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

const LgMenu = styled(MenuLayout)`
  display: none;
  @media screen and (max-width: 1439px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
`;

const Logo = styled(LogoSVG)``;

const HeaderLeftBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 56px;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  margin: 24px 40px;
  column-gap: 284px;
  @media screen and (max-width: 1439px) {
    column-gap: 325px;
    margin-left: 12px;
    margin-right: 12px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 61px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media screen and (max-width: 767px) {
    column-gap: 68px;
    margin-left: 0;
    margin-right: 0;
    padding-right: 13px;
    padding-left: 13px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: url("/images/landing/background.png") repeat;
`;

export default LandingLayout;
