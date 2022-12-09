import styled from "styled-components";
import { BlackColor, WhiteColor } from "../../common/enums";
import { cardsData } from "./constants";
import Card from "./Card";
import { Hook } from "../../common/routes";
import React from "react";

const DiscountsBlock = React.forwardRef((_, ref) => {
  return (
    <Wrapper id={Hook.PARTNERS}>
      <Container>
        <HeaderText>Скидки от партнёров</HeaderText>
        {cardsData.map((el) => (
          <Card data={el} key={el.id} />
        ))}
      </Container>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  padding-top: 112px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0 40px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding-left: 36px;
    padding-right: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 56px 40px;
    margin-bottom: -80px;
  }
`;

DiscountsBlock.displayName = "DiscountsBlock";

export default DiscountsBlock;
