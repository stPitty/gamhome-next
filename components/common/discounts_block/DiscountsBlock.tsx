import styled from "styled-components";
import { BlackColor, WhiteColor } from "../../../common/enums";
import { cardsData } from "./constants";
import Card from "./Card";
import { Hook } from "../../../common/routes";
import React from "react";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { useAppSelector } from "../../../redux/hooks";
import { TCookiePopUp } from "../../../redux/slicers/types";

const DiscountsBlock = () => {
  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  return (
    <Wrapper id={Hook.PARTNERS}>
      <Container>
        <ContentWrapper>
          <HeaderText>
            Скидки
            <AdaptiveTextDivider xs={true} /> от партнёров
          </HeaderText>
          {cardsData.map((el) => (
            <Card data={el} key={el.id} />
          ))}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 64px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0 40px;
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin: 0;
    width: 330px;
  }
  @media screen and (max-width: 374px) {
    margin: 0;
  }
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${BlackColor.BLACK_SECONDARY};
  border-radius: 48px;
  z-index: 1;
  padding: 64px;
  margin-bottom: -96px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding-left: 36px;
    padding-right: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 56px 40px;
    margin-bottom: -80px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: -48px;
    border-radius: 24px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 40px 13px 38px;
  }
  @media screen and (max-width: 374px) {
    padding: 40px 16px;
  }
`;

export default DiscountsBlock;
