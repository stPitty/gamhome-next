import { CardAbout, CardData } from "./types";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  BlackColor,
  Font,
  LightBlueColor,
  WhiteColor,
} from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize } from "../UI/button/enums";
import CopySVG from "../../public/assets/svg/CopySVG";
import Notification from "../UI/notification/Notification";
import { useAppSelector } from "../../redux/hooks";
import { TWindowSize } from "../../redux/slicers/types";
import { WindowSize } from "../../redux/slicers/enums";
import { SortByPriority } from "../../common/helpers";
import DeployableWrapper from "../UI/deployable-wrapper/DeployableWrapper";

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
    <Container>
      <ColumnImage cardType={data.cardType} image={data.image} />
      <ContentWrapper>
        <HeaderWrapper>
          <HeaderText>{data.header}</HeaderText>
          <SubHeader>{data.subHeader}</SubHeader>
        </HeaderWrapper>
        <StyledDeployableWrapper
          minHeight={72}
          preventDefault={data.cardType === "cleaning"}
        >
          <DescText>{data.desc}</DescText>
        </StyledDeployableWrapper>

        <TagsWrapper>
          {sortedTagsForWindowSize.map((el) => (
            <Tag key={el.id}>{el.text}</Tag>
          ))}
        </TagsWrapper>
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
  margin: 16px 0 32px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex-direction: row;
    column-gap: 7px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    flex-direction: column;
    column-gap: 7px;
  }
`;

const StyledButton = styled(Button)<{ cardType: CardAbout }>`
  width: ${({ cardType }) => (cardType === "cleaning" ? "189px" : "257px")};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: ${({ cardType }) => cardType === "delivery" && "237px"};
    padding: 15px 22px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 100%;
  }
`;

const PromoCodeContainer = styled.div`
  display: flex;
  margin-left: 24px;
  column-gap: 4px;
  cursor: pointer;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin: 0;
  }
`;

const Image = styled.div<{ image: string; cardType: CardAbout }>`
  width: 656px;
  height: 512px;
  border-radius: 24px;
  background-repeat: no-repeat;
`;

const RowImage = styled(Image)`
  background-image: url(${({ image }) => image});
  background-size: ${({ cardType }) => cardType === "cleaning" && "auto 570px"};
  background-position: ${({ cardType }) =>
    cardType === "cleaning" ? "-70px -50px" : "center"};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    background-size: ${({ cardType }) =>
      cardType === "cleaning" ? "auto 575px" : "cover"};
    width: 460px;
    height: ${({ cardType }) => (cardType === "cleaning" ? "512px" : "608px")};
    background-position: ${({ cardType }) =>
      cardType === "cleaning" && "-75px bottom"};
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const ColumnImage = styled(Image)`
  display: none;
  background-image: url(${({ image }) => image});
  width: 688px;
  height: ${({ cardType }) => (cardType === "cleaning" ? "414px" : "375px")};
  background-size: 688px;
  background-position: ${({ cardType }) =>
    cardType !== "cleaning" && "left -40px"};
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    display: block;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    height: ${({ cardType }) => (cardType === "cleaning" ? "234px" : "228px")};
    border-radius: 16px;
    background-position: ${({ cardType }) =>
      cardType === "cleaning" ? "-20px" : "center"};
    background-size: ${({ cardType }) =>
      cardType === "cleaning" ? "390px" : "cover"};
  }
`;

const PromoText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 54px;
  align-items: center;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin-top: 48px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
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
  padding: 7px 16px;
  border: 1px solid ${LightBlueColor.LB_200};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 7px 11px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 308px;
    column-gap: 15px;
  }
`;

const DescText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 290px;
    margin-bottom: 0;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const SubHeader = styled(HeaderText)`
  color: ${BlackColor.BLACK_48};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 40px;
  width: 576px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 415px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin: 40px;
    width: 608px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    margin: 40px 23px;
    width: 301px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: ${WhiteColor.WHITE};
  border-radius: 24px;
  column-gap: 40px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 37px;
  }
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    border-radius: 16px;
  }
`;

export default Card;
