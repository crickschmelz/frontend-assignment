import { createGlobalStyle } from "styled-components";
import px2vw from "../utils";

export const Global = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif!important;
    font-style: normal;
    background: #ffffff;
    color: #000000;
    box-sizing: border-box;
  }
`;

export default Global;
