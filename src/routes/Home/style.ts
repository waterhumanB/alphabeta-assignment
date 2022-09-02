import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

export const ItemContainer = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: center;
`
export const Spinner = styled.div`
  width: 45px;
  height: 45px;
  border: 4px solid #000;
  border-top: 4px solid #999;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
  margin: auto;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(359deg);
    }
  }
`
