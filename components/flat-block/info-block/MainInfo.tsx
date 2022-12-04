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
    <MainInfoWrapper>
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
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  margin-right: 40px;
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

const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-height: 152px;
  row-gap: 8px;
`;

export default MainInfo;
