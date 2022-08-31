import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import store from 'storejs'

import { Props } from '../../types'
import Modal from '../modal'

const Detail = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const location = useLocation()
  const state = location.state as Props

  const infoConsole = () => {
    // eslint-disable-next-line no-console
    console.log(state)
  }

  const wishlistHandler = () => {
    const wishlist = store.get('wishlist')
    const deduplication = wishlist?.find((e: Props) => e.id === state.id)

    if (!deduplication) {
      const newWishlist = wishlist ? [...wishlist, state] : [state]
      store.set('wishlist', newWishlist)
      setModalOpen(!modalOpen)
    }
  }

  const ToggleModal = useCallback(() => {
    setModalOpen(!modalOpen)
  }, [modalOpen])

  return (
    <div>
      <div>
        <img src={state.images} alt={state.title} />
      </div>
      <div>{state.title}</div>
      <div>{state.description}</div>
      <div>{state.price}</div>
      <div>{state.createdAt}</div>
      <button onClick={infoConsole}>구매하기</button>
      <button onClick={wishlistHandler}>장바구니</button>
      {modalOpen && <Modal toggleModal={ToggleModal} />}
    </div>
  )
}

export default Detail
