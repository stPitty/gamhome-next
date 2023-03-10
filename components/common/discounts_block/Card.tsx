import { CardAbout, CardData } from "./types";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  BlackColor,
  Font,
  LightBlueColor,
  WhiteColor,
} from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize } from "../../UI/button/enums";
import CopySVG from "../../../public/assets/svg/CopySVG";
import Notification from "../../UI/notification/Notification";
import { useAppSelector } from "../../../redux/hooks";
import { TWindowSize } from "../../../redux/slicers/types";
import { WindowSize } from "../../../redux/slicers/enums";
import { SortByPriority } from "../../../common/helpers";
import DeployableWrapper from "../../UI/deployable_wrapper/DeployableWrapper";

type Props = {
  data: CardData;
};

const Card: React.FC<Props> = ({ data }) => {
  const [notificationQty, setNotificationQty] = useState<number>(0);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const message = "Промокод скопирован";

  const sortedTagsForWindowSize = useMemo(
    SortByPriority(windowSize, data.tags),
    [windowSize]
  );

  const handlePromoCodeClick = () => {
    navigator.clipboard.writeText("Gamhome");
    setNotificationQty((prevState) => prevState + 1);
    setTimeout(() => {
      setNotificationQty((prevState) => prevState - 1);
    }, 5000);
  };

  return (
    <Container cardType={data.cardType}>
      <ColumnImage cardType={data.cardType} image={data.image} />
      <ContentWrapper cardType={data.cardType} id={data.contentId}>
        <HeaderWrapper>
          <HeaderText>{data.header}</HeaderText>
          <SubHeader>{data.subHeader}</SubHeader>
        </HeaderWrapper>
        <DescText cardType={data.cardType}>{data.desc}</DescText>
        <StyledDeployableWrapper minHeight={32} smHeight={32}>
          <TagsWrapper cardType={data.cardType}>
            {sortedTagsForWindowSize.map((el) => (
              <Tag key={el.id}>{el.text}</Tag>
            ))}
          </TagsWrapper>
        </StyledDeployableWrapper>
        <ButtonsContainer>
          <StyledButton cardType={data.cardType} buttonSize={ButtonSize.LARGE}>
            {data.primaryButtonText}
          </StyledButton>
          <PromoCodeContainer onClick={handlePromoCodeClick}>
            <CopySVG />
            <PromoText>Промокод GAMHOME</PromoText>
          </PromoCodeContainer>
        </ButtonsContainer>
      </ContentWrapper>
      <RowImage cardType={data.cardType} image={data.image} />
      <Notification message={message} quantity={notificationQty} />
    </Container>
  );
};

const StyledDeployableWrapper = styled(DeployableWrapper)`
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 100%;
  }
  @media screen and (max-width: 374px) {
    width: 256px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex-direction: row;
    column-gap: 7px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    column-gap: 7px;
  }
`;

const StyledButton = styled(Button)<{ cardType: CardAbout }>`
  width: ${({ cardType }) => (cardType === "cleaning" ? "189px" : "257px")};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: ${({ cardType }) => cardType === "delivery" && "213px"};
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 374px) {
    padding: 0;
  }
`;

const PromoCodeContainer = styled.div`
  display: flex;
  margin-left: 24px;
  column-gap: 4px;
  cursor: pointer;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    margin-left: 16px;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;

const Image = styled.div<{ image: string; cardType: CardAbout }>`
  width: 656px;
  height: ${({ cardType }) => (cardType === "cleaning" ? "512px" : "564px")};
  border-radius: 24px;
  background-repeat: no-repeat;
`;

const RowImage = styled(Image)`
  background-image: url(${({ image }) => image});
  background-size: ${({ cardType }) =>
    cardType === "cleaning" ? "1200px" : "cover"};
  background-position: ${({ cardType }) =>
    cardType === "cleaning" ? "-275px -105px" : "-300px"};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    background-size: ${({ cardType }) =>
      cardType === "cleaning" ? "1150px" : "cover"};
    width: 460px;
    height: ${({ cardType }) => (cardType === "cleaning" ? "478px" : "586px")};
    background-position: ${({ cardType }) =>
      cardType === "cleaning" ? "-275px -100px" : "-535px"};
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const ColumnImage = styled(Image)`
  display: none;
  background-image: url(${({ image }) => image});
  @media screen and (max-width: 1023px) {
    display: block;
    width: 688px;
    height: 375px;
    background-size: ${({ cardType }) =>
      cardType === "cleaning" ? "850px" : "cover"};
    background-position: ${({ cardType }) =>
      cardType === "cleaning" ? "-160px -50px" : "bottom"};
  }
  @media screen and (max-width: 767px) {
    height: ${({ cardType }) => (cardType === "cleaning" ? "234px" : "228px")};
    border-radius: 16px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    background-position: ${({ cardType }) =>
      cardType === "cleaning" ? "-100px -15px" : "-40px"};
    background-size: ${({ cardType }) =>
      cardType === "cleaning" ? "470px" : "cover"};
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    background-position: ${({ cardType }) =>
      cardType === "cleaning" ? "-125px -15px" : "-100px"};
    background-size: ${({ cardType }) =>
      cardType === "cleaning" ? "460px" : "400px"};
  }
`;

const PromoText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
  white-space: nowrap;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 54px;
  align-items: center;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    margin-top: 48px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 40px;
    flex-direction: column;
    width: 100%;
    row-gap: 24px;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  border: 1px solid ${LightBlueColor.LB_200};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 1439px) {
    font-size: 13px;
    line-height: 20px;
    padding: 5px 11px;
  }
`;

const TagsWrapper = styled.div<{ cardType: CardAbout }>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (max-width: 1439px) {
    gap: 8px;
    row-gap: 10px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 450px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    min-width: ${({ cardType }) =>
      cardType === "cleaning" ? "462px" : "611px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 317px !important;
  }
  @media screen and (max-width: 767px) {
    width: 256px;
  }
`;

const DescText = styled.p<{ cardType: CardAbout }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0 0 32px;
  width: ${({ cardType }) => (cardType === "cleaning" ? "402px" : "576px")};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ cardType }) => (cardType === "cleaning" ? "402px" : "400px")};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ cardType }) => (cardType === "cleaning" ? "551px" : "608px")};
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const SubHeader = styled(HeaderText)`
  color: ${BlackColor.BLACK_48};
`;

const ContentWrapper = styled.div<{ cardType: CardAbout }>`
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 40px;
  width: ${({ cardType }) => (cardType === "cleaning" ? "516px" : "581px")};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 415px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin: 40px;
    width: 608px;
  }
  @media screen and (max-width: 767px) {
    margin: 40px 16px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 317px;
  }
  @media screen and (max-width: 374px) {
    width: 256px;
  }
`;

const Container = styled.div<{ cardType: CardAbout }>`
  width: fit-content;
  display: flex;
  background: ${WhiteColor.WHITE};
  border-radius: 24px;
  column-gap: 35px;
  column-gap: ${({ cardType }) => (cardType === "cleaning" ? "100px" : "35px")};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 37px;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    border-radius: 16px;
  }
`;

export default Card;
