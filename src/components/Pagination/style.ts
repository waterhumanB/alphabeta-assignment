import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

export const Button = styled.button`
  margin-left: 5px;
  font-weight: 700;
  font-size: 15px;

  &:visited {
    color: #000;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
    color: #999;
  }
`
