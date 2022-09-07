import styled from 'styled-components'

export const WishListContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px 15px;
  @media screen and (max-width: 650px) {
    padding: 20px 5px;
  }

  table {
    margin-bottom: 10px;
  }

  .maintitle {
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 20px;
    border-bottom: 2px solid #999;

    @media screen and (max-width: 650px) {
      font-size: 20px;
      text-align: center;
      font-weight: 400;
      border-bottom: 1px solid #999;
      margin-bottom: 20px;
    }
  }

  thead {
    font-size: 20px;
    font-weight: 700;

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

  @media screen and (max-width: 650px) {
    .mcol {
      width: 100%;
    }

    .mview {
      display: none;
    }
  }
`

export const WishBox = styled.tr`
  .checkboxcotainer {
    display: flex;
    align-items: center;

    img {
      box-sizing: border-box;
      width: 230px;
      height: 120px;
      padding: 10px;
      align-items: center;
      margin: auto;
      object-fit: contain;
    }
    @media screen and (max-width: 650px) {
      img {
        width: 130px;
      }
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
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    text-align: left;

    .mobile {
      display: none;
    }

    @media screen and (max-width: 650px) {
      .mobile {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;

        .mprice {
          font-weight: 700;
        }

        .mdate {
          font-weight: 700;
          font-size: 12px;
          color: #999;
        }
      }
    }
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

export const LinkBtn = styled.button`
  display: flex;
`

export const NoWishlist = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
  @media screen and (max-width: 650px) {
    font-size: 18px;
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
  @media screen and (max-width: 650px) {
    width: 70px;
  }
`
