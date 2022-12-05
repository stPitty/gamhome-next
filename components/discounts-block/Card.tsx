import { CardData } from "./types";
import React, { useState } from "react";
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

type Props = {
  data: CardData;
};

const Card: React.FC<Props> = ({ data }) => {
  const [notificationQty, setNotificationQty] = useState<number>(0);

  const message = "Промокод скопирован";

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
          {data.tags.map((el) => (
            <Tag key={el.id}>{el.text}</Tag>
          ))}
        </TagsWrapper>
        <ButtonsContainer>
          <Button
            width={data.primaryButton.width}
            buttonSize={ButtonSize.LARGE}
          >
            {data.primaryButton.text}
          </Button>
          <PromoCodeContainer onClick={handlePromoCodeClick}>
            <CopySVG />
            <PromoText>Промокод Gamhome</PromoText>
          </PromoCodeContainer>
        </ButtonsContainer>
      </ContentWrapper>
      <Image image={data.image} />
      <Notification message={message} quantity={notificationQty} />
    </Container>
  );
};

const PromoCodeContainer = styled.div`
  display: flex;
  margin-left: 24px;
  column-gap: 4px;
  cursor: pointer;
`;

const Image = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 656px;
  height: 512px;
  border-radius: 24px;
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
  font-weight: 700;
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
  margin: 40px;
  width: 576px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: ${WhiteColor.WHITE};
  border-radius: 24px;
`;

export default Card;
