import { useLocation } from 'react-router-dom'
import store from 'storejs'

import { Props } from '../../types'

const Detail = () => {
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
    }
  }

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
    </div>
  )
}

export default Detail
