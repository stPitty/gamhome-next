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
import Head from "next/head";
import Script from "next/script";

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
    setTimeout(() => {
      const html = document.querySelector("html");
      if (html) {
        html.style.opacity = "100";
      }
    }, 1000);

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <title>GamHome</title>
        <meta
          name="Лучший сервис для поиска недвижимости GamHome"
          content="GamHome - это ведущая служба недвижимости, которая предлагает экспертную поддержку как риэлторам, так и индивидуальным клиентам в поиске идеального дома и в процессе оформления сделки. Найдите дом своей мечты сегодня с GamHome."
        />
      </Head>
      {/*VK PIXEL*/}
      <Script type="text/javascript" id="vk-pixel">{`!function () {
          var t = document.createElement("script");
          t.type = "text/javascript", t.async = !0, t.src = 'https://vk.com/js/api/openapi.js?169', t.onload = function () {
            VK.Retargeting.Init("VK-RTRG-1821334-5vbUS"), VK.Retargeting.Hit()
          }, document.head.appendChild(t)
        }();`}</Script>
      <noscript>
        <img
          src="https://vk.com/rtrg?p=VK-RTRG-1821334-5vbUS"
          style={{ position: "fixed", left: "-999px" }}
          alt=""
        />
      </noscript>
      {/*google analytics*/}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MX0NR9CTNG"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MX0NR9CTNG');`}
      </Script>
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
