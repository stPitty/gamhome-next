import styled, { css } from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";

const PropertyValuation = () => {
  return (
    <Wrapper>
      <Container>
        <InfoBlock>
          <TextContainer>
            <Header>Оценка недвижимости</Header>
            <DescText>
              Подготовим отчёт от аккредитованных банками компаний. Персональный
              менеджер ответит на все вопросы и запросит необходимую информацию
              для оценки. Готовый отчёт вышлем на почту и загрузим в личный
              кабинет банка. <br />
              <br /> Эта информация предоставляется банку, чтобы купить в
              ипотеку или застраховать недвижимость.
            </DescText>
          </TextContainer>
          <StyledButton buttonSize={ButtonSize.LARGE}>
            Заказать от 2 500 ₽
          </StyledButton>
        </InfoBlock>
        <ImagesContainer>
          <Image size={1} image="/images/buy_flat_1.png" />
          <Image size={2} image="/images/buy_flat_2.png" />
          <Image size={3} image="/images/buy_flat_3.png" />
          <Image size={4} image="/images/buy_flat_4.png" />
        </ImagesContainer>
      </Container>
    </Wrapper>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  width: 639px;
  height: 456px;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

const Image = styled.div<{ image: string; size: 1 | 2 | 3 | 4 }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  border-radius: 24px;
  ${({ size }) => {
    switch (size) {
      case 1:
        return css`
          width: 253px;
          height: 327px;
        `;
      case 2:
        return css`
          width: 363px;
          height: 266px;
        `;
      case 3:
        return css`
          width: 353px;
          height: 260px;
          position: relative;
          left: 100px;
          bottom: 180px;
        `;
      case 4:
        return css`
          width: 213px;
          height: 319px;
          position: relative;
          right: 12px;
          bottom: 190px;
        `;
    }
  }}
`;

const StyledButton = styled(Button)`
  width: 214px;
  height: 56px;
`;

const DescText = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 527px;
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  row-gap: 40px;
`;

const Container = styled.div`
  display: flex;
  width: 1247px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
`;

export default PropertyValuation;
