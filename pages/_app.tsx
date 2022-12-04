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
import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme/theme";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

const App = ({ Component, pageProps }: AppWithPageLayout) => {
  return (
    <ErrorBoundary>
      <Global />
      <YMaps>
        <ThemeProvider theme={theme}>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </YMaps>
    </ErrorBoundary>
  );
};

export default wrapper.withRedux(App);
