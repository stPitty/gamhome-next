import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import MainInfo from "./MainInfo";
import SubInfoBlock from "./SubInfoBlock";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import LoadingFlatParameters from "../../UI/loading-ui/LoadingFlatParameters";
import { useMemo } from "react";
import { handleGetSubHeader } from "../../../common/helpers";

const InfoBlock: React.FC = () => {
  const { isLoading, flatData } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const subHeader = useMemo(
    handleGetSubHeader(flatData?.price, flatData?.fee, flatData?.feeAmount),
    [flatData]
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingFlatParameters />
      ) : (
        <>
          <FlatGenInfoContainer>
            <FlatTitleText>{flatData?.title}</FlatTitleText>
            <FlatPriceText>{flatData?.price} ₽ в мес</FlatPriceText>
            <SubHeaderText>{subHeader}</SubHeaderText>
          </FlatGenInfoContainer>
          <HeaderText>Общая информация</HeaderText>
          <MainInfo />
        </>
      )}
      <SubInfoBlock />
    </Container>
  );
};

const SubHeaderText = styled.div`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BlackColor.BLACK_64};
`;

const FlatPriceText = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
`;

const FlatTitleText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  color: ${BlackColor.BLACK_64};
`;

const FlatGenInfoContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  row-gap: 12px;
  margin-bottom: 32px;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 864px;
  padding-top: 56px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: 624px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
    padding-top: 32px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    padding-top: 0;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    padding-top: 0;
  }
`;

export default InfoBlock;
