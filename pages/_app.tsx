import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto-flex/400.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { Global } from "../common";
import { AppWithPageLayout } from "../common/types";
import { wrapper } from "../redux/store";
import { YMaps } from "@pbe/react-yandex-maps";
import ErrorBoundary from "../components/rent_page/error_boundary/ErrorBoundary";
import { setWindowSize } from "../redux/slicers/windowSizeSlicer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { changePathName } from "../redux/slicers/pathNameSlicer";
import { ContextProvider } from "../common/context/AppContext";
import "mapbox-gl/dist/mapbox-gl.css";
import { TModalState, TSideMenu, TWindowSize } from "../redux/slicers/types";
import { Hook } from "../common/routes";
import { setScrollBtnTheme } from "../redux/slicers/scrollTopBtnSlicer";
import { WindowSize } from "../redux/slicers/enums";
import styled from "styled-components";
import { handleChangeScrollBtnTheme } from "../common/helpers/handleChangeScrollBtnTheme";

const App = ({ Component, pageProps }: AppWithPageLayout) => {
  const { isOpened } = useAppSelector<TSideMenu>((state) => state.sideMenu);

  const modalState = useAppSelector<TModalState>((state) => state.modalState);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleResizeWindow = () => {
    dispatch(setWindowSize(window.innerWidth));
  };

  useEffect(() => {
    if (isOpened || modalState.isOpened) {
      document.querySelector("html")!.style.overflowY = "hidden";
    } else {
      document.querySelector("html")!.style.overflowY = "unset";
    }
  }, [isOpened, modalState.isOpened]);

  useEffect(() => {
    dispatch(changePathName(router.pathname));
  }, [router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResizeWindow();
    }
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleChangeScrollBtnTheme(windowSize, dispatch)
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleChangeScrollBtnTheme(windowSize, dispatch)
      );
  }, [windowSize]);

  return (
    <ErrorBoundary>
      <Global />
      <YMaps>
        <ContextProvider>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ContextProvider>
      </YMaps>
    </ErrorBoundary>
  );
};

export default wrapper.withRedux(App);
