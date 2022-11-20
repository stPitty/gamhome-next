import styled from "styled-components";
import { BlackColor } from "../../common/enums";
import UsefulDocsCard from "./UsefulDocsCard";
import { CardType, PrimaryContent, SecondaryContent } from "./enums";

const ServicesBlock = () => {
  return (
    <Container>
      <HeaderText>Полезные документы</HeaderText>
      <CardsWrapper>
        <UsefulDocsCard
          cardType={CardType.PRIMARY}
          headerText={PrimaryContent.HEADER}
          descText={PrimaryContent.DESC}
          buttonText={PrimaryContent.BUTTON_TEXT}
        />
        <UsefulDocsCard
          cardType={CardType.SECONDARY}
          headerText={SecondaryContent.HEADER}
          descText={SecondaryContent.DESC}
          buttonText={SecondaryContent.BUTTON_TEXT}
        />
      </CardsWrapper>
    </Container>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 32px;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 0 0 40px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 64px;
`;

export default ServicesBlock;
