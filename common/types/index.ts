import { AppProps } from "next/app";
import React from "react";
import {
  BlackColor,
  BrandColor,
  LightBlueColor,
  LinerColor,
  OtherColor,
  WhiteColor,
} from "../enums";

type ComponentWithLayout = AppProps["Component"] & {
  PageLayout?: React.FC<any>;
};

type AppWithPageLayout = AppProps & {
  Component: ComponentWithLayout;
};

type Color =
  | BlackColor
  | WhiteColor
  | LightBlueColor
  | BrandColor
  | LinerColor
  | OtherColor
  | "none";

export type { AppWithPageLayout, ComponentWithLayout, Color };
