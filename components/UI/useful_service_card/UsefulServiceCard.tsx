import {
  CardType,
  ExmDeal,
  MakeDeal,
  PrimaryContent,
  SecondaryContent,
} from "../../common/services_block/enums";
import { DescText as DescTextType } from "../modal/types";
import React, { memo } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { ButtonSize, ButtonType } from "../button/enums";
import StarSVG from "../../../public/assets/svg/StarSVG";
import DocumentSVG from "../../../public/assets/svg/DocumentSVG";
import Button from "../button/Button";
import styled, { css } from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  LightBlueColor,
  WhiteColor,
} from "../../../common/enums";
import { Consult, Declaration } from "../../buy_page/tax_help/enums";
import FolderSVG from "../../../public/assets/svg/FolderSVG";
import HomeSVG from "../../../public/assets/svg/HomeSVG";

type Props = {
  cardType: CardType;
  headerText:
    | PrimaryContent
    | SecondaryContent
    | MakeDeal
    | ExmDeal
    | Consult
    | Declaration;
  descText?:
    | PrimaryContent
    | SecondaryContent
    | MakeDeal
    | ExmDeal
    | Consult
    | Declaration;
  buttonText:
    | PrimaryContent
    | SecondaryContent
    | MakeDeal
    | ExmDeal
    | Consult
    | Declaration;
  descArr?: DescTextType[];
  primaryBtnAction?: () => void;
  secondaryBtnAction?: () => void;
  withoutAddBtn?: boolean;
  contentType?: "rent" | "buy" | "tax";
};

const UsefulServiceCard: React.FC<Props> = ({
  cardType,
  headerText,
  descText,
  buttonText,
  primaryBtnAction,
  secondaryBtnAction,
  withoutAddBtn,
  descArr,
  contentType = "rent",
}) => {
  const dispatch = useAppDispatch();

  const buyBtnType =
    cardType === CardType.PRIMARY
      ? ButtonType.PRIMARY_WHITE
      : ButtonType.OUTLINE;
  const moreBtnType =
    cardType === CardType.PRIMARY ? ButtonType.PRIMARY : ButtonType.FLAT;

  const handleOpenModal = (action: any) => () => {
    dispatch(action());
  };

  return (
    <Container cardType={cardType} contentType={contentType}>
      <Body contentType={contentType}>
        <InfoContainer contentType={contentType}>
          <ColumnIconWrapper contentType={contentType} cardType={cardType}>
            {cardType === CardType.PRIMARY ? (
              contentType === "tax" ? (
                <HomeSVG />
              ) : (
                <StarSVG />
              )
            ) : contentType === "buy" ? (
              <FolderSVG />
            ) : (
              <DocumentSVG />
            )}
          </ColumnIconWrapper>
          <InfoWrapper>
            <HeaderText contentType={contentType} cardType={cardType}>
              {headerText}
            </HeaderText>
            {descText && <DescText cardType={cardType}>{descText}</DescText>}
            {descArr && (
              <StyledUl>
                {descArr.map((el) => {
                  return (
                    <StyledLI key={el.id}>
                      <ListMarker cardType={cardType} />
                      <Text cardType={cardType}>{el.text}</Text>
                    </StyledLI>
                  );
                })}
              </StyledUl>
            )}
          </InfoWrapper>
        </InfoContainer>

        <ButtonsContainer contentType={contentType}>
          <StyledBtnPrim
            cardType={cardType}
            buttonSize={ButtonSize.MEDIUM}
            buttonType={buyBtnType}
            onClick={handleOpenModal(primaryBtnAction)}
          >
            {buttonText}
          </StyledBtnPrim>
          {!withoutAddBtn && (
            <StyledAddBtn
              isPrim={moreBtnType === ButtonType.PRIMARY}
              buttonType={moreBtnType}
              buttonSize={ButtonSize.MEDIUM}
              onClick={handleOpenModal(secondaryBtnAction)}
            >
              Подробнее
            </StyledAddBtn>
          )}
        </ButtonsContainer>
      </Body>
      <RowIconWrapper contentType={contentType} cardType={cardType}>
        {cardType === CardType.PRIMARY ? (
          contentType === "tax" ? (
            <HomeSVG />
          ) : (
            <StarSVG />
          )
        ) : contentType === "buy" ? (
          <FolderSVG />
        ) : (
          <DocumentSVG />
        )}
      </RowIconWrapper>
    </Container>
  );
};

const StyledAddBtn = styled(Button)<{ isPrim: boolean }>`
  ${({ isPrim }) =>
    isPrim &&
    css`
      &:hover {
        background-color: ${WhiteColor.WHITE_16};
      }
      &:active {
        background-color: ${WhiteColor.WHITE_24};
      }
    `}
`;

const InfoContainer = styled.div<{
  contentType: "rent" | "buy" | "tax";
}>`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) => contentType === "tax" && "396px"};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Text = styled.div<{ cardType: CardType }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? WhiteColor.WHITE_80 : BlackColor.BLACK_80};
`;

const ListMarker = styled.div<{ cardType: CardType }>`
  margin: 10px;
  min-height: 4px;
  min-width: 4px;
  border-radius: 4px;
  align-self: flex-start;
  background-color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? WhiteColor.WHITE_80 : BlackColor.BLACK_80};
`;

const StyledLI = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledBtnPrim = styled(Button)<{ cardType: CardType }>`
  width: fit-content;
  white-space: nowrap;
  height: 44px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
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

const RowIconWrapper = styled(IconWrapper)<{
  contentType: "rent" | "buy" | "tax";
}>`
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: ${({ contentType }) =>
      (contentType === "buy" || contentType === "tax") && "none"};
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const ColumnIconWrapper = styled(IconWrapper)<{
  contentType: "rent" | "buy" | "tax";
}>`
  display: none;
  margin-bottom: 16px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: ${({ contentType }) =>
      (contentType === "buy" || contentType === "tax") && "flex"};
  }
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const ButtonsContainer = styled.div<{
  contentType: "rent" | "buy" | "tax";
}>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 6px;
  margin-top: ${({ contentType }) => contentType !== "tax" && "32px"};
  width: fit-content;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    row-gap: 6px;
  }
`;

const DescText = styled.p<{ cardType: CardType }>`
  white-space: pre-wrap;
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${({ cardType }) =>
    cardType === CardType.PRIMARY ? WhiteColor.WHITE_80 : BlackColor.BLACK_80};
  @media screen and (max-width: 1439px) {
    white-space: unset;
  }
`;

const HeaderText = styled.div<{
  cardType: CardType;
  contentType: "rent" | "buy" | "tax";
}>`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ cardType }) =>
    cardType === CardType.PRIMARY
      ? WhiteColor.WHITE
      : BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType, cardType }) => {
      if (contentType === "tax") {
        if (cardType === CardType.PRIMARY) return "370px";
        return "340px";
      }
    }};
  }
`;

const Body = styled.div<{
  contentType: "rent" | "buy" | "tax";
}>`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) => (contentType === "buy" ? "396px" : "300px")};
    height: 100%;
  }
  @media screen and (max-width: 1023px) {
    row-gap: ${({ contentType }) => contentType === "tax" && "32px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 528px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 334px;
  }
  @media screen and (max-width: 374px) {
    width: 279px;
  }
`;

const Container = styled.div<{
  cardType: CardType;
  contentType: "rent" | "buy" | "tax";
}>`
  height: ${({ contentType }) => {
    if (contentType === "buy") return "308px";
    if (contentType === "tax") return "348px";
  }};
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
    height: ${({ contentType }) => {
      if (contentType === "buy") return "412px";
      if (contentType === "tax") return "436px";
      return "316px";
    }};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    height: ${({ contentType }) => {
      if (contentType === "buy" || contentType === "tax") return "auto";
      return "236";
    }};
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 20px;
    height: ${({ contentType }) => {
      if (contentType === "buy" || contentType === "tax") return "auto";
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 374px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
  }
`;

export default memo(UsefulServiceCard);
