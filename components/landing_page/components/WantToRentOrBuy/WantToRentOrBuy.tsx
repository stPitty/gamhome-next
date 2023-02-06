import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import Image from "next/image";
import CircleSVG from "../../../../public/assets/svg/CircleSVG";
import DoneSVG from "../../../../public/assets/svg/DoneSVG";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import TgBotImage from "./TgBotImage";

const WantToRentOrBuy = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderText>
          Хотите&nbsp;
          <AdaptiveTextDivider xs />
          арендовать <AdaptiveTextDivider md />
          или купить квартиру?
        </HeaderText>
        <TgBotInfContainer>
          <TgImageBottom />
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
          <TgImageTopRight />
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

const TgImageBottom = styled(TgBotImage)`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const TgImageTopRight = styled(TgBotImage)`
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

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
  @media screen and (max-width: 1023px) {
    min-width: 170px;
    height: 340px;
  }
  @media screen and (max-width: 374px) {
    min-width: 155px;
    height: 310px;
    right: 25px;
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
  @media screen and (max-width: 374px) {
    min-width: 155px;
    height: 310px;
    margin-top: 62px;
    left: -12px;
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
  @media screen and (max-width: 374px) {
    width: 273.53px;
    height: 348px;
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
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 32px;
    row-gap: 48px;
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const StyledButton = styled(Button)`
  width: fit-content;
  padding: 15px 32px;
  height: 56px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
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
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const TgInformationContainer = styled(InformationContainer)`
  max-width: 528px;
  @media screen and (max-width: 1439px) {
    max-width: 328px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const GHInformationContainer = styled(InformationContainer)`
  max-width: 640px;
  @media screen and (max-width: 1439px) {
    max-width: 459px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (max-width: 1023px) {
    max-width: 328px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
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
  @media screen and (max-width: 767px) {
    flex-direction: column;
    row-gap: 48px;
  }
  @media screen and (max-width: 374px) {
    row-gap: 40px;
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
  @media screen and (max-width: 767px) {
    text-align: start;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
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
    width: 952px;
  }
  @media screen and (max-width: 1023px) {
    row-gap: 77px;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    row-gap: 40px;
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default WantToRentOrBuy;
