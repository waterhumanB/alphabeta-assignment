import styled from 'styled-components'

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: colors.$FONTCOLOR;
  background-color: rgba(0, 0, 0, 0.3);

  button {
    width: 200px;
    height: 200px;
    background: #fff;
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
  }
`
