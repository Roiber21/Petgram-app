import React from 'react'
import { Div, Img, Div2, Img2 } from './loading'

export const Loader = () => {
  return (
    <>
      <Div> <Img src={require('../images/mascota.png')} /> </Div>
      <Div2> <Img2 src={require('../images/gatito.png')} /> </Div2>
    </>
  )
}
