import styled from "styled-components";
import { BlackColor, BrandColor, Font, WhiteColor } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import { Hook } from "../../common/routes";
import React from "react";

const WebinarBlock = React.forwardRef((_, ref) => {
  return (
    <>
      <ObservableComponentWrapper>
        <ObservableComponent ref={ref as React.RefObject<HTMLDivElement>} />
      </ObservableComponentWrapper>
      <Container id={Hook.WEBINAR}>
        <ContentContainer>
          <Tag>Бесплатный доступ к вебинару</Tag>
          <HeaderText>
            Узнайте основные риски при аренде квартиры и какие схемы используют
            мошенники
          </HeaderText>
          <Text>
            На вебинаре разобраны основные методы мошенников и как их вычислить.
            Изучите это видео, чтобы всегда понимать правила съёма квартиры
          </Text>
          <StyledButton
            buttonSize={ButtonSize.LARGE}
            buttonType={ButtonType.PRIMARY_WB}
          >
            Посмотреть видео
          </StyledButton>
        </ContentContainer>
      </Container>
    </>
  );
});

const StyledButton = styled(Button)`
  width: 206px;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 100%;
  }
`;

const ObservableComponent = styled.div`
  margin-top: 150px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin-top: 136px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin-top: -1785px;
    height: 1785px;
  }
`;

const ObservableComponentWrapper = styled.div`
  position: sticky;
  top: 0;
  max-width: 0;
  max-height: 0;
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin: 0;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0;
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  width: 269px;
  align-items: center;
  padding: 8px 16px;
  background: ${WhiteColor.WHITE};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 642px;
  row-gap: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 460px;
    justify-content: flex-end;
    justify-items: flex-end;
    padding-top: 26px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 359px;
  }
`;

const Container = styled.div`
  display: flex;
  background: ${BrandColor.BRAND} no-repeat url("/images/woman-webinar.webp")
    800px 140px;
  padding: 208px 64px 176px;
  border-radius: 48px;
  width: 1440px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding: 182px 36px 100px;
    width: 1024px;
    background-size: 439px;
    background-position: 570px 210px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    background-size: 360px;
    background-position: 405px center;
    width: 768px;
    padding: 192px 40px 96px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    background-size: cover;
    width: 375px;
    padding: 110px 13px 517px;
    border-radius: 24px;
    background: ${BrandColor.BRAND} no-repeat url("/images/mobile-webinar.webp");
    background-position: center bottom 78px;
  }
`;

WebinarBlock.displayName = "WebinarBlock";

export default WebinarBlock;
