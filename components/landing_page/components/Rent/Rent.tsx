import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";
import { WhiteColor } from "../../../../common/enums";
import { Hook } from "../../../../common/routes";

const Rent = () => {
  return (
    <Wrapper id={Hook.RENT}>
      <Container>
        <HeaderText>Сдать в&nbsp;аренду</HeaderText>
        <CardsWrapper>
          <WhiteCard>
            <CardInformationBlock>
              <WhiteCardHeaderText>Агент на&nbsp;договор</WhiteCardHeaderText>
              <CardDescriptionContainer>
                <WhiteCardDescriptionText>
                  Подойдет тем, кто нашел арендатора самостоятельно
                </WhiteCardDescriptionText>
                <WhiteCardDescriptionText>
                  Наш агент приедет для заключения договора аренды, который
                  защищает интересы собственника. Агент предоставит поддержку
                  в&nbsp;переговорах во&nbsp;время подписания договора
                  и&nbsp;составит опись имущества
                </WhiteCardDescriptionText>
              </CardDescriptionContainer>
            </CardInformationBlock>
            <ButtonContainer>
              <StyledButton buttonSize={ButtonSize.MEDIUM}>
                Заказать за&nbsp;5&nbsp;000&nbsp;₽
              </StyledButton>
            </ButtonContainer>
          </WhiteCard>
          <PurpleCard>
            <CardInformationBlock>
              <PurpleCardHeaderText>Под ключ</PurpleCardHeaderText>
              <CardDescriptionContainer>
                <PurpleCardDescriptionText>
                  Предоставляем комплексное решение по&nbsp;сдаче недвижимого
                  имущества в&nbsp;аренду, включая поиск и&nbsp;отбор
                  арендаторов, заключение договора и&nbsp;акта приема—передачи
                  имущества.
                </PurpleCardDescriptionText>
                <PurpleCardDescriptionText>
                  Гарантируем высокое качество и&nbsp;профессионализм наших
                  услуг, а&nbsp;также максимально высокую доходность
                  и&nbsp;конфиденциальность для вас
                </PurpleCardDescriptionText>
              </CardDescriptionContainer>
            </CardInformationBlock>
            <ButtonContainer>
              <StyledButton
                buttonType={ButtonType.PRIMARY_WHITE}
                buttonSize={ButtonSize.MEDIUM}
              >
                Оставить заявку
              </StyledButton>
              <AddInfoBtn buttonSize={ButtonSize.MEDIUM}>Подробнее</AddInfoBtn>
            </ButtonContainer>
          </PurpleCard>
        </CardsWrapper>
      </Container>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  width: fit-content;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const AddInfoBtn = styled(StyledButton)`
  &:hover {
    background-color: ${WhiteColor.WHITE_16};
  }
  &:active {
    background-color: ${WhiteColor.WHITE_24};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 12px;
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    row-gap: 12px;
  }
`;

const CardDescriptionText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const WhiteCardDescriptionText = styled(CardDescriptionText)`
  color: #242424;
`;

const PurpleCardDescriptionText = styled(CardDescriptionText)`
  color: #ffffff;
`;

const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const CardHeaderText = styled.h3`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 0;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const WhiteCardHeaderText = styled(CardHeaderText)`
  color: #242424;
`;

const PurpleCardHeaderText = styled(CardHeaderText)`
  color: #ffffff;
`;

const CardInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-width: 496px;
  @media screen and (max-width: 1439px) {
    max-width: 349px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 336px;
  }
  @media screen and (max-width: 767px) {
    max-width: 343px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1088px;
  row-gap: 32px;
  border-radius: 24px;
  padding: 32px;
  @media screen and (max-width: 1439px) {
    width: 788px;
  }
  @media screen and (max-width: 1023px) {
    width: 688px;
    padding: 24px;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
    padding: 16px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
  }
`;

const WhiteCard = styled(CardContainer)`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 20px 20px rgba(0, 0, 0, 0.08);
  background: #ffffff url("/images/landing/business_woman.webp") no-repeat
    calc(100% - 146px);
  background-size: auto 221px;
  @media screen and (max-width: 1439px) {
    background-size: auto 202px;
    background-position: calc(100% - 82px);
  }
  @media screen and (max-width: 1023px) {
    background-size: auto 198px;
    background-position: calc(100% - 36px);
  }
  @media screen and (max-width: 767px) {
    row-gap: 262px;
    background-position: center 310px;
  }
  @media screen and (max-width: 374px) {
    background-position: center 335px;
  }
`;

const PurpleCard = styled(CardContainer)`
  background: #526eff url("/images/man-in-home.webp") no-repeat right;
  background-size: auto 236px;
  @media screen and (max-width: 1439px) {
    background-size: auto 193px;
  }
  @media screen and (max-width: 1023px) {
    background-size: auto 158px;
  }
  @media screen and (max-width: 767px) {
    background-position: center 325px;
    row-gap: 221px;
  }
  @media screen and (max-width: 374px) {
    background-position: center 380px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  row-gap: 32px;
  flex-direction: column;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 112px;
  @media screen and (max-width: 1023px) {
    padding-top: 96px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 72px;
  }
`;

export default Rent;
