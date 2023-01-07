import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import Slider from "../../UI/slider/Slider";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import BankCarousel from "./BankCarousel";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import { useMemo } from "react";

const Mortgage = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const minContribution = useMemo(() => {
    if (flatData?.nonFormattedPrice) {
      return Math.floor(flatData.nonFormattedPrice * 0.1);
    }
  }, [flatData?.nonFormattedPrice]);

  const maxContribution = useMemo(() => {
    if (flatData?.nonFormattedPrice) {
      return Math.floor(flatData.nonFormattedPrice * 0.9);
    }
  }, [flatData?.nonFormattedPrice]);

  const defContribution = useMemo(() => {
    if (flatData?.nonFormattedPrice) {
      return Math.floor(flatData.nonFormattedPrice * 0.2);
    }
  }, [flatData?.nonFormattedPrice]);

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
          <SliderWrapper>
            <Slider
              title="Стоимость жилья"
              min={500_000}
              max={100_000_000}
              defaultValue={flatData?.nonFormattedPrice}
            />
            <Slider
              title="Первоначальный взнос"
              min={minContribution}
              max={maxContribution}
              defaultValue={defContribution}
            />
            <Slider title="Срок ипотеки" min={1} max={30} defaultValue={20} />
          </SliderWrapper>
          <StyledButton buttonSize={ButtonSize.LARGE}>
            Связаться с менеджером
          </StyledButton>
        </SliderContainer>
        <BankCarousel />
      </Container>
    </Wrapper>
  );
};

const SliderWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

const StyledButton = styled(Button)`
  width: 260px;
  height: 64px;
  white-space: nowrap;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 236px;
    height: 44px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  column-gap: 32px;
  align-items: center;
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 952px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 112px;
`;

export default Mortgage;
