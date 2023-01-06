import styled from "styled-components";
import { BlackColor } from "../../../common/enums";
import UsefulServicesHeader from "../../common/useful_services_header/UsefulServicesHeader";
import CardsWrapper from "../../UI/cards_wrapper/CardsWrapper";
import UsefulServiceCard from "../../UI/useful_service_card/UsefulServiceCard";
import { CardType } from "../../common/services_block/enums";
import {
  openBuyCheckListWithEmail,
  openFreeDocsWithEmail,
} from "../../../redux/slicers/modalStateSlicer";
import { Consult, Declaration } from "./enums";
import { consultDesc, declarationDesc } from "./constants";

const TaxHelp = () => {
  return (
    <Container>
      <UsefulServicesHeader>Помощь с налогами</UsefulServicesHeader>
      <CardsWrapper>
        <UsefulServiceCard
          cardType={CardType.PRIMARY}
          headerText={Consult.HEADER}
          buttonText={Consult.BUTTON_TEXT}
          descArr={consultDesc}
          withoutAddBtn={true}
          primaryBtnAction={openBuyCheckListWithEmail}
          contentType="tax"
        />
        <UsefulServiceCard
          cardType={CardType.SECONDARY}
          headerText={Declaration.HEADER}
          buttonText={Declaration.BUTTON_TEXT}
          descArr={declarationDesc}
          withoutAddBtn={true}
          primaryBtnAction={openFreeDocsWithEmail}
          contentType="tax"
        />
      </CardsWrapper>
    </Container>
  );
};

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

export default TaxHelp;
