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
      <TextWrapper>
        <HeaderText>
          Съезжаете с квартиры? <MarkedText>Заплатим 10%</MarkedText>, за
          рекомендацию нас собственнику
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
      <Image />
    </Container>
  );
};

const Image = styled.div`
  width: 528px;
  height: 503px;
  background: no-repeat url("/images/unboxing.webp");
  background-size: cover;
  border-radius: 40px;
`;

const Text = styled.div`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${WhiteColor.WHITE};
  margin-bottom: 32px;
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
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 672px;
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
`;

export default CardWitsImage;
