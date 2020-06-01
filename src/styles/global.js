// Esse arquivo armazena os stylos globais da aplicacao
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box; /** evita o elemento extrapolar o limite da pagina */
   }

   html, body, #root{
       min-height: 100%; /** ocupa 100% da altura padrao da tela */
   }

   body {
       background: #7159c1;
       -webkit-font-smoothing: antialiased !important; /** define melhor as fontes */
   }

   body, input, button {
       color:#222;
       font-size: 14px;
       font-family: Arial, sans-serif, sans-serif;
   }

   button {
       cursor: pointer;
   }
`;


