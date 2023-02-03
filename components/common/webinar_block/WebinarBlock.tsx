import styled, { css } from "styled-components";
import React from "react";
import { Hook } from "../../../common/routes";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TCookiePopUp } from "../../../redux/slicers/types";
import Button from "../../UI/button/Button";

const WebinarBlock = React.forwardRef((_, ref) => {
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
      <Container id={Hook.WEBINAR}>
        <ContentContainer>
          <Tag>Бесплатный доступ к&nbsp;вебинару</Tag>
          <HeaderText>
            Узнайте основные риски при&nbsp;аренде квартиры&nbsp;и&nbsp;какие
            схемы используют мошенники
          </HeaderText>
          <Text>
            На&nbsp;вебинаре разобраны основные методы мошенников
            и&nbsp;как&nbsp;их&nbsp;вычислить. Изучите это&nbsp;видео, чтобы
            всегда понимать правила съёма квартиры
          </Text>
          <StyledButton
            buttonSize={ButtonSize.LARGE}
            buttonType={ButtonType.PRIMARY_WB}
          >
            Посмотреть видео
          </StyledButton>
        </ContentContainer>
        <PhotoWrapper>
          <Image />
          <Badge img={1} />
          <Badge img={2} />
          <Badge img={3} />
          <Badge img={4} />
          <Badge img={5} />
        </PhotoWrapper>
      </Container>
    </>
  );
});

const ObservableComponent = styled.div<{ isAccepted: boolean }>`
  margin-top: ${({ isAccepted }) => (isAccepted ? "150px" : "222px")};
  width: 100px;
  height: 100px;
  background: red;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin-top: ${({ isAccepted }) => (isAccepted ? "136px" : "208px")};
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

const Badge = styled.div<{ img: 1 | 2 | 3 | 4 | 5 }>`
  background-repeat: no-repeat;
  position: relative;
  ${({ img }) => {
    switch (img) {
      case 1:
        return css`
          min-width: 278px;
          background-image: url("/images/badges/badge_1.webp");
          left: 115px;
          top: 10px;
        `;
      case 2:
        return css`
          min-width: 272px;
          background-image: url("/images/badges/badge_3.webp");
          left: 123px;
          top: 262px;
        `;
      case 3:
        return css`
          min-width: 155px;
          background-image: url("/images/badges/badge_4.webp");
          left: -470px;
          top: 400px;
        `;
      case 4:
        return css`
          min-width: 211px;
          background-image: url("/images/badges/badge_5.webp");
          left: -250px;
          top: 425px;
        `;
      case 5:
        return css`
          min-width: 283px;
          background-image: url("/images/badges/badge_2.webp");
          left: -725px;
          top: 515px;
        `;
    }
  }};
  @media screen and (max-width: 1439px) {
    ${({ img }) => {
      switch (img) {
        case 1:
          return css`
            min-width: 210px;
            background-size: 210px;
            left: 115px;
            top: 0;
          `;
        case 2:
          return css`
            min-width: 203px;
            background-size: 203px;
            left: 95px;
            top: 250px;
          `;
        case 3:
          return css`
            min-width: 155px;
            background-size: 155px;
            left: -310px;
            top: 300px;
          `;
        case 4:
          return css`
            min-width: 168px;
            background-size: 168px;
            left: -250px;
            top: 350px;
          `;
        case 5:
          return css`
            min-width: 170px;
            background-size: 170px;
            left: -535px;
            top: 420px;
          `;
      }
    }};
  }
  @media screen and (max-width: 1023px) {
    ${({ img }) => {
      switch (img) {
        case 1:
          return css`
            min-width: 177px;
            background-size: 177px;
            left: 90px;
            top: 0;
          `;
        case 2:
          return css`
            min-width: 170px;
            background-size: 170px;
            left: 90px;
            top: 210px;
          `;
        case 3:
          return css`
            min-width: 130px;
            background-size: 130px;
            left: -275px;
            top: 250px;
          `;
        case 4:
          return css`
            min-width: 142px;
            background-size: 142px;
            left: -225px;
            top: 300px;
          `;
        case 5:
          return css`
            min-width: 142px;
            background-size: 142px;
            left: -460px;
            top: 355px;
          `;
      }
    }};
  }
  @media screen and (max-width: 767px) {
    ${({ img }) => {
      switch (img) {
        case 1:
          return css`
            left: 100px;
          `;
        case 2:
          return css`
            min-width: 138px;
            background-size: 138px;
            left: 93px;
            top: 200px;
          `;
        case 3:
          return css`
            left: -240px;
          `;
        case 4:
          return css`
            left: -180px;
            top: 300px;
          `;
        case 5:
          return css`
            left: -430px;
          `;
      }
    }};
  }
  @media screen and (max-width: 374px) {
    ${({ img }) => {
      switch (img) {
        case 1:
          return css`
            left: 110px;
          `;
        case 2:
          return css`
            left: 79px;
            top: 215px;
          `;
        case 3:
          return css`
            top: 245px;
            left: -228px;
          `;
        case 4:
          return css`
            left: -200px;
          `;
        case 5:
          return css`
            left: -410px;
          `;
      }
    }};
  }
`;

const Image = styled.div`
  min-width: 438px;
  height: 567px;
  background-image: url("/images/woman-webinar.webp");
  background-repeat: no-repeat;
  background-size: 900px;
  border-radius: 1000px;
  background-position: center 0;
  position: relative;
  left: 570px;
  @media screen and (max-width: 1439px) {
    min-width: 296px;
    height: 437px;
    background-size: 650px;
    top: 20px;
    left: 435px;
  }
  @media screen and (max-width: 1023px) {
    min-width: 248px;
    height: 366px;
    border-radius: 839px;
    background-size: 550px;
    left: 352px;
  }
  @media screen and (max-width: 767px) {
    left: 359px;
  }
  @media screen and (max-width: 374px) {
    left: 364px;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 595px;
  height: 585px;
  justify-content: center;
  @media screen and (max-width: 1439px) {
    width: 403px;
    height: 467px;
    position: relative;
    top: -50px;
  }
  @media screen and (max-width: 1023px) {
    width: 366px;
    height: 391px;
    position: unset;
    margin-top: 20px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0;
    width: 332px;
  }
  @media screen and (max-width: 374px) {
    width: 305px;
  }
`;

const StyledButton = styled(Button)`
  width: 206px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin: 0;
  max-width: 528px;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0;
  @media screen and (max-width: 1023px) {
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
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 359px;
  }
  @media screen and (max-width: 767px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 204px 46px 62px 64px;
  align-items: center;
  border-radius: 48px;
  width: 100%;
  justify-content: center;
  column-gap: 85px;
  background: ${BrandColor.BRAND};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding: 198px 14px 100px 36px;
    column-gap: 75px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 0;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 192px 0 96px 40px;
    column-gap: 0;
    align-items: flex-start;
  }
  @media screen and (max-width: 767px) {
    border-radius: 24px;
    flex-direction: column;
    row-gap: 46px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 112px 13px 70px;
  }
  @media screen and (max-width: 374px) {
    padding: 112px 16px 477px;
    row-gap: 40px;
  }
`;

WebinarBlock.displayName = "WebinarBlock";

export default WebinarBlock;
