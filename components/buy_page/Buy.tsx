import PageContainer from "../common/page_container/PageContainer";
import RowWrapper from "../common/row_wrapper/RowWrapper";
import ColumnWrapper from "../common/column_wrapper/ColumnWrapper";
import FlatBlock from "../common/flat_block";
import AddInfoBlock from "../rent_page/add_info_block";
import PriceBlock from "../rent_page/price_block";
import WebinarBlock from "../common/webinar_block";
import { useEffect } from "react";
import DiscountsBlock from "../common/discounts_block";
import MobileButtons from "../common/mobile_buttons/MobileButtons";
import MainServices from "../common/main_services";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TFlatState, TWindowSize } from "../../redux/slicers/types";
import { useRouter } from "next/router";
import { handleGetFlatData } from "../../common/helpers";
import { Route } from "../../common/routes";
import CheckOwnerBlock from "../common/check_owner_block";
import Mortgage from "./mortgage/Mortgage";
import PropertyValuation from "./roperty_valuation/PropertyValuation";
import Insurance from "./insurance/Insurance";
import ServicesBlock from "../common/services_block";
import TaxHelp from "./tax_help/TaxHelp";
import { WindowSize } from "../../redux/slicers/enums";
import { setMobBtnVisibility } from "../../redux/slicers/mobBtnViewSlicer";
import { handleChangeBtnVisibility } from "../../common/helpers/handleChangeBtnVisibility";

const Buy = () => {
  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { flatData, isError } = useAppSelector<TFlatState>(
    (state) => state.flatData
  );

  useEffect(() => {
    if (windowSize === WindowSize.LG || windowSize === WindowSize.XL) {
      dispatch(setMobBtnVisibility(false));
    }
    window.addEventListener(
      "scroll",
      handleChangeBtnVisibility(windowSize, dispatch)
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleChangeBtnVisibility(windowSize, dispatch)
      );
  }, [windowSize]);

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
      <Mortgage />
      <PropertyValuation />
      <Insurance />
      <ServicesBlock />
      <CheckOwnerBlock />
      <MainServices />
      <TaxHelp />
      <DiscountsBlock />
      <WebinarBlock />
      <MobileButtons />
    </PageContainer>
  );
};

export default Buy;
