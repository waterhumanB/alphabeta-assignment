import styled from 'styled-components'

export const CheckBox = styled.input`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: 2px solid blue;
  border-radius: 50%;
  transition: 0.2s;

  :checked {
    background: blue;
    border: 0;
  }
`
