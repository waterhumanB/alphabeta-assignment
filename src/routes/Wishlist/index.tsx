import { ChangeEvent, useState } from 'react'
import store from 'storejs'

import { Props } from '../../types'

import { CheckBox } from './style'

const Wishlist = () => {
  const [chekedList, setCheckedList] = useState([])
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
    return chekedList.some(
      (item: { id: number | string }) => item.id === Number(data.id),
    )
  }

  const consoleHandler = () => {
    // eslint-disable-next-line no-console
    console.log(chekedList)
  }

  return (
    <div>
      <div>Wishlist</div>
      {wishlist.map((data: Props) => (
        <div key={data.title}>
          <CheckBox
            checked={!!keepChecked(data)}
            data-id={data.id}
            onChange={handleChange}
            style={{ width: '20px', border: '1px solid #eee', height: '20px' }}
            type="checkbox"
          />
          <div>
            <img src={data.images} alt={data.title} />
          </div>
          <div>{data.title}</div>
          <div>{data.description}</div>
          <div>{data.price}</div>
          <div>{data.createdAt}</div>
        </div>
      ))}
      <button onClick={consoleHandler}> 구매하기</button>
    </div>
  )
}

export default Wishlist
