import styled from 'styled-components'

export const ItemBox = styled.button`
  width: 270px;
  height: 300px;
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

  :hover {
    /* stylelint-disable-next-line color-function-notation */
    box-shadow: rgb(0 0 0 / 0.16) 0 0 8px;
  }
`
