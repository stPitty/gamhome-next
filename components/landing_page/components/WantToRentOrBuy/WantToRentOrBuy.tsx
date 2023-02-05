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
`;

const GHImagesContainer = styled.div`
  display: flex;
  overflow: visible;
  width: 428px;
  height: 545px;
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
`;

const TgCheckboxText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
`;

const DoneIcon = styled(DoneSVG)`
  & path {
    fill: white;
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
`;

const BrownCircleIcon = styled(CircleSVG)`
  & rect {
    fill: #553f1c;
  }
`;

const GreenCircleIcon = styled(CircleSVG)`
  & rect {
    fill: #3b7937;
  }
`;

const TgBadgePrimText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #242424;
`;

const TgBadgeRow = styled.div`
  display: flex;
  align-items: center;
`;

const TgAddressRow = styled(TgBadgeRow)`
  column-gap: 4px;
`;

const TgCheckboxRow = styled(TgBadgeRow)`
  column-gap: 8px;
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
`;

const TgAddressBadge = styled(TgBadgeContainer)`
  row-gap: 8px;
  top: 213px;
`;

const TgCostBadge = styled(TgBadgeContainer)`
  right: 50px;
  top: 60px;
`;

const TgCheckboxBadge = styled(TgBadgeContainer)`
  row-gap: 12px;
  min-width: 231px;
  height: 92px;
  right: 210px;
  top: 300px;
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 270px;
  min-height: 537px;
  left: -50px;
`;

const TgImageWrapper = styled.div`
  display: flex;
  width: 582px;
  height: 501px;
  overflow: visible;
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
`;

const GHInformationContainer = styled(InformationContainer)`
  max-width: 640px;
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
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
  text-align: center;
  max-width: 537px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default WantToRentOrBuy;
