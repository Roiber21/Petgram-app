import styled from 'styled-components'

export const Form = styled.form`
 padding: 16px 0;
 display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 bottom: 2rem;
 height: 10rem;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 90%;
  &[disabled]{
    opacity: .3;
  }
`

export const Button = styled.button`
 background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 90%;
  text-align: center;
  &[disabled]{
    opacity: .3;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 bottom: 2rem;
`
export const Error = styled.span`
font-size: 12px;
color: red;
display: flex;
 flex-direction: column;
 align-items: center;
 border: #8d00ff solid 1px ;
  height: 32px;
  padding: 8px 0;
 flex-direction: column;
 margin: auto;
  width: 90%;
  position: relative;
  bottom: 3rem;

`
export const Div = styled.div`
background-color:#8d00ff ;
border-radius: 20rem;
overflow: hidden;
  display: flex;
 flex-direction: column;
 align-items: center;
 margin: auto;
  width: 30%;
  height: 120px;
  position: relative;
  bottom: 3rem;


`
export const Img = styled.img`
 width: 100%;
 
 height: 100%;
  display: flex;
 flex-direction: column;
 align-items: center;
 margin: auto;
  width: 90%;

`
export const Span = styled.span`
display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
  height: 32px;
  display: flex;
 flex-direction: column;
 align-items: center;
  width: 90%;
  position: relative;
  bottom: 3rem;

`
