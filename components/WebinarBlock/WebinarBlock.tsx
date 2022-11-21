import styled from "styled-components";
import { BlackColor, BrandColor, Font, WhiteColor } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";

const WebinarBlock = () => {
  return (
    <Container>
      <ContentContainer>
        <Tag>Бесплатный доступ к вебинару</Tag>
        <HeaderText>
          Узнайте основные риски при аренде квартиры и какие схемы используют
          мошенники
        </HeaderText>
        <Text>
          На вебинаре разобраны основные методы мошенников и как их вычислить.
          Изучите это видео, чтобы всегда понимать правила съёма квартиры
        </Text>
        <Button
          width={206}
          buttonSize={ButtonSize.LARGE}
          buttonType={ButtonType.PRIMARY_WB}
        >
          Посмотреть видео
        </Button>
      </ContentContainer>
      <Image />
    </Container>
  );
};

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin: 0;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  width: 269px;
  align-items: center;
  padding: 8px 16px;
  background: ${WhiteColor.WHITE};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const Image = styled.div`
  height: 585px;
  width: 602px;
  background-image: url("/images/woman-webinar.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 642px;
  row-gap: 32px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${BrandColor.BRAND};
  padding: 152px 48px 64px 64px;
  border-radius: 48px;
  margin-bottom: 50px;
  overflow-x: hidden;
  column-gap: 84px;
`;

export default WebinarBlock;
