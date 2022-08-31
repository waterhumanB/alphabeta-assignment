import styled from 'styled-components'

export const WishListContainer = styled.div`
  padding: 20px 15px;

  .wishlistbox {
    display: flex;
  }

  button {
    float: right;
  }
`

export const CheckBox = styled.input`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: 2px solid blue;
  background: #999;
  border-radius: 50%;
  transition: 0.2s;
  margin-right: 5px;

  :checked {
    background: blue;
    border: 0;
  }
`
