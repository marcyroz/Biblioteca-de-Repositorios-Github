import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* removendo as propriedades padrão do html */
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box; 
    }
    html, body, #root{
        /* faz com que a página ocupe 100% da altura por padrão */
        min-height: 100%;
    }

    body{
        background-color: #ffc1e0;
        /* importante pois as vezes o browser tenta tirar essa opção */
        -webkit-font-smoothing: antialeased !important;
    }

    body, input, button{
        color: #222;
        font-size: 14px;
        font-family: Arial, sans-serif;
    }

    button{
        /* faz com que o cursor do mouse mude para uma mãozinha quando passar por cima do botão */
        cursor: pointer;
    }

`;