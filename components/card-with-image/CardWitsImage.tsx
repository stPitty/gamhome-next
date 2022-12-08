import styled from "styled-components";
import { BlackColor, BrandColor, Font, WhiteColor } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize } from "../UI/button/enums";
import { useAppDispatch } from "../../redux/hooks";
import { wantToLendFlat } from "../../redux/slicers/modalStateSlicer";

const CardWitsImage = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(wantToLendFlat());
  };

  return (
    <Container>
      <ColumnImage />
      <TextWrapper>
        <HeaderText>
          Съезжаете с квартиры?
          <AdaptiveBR1 /> <MarkedText>Заплатим 10%</MarkedText>, <AdaptiveBR0 />
          за рекомендацию нас собственнику
        </HeaderText>
        <Text>
          Мы быстро найдем новых жильцов, а вы получите 10% от нашей комиссии
        </Text>
        <Button
          onClick={handleButtonClick}
          width={191}
          buttonSize={ButtonSize.LARGE}
        >
          Оставить заявку
        </Button>
      </TextWrapper>
      <RowImage />
    </Container>
  );
};

const AdaptiveBR1 = styled.br`
  display: none;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: block;
  }
`;

const AdaptiveBR0 = styled.br`
  display: none;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: block;
  }
`;

const Image = styled.div`
  width: 528px;
  height: 503px;
  border-radius: 40px;
`;

const RowImage = styled(Image)`
  background: no-repeat url("/images/unboxing.webp") -335px 0;
  background-size: auto 650px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 378px;
    background-position: -445px 0;
    background-size: auto 650px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: none;
  }
`;

const ColumnImage = styled(Image)`
  background-size: cover;
  background: no-repeat url("/images/unboxing.webp") center;
  display: none;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: block;
    width: 688px;
    height: 373px;
    background-position: right 0;
  }
`;

const Text = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin-bottom: 32px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 430px;
  }
`;

const MarkedText = styled.span`
  color: ${BrandColor.BRAND_MARKED_TEXT};
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${WhiteColor.WHITE};
  margin: 0 0 20px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 672px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 542px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 182px 64px 64px;
  border-radius: 48px;
  background-color: ${BlackColor.BLACK_SECONDARY};
  background-image: url("/images/text-mark.webp");
  background-size: 301px;
  background-repeat: no-repeat;
  background-position: left 53px bottom 344px;
  column-gap: 112px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    column-gap: 32px;
    padding: 182px 36px 64px;
    background-position: left 28px bottom 385px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    flex-direction: column;
    padding: 160px 40px 64px;
    row-gap: 40px;
    background-position: left 43px bottom 228px;
    background-size: 239px;
  }
`;

export default CardWitsImage;
