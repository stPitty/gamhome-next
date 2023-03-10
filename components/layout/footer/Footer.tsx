import styled from "styled-components";
import Body from "../Body";
import { BlackColor, Font, OtherColor } from "../../../common/enums";
import MenuItems from "../header/MenuItems";
import React from "react";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";

const Footer: React.FC = () => {
  return (
    <Container>
      <InnerWrapper>
        <StyledBody />
        <TelephoneNumberText href="tel:88009999999">
          8 800 999-99-99
        </TelephoneNumberText>
        <StyledMenuItems />
        <TextContainer>
          <ConditionsText>
            Использование сервиса означает согласие
            <AdaptiveTextDivider lg={true} sm={true} xs={true} /> с{" "}
            <TextLink>Пользовательским соглашением</TextLink>
            <AdaptiveTextDivider xs={true} /> и
            <TextLink> Политикой конфиденциальности</TextLink>
          </ConditionsText>
          <br />
          <Text>Иллюстрации взяты с icons8.com</Text>
        </TextContainer>
      </InnerWrapper>
    </Container>
  );
};

const TelephoneNumberText = styled.a`
  display: none;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  transition: 0.1s all linear;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
  @media screen and (max-width: 767px) {
    padding-left: 13px;
    display: block;
  }
`;

const StyledBody = styled(Body)`
  padding-top: 0;
  padding-bottom: 0;
`;

const StyledMenuItems = styled(MenuItems)`
  display: none;
  width: fit-content;
  @media screen and (max-width: 1439px) {
    display: flex;
  }
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    padding-left: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 6px;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin-top: 6px;
    padding-left: 13px;
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    padding-left: 16px;
    width: 288px;
  }
`;

const TextLink = styled.a`
  color: ${OtherColor.LINK};
  cursor: pointer;
  &:hover {
    color: ${OtherColor.LINK_HOVER};
    transition: 0.1s linear all;
  }
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  margin: 0;
`;

const ConditionsText = styled(Text)`
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 388px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding-left: 36px;
    padding-right: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
    margin-top: 6px;
    align-items: flex-start;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding-left: 13px;
    padding-right: 13px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  max-width: 1360px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    row-gap: 24px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    row-gap: 24px;
  }
  @media screen and (max-width: 767px) {
    row-gap: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 64px;
  padding-top: 112px;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    padding-bottom: 56px;
    row-gap: 24px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding-top: 96px;
    row-gap: 24px;
  }
  @media screen and (max-width: 767px) {
    row-gap: 16px;
    padding-bottom: 48px;
    padding-top: 64px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
  }
  @media screen and (max-width: 374px) {
  }
`;

export default Footer;
