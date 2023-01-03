import styled from "styled-components";
import { BlackColor, Font } from "../../../common/enums";
import { useAppSelector } from "../../../redux/hooks";
import { TFlatState } from "../../../redux/slicers/types";
import { useMemo } from "react";
import { sortMainFlatParams } from "../../../common/helpers";

const MainInfo = () => {
  const { flatData } = useAppSelector<TFlatState>((state) => state.flatData);

  const sortedParamsArr = useMemo(sortMainFlatParams(flatData?.parameters), [
    flatData,
  ]);

  return (
    <MainInfoWrapper paramsCount={sortedParamsArr.length}>
      {sortedParamsArr?.map((el, i) => {
        return (
          el && (
            <TextWrapper key={el.parameter.id}>
              <FieldNameText>{el.parameter.name}:</FieldNameText>
              <FieldValueText>{el.value}</FieldValueText>
            </TextWrapper>
          )
        );
      })}
    </MainInfoWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  margin-right: 40px;
  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

const FieldValueText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const FieldNameText = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_48};
  margin: 0;
  float: left;
`;

const MainInfoWrapper = styled.div<{ paramsCount: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  height: ${({ paramsCount }) => {
    if (paramsCount) {
      return `${Math.floor(paramsCount / 2 + 1) * 32}px`;
    }
  }};
  row-gap: 8px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    width: 624px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 349px;
    height: auto;
  }
  @media screen and (max-width: 374px) {
    width: 288px;
    height: auto;
  }
`;

export default MainInfo;
