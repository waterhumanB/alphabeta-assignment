import { MouseEvent } from 'react'
import store from 'storejs'

import { Modalprops, Props } from '../../types'

import { ModalWrap } from './style'

const ADD_MENT = '장바구니에 추가 하시겠습니까?'
const DELETE_MENT = '장바구니에서 해제 하시겠습니까?'
const ADD_WISHLIST = '장바구니 추가'
const DELETE_WISHLIST = '장바구니 해제'
const CANCEL = '취소'

const Modal = ({ toggleModal, item }: Modalprops) => {
  const wishlist = store.get('wishlist')

  const isWishList = () => {
    return wishlist?.find((e: Props) => e.id === item.id)
  }

  const wishlistCheck = isWishList() ? DELETE_WISHLIST : ADD_WISHLIST
  const wishlistMentCheck = isWishList() ? DELETE_MENT : ADD_MENT

  const addWishlist = () => {
    const newWishlist = isWishList() ? [...wishlist, item] : [item]
    store.set('wishlist', newWishlist)
  }

  const deleteWishlist = () => {
    const lastWishlist = store.get('wishlist')
    const newWishlist = lastWishlist?.filter(
      (data: { id: number }) => data.id !== item.id,
    )
    store.set('wishlist', newWishlist)
  }

  const handleWishlistBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    if (name === ADD_WISHLIST) {
      addWishlist()
    } else if (name === DELETE_WISHLIST) {
      deleteWishlist()
    }
    toggleModal()
  }

  return (
    <ModalWrap>
      <div> {wishlistMentCheck}</div>
      <button name={wishlistCheck} onClick={handleWishlistBtn}>
        {wishlistCheck}
      </button>
      <button onClick={toggleModal}>{CANCEL}</button>
    </ModalWrap>
  )
}

export default Modal
