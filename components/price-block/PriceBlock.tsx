import styled from "styled-components";
import { BlackColor, Font, LightBlueColor } from "../../common/enums";
import Button from "../UI/button/Button";
import { ButtonSize, ButtonType } from "../UI/button/enums";
import KeySVG from "../../public/assets/svg/KeySVG";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Hook } from "../../common/routes";
import { useAppSelector } from "../../redux/hooks";
import { TFlatState } from "../../redux/slicers/types";

const PriceBlock: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const { isLoading } = useAppSelector<TFlatState>((state) => state.flatData);

  const handleGetSubHeader = useMemo(() => {
    return `Залог ${flatData?.price} ₽, ${
      flatData?.fee && "комиссия " + flatData.feeAmount + " ₽,"
    } предоплата за 1 месяц, от года`;
  }, [flatData]);

  const handleShowNumberClick = () => {
    if (!showNumber) {
      setLoading(true);
      setTimeout(() => {
        setShowNumber(true);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <Wrapper>
      <Container>
        {isLoading ? (
          <LoadingBlock />
        ) : (
          <>
            <HeaderText>{flatData?.price}₽ в мес</HeaderText>
            <SubHeaderText>{handleGetSubHeader}</SubHeaderText>
          </>
        )}

        {showNumber ? (
          <PhoneNumberLink href={`tel:${flatData?.phone}`}>
            <Button
              buttonType={ButtonType.OUTLINE}
              buttonSize={ButtonSize.LARGE}
            >
              {flatData?.phone}
            </Button>
          </PhoneNumberLink>
        ) : (
          <Button
            loading={loading}
            onClick={handleShowNumberClick}
            buttonSize={ButtonSize.LARGE}
          >
            Показать телефон
          </Button>
        )}
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
          Проверить объект
        </Button>
      </Container>
    </Wrapper>
  );
};

const LoadingBlock = styled.div`
  width: 100%;
  height: 72px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
  margin-bottom: 20px;
`;

const PhoneNumberLink = styled.a`
  width: 100%;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: sticky;
  z-index: 1;
  top: 116px;
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
  font-weight: 700;
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
