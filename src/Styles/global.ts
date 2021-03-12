import { createGlobalStyle } from "styled-components";
import Fundo from "../Assets/FundoPlanetarioOpaco.png"
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    #root {
        font-family: 'Montserrat', sans-serif;
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
        font-family: 'Montserrat', sans-serif;
        /* height: 100vh; */
    }
`;