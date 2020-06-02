import styled from 'styled-components';

const Container = styled.div`
       max-width: 700px;
       background: #fff;
       border-radius: 4px;
       box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /** uma caixa com 20px de altura */
       padding: 30px;   /** 30px espacmento interno */
       margin: 80px auto; /** laterais centralizadas com auto */

       h1{
           font-size: 20px;
           display: flex;
           flex-direction: row;
           align-items:center; /** centraliza elementos */

           svg{
               margin-right: 10px; /** distanciando o texto do icone */
           }
       }
 `;

export default Container;
