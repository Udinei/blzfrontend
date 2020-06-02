import styled from 'styled-components';

export const Loading = styled.div`
   color: #FFF;
   font-size: 30px;
   font-weight: bold;
   display: flex;
   justify-content: center; /** centralizado na tela */
   align-items: center;
   height: 100vh;  /**altura total da tela */
`;

export const Owner = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;

   /**configurando texto do link */
   a {
      color: #7159c1;
      font-size: 16px;
      text-decoration: none; /** remove linha abaixo do link*/
   }

   img {
       width: 120px;
       border-radius: 50%;
       margin-top: 20px;
   }

   h1{
       font-size: 24px;
       margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;
