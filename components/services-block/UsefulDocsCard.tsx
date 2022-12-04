import React, { memo } from "react";
import styled, { css } from "styled-components";
import { CardType, PrimaryContent, SecondaryContent } from "./enums";
import {
  BlackColor,
  BrandColor,
  Font,
  LightBlueColor,
  WhiteColor,
} from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import StarSVG from "../../public/assets/svg/StarSVG";
import DocumentSVG from "../../public/assets/svg/DocumentSVG";
import { useAppDispatch } from "../../redux/hooks";

type Props = {
  cardType: CardType;
  headerText: PrimaryContent | SecondaryContent;
  descText: PrimaryContent | SecondaryContent;
  buttonText: PrimaryContent | SecondaryContent;
  primaryBtnAction: () => void;
  secondaryBtnAction: () => void;
};

const UsefulDocsCard: React.FC<Props> = ({
  cardType,
  headerText,
  descText,
  buttonText,
  primaryBtnAction,
  secondaryBtnAction,
}) => {
  const dispatch = useAppDispatch();

  const buyBtnType =
    cardType === CardType.PRIMARY
      ? ButtonType.PRIMARY_WHITE
      : ButtonType.OUTLINE;
  const moreBtnType =
    cardType === CardType.PRIMARY ? ButtonType.FLAT_WHITE : ButtonType.FLAT;

  const handleOpenModal = (action: any) => () => {
    dispatch(action());
  };

  return (
    <Container cardType={cardType}>
      <Body>
        <HeaderText cardType={cardType}>{headerText}</HeaderText>
        <DescText cardType={cardType}>{descText}</DescText>
        <ButtonsContainer>
          <Button
            width={207}
            buttonSize={ButtonSize.MEDIUM}
            buttonType={buyBtnType}
            onClick={handleOpenModal(primaryBtnAction)}
          >
            {buttonText}
          </Button>
          <Button
            width={123}
            buttonType={moreBtnType}
            buttonSize={ButtonSize.MEDIUM}
            onClick={handleOpenModal(secondaryBtnAction)}
          >
            Подробнее
          </Button>
        </ButtonsContainer>
      </Body>
      <IconWrapper cardType={cardType}>
        {cardType === CardType.PRIMARY ? <StarSVG /> : <DocumentSVG />}
      </IconWrapper>
    </Container>
  );
};

const IconWrapper = styled.div<{ cardType: CardType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 100px;
  background-color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? WhiteColor.WHITE : LightBlueColor.LB_100};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 6px;
  margin-top: 32px;
`;

const DescText = styled.p<{ cardType: CardType }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? WhiteColor.WHITE_80 : BlackColor.BLACK_80};
`;

const HeaderText = styled.p<{ cardType: CardType }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 16px;
  color: ${({ cardType }) =>
    cardType === CardType.PRIMARY
      ? WhiteColor.WHITE
      : BlackColor.BLACK_SECONDARY};
`;

const Body = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Container = styled.div<{ cardType: CardType }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  width: 640px;
  border-radius: 24px;
  background-color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? BrandColor.BRAND : "none"};
  ${({ cardType }) =>
    cardType === CardType.SECONDARY &&
    css`
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 20px 20px rgba(0, 0, 0, 0.08);
    `}
`;

export default memo(UsefulDocsCard);
