import styled from "styled-components";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TFlatState, TPathName } from "../../../redux/slicers/types";
import { Hook, Route } from "../../../common/routes";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import KeySVG from "../../../public/assets/svg/KeySVG";
import { BlackColor, Font, LightBlueColor } from "../../../common/enums";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { checkObjInputNum } from "../../../redux/slicers/modalStateSlicer";
import {
  handleGetSubHeader,
  handleShowNumberClick,
} from "../../../common/helpers";
import Button from "../../UI/button/Button";

const PriceBlock: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  const dispatch = useAppDispatch();

  const { flatData, isLoading } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const subHeader = useMemo(
    handleGetSubHeader(
      flatData?.price,
      flatData?.squarePrice,
      flatData?.fee,
      flatData?.feeAmount,
      pathName
    ),
    [flatData]
  );

  const handleOpenModalClick = () => {
    dispatch(checkObjInputNum());
  };

  return (
    <Wrapper>
      <Container>
        {isLoading ? (
          <LoadingBlock />
        ) : (
          <>
            <HeaderText>
              {flatData?.price}₽{pathName === Route.RENT ? " в мес" : ""}
            </HeaderText>
            <SubHeaderText>{subHeader}</SubHeaderText>
          </>
        )}

        {showNumber ? (
          <StyledLink href={`tel:${flatData?.phone}`}>
            <Button
              buttonType={ButtonType.OUTLINE}
              buttonSize={ButtonSize.LARGE}
            >
              {flatData?.phone}
            </Button>
          </StyledLink>
        ) : (
          <Button
            loading={loading}
            onClick={handleShowNumberClick(
              showNumber,
              setLoading,
              setShowNumber
            )}
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
        <Button
          onClick={handleOpenModalClick}
          buttonType={ButtonType.FLAT}
          buttonSize={ButtonSize.LARGE}
        >
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

const StyledLink = styled(Link)`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: sticky;
  z-index: 1;
  top: 116px;
  margin-bottom: 112px;
  @media screen and (max-width: 1023px) {
    display: none;
  }
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
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 296px;
  }
`;

export default PriceBlock;
