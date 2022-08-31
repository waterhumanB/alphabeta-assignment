import { MouseEvent } from 'react'

import { Modalprops } from '../../types'

const Modal = ({ toggleModal }: Modalprops) => {
  const modalHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (toggleModal && e.target === e.currentTarget) {
      toggleModal()
    }
  }

  return <button onClick={modalHandler}>상품이 추가 되었습니다</button>
}

export default Modal
