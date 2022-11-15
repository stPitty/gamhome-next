import { createGlobalStyle } from "styled-components";
import { BrandColor, LightBlueColor, WhiteColor } from "../enums";

const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  div, button, ul, p, a {
    transition: 0.3s all linear;
    -moz-transition: 0.3s all linear;
    -ms-transition: 0.3s all linear;
    -o-transition: 0.3s all linear;
    -webkit-transition: 0.3s all linear;
  }
  
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${LightBlueColor.LB_100};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${BrandColor.BRAND};
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px ${WhiteColor.WHITE_16};
      border-radius: 10px;
      background-color: ${LightBlueColor.LB_200};
    }
  }
  
`;

export default Global;
