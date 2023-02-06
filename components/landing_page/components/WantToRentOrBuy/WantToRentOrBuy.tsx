import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import Image from "next/image";
import CircleSVG from "../../../../public/assets/svg/CircleSVG";
import DoneSVG from "../../../../public/assets/svg/DoneSVG";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";

const WantToRentOrBuy = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderText>
          Хотите арендовать <AdaptiveTextDivider md />
          или купить квартиру?
        </HeaderText>
        <TgBotInfContainer>
          <InformationWrapper>
            <TgInformationContainer>
              <TgInfHeaderText>Telegram бот</TgInfHeaderText>
              <InformationDescription>
                Подберет для вас недвижимость согласно выбранным параметрам,
                сразу со&nbsp;всех порталов недвижимости.
              </InformationDescription>
              <TgBottomInformationDescription>
                Один раз настроив фильтры поиска, вы&nbsp;будете в&nbsp;курсе
                всех новых объявлений, появляющихся на&nbsp;рынке недвижимости
              </TgBottomInformationDescription>
            </TgInformationContainer>
            <StyledButton buttonSize={ButtonSize.MEDIUM}>
              Перейти в Telegram бот
            </StyledButton>
          </InformationWrapper>
          <TgImageWrapper>
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
        </TgBotInfContainer>
        <GamHomeServicesWrapper>
          <GHImagesContainer>
            <FirstGHImgContainer>
              <Image
                src="/images/landing/gh_1.webp"
                alt="GamHome website screenshot"
                fill
                loading="lazy"
              />
            </FirstGHImgContainer>
            <SecondGHImgContainer>
              <Image
                src="/images/landing/gh_2.webp"
                alt="GamHome website screenshot"
                fill
                loading="lazy"
              />
            </SecondGHImgContainer>
          </GHImagesContainer>
          <InformationWrapper>
            <GHInformationContainer>
              <GHInfHeaderText>Сервисы GamHome</GHInfHeaderText>
              <InformationDescription>
                Наши менеджеры помогут решить любые проблемы поиска нового жилья
              </InformationDescription>
              <StyledUL>
                <StyledLi>
                  <InformationDescription>
                    Проверка объекта и&nbsp;собственника недвижимости
                  </InformationDescription>
                </StyledLi>
                <StyledLi>
                  <InformationDescription>
                    Оформление и&nbsp;проверка документов
                  </InformationDescription>
                </StyledLi>
                <StyledLi>
                  <InformationDescription>
                    Проведение сделки под ключ, от&nbsp;поиска
                    до&nbsp;заключения сделки
                  </InformationDescription>
                </StyledLi>
                <StyledLi>
                  <InformationDescription>
                    Ипотечное страхование и&nbsp;оценка недвижимости
                  </InformationDescription>
                </StyledLi>
              </StyledUL>
            </GHInformationContainer>
            <StyledButton buttonSize={ButtonSize.MEDIUM}>
              Перейти в Telegram бот
            </StyledButton>
          </InformationWrapper>
        </GamHomeServicesWrapper>
      </Container>
    </Wrapper>
  );
};

const SecondGHImgContainer = styled.div`
  position: relative;
  min-width: 235px;
  height: 470px;
  right: 42px;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.12))
    drop-shadow(0 20px 20px rgba(0, 0, 0, 0.08));
  border-radius: 19px;
  @media screen and (max-width: 1439px) {
    min-width: 195px;
    border-radius: 15px;
    height: 390px;
    right: 30px;
  }
  @media screen and (max-width: 1439px) {
    min-width: 170px;
    height: 340px;
  }
`;

const FirstGHImgContainer = styled.div`
  position: relative;
  margin-top: 97px;
  min-width: 255px;
  height: 485px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.12))
    drop-shadow(0 18px 18px rgba(0, 0, 0, 0.08));
  border-radius: 18px;
  left: -20px;
  @media screen and (max-width: 1439px) {
    min-width: 197px;
    height: 392px;
    border-radius: 15px;
    left: -14px;
    margin-top: 78px;
  }
  @media screen and (max-width: 1023px) {
    min-width: 170px;
    height: 338px;
    margin-top: 68px;
  }
`;

const GHImagesContainer = styled.div`
  display: flex;
  overflow: visible;
  width: 428px;
  height: 545px;
  @media screen and (max-width: 1439px) {
    width: 346px;
    height: 440px;
  }
  @media screen and (max-width: 1023px) {
    width: 298px;
    height: 380px;
  }
`;

const StyledLi = styled.li`
  &::marker {
    font-size: 12px;
  }
`;

const StyledUL = styled.ul`
  margin: 0;
  padding-left: 30px;
  @media screen and (max-width: 1023px) {
    margin-top: -4px;
    padding-left: 25px;
  }
`;

const GamHomeServicesWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 163px;
  margin-top: 12px;
  @media screen and (max-width: 1439px) {
    margin-top: 56px;
    column-gap: 125px;
  }
  @media screen and (max-width: 1023px) {
    margin-top: 22px;
    column-gap: 46px;
    width: 689px;
  }
`;

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
`;

const StyledButton = styled(Button)`
  width: fit-content;
  padding: 15px 32px;
  height: 56px;
`;

const InformationDescription = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #242424;
  margin: 0;
  @media screen and (max-width: 1023px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TgBottomInformationDescription = styled(InformationDescription)`
  margin-top: -4px;
`;

const InformationHeaderText = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const TgInfHeaderText = styled(InformationHeaderText)`
  color: #526eff;
`;

const GHInfHeaderText = styled(InformationHeaderText)`
  color: #bd52ff;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media screen and (max-width: 1023px) {
    max-width: 328px;
  }
`;

const TgInformationContainer = styled(InformationContainer)`
  max-width: 528px;
  @media screen and (max-width: 1439px) {
    max-width: 328px;
  }
`;

const GHInformationContainer = styled(InformationContainer)`
  max-width: 640px;
  @media screen and (max-width: 1439px) {
    max-width: 459px;
  }
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (max-width: 1023px) {
    max-width: 328px;
  }
`;

const TgBotInfContainer = styled.div`
  display: flex;
  column-gap: 90px;
  align-items: center;
  @media screen and (max-width: 1439px) {
    column-gap: 65px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 32px;
  }
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
  text-align: center;
  max-width: 537px;
  @media screen and (max-width: 1439px) {
    align-self: center;
  }
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 100px;
  @media screen and (max-width: 1439px) {
    row-gap: 56px;
    align-items: flex-end;
  }
  @media screen and (max-width: 1023px) {
    row-gap: 77px;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default WantToRentOrBuy;
