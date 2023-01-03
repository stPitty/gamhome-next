import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";

const LoadingFlatParameters = () => {
  return (
    <Container>
      <HeaderBlock />
      <DescriptionBlock />
      <SecondHeaderBlock />
      <ParametersWrapper>
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Divider />
        <Parameter />
        <Parameter />
      </ParametersWrapper>
      <SubInfo />
    </Container>
  );
};

const SubInfo = styled.div`
  width: 100%;
  height: 216px;
  background: #f5f7f9;
  border-radius: 24px;
  @media screen and (max-width: 1439px) and (max-width: 768px) {
    height: 264px;
  }
  @media screen and (max-width: 375px) {
    height: 264px;
  }
`;

const DescriptionBlock = styled.div`
  margin: -12px 0;
  display: none;
  width: 100%;
  height: 88px;
  background: ${LightBlueColor.LB_400};
  border-radius: 16px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const Divider = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    height: 8px;
    display: block;
  }
`;

const Parameter = styled.div`
  width: 265px;
  height: 24px;
  background: ${LightBlueColor.LB_400};
  border-radius: 16px;
  @media screen and (max-width: 375px) {
    width: 240px;
  }
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
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

const HeaderBlock = styled.div`
  width: 100%;
  height: 32px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
  @media screen and (max-width: 767px) {
    height: 28px;
  }
`;

const SecondHeaderBlock = styled(HeaderBlock)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 100%;
  row-gap: 24px;
  display: flex;
  flex-direction: column;
`;

export default LoadingFlatParameters;
