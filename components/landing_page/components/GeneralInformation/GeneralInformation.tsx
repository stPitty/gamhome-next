import styled from "styled-components";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import Card from "../../UI/Card/Card";
import { CARD_1, CARD_2, CARD_3 } from "../../UI/Card/constants";

const GeneralInformation = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <HeaderMainText>
            Надежный партнeр <AdaptiveTextDivider lg={true} />
            в&nbsp;организации
            <AdaptiveTextDivider xl={true} /> сделок{" "}
            <AdaptiveTextDivider lg={true} />
            с&nbsp;недвижимостью
          </HeaderMainText>
          <HeaderTextSub>
            Выполняем любые операции с&nbsp;недвижимостью:{" "}
            <AdaptiveTextDivider xl={true} lg={true} />
            купля, продажа, обмен и&nbsp;аренда жилой недвижимости
          </HeaderTextSub>
        </HeaderWrapper>
        <CardsWrapper>
          <Card cardData={CARD_1} />
          <Card cardData={CARD_2} />
          <Card cardData={CARD_3} />
        </CardsWrapper>
      </Container>
    </Wrapper>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 32px;
`;

const HeaderTextSub = styled.h2`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #242424;
`;

const HeaderMainText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  color: #242424;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  row-gap: 64px;
  padding: 0 64px;
  @media screen and (max-width: 1439px) {
    padding: 0 36px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default GeneralInformation;
