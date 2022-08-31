import { ItemProps } from '../../types'

import * as S from './style'

const WishItem = ({ item }: ItemProps) => {
  const date = item.createdAt.split('/')

  const newDate = date[2].concat('-', date[0], '-', date[1])

  return (
    <S.WishItemContainer>
      <div>
        <img src={item.images} alt={item.images} />
      </div>
      <div>{item.title}</div>
      <div className="desc">{item.description}</div>
      <div>{item.price}</div>
      <div>{newDate}</div>
    </S.WishItemContainer>
  )
}

export default WishItem
