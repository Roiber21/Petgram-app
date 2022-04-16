import styled from 'styled-components'

export const Button = styled.button`
 background: #8d00ff;
  border-radius: 50px;
  color: #fff;
  height: 32px;
  display: block;
  width: 90%;
  text-align: center;
  &[disabled]{
    opacity: .3;
  }
`
