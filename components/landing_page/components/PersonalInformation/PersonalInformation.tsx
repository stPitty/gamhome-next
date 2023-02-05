import styled from "styled-components";
import Image from "next/image";
import { BrandColor } from "../../../../common/enums";
import VKSVG from "../../../../public/assets/svg/VKSVG";
import InstagramSVG from "../../../../public/assets/svg/InstagramSVG";
import TelegramSVG from "../../../../public/assets/svg/TelegramSVG";
import WhatsUpSVG from "../../../../public/assets/svg/WhatsUpSVG";

const PersonalInformation = () => {
  return (
    <Wrapper>
      <Container>
        <PhotoBlock>
          <ImageContainer>
            <Image
              src="/images/landing/personal_photo.webp"
              alt="Евгений Гамолин"
              fill
              loading="lazy"
            />
          </ImageContainer>
          <SocialMediaLinksWrapper>
            <SocialMediaIconContainer>
              <VKSVG />
            </SocialMediaIconContainer>
            <SocialMediaIconContainer>
              <InstagramSVG />
            </SocialMediaIconContainer>
            <SocialMediaIconContainer>
              <TelegramSVG />
            </SocialMediaIconContainer>
            <SocialMediaIconContainer>
              <WhatsUpSVG />
            </SocialMediaIconContainer>
          </SocialMediaLinksWrapper>
        </PhotoBlock>
        <InformationBlock>
          <HeaderText>
            Евгений Гамолин, основатель <BrandMarker>GamHome</BrandMarker>
          </HeaderText>
          <DescriptionContainer>
            <DescriptionText>
              Уже более 10&nbsp;лет я&nbsp;работаю в&nbsp;риэлторском бизнесе,
              постоянный участник профессиональных конгрессов и&nbsp;конференций
            </DescriptionText>
            <DescriptionText>
              Также являюсь экспертом-практиком в&nbsp;области маркетинга,
              продаж и&nbsp;переговоров в&nbsp;риэлторском бизнесе. Состою
              в&nbsp;закрытом сообществе профессиональных риэлторов
              &laquo;ГорОбмен&raquo; входящие в&nbsp;Топ-5 лучших компаний
              на&nbsp;рынке недвижимости Московского региона, по&nbsp;данным,
              ПАО &laquo;Сбербанк&raquo;
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
                В&nbsp;России довольны качеством и&nbsp;скоростью оказаных услуг
              </CardDescriptionText>
            </CardContainer>
          </CardsWrapper>
          <DescriptionText>
            Полученные знания и&nbsp;опыт в&nbsp;риэлторском бизнесе, позволили
            мне создать сервис предоставляющий услуги по&nbsp;сделкам
            с&nbsp;недвижимостью для всех участников рынка
          </DescriptionText>
        </InformationBlock>
      </Container>
    </Wrapper>
  );
};

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
`;

const CardsWrapper = styled.div`
  display: flex;
  column-gap: 32px;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #242424;
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
`;

const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  row-gap: 32px;
`;

const SocialMediaIconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    background: ${BrandColor.BRAND_12};
  }
  &:active {
    background: ${BrandColor.BRAND_16};
  }
`;

const SocialMediaLinksWrapper = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 192px;
  height: 246px;
  border-radius: 24px;
  position: relative;
`;

const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  column-gap: 146px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default PersonalInformation;
