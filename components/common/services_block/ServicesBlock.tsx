import styled from "styled-components";
import UsefulDocsCard from "./UsefulDocsCard";
import { CardType, PrimaryContent, SecondaryContent } from "./enums";
import { Hook } from "../../../common/routes";
import {
  openBuyCheckListInformation,
  openBuyCheckListWithEmail,
  openFreeDocsInformation,
  openFreeDocsWithEmail,
} from "../../../redux/slicers/modalStateSlicer";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { BlackColor } from "../../../common/enums";

const ServicesBlock = () => {
  return (
    <Container id={Hook.USEFUL_DOCS}>
      <HeaderTextContainer>
        <HeaderText>
          Полезные
          <AdaptiveTextDivider sm={true} xs={true} /> документы
        </HeaderText>
      </HeaderTextContainer>
      <CardsWrapper>
        <UsefulDocsCard
          cardType={CardType.PRIMARY}
          headerText={PrimaryContent.HEADER}
          descText={PrimaryContent.DESC}
          buttonText={PrimaryContent.BUTTON_TEXT}
          primaryBtnAction={openBuyCheckListWithEmail}
          secondaryBtnAction={openBuyCheckListInformation}
        />
        <UsefulDocsCard
          cardType={CardType.SECONDARY}
          headerText={SecondaryContent.HEADER}
          descText={SecondaryContent.DESC}
          buttonText={SecondaryContent.BUTTON_TEXT}
          primaryBtnAction={openFreeDocsWithEmail}
          secondaryBtnAction={openFreeDocsInformation}
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
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

const HeaderTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-items: flex-start;
  justify-content: flex-start;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 0 0 40px;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 767px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin-left: 13px;
  }
  @media screen and (max-width: 374px) {
    margin-left: 15px;
  }
`;

const Container = styled.div`
  padding-top: 112px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 64px;
  }
`;

export default ServicesBlock;
