import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import KeySVG from "../../public/assets/svg/KeySVG";
import { useMemo } from "react";
import Link from "next/link";
import { Hook } from "../../common/routes";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";
import { handleMoneyDataFormatter } from "../../common/helpers";

const PriceBlock: React.FC = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const formattedMoneyNum = useMemo(handleMoneyDataFormatter(flatData?.price), [
    flatData,
  ]);

  return (
    <Wrapper>
      <Container>
        <HeaderText>{formattedMoneyNum}₽ в мес</HeaderText>
        <SubHeaderText>
          Залог 390 000 ₽, без комиссии, предоплата за 1 месяц, от года
        </SubHeaderText>
        <Button buttonSize={ButtonSize.LARGE}>Показать телефон</Button>
        <StyledLink href={"#" + Hook.SERVICES} scroll={false}>
          <Button
            buttonType={ButtonType.PRIMARY_PURPLE}
            buttonSize={ButtonSize.LARGE}
          >
            <KeyIcon />
            Подберите мне квартиру
          </Button>
        </StyledLink>
        <Button buttonType={ButtonType.FLAT} buttonSize={ButtonSize.LARGE}>
          Перейти на страницу объявления
        </Button>
      </Container>
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: sticky;
  z-index: 1;
  top: 100px;
  margin-bottom: 112px;
`;

const KeyIcon = styled(KeySVG)`
  margin-right: 7px;
`;

const SubHeaderText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BlackColor.BLACK_64};
  margin: 0 0 20px;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${BlackColor.BLACK_PRIMARY};
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 416px;
  gap: 12px;
`;

export default PriceBlock;
