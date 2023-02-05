import styled from "styled-components";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";

const LandingPage = () => {
  return (
    <Wrapper>
      <GeneralInformation />
      <WorkWithUs />
      <PersonalInformation />
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
