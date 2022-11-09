import { handleRedirClick } from "../../common/helpers";
import { Route } from "../../common/routes";
import MenuItems from "./header/MenuItems";
import Button from "../UI/button/Button";
import { ButtonType } from "../UI/button/enums";
import styled from "styled-components";
import { BlackColor, BrandColor, Font } from "../../common/enums";
import LogoSVG from "../../public/assets/svg/LogoSVG";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();

  return (
    <Container>
      <StyledLogo onClick={handleRedirClick(router, Route.HOME)} />
      <ButtonsWrapper>
        <MenuItems />
        <Button
          onClick={handleRedirClick(router, Route.HOME)}
          buttonType={ButtonType.OUTLINE}
        >
          <ButtonText>Перейти в Telegram Bot</ButtonText>
        </Button>
        <TelephoneNumberText href="tel:88009999999">
          8 800 999-99-99
        </TelephoneNumberText>
      </ButtonsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TelephoneNumberText = styled.a`
  margin: 0 0 0 32px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

const ButtonText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  margin: 0;
  color: ${BrandColor.BRAND};
`;

const StyledLogo = styled(LogoSVG)`
  cursor: pointer;
`;

export default Body;