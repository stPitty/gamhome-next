import { FC, memo } from "react";
import Image from "next/image";
import MailSVG from "../../../../public/assets/svg/Mail.SVG";
import PlanetSVG from "../../../../public/assets/svg/PlanetSVG";
import CrossSVG from "../../../../public/assets/svg/CrossSVG";
import styled from "styled-components";

type Props = {
  className?: string;
};
const Badges: FC<Props> = ({ className }) => {
  return (
    <LogosWrapper className={className}>
      <LogosContainer>
        <AvitoLogoContainer>
          <Image
            src="/images/landing/brands/avito.webp"
            alt="Avito logo"
            fill
            loading="lazy"
          />
        </AvitoLogoContainer>
        <UlaLogoContainer>
          <Image
            src="/images/landing/brands/ula.webp"
            alt="Ula logo"
            fill
            loading="lazy"
          />
        </UlaLogoContainer>
        <CyanLogoContainer>
          <Image
            src="/images/landing/brands/cyan.webp"
            alt="Ula logo"
            fill
            loading="lazy"
          />
        </CyanLogoContainer>
        <YandexLogoContainer>
          <Image
            src="/images/landing/brands/yandex.webp"
            alt="Ula logo"
            fill
            loading="lazy"
          />
        </YandexLogoContainer>
      </LogosContainer>
      <InternetBadgesWrapper>
        <YellowBadge>
          <InternetBadgeIconContainer>
            <MailSVG />
          </InternetBadgeIconContainer>
          <InternetBadgeText>Email рассылки</InternetBadgeText>
        </YellowBadge>
        <YellowBadge>
          <InternetBadgeIconContainer>
            <PlanetSVG />
          </InternetBadgeIconContainer>
          <InternetBadgeText>Социальные сети</InternetBadgeText>
        </YellowBadge>
        <GreyBadge>
          <CrossIconContainer>
            <CrossSVG />
          </CrossIconContainer>
          <InternetBadgeText>10 инструментов продажи</InternetBadgeText>
        </GreyBadge>
      </InternetBadgesWrapper>
    </LogosWrapper>
  );
};

const CrossIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`;

const InternetBadgeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`;

const InternetBadgeText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #242424;
`;

const InternetBadge = styled.div`
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 8px 12px;
`;

const YellowBadge = styled(InternetBadge)`
  column-gap: 4px;
  background: #ffd760;
`;

const GreyBadge = styled(InternetBadge)`
  background: #f5f7f9;
  column-gap: 8px;
`;

const InternetBadgesWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  @media screen and (max-width: 1439px) {
    row-gap: 12px;
  }
  @media screen and (max-width: 374px) {
    row-gap: 10px;
  }
`;

const YandexLogoContainer = styled.div`
  position: relative;
  width: 162px;
  height: 25.54px;
  @media screen and (max-width: 374px) {
    width: 152.2px;
    height: 24px;
  }
`;

const CyanLogoContainer = styled.div`
  position: relative;
  width: 95px;
  height: 34px;
  @media screen and (max-width: 374px) {
    width: 67px;
    height: 24px;
  }
`;

const UlaLogoContainer = styled.div`
  position: relative;
  width: 89px;
  height: 31px;
  @media screen and (max-width: 374px) {
    width: 70px;
    height: 24px;
  }
`;

const AvitoLogoContainer = styled.div`
  position: relative;
  width: 95px;
  height: 27px;
  @media screen and (max-width: 374px) {
    height: 24px;
    width: 84px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  column-gap: 18px;
  height: 34px;
  align-items: flex-end;
  flex-wrap: wrap;
  @media screen and (max-width: 1439px) {
    width: 276px;
    row-gap: 12px;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  @media screen and (max-width: 374px) {
    width: 250px;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  background: #ffffff;
  border-radius: 24px;
  width: 100%;
  @media screen and (max-width: 1439px) {
    row-gap: 16px;
    height: 225px;
    justify-content: space-between;
  }
  @media screen and (max-width: 1023px) {
    height: 134px;
    border-radius: 16px;
  }
  @media screen and (max-width: 767px) {
    height: 209px;
    padding: 16px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    height: 230px;
    padding: 12px;
  }
`;

export default memo(Badges);
