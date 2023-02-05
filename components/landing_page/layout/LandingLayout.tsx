import styled from "styled-components";
import LogoSVG from "../../../public/assets/svg/LogoSVG";
import { BlackColor, Font } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import { ChildrenProp } from "../../../common/form_utils/types";
import { FC } from "react";

const LandingLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderLeftBlock>
            <Logo />
            <Menu>
              <MenuItem>Продать</MenuItem>
              <MenuItem>Сдать в аренду</MenuItem>
              <MenuItem>Найти жилье</MenuItem>
              <MenuItem>О нас</MenuItem>
              <MenuItem>Отзывы</MenuItem>
            </Menu>
          </HeaderLeftBlock>
          <HeaderRightBlock>
            <PhoneLink href="tel:88009999999">8 800 999-99-99</PhoneLink>
            <StyledButton buttonSize={ButtonSize.MEDIUM}>
              Оставить заявку
            </StyledButton>
          </HeaderRightBlock>
        </HeaderContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <FooterContainer>
          <FooterMenuContainer>
            <HeaderLeftBlock>
              <Logo />
              <Menu>
                <MenuItem>Продать</MenuItem>
                <MenuItem>Сдать в аренду</MenuItem>
                <MenuItem>Найти жилье</MenuItem>
                <MenuItem>О нас</MenuItem>
                <MenuItem>Отзывы</MenuItem>
              </Menu>
            </HeaderLeftBlock>
            <HeaderRightBlock>
              <PhoneLink href="tel:88009999999">8 800 999-99-99</PhoneLink>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Оставить заявку
              </StyledButton>
            </HeaderRightBlock>
          </FooterMenuContainer>
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
`;

const FooterConditionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const FooterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 284px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 64px 72px;
  row-gap: 48px;
`;

const ChildrenContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 167px;
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

const HeaderRightBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
`;

const MenuItem = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
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
`;

export default LandingLayout;
