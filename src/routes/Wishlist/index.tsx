import { ChangeEvent, useState } from 'react'
import store from 'storejs'

import Pagination from '../../components/Pagination'
import { Props } from '../../types'
import { ReactComponent as Check } from '../../assets/imgs/check.svg'

import * as S from './style'

const Wishlist = () => {
  const [chekedList, setCheckedList] = useState(store.get('checkwishlist'))
  const [page, setPage] = useState(1)

  const offset = (page - 1) * 10

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

  const dateRest = (item: string) => {
    const date = item.split('/')
    const newDate = date[2].concat('-', date[0], '-', date[1])
    return newDate
  }

  return (
    <S.WishListContainer>
      <div className="maintitle">장바구니</div>
      <table>
        <colgroup>
          <col className="mcol" width="70%" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr className="mview">
            <th>상세 정보</th>
            <th>상품 가격</th>
            <th>상품 등록일</th>
          </tr>
        </thead>
        <tbody>
          {wishlist ? (
            wishlist?.slice(offset, offset + 10).map((data: Props) => (
              <S.WishBox key={data.title}>
                <td className="checkboxcotainer">
                  <div className="checkwrap">
                    <S.CheckBox
                      checked={!!keepChecked(data)}
                      data-id={data.id}
                      onChange={handleChange}
                      type="checkbox"
                    />
                    <Check />
                  </div>
                  <div>
                    <img src={data.images} alt={data.title} />
                  </div>
                  <div className="descbox">
                    <div className="wishname">{data.title}</div>
                    <div className="wishdesc">{data.description}</div>
                    <div className="mobile">
                      <div className="mprice">{data.price}</div>
                      <div className="mdate">{dateRest(data.createdAt)}</div>
                    </div>
                  </div>
                </td>
                <td className="wishprice mview">{data.price}</td>
                <td className="wishdate mview">{dateRest(data.createdAt)}</td>
              </S.WishBox>
            ))
          ) : (
            <S.NoWishlist> 장바구니가 비어 있습니다.</S.NoWishlist>
          )}
        </tbody>
      </table>
      <S.BuyBtn onClick={consoleHandler}> 구매하기</S.BuyBtn>
      <Pagination
        total={wishlist?.length}
        limit={10}
        page={page}
        setPage={setPage}
      />
    </S.WishListContainer>
  )
}

export default Wishlist
