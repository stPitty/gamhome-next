import { AppProps } from "next/app";
import React from "react";

type ComponentWithLayout = AppProps["Component"] & {
  PageLayout?: React.FC<any>;
};

type AppWithPageLayout = AppProps & {
  Component: ComponentWithLayout;
};

export type { AppWithPageLayout, ComponentWithLayout };
