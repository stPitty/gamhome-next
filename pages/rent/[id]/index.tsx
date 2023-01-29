import { ComponentWithLayout } from "../../../common/types";
import PageLayout from "../../../components/layout";
import dynamic from "next/dynamic";
import Spinner from "../../../components/UI/spinner/Spinner";

const Rent = dynamic(() => import("../../../components/rent_page/RentPage"), {
  loading: () => <Spinner />,
  ssr: false,
});

const RentPage: ComponentWithLayout = () => {
  return <Rent />;
};

RentPage.PageLayout = PageLayout;

export default RentPage;
