// esse arquivo define stylo de texto somemte para esse componente
import styled from 'styled-components';

export const Title = styled.h1`
   color: #fff;
 `;

/** exemplo aplicando stylo com validacao em funcao de props
export const Title = styled.h1`
  color: ${props => props.error ? 'red' : '#7159c1'};
 `;
*/
