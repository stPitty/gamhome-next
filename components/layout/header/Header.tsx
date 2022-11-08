import styled from "styled-components";
import LogoSVG from "../../../public/assets/svg/LogoSVG";
import MenuItems from "./MenuItems";
import { handleRedirClick } from "../../../common/helpers";
import { useRouter } from "next/router";
import { Route } from "../../../common/routes";
import Button from "../../UI/button/Button";
import { ButtonType } from "../../UI/button/enums";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <StyledLogo onClick={handleRedirClick(router, Route.HOME)} />
      <ButtonsWrapper>
        <MenuItems />
        <Button buttonType={ButtonType.OUTLINED}>
          <ButtonText>Перейти в Telegram Bot</ButtonText>
        </Button>
        <TelephoneNumberText href="tel:88009999999">
          8 800 999-99-99
        </TelephoneNumberText>
      </ButtonsWrapper>
    </Container>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TelephoneNumberText = styled.a`
  margin: 0 0 0 32px;
  font-family: ${(props) => props.theme.font.roboto};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color.blackSecondary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.blueSecondary};
  }
`;

const ButtonText = styled.p`
  font-family: ${(props) => props.theme.font.roboto};
  font-weight: 500;
  font-size: 13px;
  margin: 0;
  color: ${(props) => props.theme.color.bluePrimary};
`;

const StyledLogo = styled(LogoSVG)`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 64px;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export default Header;
