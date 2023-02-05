import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";
import { WhiteColor } from "../../../../common/enums";

const Rent = () => {
  return (
    <Wrapper>
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
                  арендаторов, заключение договора и&nbsp;акта приема-передачи
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
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1088px;
  row-gap: 32px;
  border-radius: 24px;
  padding: 32px;
`;

const WhiteCard = styled(CardContainer)`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 20px 20px rgba(0, 0, 0, 0.08);
  background: #ffffff url("/images/landing/business_woman.webp") no-repeat
    calc(100% - 146px);
  background-size: auto 221px;
`;

const PurpleCard = styled(CardContainer)`
  background: #526eff url("/images/man-in-home.webp") no-repeat right;
  background-size: auto 236px;
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

export default Rent;
