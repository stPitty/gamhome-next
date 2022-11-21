import { ComponentWithLayout } from "../common/types";
import PageLayout from "../components/layout";
import styled from "styled-components";
import FlatBlock from "../components/flat-block";
import PriceBlock from "../components/price-block";
import AddInfoBlock from "../components/add-info-block";
import ServicesBlock from "../components/services-block";
import MainServices from "../components/main-services";
import CheckOwnerBlock from "../components/check-owner-block";
import CardWitsImage from "../components/card-with-image";
import DiscountsBlock from "../components/discounts-block";
import WebinarBlock from "../components/WebinarBlock";

const HomePage: ComponentWithLayout = () => {
  return (
    <Container>
      <InfoWrapperRow>
        <InfoWrapperColumn>
          <FlatBlock />
          <AddInfoBlock />
        </InfoWrapperColumn>
        <PriceBlock />
      </InfoWrapperRow>
      <ServicesBlock />
      <CheckOwnerBlock />
      <CardWitsImage />
      <MainServices />
      <DiscountsBlock />
      <WebinarBlock />
    </Container>
  );
};

const InfoWrapperRow = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
  justify-content: center;
  padding: 0 64px;
  height: 100%;
  column-gap: 32px;
`;

const InfoWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 0 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
`;

HomePage.PageLayout = PageLayout;

export default HomePage;
