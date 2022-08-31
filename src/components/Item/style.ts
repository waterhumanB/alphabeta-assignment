import styled from 'styled-components'

export const ItemBox = styled.button`
  width: 270px;
  height: 300px;
  border: 1px solid #999;
  margin: 5px;
  padding: 5px;
  font-size: 14px;

  img {
    width: auto;
    margin: auto;
    object-fit: cover;
  }

  .title {
    font-size: 20px;
  }

  .desc {
    margin: 20px auto;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
  }
`
