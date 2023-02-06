import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";
import LikeSVG from "../../../../public/assets/svg/LikeSVG";
import PersonSVG from "../../../../public/assets/svg/PersonSVG";
import LockSVG from "../../../../public/assets/svg/LockSVG";

const WorkWithUs = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderText>Почему нужно работать с&nbsp;нами</HeaderText>
          <StyledButton buttonSize={ButtonSize.MEDIUM}>
            Оставить заявку
          </StyledButton>
        </HeaderContainer>
        <CardsWrapper>
          <CardContainer>
            <IconContainer>
              <LikeSVG />
            </IconContainer>
            <CardHeaderText>Дополнительная выгода</CardHeaderText>
            <CardText>
              Получите больше денег на&nbsp;руки, даже с&nbsp;учётом комиссии.
              По&nbsp;статистике, агенты продают недвижимость на&nbsp;5% дороже,
              чем собственник самостоятельно
            </CardText>
          </CardContainer>
          <CardContainer>
            <IconContainer>
              <PersonSVG />
            </IconContainer>
            <CardHeaderText>Персональный подход</CardHeaderText>
            <CardText>
              Используем инновационные методы взаимодействия с&nbsp;клиентом,
              включая онлайн-сервисы и&nbsp;внедрение новых продуктов, чтобы
              увеличить комфорт клиента, качество и&nbsp;скорость оказания услуг
            </CardText>
          </CardContainer>
          <CardContainer>
            <IconContainer>
              <LockSVG />
            </IconContainer>
            <CardHeaderText>Безопасность сделки</CardHeaderText>
            <CardText>
              Продавая недвижимость с&nbsp;нашим агентом, вы&nbsp;минимизируете
              риски и&nbsp;получаете максимальную юридическую защиту
              на&nbsp;каждом этапе
            </CardText>
          </CardContainer>
        </CardsWrapper>
      </Container>
    </Wrapper>
  );
};

const CardText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
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
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 416px;
  @media screen and (max-width: 1439px) {
    width: 297px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 32px;
`;

const StyledButton = styled(Button)`
  width: 191px;
  height: 56px;
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
`;

const HeaderContainer = styled.div`
  display: flex;
  column-gap: 257px;
  align-items: center;
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
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #242424 url("/assets/svg/RussiaSVG.svg") no-repeat
    calc(50% + 20px);
  border-radius: 48px;
  @media screen and (max-width: 1439px) {
  }
`;

export default WorkWithUs;
