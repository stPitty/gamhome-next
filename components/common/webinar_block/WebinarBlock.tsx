import styled, { css } from "styled-components";
import React, { FC } from "react";
import { Hook } from "../../../common/routes";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TCookiePopUp } from "../../../redux/slicers/types";
import Button from "../../UI/button/Button";
import Image from "next/image";

type Props = {
  imagePaths: [string, string, string, string, string];
  type: "rent" | "buy";
};

const WebinarBlock: FC<Props> = ({ imagePaths, type }) => {
  const { isCookieAccepted } = useAppSelector<TCookiePopUp>(
    (state) => state.cookiePopUp
  );

  return (
    <Container id={Hook.WEBINAR}>
      <ContentContainer>
        <Tag>Бесплатный доступ к&nbsp;вебинару</Tag>
        <HeaderText>
          Узнайте основные риски при&nbsp;
          {type === "rent" ? "аренде" : "покупке"} квартиры&nbsp;и&nbsp;какие
          схемы используют мошенники
        </HeaderText>
        {type === "rent" ? (
          <Text>
            На&nbsp;вебинаре разобраны основные методы мошенников
            и&nbsp;как&nbsp;их&nbsp;вычислить. Изучите это&nbsp;видео, чтобы
            всегда понимать правила съёма квартиры
          </Text>
        ) : (
          <Text>
            На вебинаре разобраны основные ошибки, которые допускают покупатели.
            Изучите это видео, чтобы всегда понимать правила покупки квартиры
          </Text>
        )}
        <StyledButton
          buttonSize={ButtonSize.LARGE}
          buttonType={ButtonType.PRIMARY_WB}
        >
          Посмотреть видео
        </StyledButton>
      </ContentContainer>
      <PhotoWrapper type={type}>
        <StyledImage />
        <BadgeContainer_1>
          <Image src={imagePaths[0]} alt="badge icon 1" fill loading="lazy" />
        </BadgeContainer_1>
        <BadgeContainer_2 type={type}>
          <Image src={imagePaths[1]} alt="badge icon 2" fill loading="lazy" />
        </BadgeContainer_2>
        <BadgeContainer_3 type={type}>
          <Image src={imagePaths[2]} alt="badge icon 3" fill loading="lazy" />
        </BadgeContainer_3>
        <BadgeContainer_4 type={type}>
          <Image src={imagePaths[3]} alt="badge icon 4" fill loading="lazy" />
        </BadgeContainer_4>
        <BadgeContainer_5 type={type}>
          <Image src={imagePaths[4]} alt="badge icon 5" fill loading="lazy" />
        </BadgeContainer_5>
      </PhotoWrapper>
    </Container>
  );
};

const BadgeContainer = styled.div`
  position: relative;
  height: 16%;
  overflow: visible;
`;

const BadgeContainer_5 = styled(BadgeContainer)<{ type: "rent" | "buy" }>`
  min-width: ${({ type }) => (type === "rent" ? "283px" : "351px")};
  left: -725px;
  top: 500px;
  @media screen and (max-width: 1439px) {
    min-width: ${({ type }) => (type === "rent" ? "170px" : "213px")};
    left: ${({ type }) => (type === "rent" ? "-535px" : "-550px")};
    top: 410px;
  }
  @media screen and (max-width: 1023px) {
    min-width: ${({ type }) => (type === "rent" ? "142px" : "179px")};
    left: ${({ type }) => (type === "rent" ? "-460px" : "-470px")};
    top: 345px;
  }
  @media screen and (max-width: 767px) {
    left: ${({ type }) => (type === "rent" ? "-430px" : "-475px")};
  }
  @media screen and (max-width: 374px) {
    left: ${({ type }) => (type === "rent" ? "-410px" : "-455px")};
  }
`;

const BadgeContainer_4 = styled(BadgeContainer)<{ type: "rent" | "buy" }>`
  min-width: ${({ type }) => (type === "rent" ? "211px" : "264px")};
  left: -250px;
  top: ${({ type }) => (type === "rent" ? "425px" : "400px")};
  @media screen and (max-width: 1439px) {
    min-width: ${({ type }) => (type === "rent" ? "168px" : "211px")};
    left: ${({ type }) => (type === "rent" ? "-250px" : "-220px")};
    top: 340px;
  }
  @media screen and (max-width: 1023px) {
    min-width: ${({ type }) => (type === "rent" ? "142px" : "178px")};
    left: ${({ type }) => (type === "rent" ? "-215px" : "-205px")};
    top: 290px;
  }
  @media screen and (max-width: 767px) {
    left: ${({ type }) => (type === "rent" ? "-180px" : "-220px")};
    top: 290px;
  }
  @media screen and (max-width: 374px) {
    left: ${({ type }) => (type === "rent" ? "-190px" : "-240px")};
    top: 285px;
  }
`;

const BadgeContainer_3 = styled(BadgeContainer)<{ type: "rent" | "buy" }>`
  min-width: 155px;
  left: -470px;
  top: 375px;
  @media screen and (max-width: 1439px) {
    min-width: 155px;
    left: ${({ type }) => (type === "rent" ? "-310px" : "-280px")};
    top: 280px;
  }
  @media screen and (max-width: 1023px) {
    min-width: 130px;
    left: ${({ type }) => (type === "rent" ? "-275px" : "-245px")};
    top: 250px;
  }
  @media screen and (max-width: 767px) {
    left: -240px;
    top: 240px;
  }
  @media screen and (max-width: 374px) {
    top: 245px;
    left: -220px;
  }
`;

const BadgeContainer_2 = styled(BadgeContainer)<{ type: "rent" | "buy" }>`
  min-width: ${({ type }) => (type === "rent" ? "272px" : "228px")};
  left: 123px;
  top: 262px;
  @media screen and (max-width: 1439px) {
    min-width: ${({ type }) => (type === "rent" ? "203px" : "172px")};
    left: ${({ type }) => (type === "rent" ? "110px" : "125px")};
    top: 250px;
  }
  @media screen and (max-width: 1023px) {
    min-width: ${({ type }) => (type === "rent" ? "170px" : "143px")};
    left: 90px;
    top: 210px;
  }
  @media screen and (max-width: 767px) {
    min-width: 138px;
    left: 93px;
    top: 190px;
  }
  @media screen and (max-width: 374px) {
    left: ${({ type }) => (type === "rent" ? "85px" : "65px")};
    top: 205px;
  }
`;

const BadgeContainer_1 = styled(BadgeContainer)`
  min-width: 278px;
  left: 115px;
  top: 10px;
  @media screen and (max-width: 1439px) {
    min-width: 210px;
    left: 115px;
    top: 0;
  }
  @media screen and (max-width: 1023px) {
    min-width: 177px;
    left: 90px;
  }
  @media screen and (max-width: 767px) {
    left: 100px;
  }
  @media screen and (max-width: 374px) {
    left: 110px;
  }
`;

const StyledImage = styled.div`
  min-width: 438px;
  height: 567px;
  background-image: url("/images/woman-webinar.webp");
  background-repeat: no-repeat;
  background-size: 900px;
  border-radius: 1000px;
  background-position: center 0;
  position: relative;
  left: 570px;
  @media screen and (max-width: 1439px) {
    min-width: 296px;
    height: 437px;
    background-size: 650px;
    top: 20px;
    left: 435px;
  }
  @media screen and (max-width: 1023px) {
    min-width: 248px;
    height: 366px;
    border-radius: 839px;
    background-size: 550px;
    left: 352px;
  }
  @media screen and (max-width: 767px) {
    left: 359px;
  }
  @media screen and (max-width: 374px) {
    left: 364px;
  }
`;

const PhotoWrapper = styled.div<{ type: "rent" | "buy" }>`
  display: flex;
  align-items: flex-start;
  width: 595px;
  height: 585px;
  justify-content: center;
  overflow: visible;
  padding-left: ${({ type }) => type === "buy" && "100px"};
  @media screen and (max-width: 1439px) {
    width: 403px;
    height: 467px;
    position: relative;
    top: -50px;
    padding-left: ${({ type }) => type === "buy" && "40px"};
  }
  @media screen and (max-width: 1023px) {
    width: 366px;
    height: 391px;
    position: unset;
    margin-top: 20px;
    padding-left: ${({ type }) => type === "buy" && "60px"};
  }
  @media screen and (max-width: 767px) {
    margin-top: 0;
    width: 332px;
    padding-left: ${({ type }) => type === "buy" && "80px"};
  }
  @media screen and (max-width: 374px) {
    width: 305px;
    padding-left: ${({ type }) => type === "buy" && "75px"};
  }
`;

const StyledButton = styled(Button)`
  width: 206px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin: 0;
  max-width: 528px;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  width: 269px;
  align-items: center;
  padding: 8px 16px;
  background: ${WhiteColor.WHITE};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 642px;
  row-gap: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 460px;
    justify-content: flex-end;
    justify-items: flex-end;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 359px;
  }
  @media screen and (max-width: 767px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 204px 46px 62px 64px;
  align-items: center;
  border-radius: 48px;
  width: 100%;
  justify-content: center;
  column-gap: 85px;
  background: ${BrandColor.BRAND};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    padding: 198px 14px 100px 36px;
    column-gap: 75px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 0;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 192px 0 96px 40px;
    column-gap: 0;
    align-items: flex-start;
  }
  @media screen and (max-width: 767px) {
    border-radius: 24px;
    flex-direction: column;
    row-gap: 46px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 112px 13px 70px;
  }
  @media screen and (max-width: 374px) {
    padding: 112px 16px 45px;
    row-gap: 40px;
  }
`;

export default WebinarBlock;
