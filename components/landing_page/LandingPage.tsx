import styled from "styled-components";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";

const LandingPage = () => {
  return (
    <Wrapper>
      <GeneralInformation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 112px;
  padding: 116px 0 80px;
`;

export default LandingPage;
