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
        <ColumnIconWrapper cardType={cardType}>
          {cardType === CardType.PRIMARY ? <StarSVG /> : <DocumentSVG />}
        </ColumnIconWrapper>
        <HeaderText cardType={cardType}>{headerText}</HeaderText>
        <DescText cardType={cardType}>{descText}</DescText>
        <ButtonsContainer>
          <StyledBtnPrim
            cardType={cardType}
            buttonSize={ButtonSize.MEDIUM}
            buttonType={buyBtnType}
            onClick={handleOpenModal(primaryBtnAction)}
          >
            {buttonText}
          </StyledBtnPrim>
          <Button
            buttonType={moreBtnType}
            buttonSize={ButtonSize.MEDIUM}
            onClick={handleOpenModal(secondaryBtnAction)}
          >
            Подробнее
          </Button>
        </ButtonsContainer>
      </Body>
      <RowIconWrapper cardType={cardType}>
        {cardType === CardType.PRIMARY ? <StarSVG /> : <DocumentSVG />}
      </RowIconWrapper>
    </Container>
  );
};

const StyledBtnPrim = styled(Button)<{ cardType: CardType }>`
  min-width: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? "160px" : "203px"};
  height: 44px;
`;

const IconWrapper = styled.div<{ cardType: CardType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 64px;
  height: 64px;
  background-color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? WhiteColor.WHITE : LightBlueColor.LB_100};
`;

const RowIconWrapper = styled(IconWrapper)`
  @media screen and (max-width: 767px) and (min-width: 375px) {
    display: none;
  }
`;

const ColumnIconWrapper = styled(IconWrapper)`
  display: none;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    display: flex;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 374px) {
    display: flex;
    margin-bottom: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 6px;
  margin-top: 32px;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    flex-direction: column;
    width: 100%;
    row-gap: 6px;
  }
  @media screen and (max-width: 374px) {
    flex-direction: column;
    width: 100%;
    row-gap: 6px;
  }
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
  font-weight: 600;
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 300px;
    height: 252px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 528px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 334px;
  }
  @media screen and (max-width: 374px) {
    width: 334px;
  }
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
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 20px 20px rgba(0, 0, 0, 0.08);
    `};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 460px;
    height: 316px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    height: 236px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 374px;
    flex-direction: column;
    padding: 20px;
  }
  @media screen and (max-width: 374px) {
    width: 374px;
    flex-direction: column;
    padding: 20px;
  }
`;

export default memo(UsefulDocsCard);
