import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Global } from "../common";
import { AppWithPageLayout } from "../common/types";
import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme";

const App = ({ Component, pageProps }: AppWithPageLayout) => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
};

export default App;
