import styled from "styled-components";
import Body from "../Body";
import { BlackColor, Font } from "../../../common/enums";

const Footer: React.FC = () => {
  return (
    <Container>
      <Body />
      <TextContainer>
        <Text>
          Использование сервиса означает согласие с Пользовательским соглашением
          и Политикой конфиденциальности
        </Text>
        <br />
        <Text>Иллюстрации взяты с icons8.com</Text>
      </TextContainer>
    </Container>
  );
};

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
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 64px;
  gap: 48px;
`;

export default Footer;
