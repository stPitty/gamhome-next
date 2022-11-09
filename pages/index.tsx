import { ComponentWithLayout } from "../common/types";
import PageLayout from "../components/layout";
import styled from "styled-components";
import FlatBlock from "../components/flat-block";

const HomePage: ComponentWithLayout = () => {
  return (
    <Container>
      <FlatBlock />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 21px 64px;
`;

HomePage.PageLayout = PageLayout;

export default HomePage;
