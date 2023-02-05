import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";
import Image from "next/image";
import PaperSVG from "../../../../public/assets/svg/PaperSVG";
import CoinsSVG from "../../../../public/assets/svg/CoinsSVG";
import CaseSVG from "../../../../public/assets/svg/CaseSVG";
import MailSVG from "../../../../public/assets/svg/Mail.SVG";
import PlanetSVG from "../../../../public/assets/svg/PlanetSVG";
import CrossSVG from "../../../../public/assets/svg/CrossSVG";

const SellProperty = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderText>Продать недвижимость</HeaderText>
        <CardsWrapper>
          <CardContainer>
            <InformationContainer>
              <CardHeaderText>Сопровождение сделки</CardHeaderText>
              <DescriptionText>
                Нашли покупателей самостоятельно и&nbsp;хотите обезопасить себя
                от&nbsp;мошенничества, ошибок и&nbsp;финансовых рисков, доверьте
                нам сопровождение сделки. Наша команда проверит
                и&nbsp;подготовит все&nbsp;необходимые документы
                и&nbsp;обеспечит безопасное проведение сделки
              </DescriptionText>
            </InformationContainer>
            <ButtonsContainer>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Заказать за&nbsp;79&nbsp;890&nbsp;₽
              </StyledButton>
              <StyledButton
                buttonSize={ButtonSize.MEDIUM}
                buttonType={ButtonType.FLAT}
              >
                Подробнее
              </StyledButton>
            </ButtonsContainer>
            <ServicesWrapper>
              <ManagerImgCard>
                <Image
                  src="/images/landing/manager.webp"
                  alt="Менеджер"
                  width={99}
                  height={151}
                />
                <ManagerImgCardText>
                  Выезд менеджера для&nbsp;проведения сделки
                </ManagerImgCardText>
              </ManagerImgCard>
              <ServicesContainer>
                <GreenBadge>
                  <BadgeIconContainer>
                    <PaperSVG />
                  </BadgeIconContainer>
                  <GreenBadgeText>Подготовка документов</GreenBadgeText>
                </GreenBadge>
                <BlueBadge>
                  <BadgeIconContainer>
                    <CoinsSVG />
                  </BadgeIconContainer>
                  <BlueBadgeText>Организация взаиморасчетов</BlueBadgeText>
                </BlueBadge>
                <PurpleBadge>
                  <BadgeIconContainer>
                    <CaseSVG />
                  </BadgeIconContainer>
                  <PurpleBadgeText>Проведение сделки</PurpleBadgeText>
                </PurpleBadge>
              </ServicesContainer>
            </ServicesWrapper>
          </CardContainer>
          <CardContainer>
            <LogosWrapper>
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
            <InformationContainer>
              <CardHeaderText>Продажа или обмен под&nbsp;ключ</CardHeaderText>
              <DescriptionText>
                Полное ведение объекта от&nbsp;оценки и&nbsp;подготовки
                к&nbsp;продаже до&nbsp;заключения сделки.
              </DescriptionText>
              <DescriptionText>
                Запуск рекламной кампании, организация показов и&nbsp;торгов,
                ведение переговоров, а&nbsp;также сбор необходимой документации
                и&nbsp;организация взаиморасчетов. Чат с&nbsp;персональным
                менеджером и&nbsp;еженедельные отчеты, чтобы быть в&nbsp;курсе
                всех событий
              </DescriptionText>
            </InformationContainer>
            <SecondCardButtonsContainer>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Оставить заявку
              </StyledButton>
              <StyledButton
                buttonSize={ButtonSize.MEDIUM}
                buttonType={ButtonType.FLAT}
              >
                Подробнее
              </StyledButton>
            </SecondCardButtonsContainer>
          </CardContainer>
        </CardsWrapper>
      </Container>
    </Wrapper>
  );
};

const SecondCardButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 12px;
`;

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
`;

const YandexLogoContainer = styled.div`
  position: relative;
  width: 162px;
  height: 25.54px;
`;

const CyanLogoContainer = styled.div`
  position: relative;
  width: 95px;
  height: 34px;
`;

const UlaLogoContainer = styled.div`
  position: relative;
  width: 89px;
  height: 31px;
`;

const AvitoLogoContainer = styled.div`
  position: relative;
  width: 95px;
  height: 27px;
`;

const LogosContainer = styled.div`
  display: flex;
  column-gap: 18px;
  height: 34px;
  align-items: flex-end;
`;

const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  background: #ffffff;
  border-radius: 24px;
  width: 100%;
`;

const BadgeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`;

const BadgeText = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
`;

const GreenBadgeText = styled(BadgeText)`
  color: #00711b;
`;

const BlueBadgeText = styled(BadgeText)`
  color: #0068c6;
`;

const PurpleBadgeText = styled(BadgeText)`
  color: #bd52ff;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: 1px solid;
  border-radius: 100px;
  width: 100%;
  column-gap: 4px;
`;

const GreenBadge = styled(BadgeContainer)`
  border-color: #00711b;
`;

const BlueBadge = styled(BadgeContainer)`
  border-color: #0068c6;
`;

const PurpleBadge = styled(BadgeContainer)`
  border-color: #bd52ff;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
  background: #ffffff;
  border-radius: 24px;
  row-gap: 16px;
`;

const ManagerImgCardText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #242424;
  min-height: 54px;
`;

const ManagerImgCard = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(282.65deg, #eda075 17.6%, #fed5be 98.14%)
    no-repeat;
  background-size: auto 86px;
  background-color: #ffffff;
  border-radius: 24px;
  width: 213px;
  height: 172px;
  padding: 0 16px 16px;
  justify-content: flex-end;
  overflow: visible;
  row-gap: 16px;
  & :first-child {
    margin-left: 24px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 24px;
`;

const StyledButton = styled(Button)`
  width: fit-content;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
  padding-bottom: 94px;
`;

const DescriptionText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #242424;
  margin: 0;
`;

const CardHeaderText = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #242424;
  margin: 0;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  padding: 32px;
  background: #f5f7f9;
  border-radius: 48px;
  row-gap: 32px;
`;

const CardsWrapper = styled.div`
  display: flex;
  column-gap: 32px;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default SellProperty;
