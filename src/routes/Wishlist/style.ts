import styled from 'styled-components'

export const WishListContainer = styled.div`
  padding: 20px 15px;

  table {
    width: 100%;
    margin-bottom: 10px;
  }

  .maintitle {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  thead {
    font-size: 20px;
    font-weight: 700;
    border-top: 2px solid #999;

    th {
      padding: 20px;
      text-align: center;
      vertical-align: middle;
    }
  }

  td {
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ddd;
  }

  button {
    float: right;
  }
`

export const WishBox = styled.tr`
  .checkboxcotainer {
    display: flex;

    img {
      box-sizing: border-box;
      width: 230px;
      height: 120px;
      padding: 10px;
      align-items: center;
      margin: auto;
      object-fit: contain;
    }
  }

  .checkwrap {
    position: relative;
    display: flex;
    margin: auto 0 auto 10px;

    svg {
      position: absolute;
      top: 50%;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
      transition: 0.2s;
      color: #fff;
    }
  }

  .descbox {
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .wishname {
    font-size: 24px;
    font-weight: 700;
  }

  .wishdesc {
    font-size: 16px;
    min-width: 70px;
    height: 32px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wishprice {
    font-size: 24px;
    font-weight: 600;
  }

  .wishdate {
    font-size: 20px;
    color: #999;
  }
`

export const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 1px solid #999;
  background: #fff;
  border-radius: 50%;
  transition: 0.2s;
  margin: auto 0;

  &:checked {
    background: #999;

    ~ svg {
      opacity: 1;
    }
  }
`
export const BuyBtn = styled.button`
  width: 95px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    background: #999;
    color: #fff;
    border: 1px solid #fff;
  }

  &:active {
    color: #fff;
    background: #000;
  }
`
