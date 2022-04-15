import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

const bounceDownKeyFrames = keyframes`
  0% {
     top: -70px;
   }
 
   25% {
     top: 0px;
   }
 
   40%{
     top: 10px
   }
 
   65%{
     top: -3px
   }
 
   100% {
     top: 0px;
   }
 `

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
     animation: ${time} ${bounceDownKeyFrames} ${type};
   `

const RotateKeyframes = keyframes`
0%{
  transform: translate(-50%, -50%) rotate(0deg);
}
100%{
  transform: translate(-50%, -50%) rotate(360deg);
}
`
export const Rotate = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${RotateKeyframes} ${type};`
