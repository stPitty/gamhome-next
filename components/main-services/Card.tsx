import { CardData } from "./types";
import React, { memo } from "react";
import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  LightBlueColor,
  LinerColor,
  OtherColor,
  WhiteColor,
} from "../../common/enums";
import { CardType } from "./enums";
import ChevronDoneBoltSVG from "../../public/assets/svg/ChevronDoneBoltSVG";
import Button from "../UI/button/Button";
import { ButtonSize } from "../UI/button/enums";
import VectorArrowSVG from "../../public/assets/svg/VectorArrowSVG";
import { useAppDispatch } from "../../redux/hooks";

type Props = {
  data: CardData[];
};

const Cards: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (buttonAction: Function) => () => {
    dispatch(buttonAction());
  };

  return (
    <Container>
      {data.map((el) => {
        return (
          <CardContainer key={el.id} cardType={el.cardType}>
            <TagContainer>
              {el.tagText && <Tag cardType={el.cardType}>{el.tagText}</Tag>}
            </TagContainer>
            <HeaderWrapper>
              <HeaderText cardType={el.cardType}>{el.headerText}</HeaderText>
              <CostText cardType={el.cardType}>{el.cost}</CostText>
              <DescText cardType={el.cardType}>{el.descText}</DescText>
            </HeaderWrapper>
            <PointsContainer>
              {el.plusService && (
                <PointWrapper>
                  <IconWrapper isArrow={true} cardType={el.cardType}>
                    <VectorArrowSVG />
                  </IconWrapper>
                  <PointText cardType={el.cardType} isArrow={true}>
                    {el.plusService}
                  </PointText>
                </PointWrapper>
              )}
              {el.points.map(($el) => {
                return (
                  <PointWrapper key={$el.id}>
                    <IconWrapper cardType={el.cardType}>
                      <ChevronDoneBoltSVG />
                    </IconWrapper>
                    <PointText cardType={el.cardType}>{$el.text}</PointText>
                  </PointWrapper>
                );
              })}
            </PointsContainer>
            <ButtonContainer>
              <Button
                onClick={handleButtonClick(el.buttonAction)}
                buttonType={el.buttonType}
                buttonSize={ButtonSize.LARGE}
              >
                Оставить заявку
              </Button>
            </ButtonContainer>
          </CardContainer>
        );
      })}
    </Container>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  flex-grow: 1;
`;

const IconWrapper = styled.div<{
  cardType: CardType;
  isArrow?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: ${({ cardType, isArrow }) =>
    cardType === CardType.UNFILLED || isArrow
      ? BrandColor.BRAND
      : WhiteColor.WHITE};
  & svg path {
    fill: ${({ cardType, isArrow }) =>
      cardType === CardType.UNFILLED || isArrow
        ? WhiteColor.WHITE
        : BrandColor.BRAND};
  }
`;

const PointText = styled.p<{ cardType: CardType; isArrow?: boolean }>`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${({ cardType, isArrow }) => {
    if (cardType === CardType.UNFILLED) {
      return BlackColor.BLACK_64;
    } else if (isArrow) {
      return WhiteColor.WHITE;
    } else {
      return WhiteColor.WHITE_80;
    }
  }};
`;

const PointWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 12px;
`;

const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 100%;
`;

const DescText = styled.p<{ cardType: CardType }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED ? BlackColor.BLACK_64 : WhiteColor.WHITE_80};
  margin: 0;
`;

const CostText = styled.p<{ cardType: CardType }>`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED ? BrandColor.BRAND : WhiteColor.WHITE};
  margin: 0;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 24px 0 40px;
`;

const HeaderText = styled.p<{ cardType: CardType }>`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED
      ? BlackColor.BLACK_SECONDARY
      : WhiteColor.WHITE};
  margin: 0;
`;

const TagContainer = styled.div`
  height: 40px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    height: 64px;
  }
`;

const Tag = styled.div<{ cardType: CardType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: ${({ cardType }) =>
    cardType === CardType.UNFILLED && `1px solid ${OtherColor.DARK_GREEN}`};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED
      ? OtherColor.DARK_GREEN
      : BlackColor.BLACK_SECONDARY};
  background-color: ${({ cardType }) =>
    cardType === CardType.FILLED && LinerColor.LINER_YELLOW_1};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    border-radius: 16px;
  }
`;

const CardContainer = styled.div<{ cardType: CardType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  width: 416px;
  height: 916px;
  background: ${WhiteColor.WHITE};
  border-top: 2px solid ${BrandColor.BRAND};
  border-bottom: 2px solid ${BrandColor.BRAND};
  border: ${({ cardType }) =>
    cardType !== CardType.FILLED && `2px solid ${LightBlueColor.LB_100}`};
  border-radius: 24px;
  background-color: ${({ cardType }) =>
    cardType === CardType.FILLED && BrandColor.BRAND};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 296px;
    height: 1172px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
  column-gap: 32px;
`;

export default memo(Cards);
