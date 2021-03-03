import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
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
        font-size: 16pt;
        font-family: 'Montserrat', sans-serif;
        height: 100%;
    }
`;