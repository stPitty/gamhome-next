import PageContainer from "../common/page_container/PageContainer";
import RowWrapper from "../common/row_wrapper/RowWrapper";
import ColumnWrapper from "../common/column_wrapper/ColumnWrapper";
import FlatBlock from "../common/flat_block";
import AddInfoBlock from "../rent_page/add_info_block";
import PriceBlock from "../rent_page/price_block";
import ObservableWrapper from "../common/observable_wrapper/ObservableWrapper";
import WebinarBlock from "../common/webinar_block";
import { createRef, RefObject, useEffect } from "react";
import DiscountsBlock from "../common/discounts_block";
import MobileButtons from "../rent_page/mobile_buttons/MobileButtons";
import MainServices from "../common/main_services";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TFlatState, TWindowSize } from "../../redux/slicers/types";
import { useRouter } from "next/router";
import { handleGetFlatData } from "../../common/helpers";
import { Route } from "../../common/routes";
import { setIOForBottomMenu } from "../../common/helpers/mainPageHelpers";
import { IOBottomMenuSingleton } from "../../common/helpers/IOSingleton";
import CheckOwnerBlock from "../common/check_owner_block";
import Mortgage from "./mortgage/Mortgage";
import PropertyValuation from "./roperty_valuation/PropertyValuation";
import Insurance from "./insurance/Insurance";
import ServicesBlock from "../common/services_block";
import TaxHelp from "./tax_help/TaxHelp";

const Buy = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { flatData, isError } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const observingWrapperRef: RefObject<HTMLDivElement> = createRef();

  // const cardWithImageDarkRef = createRef();
  const mainServicesLightRef = createRef();
  const discountPartnersDarkRef = createRef();
  const webinarLightRef = createRef();

  useEffect(() => {
    setIOForBottomMenu(windowSize, observingWrapperRef.current, dispatch);
    return () => IOBottomMenuSingleton.destroy();
  }, [windowSize]);

  // useEffect(() => {
  //   setIOForScrollBtn(
  //     dispatch,
  //     cardWithImageDarkRef.current,
  //     mainServicesLightRef.current,
  //     discountPartnersDarkRef.current,
  //     webinarLightRef.current
  //   );
  //   return () => IOScrollButtonSingleton.destroy();
  // }, []);

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
        <Mortgage />
        <PropertyValuation />
        <Insurance />
        <ServicesBlock />
        <CheckOwnerBlock />
        <MainServices ref={mainServicesLightRef} />
        <TaxHelp />
        <DiscountsBlock ref={discountPartnersDarkRef} />
        <WebinarBlock ref={webinarLightRef} />
        <MobileButtons />
      </ObservableWrapper>
    </PageContainer>
  );
};

export default Buy;
