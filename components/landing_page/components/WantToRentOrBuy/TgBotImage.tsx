import { FC, memo } from "react";
import Image from "next/image";
import styled from "styled-components";
import DoneSVG from "../../../../public/assets/svg/DoneSVG";
import CircleSVG from "../../../../public/assets/svg/CircleSVG";

type Props = {
  className?: string;
};

const TgBotImage: FC<Props> = ({ className }) => {
  return (
    <TgImageWrapper className={className}>
      <TgAddressBadge>
        <TgAddressRow>
          <GreenCircleIcon />
          <TgBadgePrimText>Замоскворецкая</TgBadgePrimText>
        </TgAddressRow>
        <TgAddressRow>
          <BrownCircleIcon />
          <TgBadgePrimText>Кольцевая</TgBadgePrimText>
        </TgAddressRow>
      </TgAddressBadge>
      <ImageContainer>
        <Image
          src="/images/landing/tg_bot.webp"
          alt="Скриншот с бота в Телеграм"
          fill
          loading="lazy"
        />
      </ImageContainer>
      <TgCostBadge>
        <TgBadgePrimText>До&nbsp;70&nbsp;000&nbsp;₽</TgBadgePrimText>
      </TgCostBadge>
      <TgCheckboxBadge>
        <TgCheckboxRow>
          <DoneIconContainer>
            <DoneIcon />
          </DoneIconContainer>
          <TgCheckboxText>Современный&nbsp;ремонт</TgCheckboxText>
        </TgCheckboxRow>
        <TgCheckboxRow>
          <DoneIconContainer>
            <DoneIcon />
          </DoneIconContainer>
          <TgCheckboxText>Две&nbsp;комнаты</TgCheckboxText>
        </TgCheckboxRow>
      </TgCheckboxBadge>
    </TgImageWrapper>
  );
};

const TgCheckboxText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  @media screen and (max-width: 1439px) {
    font-size: 11.7px;
    line-height: 18px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 9.02428px;
    line-height: 14px;
  }
  @media screen and (max-width: 374px) {
    font-size: 7.95127px;
    line-height: 12px;
  }
`;

const DoneIcon = styled(DoneSVG)`
  & path {
    fill: white;
  }
  @media screen and (max-width: 1439px) {
    width: 11px;
    height: 9px;
  }
  @media screen and (max-width: 1023px) {
    width: 8.46px;
    height: 6.57px;
  }
  @media screen and (max-width: 374px) {
    width: 7.45px;
    height: 5.56px;
  }
`;

const DoneIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: #526eff;
  border-radius: 4px;
  @media screen and (max-width: 1439px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (max-width: 1023px) {
    width: 13.54px;
    height: 13.54px;
  }
  @media screen and (max-width: 374px) {
    width: 11.93px;
    height: 11.93px;
  }
`;

const BrownCircleIcon = styled(CircleSVG)`
  & rect {
    fill: #553f1c;
  }
  @media screen and (max-width: 1439px) {
    width: 6px;
    height: 6px;
  }
  @media screen and (max-width: 1023px) {
    width: 4.51px;
    height: 4.51px;
  }
  @media screen and (max-width: 374px) {
    width: 3.98px;
    height: 3.98px;
  }
`;

const GreenCircleIcon = styled(CircleSVG)`
  & rect {
    fill: #3b7937;
  }
  @media screen and (max-width: 1439px) {
    width: 6px;
    height: 6px;
  }
  @media screen and (max-width: 1023px) {
    width: 4.51px;
    height: 4.51px;
  }
  @media screen and (max-width: 374px) {
    width: 3.98px;
    height: 3.98px;
  }
`;

const TgBadgePrimText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #242424;
  @media screen and (max-width: 1439px) {
    font-size: 11.7206px;
    line-height: 18px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 9.02428px;
    line-height: 14px;
  }
  @media screen and (max-width: 374px) {
    font-size: 7.95127px;
    line-height: 12px;
  }
`;

const TgBadgeRow = styled.div`
  display: flex;
  align-items: center;
`;

const TgAddressRow = styled(TgBadgeRow)`
  column-gap: 4px;
  @media screen and (max-width: 1439px) {
    column-gap: 3px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 2px;
  }
`;

const TgCheckboxRow = styled(TgBadgeRow)`
  column-gap: 8px;
  @media screen and (max-width: 1439px) {
    column-gap: 6px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 4.5px;
  }
  @media screen and (max-width: 374px) {
    column-gap: 4px;
  }
`;

const TgBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  position: relative;
  padding: 16px;
  z-index: 1;
  height: fit-content;
  @media screen and (max-width: 1439px) {
    border-radius: 11.7px;
    padding: 11.7px;
    box-shadow: 0 0 1.46507px rgba(0, 0, 0, 0.12),
      0 14.6507px 14.6507px rgba(0, 0, 0, 0.08);
  }
  @media screen and (max-width: 1023px) {
    border-radius: 9px;
    padding: 9px;
    box-shadow: 0 0 1.12804px rgba(0, 0, 0, 0.12),
      0 11.2804px 11.2804px rgba(0, 0, 0, 0.08);
  }
  @media screen and (max-width: 374px) {
    box-shadow: 0 0 0.993909px rgba(0, 0, 0, 0.12),
      0 9.93909px 9.93909px rgba(0, 0, 0, 0.08);
    border-radius: 7.95127px;
    padding: 7.95127px;
  }
`;

const TgAddressBadge = styled(TgBadgeContainer)`
  row-gap: 8px;
  top: 213px;

  @media screen and (max-width: 1439px) {
    row-gap: 6px;
    top: 155px;
  }
  @media screen and (max-width: 1023px) {
    row-gap: 4.5px;
    top: 119px;
  }
  @media screen and (max-width: 1023px) {
    top: 100px;
  }
  @media screen and (max-width: 374px) {
    width: 85.87px;
    height: 43.88px;
    top: 89px;
  }
`;

const TgCostBadge = styled(TgBadgeContainer)`
  right: 50px;
  top: 60px;
  @media screen and (max-width: 1439px) {
    right: 35px;
  }
  @media screen and (max-width: 1023px) {
    right: 25px;
    top: 34px;
  }
  @media screen and (max-width: 767px) {
    top: 30px;
    right: 35px;
  }
`;

const TgCheckboxBadge = styled(TgBadgeContainer)`
  row-gap: 12px;
  min-width: 231px;
  height: 92px;
  right: 210px;
  top: 300px;
  @media screen and (max-width: 1439px) {
    row-gap: 9px;
    min-width: 170px;
    height: 68px;
    top: 220px;
    right: 157px;
  }
  @media screen and (max-width: 1023px) {
    row-gap: 7px;
    min-width: 131px;
    height: 53px;
    top: 169px;
    right: 117px;
  }
  @media screen and (max-width: 767px) {
    top: 169px;
    right: 130px;
  }
  @media screen and (max-width: 374px) {
    width: 114.81px;
    height: 45.87px;
    right: 123px;
    top: 150px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 270px;
  min-height: 537px;
  left: -50px;
  @media screen and (max-width: 1439px) {
    min-width: 200px;
    min-height: 392px;
    left: -38px;
  }
  @media screen and (max-width: 1023px) {
    min-width: 150px;
    min-height: 302px;
    left: -27px;
  }
  @media screen and (max-width: 374px) {
    min-width: 135px;
    min-height: 265px;
    left: -19px;
  }
`;

const TgImageWrapper = styled.div`
  display: flex;
  width: 582px;
  height: 501px;
  overflow: visible;
  @media screen and (max-width: 1439px) {
    width: 426px;
    height: 367px;
  }
  @media screen and (max-width: 1023px) {
    width: 328px;
    height: 282px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 15px;
  }
  @media screen and (max-width: 374px) {
    margin-left: 0;
    width: 288px;
    height: 248px;
  }
`;
export default memo(TgBotImage);
