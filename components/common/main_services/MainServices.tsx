import styled from "styled-components";
import { cardsData } from "./constants";
import Cards from "./Card";
import React from "react";
import { Hook } from "../../../common/routes";
import { BlackColor } from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TCookiePopUp } from "../../../redux/slicers/types";

const MainServices = React.forwardRef((_, ref) => {
  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  return (
    <>
      <ObservableComponentWrapper>
        <ObservableComponent
          isAccepted={isCookieAccepted}
          ref={ref as React.RefObject<HTMLDivElement>}
        />
      </ObservableComponentWrapper>
      <Container id={Hook.SERVICES}>
        <HeaderText>Услуги</HeaderText>
        <Cards data={cardsData} />
      </Container>
    </>
  );
});

const ObservableComponent = styled.div<{ isAccepted: boolean }>`
  margin-top: ${({ isAccepted }) => (isAccepted ? "54px" : "126px")};
`;

const ObservableComponentWrapper = styled.div`
  position: sticky;
  top: 0;
  max-width: 0;
  max-height: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
  @media screen and (max-width: 1023px) {
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
  @media screen and (max-width: 767px) {
    padding-top: 64px;
    margin: 0;
  }
`;

MainServices.displayName = "MainServices";

export default MainServices;
