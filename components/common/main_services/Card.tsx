import { CardData } from "./types";
import React, { memo, useCallback } from "react";
import styled from "styled-components";
import { ButtonSize } from "../../UI/button/enums";
import {
  BlackColor,
  BrandColor,
  Font,
  LightBlueColor,
  LinerColor,
  OtherColor,
  PurpleColor,
  WhiteColor,
} from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import VectorArrowSVG from "../../../public/assets/svg/VectorArrowSVG";
import ChevronDoneBoltSVG from "../../../public/assets/svg/ChevronDoneBoltSVG";
import Button from "../../UI/button/Button";
import { CardType } from "./enums";
import { TPathName, TWindowSize } from "../../../redux/slicers/types";
import { Route } from "../../../common/routes";
import { WindowSize } from "../../../redux/slicers/enums";

type Props = {
  data: CardData[];
};

const Cards: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  const handleButtonClick = (buttonAction: Function) => () => {
    dispatch(buttonAction());
  };

  return (
    <Container>
      {data.map((el) => {
        return (
          <CardContainer
            id={el?.anchor ?? ""}
            isRent={pathName === Route.RENT}
            key={el.id}
            cardType={el.cardType}
          >
            <TagContainer isRent={pathName === Route.RENT} cardId={el.id}>
              {el.tagText && (
                <Tag isViolet={!!el.violetTag} cardType={el.cardType}>
                  {el.tagText}
                </Tag>
              )}
            </TagContainer>
            <HeaderWrapper cardId={el.id} isRent={pathName === Route.RENT}>
              <HeaderText
                cardId={el.id}
                isBuy={pathName !== Route.RENT}
                cardType={el.cardType}
              >
                {el.headerText}
              </HeaderText>
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    white-space: pre-line;
  }
  @media screen and (max-width: 375px) {
    white-space: pre-line;
  }
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
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin-bottom: 56px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    row-gap: 16px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 301px;
  }
  @media screen and (max-width: 374px) {
    width: 240px;
  }
`;

const DescText = styled.p<{ cardType: CardType }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED ? BlackColor.BLACK_64 : WhiteColor.WHITE_80};
  margin: 0;
  @media screen and (max-width: 767px) {
    margin-top: 12px;
  }
`;

const CostText = styled.p<{ cardType: CardType }>`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED ? BrandColor.BRAND : WhiteColor.WHITE};
  margin: 0;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    font-weight: 600;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const HeaderWrapper = styled.div<{ cardId: number; isRent: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 24px 0 40px;
  @media screen and (max-width: 1023px) {
    margin-top: ${({ cardId, isRent }) => cardId === 1 && isRent && "0"};
    margin-bottom: 32px;
  }
`;

const HeaderText = styled.p<{
  cardType: CardType;
  cardId: number;
  isBuy: boolean;
}>`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ cardType }) =>
    cardType === CardType.UNFILLED
      ? BlackColor.BLACK_SECONDARY
      : WhiteColor.WHITE};
  margin: 0;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ cardId, isBuy }) =>
      isBuy && (cardId === 2 || cardId === 3) && "125px"};
  }
`;

const TagContainer = styled.div<{ cardId: number; isRent: boolean }>`
  height: 40px;
  @media screen and (max-width: 1439px) {
    height: 64px;
  }
  @media screen and (max-width: 1023px) {
    display: ${({ cardId, isRent }) => cardId === 1 && isRent && "none"};
    height: ${({ cardId, isRent }) => !isRent && "auto"};
  }
`;

const Tag = styled.div<{ cardType: CardType; isViolet: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  border: ${({ cardType, isViolet }) => {
    if (cardType === CardType.UNFILLED) {
      if (isViolet) return `1px solid ${PurpleColor.PURPLE_ACTIVE}`;
      return `1px solid ${OtherColor.DARK_GREEN}`;
    }
  }};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ cardType, isViolet }) => {
    if (cardType === CardType.UNFILLED) {
      if (isViolet) return PurpleColor.PURPLE_ACTIVE;
      return OtherColor.DARK_GREEN;
    } else {
      return BlackColor.BLACK_SECONDARY;
    }
  }};
  background-color: ${({ cardType }) =>
    cardType === CardType.FILLED && LinerColor.LINER_YELLOW_1};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    border-radius: 16px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 16px;
  }
`;

const CardContainer = styled.div<{ cardType: CardType; isRent: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${({ cardType }) =>
    cardType === CardType.FILLED ? `24px}` : "22px"};
  width: 416px;
  height: ${({ isRent }) => (isRent ? "916px" : "1276px")};
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
    height: ${({ isRent }) => (isRent ? "1172px" : "1692px")};
  }
  @media screen and (max-width: 1023px) {
    height: auto;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ isRent }) => (isRent ? "448px" : "600px")};
    padding: ${({ isRent }) => !isRent && "32px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    padding: ${({ isRent }) => !isRent && "20px"};
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    padding: ${({ isRent }) => !isRent && "16px"};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
  column-gap: 32px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    row-gap: 32px;
  }
  @media screen and (max-width: 767px) {
    row-gap: 32px;
  }
`;

export default memo(Cards);
