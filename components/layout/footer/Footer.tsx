import styled from "styled-components";
import Body from "../Body";
import { BlackColor, Font, OtherColor } from "../../../common/enums";
import MenuItems from "../header/MenuItems";

const Footer: React.FC = () => {
  return (
    <Container>
      <StyledBody />
      <StyledMenuItems isUnderFooter={true} />
      <TextContainer>
        <ConditionsText>
          Использование сервиса означает согласие
          <AdaptiveBR /> с <TextLink>
            Пользовательским соглашением
          </TextLink> и <TextLink>Политикой конфиденциальности</TextLink>
        </ConditionsText>
        <br />
        <Text>Иллюстрации взяты с icons8.com</Text>
      </TextContainer>
    </Container>
  );
};

const StyledBody = styled(Body)`
  padding-top: 0;
  padding-bottom: 0;
`;

const StyledMenuItems = styled(MenuItems)`
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    display: flex;
    padding-left: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-left: 40px;
  }
`;

const AdaptiveBR = styled.br`
  display: none;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
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

const ConditionsText = styled(Text)`
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 388px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
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
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 21px;
  padding-bottom: 64px;
  padding-top: 112px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    align-items: flex-start;
    padding-bottom: 56px;
    row-gap: 24px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
    row-gap: 24px;
  }
`;

export default Footer;
