import { ComponentWithLayout } from "../../common/types";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TFlatState, TWindowSize } from "../../redux/slicers/types";
import { createRef, RefObject, useEffect } from "react";
import {
  setIOForBottomMenu,
  setIOForScrollBtn,
} from "../../common/helpers/mainPageHelpers";
import {
  IOBottomMenuSingleton,
  IOScrollButtonSingleton,
} from "../../common/helpers/IOSingleton";
import { handleGetFlatData } from "../../common/helpers";
import { Route } from "../../common/routes";
import FlatBlock from "../common/flat_block";
import AddInfoBlock from "./add_info_block";
import PriceBlock from "./price_block";
import ServicesBlock from "../common/services_block";
import CheckOwnerBlock from "../common/check_owner_block";
import CardWitsImage from "./card_with_image/CardWitsImage";
import MainServices from "../common/main_services";
import DiscountsBlock from "../common/discounts_block";
import WebinarBlock from "../common/webinar_block";
import MobileButtons from "./mobile_buttons/MobileButtons";
import PageContainer from "../common/page_container/PageContainer";
import ColumnWrapper from "../common/column_wrapper/ColumnWrapper";
import RowWrapper from "../common/row_wrapper/RowWrapper";
import ObservableWrapper from "../common/observable_wrapper/ObservableWrapper";

const Rent: ComponentWithLayout = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { flatData, isError } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const observingWrapperRef: RefObject<HTMLDivElement> = createRef();

  const cardWithImageDarkRef = createRef();
  const mainServicesLightRef = createRef();
  const discountPartnersDarkRef = createRef();
  const webinarLightRef = createRef();

  useEffect(() => {
    setIOForBottomMenu(windowSize, observingWrapperRef.current, dispatch);
    return () => IOBottomMenuSingleton.destroy();
  }, [windowSize]);

  useEffect(() => {
    setIOForScrollBtn(
      dispatch,
      cardWithImageDarkRef.current,
      mainServicesLightRef.current,
      discountPartnersDarkRef.current,
      webinarLightRef.current
    );
    return () => IOScrollButtonSingleton.destroy();
  }, []);

  useEffect(() => {
    handleGetFlatData(router, flatData, dispatch);
  }, [router.query.id]);

  useEffect(() => {
    if (isError) {
      router.push(Route.REQUEST_ERROR);
    }
  }, [isError]);

  return (
    <PageContainer>
      <RowWrapper>
        <ColumnWrapper>
          <FlatBlock />
          <AddInfoBlock />
        </ColumnWrapper>
        <PriceBlock />
      </RowWrapper>
      <ObservableWrapper ref={observingWrapperRef}>
        <ServicesBlock />
        <CheckOwnerBlock />
        <CardWitsImage ref={cardWithImageDarkRef} />
        <MainServices ref={mainServicesLightRef} />
        <DiscountsBlock ref={discountPartnersDarkRef} />
        <WebinarBlock ref={webinarLightRef} />
        <MobileButtons />
      </ObservableWrapper>
    </PageContainer>
  );
};

export default Rent;
