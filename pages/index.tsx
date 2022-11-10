import { ComponentWithLayout } from "../common/types";
import PageLayout from "../components/layout";
import styled from "styled-components";
import FlatBlock from "../components/flat-block";
import PriceBlock from "../components/price-block";
import AddInfoBlock from "../components/add-info-block";

const HomePage: ComponentWithLayout = () => {
  return (
    <Container>
      <ColumnWrapper>
        <FlatBlock />
        <AddInfoBlock />
      </ColumnWrapper>
      <PriceBlock />
    </Container>
  );
};

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 864px;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 21px 64px;
`;

HomePage.PageLayout = PageLayout;

export default HomePage;
