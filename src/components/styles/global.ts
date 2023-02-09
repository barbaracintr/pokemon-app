import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        font-family: 'Jura', sans-serif;

        ::-webkit-scrollbar {
            width: 0.2rem;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #c51162;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #f50057;
        }
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        margin: 0 auto;
        background-image: linear-gradient(to right, #ef32d9, #89fffd);
        // width: 100vh;
        // height: 100vh;
    }
    ::selection {
        background-color: pink;
    }
`;