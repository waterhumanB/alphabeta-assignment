import styled from 'styled-components'

export const DetailContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px 30px;
  display: flex;

  .imgbox {
    margin: auto;
  }

  .descbox {
    margin: auto auto 10px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .desc {
    margin-bottom: 30px;
  }

  .price {
    margin-bottom: 60px;
  }

  .btnwrap {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      margin-right: 40px;
    }
  }
`
