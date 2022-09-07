import styled from 'styled-components'

export const DetailContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px 10px;
  @media screen and (max-width: 600px) {
    padding: 40px 5px;
  }

  .pagetitle {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 2px solid #999;
    @media screen and (max-width: 600px) {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      border-bottom: 1px solid #999;
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
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  .desc {
    font-size: 20px;
    border-bottom: 1px solid #999;
    padding-bottom: 30px;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  .descwrap {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;

    .price {
      font-size: 22px;
      font-weight: 700;
      @media screen and (max-width: 600px) {
        font-size: 18px;
      }
    }

    .date {
      width: 80px;
      color: #999;
      font-weight: 700;
      text-align: center;
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  .btnwrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
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
`
