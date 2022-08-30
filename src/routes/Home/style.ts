import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1200px;
`

export const ItemContainer = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: center;
`

export const ItemBox = styled.button`
  width: 270px;
  height: 300px;
  border: 1px solid #999;
  margin: 5px;
  padding: 5px;

  img {
    width: auto;
    margin: auto;
    object-fit: cover;
  }
`
