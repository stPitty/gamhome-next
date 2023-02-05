import styled from "styled-components";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import Reports from "./components/Reports/Reports";
import SellProperty from "./components/SellProperty/SellProperty";
import Rent from "./components/Rent/Rent";
import WantToRentOrBuy from "./components/WantToRentOrBuy/WantToRentOrBuy";

const LandingPage = () => {
  return (
    <Wrapper>
      <GeneralInformation />
      <WorkWithUs />
      <PersonalInformation />
      <Reports />
      <SellProperty />
      <Rent />
      <WantToRentOrBuy />
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
