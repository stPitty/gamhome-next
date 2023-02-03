import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import { useAppDispatch } from "../../../redux/hooks";
import { wantToLendFlat } from "../../../redux/slicers/modalStateSlicer";
import React, { memo } from "react";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import { Hook } from "../../../common/routes";

const CardWitsImage = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(wantToLendFlat());
  };

  return (
    <Container id={Hook.CARD_WITH_IMG}>
      <ColumnImage />
      <TextWrapper>
        <HeaderText>
          Съезжаете <AdaptiveTextDivider sm={true} xs={true} />с квартиры?
          <AdaptiveTextDivider md={true} />
          <MarkedText>Заплатим 10%</MarkedText>,{" "}
          <AdaptiveTextDivider lg={true} sm={true} xs={true} />
          за&nbsp;рекомендацию нас собственнику
        </HeaderText>
        <Text>
          Мы&nbsp;быстро найдем новых жильцов, а вы получите&nbsp;10%
          от&nbsp;нашей комиссии
        </Text>
        <StyledButton onClick={handleButtonClick} buttonSize={ButtonSize.LARGE}>
          Оставить заявку
        </StyledButton>
      </TextWrapper>
      <RowImage />
    </Container>
  );
};

const StyledButton = styled(Button)`
  width: 192px;
  @media screen and (max-width: 767px) {
    width: 100%;
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
  background: no-repeat url("/images/unboxing.webp") center;
  display: none;
  @media screen and (max-width: 1023px) {
    display: block;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: block;
    width: 688px;
    height: 373px;
    background-position: -62px 0;
    background-size: 750px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 100%;
    height: 387px;
    border-radius: 0;
    background-size: cover;
    background-position: top;
  }
  @media screen and (max-width: 374px) {
    width: 100%;
    height: 338px;
    background-size: 190%;
    border-radius: 0;
    background-position: 75% 0;
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
  background-size: 301px;
  background-repeat: no-repeat;
  background-image: url("/images/text-mark.webp");
  background-position: 0 40px;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
    background-size: 239px 58px;
    background-position: 0 33px;
  }
  @media screen and (max-width: 767px) {
    background-position: 0 78px;
    background-size: 239px 49px;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 182px 64px 64px;
  border-radius: 48px;
  background-color: ${BlackColor.BLACK_SECONDARY};
  column-gap: 112px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 32px;
    padding: 182px 36px 64px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex-direction: column;
    padding: 160px 40px 64px;
    row-gap: 40px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0;
    row-gap: 40px;
    border-radius: 24px;
  }
`;

export default memo(CardWitsImage);
