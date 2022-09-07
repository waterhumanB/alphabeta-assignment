import styled from 'styled-components'

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: colors.$FONTCOLOR;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalBox = styled.div`
  width: 250px;
  min-height: 300px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .ment {
    font-size: 22px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px auto 0;
    align-items: center;
    text-align: center;
  }

  .btnbox {
    width: 100%;
    display: flex;
    justify-content: space-around;

    button {
      width: 95px;
      padding: 5px;
      border: 1px solid #000;
      border-radius: 10px;
      font-weight: 700;
      margin-bottom: 10px;

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
export const ItemDetail = styled.div`
  width: 200px;
  min-height: 170px;
  margin: 10px auto;
  border: 1px solid #ddd;
  text-align: center;

  img {
    width: 100%;
    margin: 10px auto;
  }

  .name {
    font-weight: 700;
    font-size: 18px;
  }

  .infobox {
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;

    .date {
      color: #999;
    }
  }
`
