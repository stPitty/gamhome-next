import styled from "styled-components";
import { LightBlueColor } from "../../../common/enums";

const LoadingMap = () => {
  return (
    <Wrapper>
      <Header />
      <SubHeader />
      <DescWrapper>
        <DescElement />
        <DescElement />
        <DescElement />
      </DescWrapper>
      <Map />
    </Wrapper>
  );
};

const Map = styled.div`
  width: 100%;
  height: 448px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
`;

const DescElement = styled.div`
  width: 265px;
  height: 24px;
  background: ${LightBlueColor.LB_400};
  border-radius: 16px;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const SubHeader = styled.div`
  width: 100%;
  height: 24px;
  background: ${LightBlueColor.LB_400};
  border-radius: 16px;
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
  background: ${LightBlueColor.LB_100};
  border-radius: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
`;

export default LoadingMap;
