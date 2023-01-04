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
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { Route } from "../common/routes";
import { useRouter } from "next/router";
import { changePathName } from "../redux/slicers/pathNameSlicer";

const App = ({ Component, pageProps }: AppWithPageLayout) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleResizeWindow = () => {
    dispatch(setWindowSize(window.innerWidth));
  };

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

  return (
    <ErrorBoundary>
      <Global />
      <YMaps>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </YMaps>
    </ErrorBoundary>
  );
};

export default wrapper.withRedux(App);
