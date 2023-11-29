import { ComponentWithLayout } from "../../common/types";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  TFlatState,
  TMobBtnView,
  TWindowSize,
} from "../../redux/slicers/types";
import { useEffect } from "react";
import { handleGetFlatData } from "../../common/helpers";
import { Hook, Route } from "../../common/routes";
import FlatBlock from "../common/flat_block";
import AddInfoBlock from "./add_info_block";
import PriceBlock from "./price_block";
import ServicesBlock from "../common/services_block";
import CheckOwnerBlock from "../common/check_owner_block";
import CardWitsImage from "./card_with_image/CardWitsImage";
import MainServices from "../common/main_services";
import DiscountsBlock from "../common/discounts_block";
import WebinarBlock from "../common/webinar_block";
import MobileButtons from "../common/mobile_buttons/MobileButtons";
import PageContainer from "../common/page_container/PageContainer";
import ColumnWrapper from "../common/column_wrapper/ColumnWrapper";
import RowWrapper from "../common/row_wrapper/RowWrapper";
import { WindowSize } from "../../redux/slicers/enums";
import { setMobBtnVisibility } from "../../redux/slicers/mobBtnViewSlicer";
import { handleChangeBtnVisibility } from "../../common/helpers/handleChangeBtnVisibility";
import { webinarImages } from "./constants";
import Head from "next/head";
import Script from "next/script";

const Rent: ComponentWithLayout = () => {
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
      {/*yandex-metrika*/}
      <Script type="text/javascript" id="metrika-rent">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(95615918, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });`}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/95615918"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <RowWrapper>
        <ColumnWrapper>
          <FlatBlock />
          <AddInfoBlock />
        </ColumnWrapper>
        <PriceBlock />
      </RowWrapper>
      <ServicesBlock />
      {/*<CheckOwnerBlock />*/}
      <CardWitsImage />
      <MainServices />
      <DiscountsBlock />
      <WebinarBlock imagePaths={webinarImages} type="rent" />
      <MobileButtons />
    </PageContainer>
  );
};

export default Rent;
