import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: 38, 45, 47;
        --text-white: #FFFF;
        --text-yellow: #FEB659;
    }

    *{
        box-sizing: border-box;
        font-size: 18px;
    }   
    
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Clashroyale';
        background-color: #000;
        font-size: 18px;
    }

    @media (max-width: 1080px){
        html {
            font-size: 97.5%;
        }
    }

    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }


    label {
        font-size: 10px;
    }
`;
