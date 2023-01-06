import styled from "styled-components";
import {
  CardType,
  ExmDeal,
  MakeDeal,
  PrimaryContent,
  SecondaryContent,
} from "./enums";
import { Hook, Route } from "../../../common/routes";
import {
  openBuyCheckListInformation,
  openBuyCheckListWithEmail,
  openFreeDocsInformation,
  openFreeDocsWithEmail,
} from "../../../redux/slicers/modalStateSlicer";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { useAppSelector } from "../../../redux/hooks";
import { TPathName } from "../../../redux/slicers/types";
import { exmDealDesc, makeDealDesc } from "./constants";
import UsefulServiceCard from "../../UI/useful_service_card/UsefulServiceCard";
import UsefulServicesHeader from "../useful_services_header/UsefulServicesHeader";
import CardsWrapper from "../../UI/cards_wrapper/CardsWrapper";

const ServicesBlock = () => {
  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  return (
    <Container id={Hook.USEFUL_DOCS}>
      <UsefulServicesHeader>
        Полезные
        <AdaptiveTextDivider sm={true} xs={true} /> документы
      </UsefulServicesHeader>
      <CardsWrapper>
        {pathName === Route.RENT ? (
          <>
            <UsefulServiceCard
              cardType={CardType.PRIMARY}
              headerText={PrimaryContent.HEADER}
              descText={PrimaryContent.DESC}
              buttonText={PrimaryContent.BUTTON_TEXT}
              primaryBtnAction={openBuyCheckListWithEmail}
              secondaryBtnAction={openBuyCheckListInformation}
            />
            <UsefulServiceCard
              cardType={CardType.SECONDARY}
              headerText={SecondaryContent.HEADER}
              descText={SecondaryContent.DESC}
              buttonText={SecondaryContent.BUTTON_TEXT}
              primaryBtnAction={openFreeDocsWithEmail}
              secondaryBtnAction={openFreeDocsInformation}
            />
          </>
        ) : (
          <>
            <UsefulServiceCard
              cardType={CardType.PRIMARY}
              headerText={MakeDeal.HEADER}
              buttonText={MakeDeal.BUTTON_TEXT}
              descArr={makeDealDesc}
              primaryBtnAction={openBuyCheckListWithEmail}
              secondaryBtnAction={openBuyCheckListInformation}
              contentType="buy"
            />
            <UsefulServiceCard
              cardType={CardType.SECONDARY}
              headerText={ExmDeal.HEADER}
              buttonText={ExmDeal.BUTTON_TEXT}
              descArr={exmDealDesc}
              primaryBtnAction={openFreeDocsWithEmail}
              secondaryBtnAction={openFreeDocsInformation}
              withoutAddBtn={true}
              contentType="buy"
            />
          </>
        )}
      </CardsWrapper>
    </Container>
  );
};

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
