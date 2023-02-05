import styled from "styled-components";
import AdaptiveTextDivider from "../../../UI/adaptive_text_divider/AdaptiveTextDivider";
import Image from "next/image";
import Button from "../../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";

const GeneralInformation = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderMainText>
          Надежный партнeр в&nbsp;организации
          <AdaptiveTextDivider xl={true} />
          сделок с&nbsp;недвижимостью
        </HeaderMainText>
        <HeaderTextSub>
          Выполняем любые операции с&nbsp;недвижимостью:{" "}
          <AdaptiveTextDivider xl={true} />
          купля, продажа, обмен и&nbsp;аренда жилой недвижимости
        </HeaderTextSub>
      </HeaderWrapper>
      <CardsWrapper>
        <Card>
          <ImageContainer>
            <ImageContainer>
              <Image
                src="/images/landing/card_img_1.webp"
                alt="Продать или обменять"
                fill
                loading="lazy"
              />
            </ImageContainer>
          </ImageContainer>
          <CardInformationContainer>
            <CardHeader>Продать или&nbsp;обменять</CardHeader>
            <CardDesc>
              Продайте свою недвижимость по&nbsp;максимальной
              цене&nbsp;благодаря нашему опыту в&nbsp;переговорах,
              знаниям&nbsp;рынка недвижимости и&nbsp;эффективному маркетингу
            </CardDesc>
            <StyledAdditionInformationBtn
              buttonType={ButtonType.FLAT}
              buttonSize={ButtonSize.MEDIUM}
            >
              Подробнее
            </StyledAdditionInformationBtn>
          </CardInformationContainer>
        </Card>
        <Card>
          <ImageContainer>
            <ImageContainer>
              <Image
                src="/images/landing/card_img_2.webp"
                alt="Продать или обменять"
                fill
                loading="lazy"
              />
            </ImageContainer>
          </ImageContainer>
          <CardInformationContainer>
            <CardHeader>Сдать в&nbsp;аренду</CardHeader>
            <CardDesc>
              Готовое решение по&nbsp;поиску жильцов, защите интересов
              и&nbsp;оформлению документов
            </CardDesc>
            <StyledAdditionInformationBtn
              buttonType={ButtonType.FLAT}
              buttonSize={ButtonSize.MEDIUM}
            >
              Подробнее
            </StyledAdditionInformationBtn>
          </CardInformationContainer>
        </Card>
        <Card>
          <ImageContainer>
            <ImageContainer>
              <Image
                src="/images/landing/card_img_3.webp"
                alt="Продать или обменять"
                fill
                loading="lazy"
              />
            </ImageContainer>
          </ImageContainer>
          <CardInformationContainer>
            <CardHeader>Купить или снять</CardHeader>
            <CardDesc>
              Найдите идеальное жильё с&nbsp;нашим бесплатным Telegram ботом.
              Если вам понадобится дополнительная помощь, наши специалисты
              помогут вам на&nbsp;каждом этапе&nbsp;&mdash; от&nbsp;поиска
              недвижимости до&nbsp;заключения сделки
            </CardDesc>
            <StyledAdditionInformationBtn
              buttonType={ButtonType.FLAT}
              buttonSize={ButtonSize.MEDIUM}
            >
              Подробнее
            </StyledAdditionInformationBtn>
          </CardInformationContainer>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

const StyledAdditionInformationBtn = styled(Button)`
  padding: 9px 0px;
  width: fit-content;
`;

const CardDesc = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  margin: 0;
`;

const CardHeader = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #242424;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
`;

const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const ImageContainer = styled.div`
  width: 416px;
  height: 180px;
  position: relative;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 32px;
`;

const HeaderTextSub = styled.h2`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #242424;
`;

const HeaderMainText = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  color: #242424;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 64px;
  padding: 0 64px;
`;

export default GeneralInformation;
