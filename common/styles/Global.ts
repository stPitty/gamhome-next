import { createGlobalStyle } from "styled-components";
import { BlackColor, BrandColor, LightBlueColor, WhiteColor } from "../enums";

const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, Roboto, "Roboto Flex", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${LightBlueColor.LB_100};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${BlackColor.BLACK_24};
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px ${WhiteColor.WHITE_16};
      border-radius: 10px;
      background-color: ${LightBlueColor.LB_200};
    }

    @media screen and (max-width: 767px) {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export default Global;
