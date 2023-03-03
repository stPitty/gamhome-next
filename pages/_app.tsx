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
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { changePathName } from "../redux/slicers/pathNameSlicer";
import { ContextProvider } from "../common/context/AppContext";
import "mapbox-gl/dist/mapbox-gl.css";
import { TModalState, TSideMenu, TWindowSize } from "../redux/slicers/types";
import { handleChangeScrollBtnTheme } from "../common/helpers/handleChangeScrollBtnTheme";
import { setAcceptedCookie } from "../redux/slicers/cookiePopUpSlicer";

const App = ({ Component, pageProps }: AppWithPageLayout) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const { isOpened } = useAppSelector<TSideMenu>((state) => state.sideMenu);

  const modalState = useAppSelector<TModalState>((state) => state.modalState);

  const { windowSize } = useAppSelector<TWindowSize>(
    (state) => state.windowSize
  );

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleResizeWindow = useCallback(() => {
    if (window) {
      dispatch(setWindowSize(window.innerWidth));
    }
  }, []);

  useEffect(() => {
    if (isOpened || modalState.isOpened) {
      document.querySelector("html")!.style.overflow = "hidden";
    } else {
      document.querySelector("html")!.style.overflow = "unset";
    }
  }, [isOpened, modalState.isOpened]);

  useEffect(() => {
    if (mounted) {
      dispatch(changePathName(router.pathname));
    }
  }, [router, mounted]);

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop as any),
    });

    const token = (params as { token?: string })?.token;

    if (token) {
      sessionStorage.setItem("token", token);
    }

    if (!mounted) setMounted(true);
    if (localStorage.getItem("acceptCookies")) {
      dispatch(setAcceptedCookie());
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

  useEffect(() => {
    if (mounted) {
      handleResizeWindow();
    }
  }, [mounted]);

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
