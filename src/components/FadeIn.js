import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

export default FadeInDiv