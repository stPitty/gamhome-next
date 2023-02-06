import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { ButtonSize } from "../../../UI/button/enums";

const ObserveTheNews = () => {
  return (
    <Wrapper>
      <Container>
        <InformationWrapper>
          <TextWrapper>
            <HeaderText>Следите за&nbsp;новостями недвижимости</HeaderText>
            <DescriptionText>
              Рассказываем о&nbsp;различных событиях и&nbsp;новостях, связанных
              с&nbsp;рынком недвижимости
            </DescriptionText>
          </TextWrapper>
          <StyledButton buttonSize={ButtonSize.LARGE}>
            Перейти в Telegram чат
          </StyledButton>
        </InformationWrapper>
        <BadgesWrapper>
          <BadgeFlat>
            <BadgeFlatText>
              Запуск новых жилых комплексов и&nbsp;коммерческих проектов
            </BadgeFlatText>
          </BadgeFlat>
          <BadgeFilled>
            <BadgeFilledText>
              Изменения в&nbsp;ценах на&nbsp;недвижимость в&nbsp;разных регионах
              и&nbsp;городах
            </BadgeFilledText>
          </BadgeFilled>
          <BadgeOutlined>
            <BadgeOutlinedText>
              Информация о&nbsp;процентных ставках и&nbsp;условиях
              по&nbsp;ипотечным кредитам
            </BadgeOutlinedText>
          </BadgeOutlined>
          <BadgeFlatLast>
            <BadgeFlatText>
              Изменения в&nbsp;законодательстве и&nbsp;нормативных документах,
              касающиеся недвижимости
            </BadgeFlatText>
          </BadgeFlatLast>
        </BadgesWrapper>
      </Container>
    </Wrapper>
  );
};

const BadgeText = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
  @media screen and (max-width: 1439px) {
    font-size: 12.2px;
    line-height: 19px;
  }
`;

const BadgeFlatText = styled(BadgeText)`
  color: #242424;
`;

const BadgeFilledText = styled(BadgeText)`
  color: #ffffff;
`;

const BadgeOutlinedText = styled(BadgeText)`
  color: #526eff;
`;

const BadgeLayout = styled.div`
  border-radius: 12px;
  padding: 12px 16px;
  position: relative;
  @media screen and (max-width: 1439px) {
    border-radius: 11.2px;
    padding: 11.2px 15px;
  }
`;

const BadgeFlat = styled(BadgeLayout)`
  background: #ffffff;
  width: 270px;
  height: 64px;
  left: 98px;
  @media screen and (max-width: 1439px) {
    width: 253px;
    height: 60px;
    left: 62px;
  }
`;

const BadgeFilled = styled(BadgeLayout)`
  background: #526eff;
  width: 331px;
  height: 64px;
  top: -18px;
  left: 279px;
  @media screen and (max-width: 1439px) {
    width: 310px;
    height: 60px;
    left: 232px;
  }
`;

const BadgeOutlined = styled(BadgeLayout)`
  width: 257px;
  height: 64px;
  background: #ffffff;
  border: 2px solid #526eff;
  left: 33px;
  padding-left: 14px;
  padding-right: 14px;
  @media screen and (max-width: 1439px) {
    width: 248px;
    height: 60px;
    padding-left: 13px;
    padding-right: 13px;
    left: 32px;
  }
`;

const BadgeFlatLast = styled(BadgeLayout)`
  background: #ffffff;
  width: 330px;
  height: 64px;
  bottom: -25px;
  left: 193px;
  @media screen and (max-width: 1439px) {
    width: 309px;
    height: 60px;
    left: 181px;
  }
`;

const BadgesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 624px;
  height: 280px;
  @media screen and (max-width: 1439px) {
    width: 542px;
    height: 266px;
  }
`;

const StyledButton = styled(Button)`
  width: 241px;
  padding: 0;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const HeaderText = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 640px;
  @media screen and (max-width: 1439px) {
    max-width: 443px;
  }
`;

const Container = styled.div`
  display: flex;
  column-gap: 46px;
  margin: 64px 66px 64px 64px;
  align-items: center;
  @media screen and (max-width: 1439px) {
    column-gap: 0;
    margin: 64px 36px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #242424;
  border-radius: 48px;
`;

export default ObserveTheNews;
