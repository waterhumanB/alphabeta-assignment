import { MouseEvent } from 'react'

import { Modalprops } from '../../types'

import { ModalWrap } from './style'

const Modal = ({ toggleModal }: Modalprops) => {
  const modalHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (toggleModal && e.target === e.currentTarget) {
      toggleModal()
    }
  }

  return (
    <ModalWrap>
      <button onClick={modalHandler}>상품이 추가 되었습니다</button>
    </ModalWrap>
  )
}

export default Modal
