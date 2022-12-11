import styled from "styled-components";
import { BlackColor } from "../../common/enums";
import { cardsData } from "./constants";
import Cards from "./Card";
import { Hook } from "../../common/routes";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";

const MainServices = React.forwardRef((_, ref) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ObservableComponent ref={ref as React.RefObject<HTMLDivElement>} />
      <Container id={Hook.SERVICES}>
        <HeaderText>Услуги</HeaderText>
        <Cards data={cardsData} />
      </Container>
    </>
  );
});

const ObservableComponent = styled.div`
  top: 54px;
  position: relative;
  visibility: hidden;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 64px;
  padding-top: 112px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    margin: 0 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
    margin: 0;
  }
`;

MainServices.displayName = "MainServices";

export default MainServices;
