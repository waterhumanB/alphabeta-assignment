import { MouseEvent } from 'react'
import store from 'storejs'

import { Modalprops, Props } from '../../types'

import * as S from './style'

const ADD_MENT = '장바구니에 추가 하기'
const DELETE_MENT = '장바구니에서 해제 하기'
const ADD_WISHLIST = '추가하기'
const DELETE_WISHLIST = '해제하기'
const CANCEL = '취소'

const Modal = ({ toggleModal, item }: Modalprops) => {
  const wishlist = store.get('wishlist')

  const date = item.createdAt.split('/')

  const newDate = date[2].concat('-', date[0], '-', date[1])

  const isWishList = () => {
    return wishlist?.find((e: Props) => e.id === item.id)
  }

  const wishlistCheck = isWishList() ? DELETE_WISHLIST : ADD_WISHLIST
  const wishlistMentCheck = isWishList() ? DELETE_MENT : ADD_MENT

  const addWishlist = () => {
    const newWishlist = wishlist ? [...wishlist, item] : [item]
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
    <S.ModalWrap>
      <S.ModalBox>
        <div className="ment"> {wishlistMentCheck}</div>
        <S.ItemDetail>
          <div className="name">{item.title}</div>
          <img src={item.images} alt={item.title} />
          <div className="infobox">
            <div>{item.price}</div>
            <div className="date">{newDate}</div>
          </div>
        </S.ItemDetail>
        <div className="btnbox">
          <button name={wishlistCheck} onClick={handleWishlistBtn}>
            {wishlistCheck}
          </button>
          <button onClick={toggleModal}>{CANCEL}</button>
        </div>
      </S.ModalBox>
    </S.ModalWrap>
  )
}

export default Modal
