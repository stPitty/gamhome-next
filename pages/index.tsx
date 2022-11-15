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
      <ColumnWrapper>
        <InfoWrapper>
          <FlatBlock />
          <AddInfoBlock />
          <ServicesBlock />
        </InfoWrapper>
        <CheckOwnerBlock />
        <CardWitsImage />
        <MainServices />
        <DiscountsBlock />
        <WebinarBlock />
      </ColumnWrapper>
      <PriceBlock />
    </Container>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 864px;
  padding: 21px 64px 0;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

HomePage.PageLayout = PageLayout;

export default HomePage;
