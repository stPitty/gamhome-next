import styled from "styled-components";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import Reports from "./components/Reports/Reports";
import SellProperty from "./components/SellProperty/SellProperty";
import Rent from "./components/Rent/Rent";
import WantToRentOrBuy from "./components/WantToRentOrBuy/WantToRentOrBuy";
import Questions from "./components/Questions/Questions";
import ObserveTheNews from "./components/ObserveTheNews/ObserveTheNews";
import { Hook } from "../../common/routes";

const LandingPage = () => {
  return (
    <Wrapper id={Hook.HOME}>
      <GeneralInformation />
      <WorkWithUs />
      <PersonalInformation />
      <Reports />
      <SellProperty />
      <Rent />
      <WantToRentOrBuy />
      <Questions />
      <ObserveTheNews />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 224px 0 80px;
  @media screen and (max-width: 1439px) {
    padding-top: 184px;
  }
  @media screen and (max-width: 1023px) {
    padding: 156px 0 64px;
  }
  @media screen and (max-width: 767px) {
    padding: 147px 0 64px;
  }
  @media screen and (max-width: 374px) {
    padding: 126px 0 64px;
  }
`;

export default LandingPage;
