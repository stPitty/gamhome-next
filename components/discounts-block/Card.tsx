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

type Props = {
  data: CardData;
};

const Card: React.FC<Props> = ({ data }) => {
  const [notificationQty, setNotificationQty] = useState<number>(0);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const message = "Промокод скопирован";

  const sortedTagsForWindowSize = useMemo(() => {
    if (windowSize === WindowSize.XL) {
      return data.tags.sort((a, b) => a.xlPriority - b.xlPriority);
    }
    if (windowSize === WindowSize.LG) {
      return data.tags.sort((a, b) => a.lgPriority - b.lgPriority);
    }
    return data.tags;
  }, [windowSize]);

  const handlePromoCodeClick = () => {
    navigator.clipboard.writeText("Gamhome");
    setNotificationQty((prevState) => prevState + 1);
    setTimeout(() => {
      setNotificationQty((prevState) => prevState - 1);
    }, 5000);
  };

  return (
    <Container>
      <ContentWrapper>
        <HeaderText>{data.header}</HeaderText>
        <SubHeader>{data.subHeader}</SubHeader>
        <DescText>{data.desc}</DescText>
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
      <Image cardType={data.cardType} image={data.image} />
      <Notification message={message} quantity={notificationQty} />
    </Container>
  );
};

const StyledButton = styled(Button)<{ cardType: CardAbout }>`
  width: ${({ cardType }) => (cardType === "cleaning" ? "189px" : "257px")};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    min-width: ${({ cardType }) => cardType === "delivery" && "237px"};
    padding: 15px 22px;
  }
`;

const PromoCodeContainer = styled.div`
  display: flex;
  margin-left: 24px;
  column-gap: 4px;
  cursor: pointer;
`;

const Image = styled.div<{ image: string; cardType: CardAbout }>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 656px;
  height: 512px;
  border-radius: 24px;
  background-position: center;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 460px;
    height: ${({ cardType }) => (cardType === "cleaning" ? "512px" : "608px")};
    background-position: ${({ cardType }) => cardType === "cleaning" && "left"};
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
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${LightBlueColor.LB_200};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding: 7px 16px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
`;

const DescText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0 32px;
  color: ${BlackColor.BLACK_64};
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
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
`;

export default Card;
