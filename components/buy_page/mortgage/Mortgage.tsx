import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import Slider from "../../UI/slider/Slider";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import BankCarousel from "./BankCarousel";

const Mortgage = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderText>Ипотека со скидкой до 0,7%</HeaderText>
          <SubHeader>
            Сниженная ипотечная ставка для наших клиентов, рассчитайте
            ежемесячный платёж сразу в нескольких банках
          </SubHeader>
        </HeaderContainer>
        <SliderContainer>
          <Slider
            title="Стоимость жилья"
            min={0}
            max={99_999_999}
            defaultValue={65_500_500}
          />
          <Slider
            title="Первоначальный взнос"
            min={0}
            max={99_999_999}
            defaultValue={5_500_500}
          />
          <Slider title="Срок ипотеки" min={0} max={50} defaultValue={20} />
          <StyledButton buttonSize={ButtonSize.LARGE}>
            Связаться с менеджером
          </StyledButton>
        </SliderContainer>
        <BankCarousel />
      </Container>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  width: 260px;
  height: 64px;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

const SubHeader = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  width: 525px;
`;

const HeaderText = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  row-gap: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1312px;
  row-gap: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 112px;
`;

export default Mortgage;
