import styled from "styled-components";
import { BlackColor } from "../../common/enums";
import { cardsData } from "./constants";
import Cards from "./Card";
import { Hook } from "../../common/routes";

const MainServices = () => {
  return (
    <Container id={Hook.SERVICES}>
      <HeaderText>Услуги</HeaderText>
      <Cards data={cardsData} />
    </Container>
  );
};

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 64px;
  padding-top: 112px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    margin: 0 36px;
  }
`;

export default MainServices;
