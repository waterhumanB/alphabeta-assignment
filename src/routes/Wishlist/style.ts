import styled from 'styled-components'

export const WishListContainer = styled.div`
  padding: 20px 15px;

  .wishlistbox {
    display: flex;
  }

  button {
    float: right;
  }

  .listdesc {
    width: 100%;
    margin: auto;
    font-size: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding-bottom: 15px;

    div {
      width: 100%;
      margin: auto;
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .name {
      margin-left: 30px;
    }
  }
`

export const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 1px solid #999;
  background: #eee;
  border-radius: 50%;
  transition: 0.2s;
  margin: auto 5px auto 0;

  &:checked {
    background: #444;
    border: 0;
  }
`
