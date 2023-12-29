import { createGlobalStyle } from "styled-components";
import { BlackColor, BrandColor, LightBlueColor, WhiteColor } from "../enums";

const Global = createGlobalStyle`
    //* {
    //    -webkit-transform: translateZ(0);
    //    -moz-transform: translateZ(0);
    //    -ms-transform: translateZ(0);
    //    -o-transform: translateZ(0);
    //    transform: translateZ(0);
    //    webkit-font-smoothing: antialiased;
    //    -webkit-transform: translate3d(0, 0, 0);
    //}
    
    html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, Roboto, "Roboto Flex", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
    opacity: 0;
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
