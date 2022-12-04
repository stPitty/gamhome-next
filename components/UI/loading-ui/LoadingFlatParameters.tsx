import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";

const LoadingFlatParameters = () => {
  return (
    <Container>
      <HeaderBlock />
      <ParametersWrapper>
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
      </ParametersWrapper>
    </Container>
  );
};

const Parameter = styled.div`
  width: 265px;
  height: 24px;
  background: ${LightBlueColor.LB_400};
  border-radius: 16px;
`;

const ParametersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  flex-direction: column;
  height: 152px;
  row-gap: 8px;
  column-gap: 40px;
`;

const HeaderBlock = styled.div`
  width: 100%;
  height: 32px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
`;

const Container = styled.div`
  width: 100%;
  row-gap: 24px;
  display: flex;
  flex-direction: column;
`;

export default LoadingFlatParameters;
