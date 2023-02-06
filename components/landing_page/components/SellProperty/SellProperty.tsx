import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";
import Image from "next/image";
import PaperSVG from "../../../../public/assets/svg/PaperSVG";
import CoinsSVG from "../../../../public/assets/svg/CoinsSVG";
import CaseSVG from "../../../../public/assets/svg/CaseSVG";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import PrepDocsSVG from "../../../../public/assets/svg/PrepDocsSVG";
import DealSVG from "../../../../public/assets/svg/DealSVG";
import CountsSVG from "../../../../public/assets/svg/CountsSVG";
import Badges from "./Badges";

const SellProperty = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderText>
          Продать <AdaptiveTextDivider sm />
          недвижимость
        </HeaderText>
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
                <ManagerImagesContainer>
                  <PrepDocsBadge />
                  <DealBadge />
                  <CountsBadge />
                  <Image
                    src="/images/landing/manager.png"
                    alt="Менеджер"
                    width={99}
                    height={151}
                  />
                </ManagerImagesContainer>
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
            <FirstCardBottomBtnContainer>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Заказать за&nbsp;79&nbsp;890&nbsp;₽
              </StyledButton>
              <StyledButton
                buttonSize={ButtonSize.MEDIUM}
                buttonType={ButtonType.FLAT}
              >
                Подробнее
              </StyledButton>
            </FirstCardBottomBtnContainer>
          </CardContainer>
          <CardContainer>
            <SecondCardBadgesTop />
            <InformationContainer>
              <CardHeaderText>Продажа или обмен под&nbsp;ключ</CardHeaderText>
              <DescriptionText>
                Полное ведение объекта от&nbsp;оценки и&nbsp;подготовки
                к&nbsp;продаже до&nbsp;заключения сделки.
              </DescriptionText>
              <LastDescriptionText>
                Запуск рекламной кампании, организация показов и&nbsp;торгов,
                ведение переговоров, а&nbsp;также сбор необходимой документации
                и&nbsp;организация взаиморасчетов. Чат с&nbsp;персональным
                менеджером и&nbsp;еженедельные отчеты, чтобы быть в&nbsp;курсе
                всех событий
              </LastDescriptionText>
            </InformationContainer>
            <SecondCardBadgesBottom />
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

const SecondCardBadgesBottom = styled(Badges)`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const SecondCardBadgesTop = styled(Badges)`
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

const ManagerImagesContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CountsBadge = styled(CountsSVG)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    z-index: 1;
    min-width: fit-content;
    position: relative;
    top: 80px;
    left: -20px;
  }
`;

const DealBadge = styled(DealSVG)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    z-index: 1;
    min-width: fit-content;
    position: relative;
    top: 100px;
    left: -110px;
  }
`;

const PrepDocsBadge = styled(PrepDocsSVG)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    z-index: 1;
    min-width: fit-content;
    position: relative;
    top: 33px;
    left: -5px;
  }
`;

const FirstCardBottomBtnContainer = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  row-gap: 12px;
  margin-top: -8px;
  & button {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const SecondCardButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 12px;
  @media screen and (max-width: 767px) {
    margin-top: -8px;
    flex-direction: column;
    row-gap: 12px;
    & button {
      width: 100%;
    }
  }
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
  @media screen and (max-width: 1439px) {
    width: 154px;
    height: 56px;
    border-radius: 16px;
    align-items: flex-start;
    padding: 8px 10px;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 36px;
    align-items: center;
  }
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
  @media screen and (max-width: 1439px) {
    width: 186px;
  }
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

const ManagerImgCardText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #242424;
  min-height: 54px;
  @media screen and (max-width: 1439px) {
    margin-bottom: 18px;
  }
  @media screen and (max-width: 1023px) {
    margin-bottom: -6px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
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
    @media screen and (max-width: 1439px) {
      margin-left: 43px;
    }
    @media screen and (max-width: 1023px) {
      margin-left: 124px;
    }
    @media screen and (max-width: 767px) {
      margin-left: 0;
    }
  }
  & img {
    @media screen and (max-width: 767px) {
      position: relative;
      left: -225px;
    }
  }
  @media screen and (max-width: 1439px) {
    width: 186px;
    height: 232px;
    background-size: auto 128px;
  }
  @media screen and (max-width: 1023px) {
    width: 300px;
    height: 172px;
    background-size: auto 92px;
    border-radius: 16px;
  }
  @media screen and (max-width: 767px) {
    width: 343px;
    margin-top: 56px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 24px;
`;

const StyledButton = styled(Button)`
  width: fit-content;
  padding: 10px 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
  padding-bottom: 94px;
  @media screen and (max-width: 1439px) {
    padding-bottom: 69px;
  }
  @media screen and (max-width: 1023px) {
    padding-bottom: 65px;
  }
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

const DescriptionText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #242424;
  margin: 0;
`;

const LastDescriptionText = styled(DescriptionText)`
  @media screen and (max-width: 767px) {
    margin-top: -4px;
  }
`;

const CardHeaderText = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #242424;
  margin: 0;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
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
  @media screen and (max-width: 1439px) {
    max-width: 460px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 688px;
    padding: 24px;
    border-radius: 24px;
  }
  @media screen and (max-width: 767px) {
    max-width: 375px;
    padding: 16px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  column-gap: 32px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #242424;
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
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
