import { ComponentWithLayout } from "../../../common/types";
import PageLayout from "../../../components/layout";
import dynamic from "next/dynamic";
import Spinner from "../../../components/UI/spinner/Spinner";

const Buy = dynamic(() => import("../../../components/buy_page/Buy"), {
  loading: () => <Spinner />,
});

const RentPage: ComponentWithLayout = () => {
  return <Buy />;
};

RentPage.PageLayout = PageLayout;

export default RentPage;
