import styled from "styled-components";
import { BrandColor } from "../../../../common/enums";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import Photo from "./Photo";
import { Hook } from "../../../../common/routes";

const PersonalInformation = () => {
  return (
    <Wrapper id={Hook.ABOUT_US}>
      <Container>
        <LeftPhotoBlock />
        <InformationBlockWrapper>
          <InformationBlock>
            <HeaderText>
              Евгений Гамолин, <AdaptiveTextDivider lg={true} md />
              основатель <BrandMarker>GamHome</BrandMarker>
            </HeaderText>
            <DescriptionContainer>
              <DescriptionText>
                Уже более 10&nbsp;лет я&nbsp;работаю в&nbsp;риэлторском бизнесе,
                постоянный участник профессиональных конгрессов
                и&nbsp;конференций
              </DescriptionText>
              <DescriptionText>
                Также являюсь экспертом-практиком в&nbsp;области маркетинга,
                продаж и&nbsp;переговоров в&nbsp;риэлторском бизнесе. Состою
                в&nbsp;закрытом сообществе профессиональных риэлторов
                &laquo;ГорОбмен&raquo; входящие в&nbsp;Топ-5 лучших компаний
                на&nbsp;рынке недвижимости Московского региона, по&nbsp;данным,
                ПАО&nbsp;&laquo;Сбербанк&raquo;
              </DescriptionText>
            </DescriptionContainer>
            <CardsWrapper>
              <CardContainer>
                <CardHeaderText>200+ сделок</CardHeaderText>
                <CardDescriptionText>
                  Персонально провел более 200&nbsp;сделок с&nbsp;недвижимостью
                </CardDescriptionText>
              </CardContainer>
              <CardContainer>
                <CardHeaderText>500+ клиентов</CardHeaderText>
                <CardDescriptionText>
                  В&nbsp;России довольны качеством и&nbsp;скоростью оказаных
                  услуг
                </CardDescriptionText>
              </CardContainer>
            </CardsWrapper>
            <DescriptionTextBottom>
              Полученные знания и&nbsp;опыт в&nbsp;риэлторском бизнесе,
              позволили мне создать сервис предоставляющий услуги
              по&nbsp;сделкам с&nbsp;недвижимостью для всех участников рынка
            </DescriptionTextBottom>
          </InformationBlock>
          <RightPhotoBlock />
        </InformationBlockWrapper>
        <BottomPhotoBlock />
      </Container>
    </Wrapper>
  );
};

const BottomPhotoBlock = styled(Photo)`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const InformationBlockWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1023px) {
    column-gap: 32px;
  }
`;

const RightPhotoBlock = styled(Photo)`
  display: none;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`;

const LeftPhotoBlock = styled(Photo)`
  @media screen and (max-width: 1023px) {
    display: none !important;
  }
`;

const CardDescriptionText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: rgba(36, 36, 36, 0.64);
`;

const CardHeaderText = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #242424;
  margin: 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 12px;
  flex-grow: 1;
  background: #f5f7f9;
  border-radius: 24px;
  max-width: 359px;
  @media screen and (max-width: 1439px) {
    max-width: 337px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 328px;
  }
  @media screen and (max-width: 767px) {
    max-width: unset;
    width: 100%;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  column-gap: 32px;
  @media screen and (max-width: 1023px) {
    width: 688px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    row-gap: 32px;
  }
`;

const DescriptionText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #242424;
`;

const DescriptionTextBottom = styled(DescriptionText)`
  @media screen and (max-width: 1023px) {
    width: 688px;
  }
  @media screen and (max-width: 767px) {
    width: 349px;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const BrandMarker = styled.span`
  color: ${BrandColor.BRAND};
`;

const HeaderText = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #242424;
  margin: 0;
  @media screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  row-gap: 32px;
  @media screen and (max-width: 1439px) {
    max-width: 706px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 448px;
    overflow: visible;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const Container = styled.div`
  display: flex;
  column-gap: 146px;
  @media screen and (max-width: 1439px) {
    column-gap: 32px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
  }
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

export default PersonalInformation;
