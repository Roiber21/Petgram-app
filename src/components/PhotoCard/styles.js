import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
min-height: 100px;
margin-top:30px;
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
export const Img2 = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  left: 90px;
  bottom: 33px;

`
export const Img3 = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  left: 110px;
  bottom: 33px;

`
export const Img4 = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  left: 376px;
  bottom: 33px;

`
export const Img5 = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  left: 430px;
  top: 5px;

`
export const Img6 = styled.img`
  width: 35px;
  height: 35px;
  position: relative;
  top: 5px;
  right: 15px;

`
