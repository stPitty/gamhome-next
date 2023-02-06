import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import LikeSVG from "../../../../public/assets/svg/LikeSVG";
import PersonSVG from "../../../../public/assets/svg/PersonSVG";
import LockSVG from "../../../../public/assets/svg/LockSVG";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";

const WorkWithUs = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderText>
            Почему нужно <AdaptiveTextDivider md />
            работать с&nbsp;нами
          </HeaderText>
          <StyledTopBtn buttonSize={ButtonSize.MEDIUM}>
            Оставить заявку
          </StyledTopBtn>
        </HeaderContainer>
        <CardsWrapper>
          <CardContainer>
            <IconContainer>
              <LikeSVG />
            </IconContainer>
            <CardInformationWrapper>
              <CardHeaderText>Дополнительная выгода</CardHeaderText>
              <CardText>
                Получите больше денег на&nbsp;руки, даже с&nbsp;учётом комиссии.
                По&nbsp;статистике, агенты продают недвижимость на&nbsp;5%
                дороже, чем собственник самостоятельно
              </CardText>
            </CardInformationWrapper>
          </CardContainer>
          <CardContainer>
            <IconContainer>
              <PersonSVG />
            </IconContainer>
            <CardInformationWrapper>
              <CardHeaderText>Персональный подход</CardHeaderText>
              <CardText>
                Используем инновационные методы взаимодействия с&nbsp;клиентом,
                включая онлайн-сервисы и&nbsp;внедрение новых продуктов, чтобы
                увеличить комфорт клиента, качество и&nbsp;скорость оказания
                услуг
              </CardText>
            </CardInformationWrapper>
          </CardContainer>
          <CardContainer>
            <IconContainer>
              <LockSVG />
            </IconContainer>
            <CardInformationWrapper>
              <CardHeaderText>Безопасность сделки</CardHeaderText>
              <CardText>
                Продавая недвижимость с&nbsp;нашим агентом,
                вы&nbsp;минимизируете риски и&nbsp;получаете максимальную
                юридическую защиту на&nbsp;каждом этапе
              </CardText>
            </CardInformationWrapper>
          </CardContainer>
        </CardsWrapper>
        <StyledBottomBtn buttonSize={ButtonSize.MEDIUM}>
          Оставить заявку
        </StyledBottomBtn>
      </Container>
    </Wrapper>
  );
};

const CardInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
`;

const CardText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  @media screen and (max-width: 1023px) {
    width: 628px;
  }
  @media screen and (max-width: 767px) {
    width: 349px;
  }
`;

const CardHeaderText = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: #ffffff;
  border-radius: 100px;
  @media screen and (max-width: 1023px) {
    min-width: 44px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 416px;
  @media screen and (max-width: 1439px) {
    width: 297px;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    width: 100%;
    column-gap: 16px;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 32px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    row-gap: 24px;
  }
`;

const StyledButton = styled(Button)`
  width: 191px;
  height: 56px;
`;

const StyledTopBtn = styled(StyledButton)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const StyledBottomBtn = styled(StyledButton)`
  display: none;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HeaderText = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  margin: 0;
  width: 864px;
  @media screen and (max-width: 1439px) {
    width: 504px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  column-gap: 257px;
  align-items: center;
  @media screen and (max-width: 1023px) {
    margin-left: -4px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 56px 64px 52px;
  row-gap: 56px;
  max-width: 1312px;
  @media screen and (max-width: 1439px) {
    max-width: 953px;
    margin: 56px 36px 56px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 688px;
    margin: 40px;
    row-gap: 40px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
    margin: 24px 13px;
    row-gap: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #242424 url("/assets/svg/RussiaSVG.svg") no-repeat
    calc(50% + 20px);
  border-radius: 48px;
  @media screen and (max-width: 1023px) {
    background-size: 768px;
    background-position: calc(50% + 30px) 145px;
  }
  @media screen and (max-width: 767px) {
    background-size: 362px;
    background-position: calc(50% + 5px) 9px;
    border-radius: 24px;
  }
`;

export default WorkWithUs;
