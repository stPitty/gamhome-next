import { ComponentWithLayout } from "../common/types";
import LandingLayout from "../components/landing_page/layout/LandingLayout";
import dynamic from "next/dynamic";
import Spinner from "../components/UI/spinner/Spinner";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setMobBtnVisibility } from "../redux/slicers/mobBtnViewSlicer";

const LandingPage = dynamic(
  () => import("../components/landing_page/LandingPage"),
  {
    loading: () => <Spinner />,
    ssr: false,
  }
);

const HomePage: ComponentWithLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMobBtnVisibility(false));
  }, []);

  return <LandingPage />;
};

HomePage.PageLayout = LandingLayout;

export default HomePage;
