import styled from "styled-components";
import { BlackColor, WhiteColor } from "../../common/enums";
import { cardsData } from "./constants";
import Card from "./Card";
import { Hook } from "../../common/routes";

const DiscountsBlock = () => {
  return (
    <Container id={Hook.PARTNERS}>
      <HeaderText>Скидки от партнёров</HeaderText>
      {cardsData.map((el) => (
        <Card data={el} key={el.id} />
      ))}
    </Container>
  );
};

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BlackColor.BLACK_SECONDARY};
  border-radius: 48px;
  z-index: 1;
  padding: 64px;
  row-gap: 40px;
  margin-bottom: -96px;
`;

export default DiscountsBlock;
