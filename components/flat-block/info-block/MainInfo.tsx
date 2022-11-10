import styled from "styled-components";
import { flatData, FlatDataFields } from "../../../mock";
import { BlackColor, Font } from "../../../common/enums";

const MainInfo = () => {
  return (
    <MainInfoWrapper>
      {Object.entries(flatData.mainInfo).map((el, i) => {
        return (
          <TextWrapper key={el[0] + i}>
            <FieldNameText>{el[0]}</FieldNameText>
            <FieldValueText>{el[1]}</FieldValueText>
          </TextWrapper>
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
