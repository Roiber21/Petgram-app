import styled from 'styled-components'
import { fadeIn, Rotate } from './animation'

export const Div = styled.div`
display: flex;
justify-content: center;
line-height: 100px;
position: relative;
top: 10rem;
`
export const Div2 = styled.div`
display: flex;
justify-content: center;
line-height: 100px;
position: relative;
top: 9rem;
right: 2rem;
`
export const Img = styled.img`
width: 80px;
height: 80px;
${Rotate()};

`
export const Img2 = styled.img`
width: 80px;
height: 80px;
${fadeIn()};

`
