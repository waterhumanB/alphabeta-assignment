import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 40px;
  position: fixed;
  background: #fff;
  display: flex;
  justify-content: space-between;
  visibility: visible;
  opacity: 1;
  transition: all 0.2s ease-in-out 0s;

  &.invisible {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out 0s;
  }
`
export const HeaderBox = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  button {
    font-weight: 700;
    margin-left: 10px;
    font-size: 18px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  .usepage {
    button {
      color: #999;
    }
  }
`
