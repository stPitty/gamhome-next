import styled from "styled-components";
import Body from "../Body";
import { BlackColor, Font, OtherColor } from "../../../common/enums";
import MenuItems from "../header/MenuItems";

const Footer: React.FC = () => {
  return (
    <Container>
      <Body />
      <StyledMenuItems isUnderFooter={true} />
      <TextContainer>
        <Text>
          Использование сервиса означает согласие
          <AdaptiveBR /> с <TextLink>
            Пользовательским соглашением
          </TextLink> и <TextLink>Политикой конфиденциальности</TextLink>
        </Text>
        <br />
        <Text>Иллюстрации взяты с icons8.com</Text>
      </TextContainer>
    </Container>
  );
};

const StyledMenuItems = styled(MenuItems)`
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: flex;
    padding-left: 36px;
  }
`;

const AdaptiveBR = styled.br`
  display: none;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: block;
  }
`;

const TextLink = styled.a`
  color: ${OtherColor.LINK};
  cursor: pointer;
  &:hover {
    color: ${OtherColor.LINK_HOVER};
    transition: 0.1s linear all;
  }
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  margin: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    flex-direction: row;
    width: 1024px;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 36px;
    padding-right: 36px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 21px;
  padding-bottom: 64px;
  padding-top: 96px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    align-items: flex-start;
    padding-bottom: 56px;
    row-gap: 24px;
  }
`;

export default Footer;
