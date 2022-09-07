import styled from 'styled-components'

export const DetailContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px 10px;

  .pagetitle {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 2px solid #999;
    @media screen and (max-width: 600px) {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
    }
  }

  .detailbox {
    display: flex;
    flex-wrap: wrap;
  }

  .imgbox {
    margin: auto auto 20px;

    img {
      width: 260px;
      height: 260px;
      margin: auto;
      object-fit: contain;
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .descbox {
    margin: auto auto 10px;
  }

  .title {
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 700;
  }

  .desc {
    padding-bottom: 30px;
    font-size: 20px;
    border-bottom: 1px solid #999;
  }

  .price {
    margin: 30px auto 40px;
    font-size: 22px;
    font-weight: 700;
  }

  .btnwrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btnbox {
      display: flex;

      button {
        margin-right: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #000;
        border: 1px solid #000;
        box-sizing: border-box;
        border-radius: 15px;
        padding: 4px 8px;

        &:hover {
          background: #999;
          color: #fff;
          border: 1px solid #fff;
        }

        &:active {
          color: #fff;
          background: #000;
        }
      }
    }

    .date {
      width: 80px;
      color: #999;
      font-weight: 700;
    }
  }
`
