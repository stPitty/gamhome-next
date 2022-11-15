import { TabBodyData } from "./types";
import React from "react";
import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import DoneSVG from "../../public/assets/svg/DoneSVG";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";

type Props = {
  data: TabBodyData;
};

const Conditions: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Header>{data.additionalInfo.header}</Header>
        <ConditionsContainer>
          {data.additionalInfo.points.map((el, i) => {
            return (
              <TextContainer key={i}>
                <IconContainer>
                  <DoneSVG />
                </IconContainer>

                <ConditionText>{el}</ConditionText>
              </TextContainer>
            );
          })}
        </ConditionsContainer>
      </Wrapper>
      <ButtonGroupContainer>
        <Button buttonSize={ButtonSize.MEDIUM}>
          Заказать за {data.additionalInfo.cost} ₽
        </Button>
        <Button buttonType={ButtonType.OUTLINE} buttonSize={ButtonSize.MEDIUM}>
          Скачать пример отчёта
        </Button>
      </ButtonGroupContainer>
    </Container>
  );
};

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 218px;
  margin: 48px;
  row-gap: 12px;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const ConditionText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${BlackColor.BLACK_64};
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 303px;
  column-gap: 6px;
`;

const ConditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 8px;
  height: 112px;
`;

const Header = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 24px;
  width: 909px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 72px 0;
`;

export default Conditions;
