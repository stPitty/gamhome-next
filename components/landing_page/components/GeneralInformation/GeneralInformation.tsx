import styled from "styled-components";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import Card from "../../UI/Card/Card";
import { CARD_1, CARD_2, CARD_3 } from "../../UI/Card/constants";

const GeneralInformation = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderMainText>
          Надежный партнeр в&nbsp;организации
          <AdaptiveTextDivider xl={true} />
          сделок с&nbsp;недвижимостью
        </HeaderMainText>
        <HeaderTextSub>
          Выполняем любые операции с&nbsp;недвижимостью:{" "}
          <AdaptiveTextDivider xl={true} />
          купля, продажа, обмен и&nbsp;аренда жилой недвижимости
        </HeaderTextSub>
      </HeaderWrapper>
      <CardsWrapper>
        <Card cardData={CARD_1} />
        <Card cardData={CARD_2} />
        <Card cardData={CARD_3} />
      </CardsWrapper>
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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 64px;
  padding: 0 64px;
`;

export default GeneralInformation;
