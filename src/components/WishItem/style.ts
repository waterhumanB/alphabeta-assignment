import styled from 'styled-components'

export const WishItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #999;
  border-top: 1px solid #999;
  padding: 10px 5px;

  img {
    width: 95%;
  }

  div {
    width: 100%;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .desc {
    max-width: 200px;
  }
`
