import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { wantToLendFlat } from "../../../redux/slicers/modalStateSlicer";
import React, { memo } from "react";
import AdaptiveTextDivider from "../../UI/adaptive-text-divider/AdaptiveTextDivider";
import { TCookiePopUp } from "../../../redux/slicers/types";

const CardWitsImage = React.forwardRef((_, ref) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(wantToLendFlat());
  };

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
      <Container>
        <ColumnImage />
        <TextWrapper>
          <HeaderText>
            Съезжаете <AdaptiveTextDivider sm={true} xs={true} />с квартиры?
            <AdaptiveTextDivider md={true} />
            <MarkedText>Заплатим 10%</MarkedText>,{" "}
            <AdaptiveTextDivider lg={true} sm={true} xs={true} />
            за рекомендацию нас собственнику
          </HeaderText>
          <Text>
            Мы быстро найдем новых жильцов, а вы получите 10% от нашей комиссии
          </Text>
          <StyledButton
            onClick={handleButtonClick}
            buttonSize={ButtonSize.LARGE}
          >
            Оставить заявку
          </StyledButton>
        </TextWrapper>
        <RowImage />
      </Container>
    </>
  );
});

const StyledButton = styled(Button)`
  width: 192px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ObservableComponent = styled.div<{ isAccepted: boolean }>`
  margin-top: ${({ isAccepted }) => (isAccepted ? "166px" : "238px")};
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin-top: ${({ isAccepted }) => (isAccepted ? "154px" : "226px")};
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

const Image = styled.div`
  width: 528px;
  height: 503px;
  border-radius: 40px;
`;

const RowImage = styled(Image)`
  background: no-repeat url("/images/unboxing.webp") -335px 0;
  background-size: auto 650px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 378px;
    background-position: -445px 0;
    background-size: auto 650px;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const ColumnImage = styled(Image)`
  background-size: cover;
  background: no-repeat url("/images/unboxing.webp") center;
  display: none;
  @media screen and (max-width: 1023px) {
    display: block;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: block;
    width: 688px;
    height: 373px;
    background-position: right 0;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 375px;
    height: 387px;
    border-radius: 0;
    background-position: -290px 0;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    height: 338px;
    background-size: auto 480px;
    border-radius: 0;
    background-position: -298px 0;
  }
`;

const Text = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin-bottom: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 430px;
  }
  @media screen and (max-width: 374px) {
    width: 280px;
  }
`;

const MarkedText = styled.span`
  color: ${BrandColor.BRAND_MARKED_TEXT};
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0 0 20px;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (max-width: 374px) {
    font-weight: 500;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 672px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 542px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    padding-bottom: 64px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    padding-bottom: 64px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 182px 64px 64px;
  border-radius: 48px;
  background-color: ${BlackColor.BLACK_SECONDARY};
  background-image: url("/images/text-mark.webp");
  background-size: 301px;
  background-repeat: no-repeat;
  background-position: left 53px bottom 344px;
  column-gap: 112px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 32px;
    padding: 182px 36px 64px;
    background-position: left 28px bottom 385px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex-direction: column;
    padding: 160px 40px 64px;
    row-gap: 40px;
    background-position: left 43px bottom 228px;
    background-size: 239px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0;
    row-gap: 40px;
    background-size: 239px;
    border-radius: 24px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    background-position: 7px 502px;
  }
  @media screen and (max-width: 374px) {
    background-position: 5px 453px;
  }
`;

CardWitsImage.displayName = "CardWitsImage";

export default memo(CardWitsImage);
