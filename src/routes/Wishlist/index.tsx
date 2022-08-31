import { ChangeEvent, useState } from 'react'
import store from 'storejs'

import WishItem from '../../components/WishItem'
import { Props } from '../../types'

import * as S from './style'

const Wishlist = () => {
  const [chekedList, setCheckedList] = useState(store.get('checkwishlist'))
  const wishlist = store.get('wishlist')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget
    const { dataset } = e.currentTarget

    const deduplication = chekedList?.find(
      (e: Props) => e.id === Number(dataset.id),
    )

    const addCheckWishlist = wishlist?.find(
      (e: Props) => e.id === Number(dataset.id),
    )

    const removeCheckwishlist = chekedList?.filter(
      (e: Props) => e.id !== Number(dataset.id),
    )
    !checked && store.set('checkwishlist', removeCheckwishlist)

    if (!deduplication) {
      const addWishlist =
        checked && chekedList
          ? [...chekedList, addCheckWishlist]
          : [addCheckWishlist]
      store.set('checkwishlist', addWishlist)
    }
    setCheckedList(store.get('checkwishlist'))
  }

  const keepChecked = (data: { id: number }): boolean => {
    return chekedList?.some(
      (item: { id: number }) => item.id === Number(data.id),
    )
  }

  const consoleHandler = () => {
    // eslint-disable-next-line no-console
    console.log(chekedList)
  }

  return (
    <S.WishListContainer>
      <div className="listdesc">
        <div>상품 이미지</div>
        <div className="name">상품 이름</div>
        <div>상세 설명</div>
        <div>상품 가격</div>
        <div>상품 등록일</div>
      </div>
      {wishlist?.map((data: Props) => (
        <div className="wishlistbox" key={data.title}>
          <S.CheckBox
            checked={!!keepChecked(data)}
            data-id={data.id}
            onChange={handleChange}
            type="checkbox"
          />

          <WishItem item={data} />
        </div>
      ))}
      <button onClick={consoleHandler}> 구매하기</button>
    </S.WishListContainer>
  )
}

export default Wishlist
