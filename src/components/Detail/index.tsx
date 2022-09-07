import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Props } from '../../types'
import Modal from '../modal'

import * as S from './style'

const Detail = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const location = useLocation()
  const state = location.state as Props

  const date = state.createdAt.split('/')

  const newDate = date[2].concat('-', date[0], '-', date[1])
  const infoConsole = () => {
    // eslint-disable-next-line no-console
    console.log(state)
  }

  const wishlistHandler = () => {
    setModalOpen(!modalOpen)
  }

  const ToggleModal = useCallback(() => {
    setModalOpen(!modalOpen)
  }, [modalOpen])

  return (
    <S.DetailContainer>
      <div className="pagetitle">상세페이지</div>
      <div className="detailbox">
        <div className="imgbox">
          <img src={state.images} alt={state.title} />
        </div>
        <div className="descbox">
          <div className="title">{state.title}</div>
          <div className="desc">{state.description}</div>
          <div className="descwrap">
            <div className="price">{state.price}</div>
            <div className="date">{newDate}</div>
          </div>
          <div className="btnwrap">
            <button onClick={infoConsole}>구매하기</button>
            <button onClick={wishlistHandler}>장바구니</button>
          </div>
        </div>
        {modalOpen && <Modal toggleModal={ToggleModal} item={state} />}
      </div>
    </S.DetailContainer>
  )
}

export default Detail
