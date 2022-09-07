import styled from 'styled-components'

export const ItemBox = styled.button`
  width: 270px;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  transition: all 0.2s ease-in-out 0s;
  box-sizing: border-box;

  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
  }

  img {
    width: 260px;
    height: 260px;
    margin: auto;
    object-fit: contain;
    border: 1px solid #ddd;
  }

  .desc {
    margin: 20px 15px;
    text-align: left;
  }

  .flex {
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    margin: 15px;

    .price {
      font-size: 24px;
      font-weight: 500;
    }

    .date {
      font-weight: 500;
      color: #999;
    }
  }

  @media screen and (min-width: 450px) {
    :hover {
      /* stylelint-disable-next-line color-function-notation */
      box-shadow: rgb(0 0 0 / 0.16) 0 0 8px;
    }
  }
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin: auto auto 10px 15px;

  @media screen and (max-width: 450px) {
    justify-content: center;
    margin: auto auto 10px;
  }

  svg {
    width: 28px;
    height: 28px;
    padding: 5px;
    background: #f0f0f0;
    border-radius: 20px;
    margin-right: 7px;
  }

  .title {
    font-size: 18px;
    font-weight: 500s;
  }
`
