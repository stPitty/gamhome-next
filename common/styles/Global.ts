import { createGlobalStyle } from "styled-components";

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

  * {
    box-sizing: border-box;
    transition: 0.3s all linear;
    -moz-transition: 0.3s all linear;
    -ms-transition: 0.3s all linear;
    -o-transition: 0.3s all linear;
    -webkit-transition: 0.3s all linear; 
  }
`;

export default Global;
