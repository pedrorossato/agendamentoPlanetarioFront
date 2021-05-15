import { createGlobalStyle } from "styled-components";
import Fundo from "../Assets/Images/FundoPlanetarioOpaco.png"
import Din from "../Assets/Fonts/D-DIN.otf";
import DinBold from "../Assets/Fonts/D-DIN-Bold.otf";
export default createGlobalStyle`
    @font-face {
        font-family: 'Din';
        src: local('Din'), url(${Din}) format('truetype');
        font-size: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'DinBold';
        src: local('DinBold'), url(${DinBold}) format('truetype');
        font-size: 300;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Din', sans-serif;
    }
    #root {
        font-family: 'Din', sans-serif;
        height: 100%
    }
    html {
        min-height: 100%;
        position: relative;
    }
    body {
        /* background-image:url('../Assets/FundoPlanetarioOpaco.png'); */
        background: url(${Fundo}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        font-size: 16pt;
        font-family: 'Din', sans-serif;
        /* height: 100vh; */
    }
`;