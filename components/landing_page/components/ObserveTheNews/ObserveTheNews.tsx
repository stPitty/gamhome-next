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
  @media screen and (max-width: 1023px) {
    font-size: 9.72361px;
    line-height: 15px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12.174px;
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
  @media screen and (max-width: 1023px) {
    border-radius: 8.97564px;
    padding: 8.97564px 11.9675px;
  }
  @media screen and (max-width: 1023px) {
    border-radius: 11.2375px;
    padding: 11.2375px 14.9833px;
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
  @media screen and (max-width: 1023px) {
    width: 201.95px;
    height: 47.95px;
    left: 45px;
  }
  @media screen and (max-width: 767px) {
    width: 252.84px;
    height: 60.47px;
    left: 0;
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
  @media screen and (max-width: 1023px) {
    width: 257.19px;
    height: 50.65px;
    left: 118px;
    top: -9px;
  }
  @media screen and (max-width: 767px) {
    width: 309.97px;
    height: 60.47px;
    left: 40px;
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
  @media screen and (max-width: 1023px) {
    width: 214.13px;
    height: 53.89px;
    padding-left: 11px;
    padding-right: 11px;
    left: 33px;
    top: 30px;
  }
  @media screen and (max-width: 767px) {
    width: 241.97px;
    height: 60.47px;
    padding-left: 13px;
    padding-right: 13px;
    left: 20px;
    top: 15px;
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
  @media screen and (max-width: 1023px) {
    width: 254.62px;
    height: 49.52px;
    left: 115px;
    bottom: -40px;
  }
  @media screen and (max-width: 767px) {
    width: 309.03px;
    height: 60.47px;
    left: 41px;
    bottom: -43px;
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
  @media screen and (max-width: 1023px) {
    width: 375px;
    height: 242px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
    height: 285px;
  }
`;

const StyledButton = styled(Button)`
  width: 241px;
  padding: 0;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
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
  @media screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
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
  @media screen and (max-width: 1023px) {
    max-width: 313px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
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
  @media screen and (max-width: 1023px) {
    margin: 40px;
    max-width: 688px;
  }
  @media screen and (max-width: 767px) {
    margin: 40px 13px;
    max-width: 349px;
    flex-direction: column;
    row-gap: 66px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #242424;
  border-radius: 48px;
  @media screen and (max-width: 1023px) {
    border-radius: 24px;
  }
`;

export default ObserveTheNews;
