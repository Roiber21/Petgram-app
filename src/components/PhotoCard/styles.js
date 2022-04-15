import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
min-height: 100px;
`

export const ImageWrapper = styled.div`
    ${fadeIn()};
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`
export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 10px;

`