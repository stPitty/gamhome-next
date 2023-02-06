import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import Image from "next/image";
import CircleSVG from "../../../../public/assets/svg/CircleSVG";
import DoneSVG from "../../../../public/assets/svg/DoneSVG";

const WantToRentOrBuy = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderText>Хотите арендовать или купить квартиру?</HeaderText>
        <TgBotInfContainer>
          <InformationWrapper>
            <TgInformationContainer>
              <TgInfHeaderText>Telegram бот</TgInfHeaderText>
              <InformationDescription>
                Подберет для вас недвижимость согласно выбранным параметрам,
                сразу со&nbsp;всех порталов недвижимости.
              </InformationDescription>
              <InformationDescription>
                Один раз настроив фильтры поиска, вы&nbsp;будете в&nbsp;курсе
                всех новых объявлений, появляющихся на&nbsp;рынке недвижимости
              </InformationDescription>
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
                <li>
                  <InformationDescription>
                    Проверка объекта и&nbsp;собственника недвижимости
                  </InformationDescription>
                </li>
                <li>
                  <InformationDescription>
                    Оформление и&nbsp;проверка документов
                  </InformationDescription>
                </li>
                <li>
                  <InformationDescription>
                    Проведение сделки под ключ, от&nbsp;поиска
                    до&nbsp;заключения сделки
                  </InformationDescription>
                </li>
                <li>
                  <InformationDescription>
                    Ипотечное страхование и&nbsp;оценка недвижимости
                  </InformationDescription>
                </li>
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
`;

const StyledUL = styled.ul`
  margin: 0;
  padding-left: 30px;
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
`;

const DoneIcon = styled(DoneSVG)`
  & path {
    fill: white;
  }
  @media screen and (max-width: 1439px) {
    width: 11px;
    height: 9px;
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
`;

const BrownCircleIcon = styled(CircleSVG)`
  & rect {
    fill: #553f1c;
  }
  @media screen and (max-width: 1439px) {
    width: 6px;
    height: 6px;
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
`;

const TgCheckboxRow = styled(TgBadgeRow)`
  column-gap: 8px;
  @media screen and (max-width: 1439px) {
    column-gap: 6px;
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
`;

const TgAddressBadge = styled(TgBadgeContainer)`
  row-gap: 8px;
  top: 213px;
  @media screen and (max-width: 1439px) {
    row-gap: 6px;
    top: 155px;
  }
`;

const TgCostBadge = styled(TgBadgeContainer)`
  right: 50px;
  top: 60px;
  @media screen and (max-width: 1439px) {
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
`;

const InformationHeaderText = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
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
`;

const TgInformationContainer = styled(InformationContainer)`
  max-width: 528px;
  @media screen and (max-width: 1439px) {
    max-width: 378px;
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
`;

const TgBotInfContainer = styled.div`
  display: flex;
  column-gap: 90px;
  align-items: center;
  @media screen and (max-width: 1439px) {
    column-gap: 65px;
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
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default WantToRentOrBuy;
